import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Users, BookOpen, Lightbulb, Globe } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Pursue Self-Mastery and Knowledge",
    description: "Overcome fear and apply philosophical wisdom in the age of AI to achieve personal growth and intellectual fulfillment."
  },
  {
    icon: Users,
    title: "Foster a Fulfilled Society",
    description: "Guide society with ethical, intellectual, and spiritual insights drawn from philosophical traditions."
  },
  {
    icon: Lightbulb,
    title: "Encourage Interdisciplinary Dialogue",
    description: "Promote collaboration between philosophy, behavioral science, and technology for personal mastery, social harmony, and technological responsibility."
  },
  {
    icon: Globe,
    title: "Prepare Humanity for the Future",
    description: "Help people embrace the future while remaining grounded in the wisdom of the past, creating a bridge between ancient insights and modern challenges."
  },
  {
    icon: BookOpen,
    title: "Promote Understanding of Diverse Philosophies",
    description: "Create awareness and appreciation for various philosophical traditions to build a more fulfilled, ethically-grounded society."
  }
];

export default function Objectives() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-6">
              Project Objectives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five core objectives guiding the Life_exe project toward meaningful impact and interdisciplinary collaboration.
            </p>
          </div>

          <div className="space-y-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-primary to-gold-accent flex items-center justify-center">
                          <objective.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle2 className="h-6 w-6 text-gold-accent flex-shrink-0" />
                          <h3 className="text-xl font-semibold text-navy-primary dark:text-gold-accent">
                            {objective.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-br from-navy-primary to-navy-deep text-white">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  A Unified Vision
                </h3>
                <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                  These objectives work together to create a comprehensive framework for understanding 
                  and navigating the complex intersection of philosophy, human behavior, and artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
