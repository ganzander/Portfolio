"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { site } from "@/lib/site";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    message: "",
  });
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

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, location: value }));

    if (errors.location) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.location;
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // No backend — hand off to the visitor's mail client with everything
    // prefilled so the message actually reaches me.
    const subject = encodeURIComponent(
      `Portfolio contact from ${formState.firstName} ${formState.lastName}`
    );
    const body = encodeURIComponent(
      `${formState.message}\n\n—\n${formState.firstName} ${formState.lastName}\n${formState.email}${
        formState.location ? `\n${formState.location}` : ""
      }`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          location: "",
          message: "",
        });
      }, 3000);
    }, 800);
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
        className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:py-24"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.p
            className="text-sm font-medium text-primary"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            • GET IN TOUCH
          </motion.p>

          <motion.h2
            className="text-4xl font-bold tracking-tight md:text-5xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let&apos;s work <span className="text-gradient">together</span>
          </motion.h2>

          <div className="space-y-4">
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              FIND ME ON:
            </motion.p>
            <div className="flex gap-4">
              {[
                { href: site.socials.github, Icon: Github, label: "GitHub" },
                {
                  href: site.socials.linkedin,
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: site.socials.twitter, Icon: Twitter, label: "Twitter" },
              ].map(({ href, Icon, label }, i) => (
                <motion.div key={label} custom={i} variants={socialIconVariants}>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="hover-cursor rounded-full hover:border-[rgb(var(--accent-rgb)/0.6)] hover:text-accent"
                  >
                    <a href={href} target="_blank" rel="noreferrer">
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
            <motion.a
              href={`mailto:${site.email}`}
              className="hover-cursor inline-block text-sm text-accent hover:underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {site.email}
            </motion.a>
          </div>

          <motion.div
            variants={itemVariants}
            className="glass relative mt-8 aspect-video overflow-hidden rounded-xl"
            transition={{ duration: 0.3 }}
          >
            <img
              src="/ganesh.jpg"
              alt="Ganesh Kumar Mangla"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-lg font-semibold text-white">
                Let&apos;s build something great
              </p>
              <p className="text-sm text-white/70">
                Usually replies within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          variants={containerVariants}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <motion.div
            variants={formFieldVariants}
            className="grid grid-cols-2 gap-4"
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
                as={motion.input}
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
                as={motion.input}
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
              as={motion.input}
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

          <motion.div variants={formFieldVariants}>
            <Select
              onValueChange={handleSelectChange}
              value={formState.location}
            >
              <SelectTrigger
                className={`bg-muted/50 transition-all duration-300 ${
                  errors.location ? "border-destructive" : ""
                }`}
              >
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="london">London</SelectItem>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="singapore">Singapore</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.location && (
              <motion.p
                className="text-xs text-destructive mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.location}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={formFieldVariants}>
            <Textarea
              placeholder="Message"
              className="min-h-[150px] bg-muted/50"
              name="message"
              value={formState.message}
              onChange={handleChange}
              as={motion.textarea}
            />
          </motion.div>

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
                    <span className="ml-2">Submitting...</span>
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
                    <span>Submitted Successfully!</span>
                  </motion.div>
                ) : (
                  <motion.span
                    key="submit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Submit
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
