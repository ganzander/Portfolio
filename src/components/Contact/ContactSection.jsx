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
  Instagram,
  Twitter,
  InstagramIcon as TiktokIcon,
  CheckCircle,
  Loader2,
} from "lucide-react";

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
    }, 1500);
  };

  return (
    <section className="w-full min-h-screen flex items-center" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.p
            className="text-sm font-medium text-primary"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            • CONTACT US
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Complete this form <br />
            to contact our team
          </motion.h2>

          <div className="space-y-4">
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              FOLLOW US:
            </motion.p>
            <div className="flex gap-4">
              {[TiktokIcon, Instagram, Twitter].map((Icon, i) => (
                <motion.div key={i} custom={i} variants={socialIconVariants}>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">Social Media</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative mt-8 rounded-xl overflow-hidden aspect-video"
            transition={{ duration: 0.3 }}
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="City skyline"
              className="object-cover w-full h-full"
            />
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
