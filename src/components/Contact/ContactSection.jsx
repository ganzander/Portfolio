"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  CheckCircle,
  Loader2,
  Upload,
  File,
} from "lucide-react";
import { site } from "@/lib/site";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 + i * 0.1,
      },
    }),
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formState.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const data = new FormData();
      data.append("firstName", formState.firstName);
      data.append("lastName", formState.lastName);
      data.append("email", formState.email);
      data.append("message", formState.message);
      if (file) {
        data.append("file", file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);

        if (
          site.socials.whatsapp &&
          !site.socials.whatsapp.includes("XXXXXXXXXX")
        ) {
          const waText = encodeURIComponent(
            `Hi ${site.name},\n\nI just submitted a contact form on your portfolio!\n\nName: ${formState.firstName} ${formState.lastName}\nEmail: ${formState.email}\nMessage: ${formState.message}`,
          );
          const waUrl = `https://wa.me/${site.socials.whatsapp}?text=${waText}`;
          window.open(waUrl, "_blank", "noopener,noreferrer");
        }

        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setFile(null);

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        setErrors({
          submit:
            "Something went wrong while sending your message. Please try again or reach out directly via Email or WhatsApp.",
        });
      }
    } catch (err) {
      console.error(err);
      setErrors({
        submit:
          "Something went wrong while sending your message. Please try again or reach out directly via Email or WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full min-h-screen flex items-center"
      ref={ref}
      id="contact-section"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mx-auto flex flex-col w-full max-w-7xl px-4 py-20 md:py-24 gap-12"
      >
        {/* Header (Unified style matching Projects and Work Experience) */}
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-end justify-between gap-4">
            <h2 className="zentry text-3xl font-medium sm:text-5xl md:text-8xl">
              Get in <span className="text-gradient">Touch</span>
            </h2>
          </div>
          <p className="text-sm font-medium text-neutral-400 max-w-xl">
            Let&apos;s build something great together. Feel free to reach out
            via the contact form, email, or WhatsApp.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid w-full gap-12 md:grid-cols-[0.9fr_1.1fr] items-stretch">
          {/* Left Column: Image only */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 h-full justify-center"
          >
            {/* Profile Image with Gradient overlay */}
            <motion.div
              variants={itemVariants}
              className="glass relative w-full h-[320px] md:h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 flex items-center justify-center"
            >
              <img
                src="/ganesh.jpg"
                alt="Ganesh Kumar Mangla"
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-semibold text-white">
                  Ganesh Kumar Mangla
                </p>
                <p className="text-xs text-white/60">
                  Usually replies within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.form
            variants={containerVariants}
            className="space-y-6 flex flex-col justify-center"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <motion.div
              variants={formFieldVariants}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div className="space-y-2">
                <Input
                  placeholder="First Name*"
                  className={`bg-muted/50 transition-all duration-300 ${
                    errors.firstName ? "border-destructive" : ""
                  }`}
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.firstName && (
                  <motion.p
                    className="text-xs text-destructive"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.firstName}
                  </motion.p>
                )}
              </div>
              <div className="space-y-2">
                <Input
                  placeholder="Last Name*"
                  className={`bg-muted/50 transition-all duration-300 ${
                    errors.lastName ? "border-destructive" : ""
                  }`}
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {errors.lastName && (
                  <motion.p
                    className="text-xs text-destructive"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.lastName}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div variants={formFieldVariants} className="space-y-2">
              <Input
                placeholder="Email Address*"
                className={`bg-muted/50 transition-all duration-300 ${
                  errors.email ? "border-destructive" : ""
                }`}
                name="email"
                value={formState.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && (
                <motion.p
                  className="text-xs text-destructive"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Custom File Uploader Field */}
            <motion.div variants={formFieldVariants} className="space-y-2">
              <div className="relative flex flex-col items-center justify-center border border-dashed border-white/15 rounded-2xl bg-muted/20 p-5 hover:border-accent/40 transition-colors duration-300 hover-cursor min-h-[90px]">
                <input
                  type="file"
                  id="file-upload"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                />
                <div className="flex flex-col items-center gap-2 text-center text-neutral-400">
                  {file ? (
                    <>
                      <File className="h-6 w-6 text-accent animate-bounce" />
                      <span className="text-xs font-semibold text-accent max-w-[200px] truncate">
                        {file.name}
                      </span>
                      <span className="text-[10px] text-neutral-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5 text-neutral-500" />
                      <span className="text-xs">
                        Attach a file (Resume, BRD, etc. - Optional)
                      </span>
                      <span className="text-[10px] text-neutral-600">
                        Max size: 5MB
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div variants={formFieldVariants} className="space-y-2">
              <Textarea
                placeholder="Message*"
                className={`min-h-[150px] bg-muted/50 transition-all duration-300 ${
                  errors.message ? "border-destructive" : ""
                }`}
                name="message"
                value={formState.message}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.message && (
                <motion.p
                  className="text-xs text-destructive"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            {errors.submit && (
              <motion.p
                className="text-sm text-destructive text-center font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errors.submit}
              </motion.p>
            )}

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full rounded-full relative"
                size="lg"
                disabled={isSubmitting || isSuccess}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span className="ml-2">Sending Message...</span>
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center text-green-500"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span>Sent Successfully!</span>
                    </motion.div>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
