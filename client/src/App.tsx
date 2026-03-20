import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { MainLayout } from "./components/layout/MainLayout";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectGalleryPage from "./pages/ProjectGalleryPage";
import JoinSupport from "./pages/JoinSupport";
import Founders from "./pages/Founders";
import Team from "./pages/Team";

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/journey" component={Journey} />
        <Route path="/projects" component={Projects} />
        <Route path="/founders" component={Founders} />
        <Route path="/team" component={Team} />
        <Route path="/join" component={JoinSupport} />
        {/* Project detail and gallery — must come after named routes */}
        <Route path="/:slug/gallery" component={ProjectGalleryPage} />
        <Route path="/:slug" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
