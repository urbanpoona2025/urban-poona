declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`[${formattedTime}] [${source}] ${message}`);
}

(async () => {
  const app = express();
  const httpServer = createServer(app);

  // BODY PARSING
  app.use(
    express.json({
      verify: (req: Request, _res: Response, buf: Buffer) => {
        (req as any).rawBody = buf;
      },
    })
  );

  app.use(express.urlencoded({ extended: false }));

  // LOGGING MIDDLEWARE
  app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    const path = req.path;

    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;

    res.json = function (bodyJson: any) {
  capturedJsonResponse = bodyJson;
  return originalResJson.call(res, bodyJson);
};

    res.on("finish", () => {
      const duration = Date.now() - start;

      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;

        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }

        log(logLine);
      }
    });

    next();
  });

  // ROUTES
  await registerRoutes(httpServer as any, app);

  // ERROR HANDLER
  app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("Internal Server Error:", err);

    if (res.headersSent) {
      return next(err);
    }

    return res.status(status).json({ message });
  });

  // STATIC (PRODUCTION)
  if (process.env.NODE_ENV === "production") {
    serveStatic(app as any);
  }

  // PORT
  const port = parseInt(process.env.PORT || "5000", 10);

  httpServer.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
})();