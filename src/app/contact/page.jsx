"use client";
import { Button } from "@/components/ui/button";
import { Partners } from "@/components/sections/Partners";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message cannot exceed 500 characters" }),
});

const impactImages = [
  {
    src: "/images/IMG_6388.jpg",
    alt: "Students engaging in educational activities",
    caption:
      "Transform a student's future: Your support helped 500+ youth access life-changing educational programs last year",
  },
  {
    src: "/images/IMG_6387.jpg",
    alt: "Community mentorship program",
    caption:
      "92% of our mentored students achieve their academic goals. Be the mentor they'll remember forever",
  },
  {
    src: "/images/IMG_5781.jpg",
    alt: "Cultural celebration event",
    caption:
      "Your donation amplifies diverse voices: 1000+ students discovered their heritage through our cultural programs",
  },
  {
    src: "/images/IMG_5142.jpg",
    alt: "STEM education workshop",
    caption:
      "Build tomorrow's innovators: 78% of our STEM students pursue technology careers. Your support makes it possible",
  },
  {
    src: "/images/IMG_2729.jpg",
    alt: "Youth leadership program",
    caption:
      "Empower future leaders: 200+ students developed crucial leadership skills through your generous support",
  },
  {
    src: "/images/IMG_2049.jpeg",
    alt: "Arts and creativity session",
    caption:
      "Unleash creative potential: Your gift gives 300+ young artists the tools to express their unique voices",
  },
  {
    src: "/images/IMG_2048.jpeg",
    alt: "Community outreach event",
    caption:
      "Create lasting change: Every $100 provides a month of transformative programs for an aspiring student",
  },
  {
    src: "/images/IMG_2047.jpeg",
    alt: "Student achievement celebration",
    caption:
      "100% of your donation goes directly to student success. Join us in celebrating their achievements",
  },
];

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  const { Toast, showToast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    } else {
      console.error("EmailJS public key is missing");
    }
  }, []);

  // Reset form visibility after submission
  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000); // Reset after 5 seconds
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % impactImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + impactImages.length) % impactImages.length
    );
  };

  const onSubmit = async (data) => {
    try {
      // Format the data to match EmailJS template parameters
      const templateParams = {
        from_name: data.name,
        reply_to: data.email,
        phone_number: data.number,
        message: data.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      showToast(
        "Thank you for your message! We've received your inquiry and will contact you shortly.",
        "success"
      );
      setFormSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      showToast(
        "Failed to send message. Please try again or contact us directly by phone.",
        "error"
      );
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src="/images/Contact us bg video.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              CONTACT US
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white mb-8 leading-tight">
              Get in touch with us and discover how we can work together to make
              a difference.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="text-center bg-[#1a237e] p-6">        
        <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h1>
        <p className="text-white text-center mb-6 leading-relaxed">
          Get in touch with us and discover how we can work together to make a difference.
        </p>
      </div> */}

      {/* Partners Section */}
      <div className="bg-gray-50">
        <Partners />
      </div>

      {/* Your Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1a237e] mb-6">
            Your Impact
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Every contribution makes a difference in our community. Your support
            helps us create lasting change through education, mentorship, and
            youth development programs.
          </p>

          {/* Featured Impact Carousel */}
          <div className="mb-16">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              {/* Main Carousel Image */}
              <div className="relative h-full w-full">
                <Image
                  src={impactImages[currentSlide].src}
                  alt={impactImages[currentSlide].alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg md:text-xl text-center">
                    {impactImages[currentSlide].caption}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {impactImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative aspect-[16/9] rounded-lg overflow-hidden ${
                    currentSlide === index ? "ring-2 ring-[#1a237e]" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 20vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Get Involved Section - Replacing previous CTA */}
          <div className="text-center bg-[#1a237e] p-12 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Your time and expertise can transform a student's future. Whether
              through mentorship, volunteering at events, or sharing your
              professional experience, you can make a lasting impact in our
              community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">
                  Become a Mentor
                </h4>
                <p className="text-white/80 text-sm">
                  Share your knowledge and experience with students who need
                  your guidance.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">
                  Volunteer at Events
                </h4>
                <p className="text-white/80 text-sm">
                  Help organize and support our educational and cultural
                  programs.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-white font-semibold mb-2">
                  Share Your Expertise
                </h4>
                <p className="text-white/80 text-sm">
                  Lead workshops or speak about your career path to inspire
                  students.
                </p>
              </div>
            </div>
            <Link
              href="https://www.zeffy.com/donation-form/donate-to-make-a-difference-13874"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="bg-white text-[#1a237e] hover:bg-gray-100 px-8 py-3 hover:text-[#1a237e]"
              >
                Give Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div id="contact-form" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Get in touch */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#1a237e] mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Please use the contact information
                below or fill out the form to get in touch with our team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#1a237e] p-3 rounded-full text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600">PO Box 6005</p>
                  <p className="text-gray-600">Akron, OH 44312</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1a237e] p-3 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Number</h3>
                  <Link href="tel:+13309069736" className="text-gray-600">
                    +1 (330) 906-9736
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1a237e] p-3 rounded-full text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Address</h3>
                  <Link
                    href="mailto:mbentley@roadtoclassic.org"
                    className="text-gray-600"
                  >
                    mbentley@roadtoclassic.org
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-[#1a237e] p-3 rounded-full text-white hover:bg-[#303f9f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-[#1a237e] p-3 rounded-full text-white hover:bg-[#303f9f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-3 rounded-lg">
            <h2 className="text-2xl font-bold text-[#1a237e] mb-6">
              Send Us a Message
            </h2>

            {formSubmitted ? (
              <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700">
                  Your message has been received. Our team will review your
                  inquiry and get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-gray-50 p-8 rounded-lg"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={cn(
                        "w-full px-4 py-2 border rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]",
                        errors.name ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={cn(
                        "w-full px-4 py-2 border rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]",
                        errors.email ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      {...register("number")}
                      className={cn(
                        "w-full px-4 py-2 border rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]",
                        errors.number ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="Your phone number"
                    />
                    {errors.number && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.number.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className={cn(
                        "w-full px-4 py-2 border rounded-md focus:ring-[#1a237e] focus:border-[#1a237e]",
                        errors.message ? "border-red-500" : "border-gray-300"
                      )}
                      placeholder="Your message here..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Toast Component */}
      {Toast}
    </main>
  );
}
