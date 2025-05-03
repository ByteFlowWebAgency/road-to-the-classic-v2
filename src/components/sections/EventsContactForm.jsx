<<<<<<< HEAD
"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/toast";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
=======
"use client"

import { useState, useEffect } from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/toast"
import emailjs from "@emailjs/browser"
import { cn } from "@/lib/utils"
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .optional()
<<<<<<< HEAD
    .or(z.literal("")),
  eventInterest: z.string().optional(),
  message: z.string().optional(),
});

export function EventsContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventInterest: "",
      message: "",
    },
  });

  const { Toast, showToast } = useToast();

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
  });

=======
    .or(z.literal('')),
  eventInterest: z
    .string()
    .optional(),
  message: z
    .string()
    .optional()
});

export function EventsContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventInterest: '',
      message: ''
    }
  });
  
  const { Toast, showToast } = useToast();
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    } else {
      console.error("EmailJS public key is missing");
    }
  }, []);
<<<<<<< HEAD

=======
  
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
  // Reset form after submission success (with timeout)
  useEffect(() => {
    let timer;
    if (formStatus.submitted) {
      timer = setTimeout(() => {
        setFormStatus({
          submitted: false,
<<<<<<< HEAD
          error: false,
=======
          error: false
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
        });
      }, 5000); // Reset after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [formStatus.submitted]);
<<<<<<< HEAD

  const onSubmit = async (data) => {
    try {
=======
  
  const onSubmit = async (data) => {
    try {
      console.log('Form data submitted:', data);
      
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
      // Format the data to match EmailJS template parameters
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone_number: data.phone || "Not provided",
<<<<<<< HEAD
        message: data.message || "No message provided",
      };

=======
        event_interest: data.eventInterest || "Not specified",
        message: data.message || "No message provided"
      };
      
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
<<<<<<< HEAD

      setFormStatus({
        submitted: true,
        error: false,
      });

      showToast(
        "Thank you for your event inquiry! We've received your information and will contact you shortly with more details.",
        "success"
      );
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      setFormStatus({
        submitted: false,
        error: true,
      });

      showToast(
        "Failed to send your inquiry. Please try again or contact us directly by phone.",
        "error"
      );
    }
  };

=======
      
      setFormStatus({
        submitted: true,
        error: false
      });
      
      showToast("Thank you for your event inquiry! We've received your information and will contact you shortly with more details.", "success");
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      console.error("Error details:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
      
      setFormStatus({
        submitted: false,
        error: true
      });
      
      showToast("Failed to send your inquiry. Please try again or contact us directly by phone.", "error");
    }
  };
  
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold mb-2 text-center text-[#1a237e]">
            Interested in an Event?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Fill out this form and we&apos;ll contact you with more information
          </p>

          {formStatus.submitted ? (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700">
                Your inquiry has been submitted. We&apos;ll get back to you soon
                with more details about our events.
=======
          <h2 className="text-3xl font-bold mb-2 text-center text-[#1a237e]">Interested in an Event?</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Fill out this form and we&apos;ll contact you with more information
          </p>
          
          {formStatus.submitted ? (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700">
                Your inquiry has been submitted. We&apos;ll get back to you soon with more details about our events.
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
<<<<<<< HEAD
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
=======
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={cn(
                      "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      errors.name ? "border-red-500" : "border-gray-300"
                    )}
                  />
                  {errors.name && (
<<<<<<< HEAD
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
=======
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={cn(
                      "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      errors.email ? "border-red-500" : "border-gray-300"
                    )}
                  />
                  {errors.email && (
<<<<<<< HEAD
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
=======
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className={cn(
                      "w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      errors.phone ? "border-red-500" : "border-gray-300"
                    )}
                  />
                  {errors.phone && (
<<<<<<< HEAD
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
=======
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="eventInterest" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Interest (Optional)
                </label>
                <select
                  id="eventInterest"
                  {...register("eventInterest")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an event type</option>
                  <option value="Classic Basketball Tournament">Classic Basketball Tournament</option>
                  <option value="Educational Workshop">Educational Workshop</option>
                  <option value="Community Outreach">Community Outreach</option>
                  <option value="Fundraising Event">Fundraising Event</option>
                  <option value="Other">Other (please specify in message)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Let us know any specific questions or information you need..."
                ></textarea>
              </div>
<<<<<<< HEAD

=======
              
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
              {formStatus.error && (
                <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-700">
                  There was an error submitting your form. Please try again.
                </div>
              )}
<<<<<<< HEAD

=======
              
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#1a237e] text-white rounded-md hover:bg-[#303f9f] transition-colors font-medium"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
<<<<<<< HEAD

      {/* Toast Component */}
      {Toast}
    </section>
  );
}
=======
      
      {/* Toast Component */}
      {Toast}
    </section>
  )
} 
>>>>>>> bf8f4a521af6c81923acab65eac6e2328b1e346f
