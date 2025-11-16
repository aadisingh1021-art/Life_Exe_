import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Brain, Lightbulb, Users } from "lucide-react";

export default function About() {
  const keyThemes = [
    {
      icon: BookOpen,
      title: "Philosophy",
      description: "Exploring timeless wisdom and its modern applications"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Understanding how AI connects to human reasoning"
    },
    {
      icon: Lightbulb,
      title: "Self-Mastery",
      description: "Cultivating personal growth and intellectual fulfillment"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections through shared learning"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-8">
            About Life_exe
          </h1>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-foreground leading-relaxed">
                  Life_exe is a platform dedicated to exploring the intersection of philosophy, 
                  artificial intelligence, and human development. We connect ancient wisdom with 
                  modern technology to foster self-mastery and intellectual growth.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-serif font-semibold text-navy-primary dark:text-gold-accent mb-8">
            Key Themes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyThemes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <theme.icon className="w-12 h-12 text-navy-primary dark:text-gold-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
                    <p className="text-muted-foreground">{theme.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
