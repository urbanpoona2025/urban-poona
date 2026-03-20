import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateVolunteer } from "@/hooks/use-volunteers";
import { insertVolunteerSchema } from "@shared/schema";
import { Heart, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Extend schema for frontend form to handle coercions and specific checkbox arrays
const formSchema = insertVolunteerSchema.extend({
  age: z.coerce.number().min(10, "Must be at least 10").max(100, "Invalid age"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
});

type FormValues = z.infer<typeof formSchema>;

const INTEREST_OPTIONS = [
  "Animal Welfare",
  "Environmental Work",
  "Community Service",
  "Event Management"
];

export default function JoinSupport() {
  const mutation = useCreateVolunteer();
  
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      age: undefined,
      schoolCollege: "",
      email: "",
      phoneNumber: "",
      areaInPune: "",
      interests: [],
    }
  });

  const selectedInterests = watch("interests") || [];

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  const handleInterestToggle = (checked: boolean, interest: string) => {
    if (checked) {
      setValue("interests", [...selectedInterests, interest], { shouldValidate: true });
    } else {
      setValue("interests", selectedInterests.filter(i => i !== interest), { shouldValidate: true });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-6">Join & Support</h1>
          <p className="text-xl text-muted-foreground">
            Whether you want to offer your time on the ground or support us financially, your contribution drives our mission forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Volunteer Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-primary mb-2">Become a Volunteer</h2>
              <p className="text-muted-foreground">Fill out the form below to join our active roster.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-semibold">Full Name</Label>
                  <Input 
                    id="fullName" 
                    {...register("fullName")} 
                    className={`h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-foreground font-semibold">Age</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    {...register("age")} 
                    className={`h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary ${errors.age ? 'border-red-500' : ''}`}
                    placeholder="18"
                  />
                  {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="schoolCollege" className="text-foreground font-semibold">School / College / Organization</Label>
                <Input 
                  id="schoolCollege" 
                  {...register("schoolCollege")} 
                  className={`h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary ${errors.schoolCollege ? 'border-red-500' : ''}`}
                  placeholder="FC College"
                />
                {errors.schoolCollege && <span className="text-red-500 text-sm">{errors.schoolCollege.message}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...register("email")} 
                    className={`h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-foreground font-semibold">Phone Number</Label>
                  <Input 
                    id="phoneNumber" 
                    {...register("phoneNumber")} 
                    className={`h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="areaInPune" className="text-foreground font-semibold">Area in Pune</Label>
                <Input 
                  id="areaInPune" 
                  {...register("areaInPune")} 
                  className={`h-12 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary ${errors.areaInPune ? 'border-red-500' : ''}`}
                  placeholder="Kothrud, Viman Nagar..."
                />
                {errors.areaInPune && <span className="text-red-500 text-sm">{errors.areaInPune.message}</span>}
              </div>

              <div className="space-y-3 pt-4">
                <Label className="text-foreground font-semibold text-base">Areas of Interest (Select all that apply)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INTEREST_OPTIONS.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <Checkbox 
                        id={interest} 
                        checked={selectedInterests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestToggle(checked as boolean, interest)}
                      />
                      <label htmlFor={interest} className="text-sm font-medium leading-none cursor-pointer flex-1">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.interests && <span className="text-red-500 text-sm block mt-2">{errors.interests.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full mt-8 h-14 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {mutation.isPending ? (
                  <><Loader2 className="animate-spin" /> Submitting...</>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </motion.div>

          {/* Donation Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col items-center text-center h-full justify-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl pointer-events-none"></div>
              <Heart className="w-10 h-10 text-accent mb-4 relative z-10" />
              <h3 className="text-2xl font-display font-bold mb-2 relative z-10">Scan to Donate</h3>
              <p className="text-primary-foreground/70 text-sm mb-8 relative z-10">Support our initiatives by scanning the QR code below via any UPI app.</p>
              <div className="bg-white rounded-2xl p-3 shadow-xl relative z-10 w-full max-w-xs mx-auto">
                <img
                  src="/images/team/img13.jpeg?v=2"
                  alt="UPI QR Code"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
