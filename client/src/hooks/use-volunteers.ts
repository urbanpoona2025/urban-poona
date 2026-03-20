import { useMutation } from "@tanstack/react-query";
import { api, type VolunteerInput, type VolunteerResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateVolunteer() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: VolunteerInput): Promise<VolunteerResponse> => {
      const res = await fetch(api.volunteers.create.path, {
        method: api.volunteers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.volunteers.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to submit application");
      }

      return api.volunteers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for joining our cause. We'll be in touch soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
