"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    id: 1,
    name: "James",
    location: "Dubai, December 2024",
    quote:
      "Working with this team was an absolute pleasure. They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn't be happier with my new home!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah",
    location: "London, November 2024",
    quote:
      "The design team exceeded all my expectations. Their innovative approach and understanding of my vision resulted in a space that perfectly reflects my style and needs. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Michael",
    location: "New York, October 2024",
    quote:
      "From concept to completion, the attention to detail was impressive. The team was responsive, professional, and delivered exactly what they promised. My commercial space has never looked better.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Emma",
    location: "Singapore, September 2024",
    quote:
      "I was hesitant about working with a design team remotely, but they made the process incredibly easy. The communication was excellent, and they truly understood what I was looking for. The end result is stunning!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "David",
    location: "Toronto, August 2024",
    quote:
      "The team's ability to transform my outdated office into a modern, functional space was remarkable. They stayed within budget and delivered ahead of schedule. My employees love the new environment!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const lastIndexRef = useRef(0);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  // Pin the section and advance testimonials on scroll.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${total * 70}%`,
          pin: pinRef.current,
          scrub: true,
          anticipatePin: 1,
          refreshPriority: 1, // document order among the pinned sections
          onUpdate: (self) => {
            const idx = Math.min(
              total - 1,
              Math.round(self.progress * (total - 1))
            );
            if (idx !== lastIndexRef.current) {
              lastIndexRef.current = idx;
              setCurrentIndex(idx);
            }
          },
        });
        return () => st.kill();
      }
    );
    return () => mm.revert();
  }, [total]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="flex min-h-screen w-full items-center justify-center overflow-hidden"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mx-auto w-full max-w-7xl px-4"
        >
        <motion.h2
          variants={itemVariants}
          className="zentry mb-8 text-3xl font-medium md:mb-16 md:text-8xl"
        >
          What Clients <span className="text-gradient">Say</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          <motion.div
            variants={itemVariants}
            className="flex items-start justify-start relative"
          >
            <motion.div
              className="bg-accent hidden rounded-full p-4 text-white md:block"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -10, 0, 10, 0] }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Quote className="h-6 w-6" />
            </motion.div>

            <div className="md:pl-6 border-l border-muted">
              <div className="">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg md:text-2xl font-medium leading-relaxed mb-8"
                  >
                    {testimonials[currentIndex].quote}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="h-px w-full bg-border my-8"></div>

              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        src={
                          testimonials[currentIndex].avatar ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentIndex].name}
                      />
                      <AvatarFallback>
                        {testimonials[currentIndex].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    onClick={handlePrevious}
                    as={motion.button}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                    onClick={handleNext}
                    as={motion.button}
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
