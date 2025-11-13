import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
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
              <h2 className="text-2xl font-serif font-semibold text-navy-primary dark:text-gold-accent mb-6">
                Abstract
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground">
                <p>
                  This project explores the profound connections between philosophy, human behavior, and artificial 
                  intelligence, tracing a conceptual lineage from Aristotle's foundational work in logic to Alan Turing's 
                  groundbreaking contributions to computation and AI. The central thesis is that philosophy—far from 
                  being merely theoretical—has always been about pragmatic progress: understanding the world to improve 
                  human life and society.
                </p>

                <p>
                  Aristotle's systematic approach to logic laid the groundwork for algorithmic thinking, which Turing 
                  later formalized in his work on computability and the Turing Machine. Turing's question, "Can machines 
                  think?" extends Aristotle's inquiry into the nature of reasoning and understanding. This project argues 
                  that both thinkers were concerned not just with abstract concepts but with how reasoning—whether human 
                  or machine—can be applied to solve real-world problems.
                </p>

                <p>
                  In the modern era, we face a paradox: despite unprecedented access to knowledge and technology, many 
                  individuals experience a disconnect from disciplines like philosophy, which were once seen as essential 
                  for personal and societal development. This disconnect is often driven by fear—fear of complexity, fear 
                  of obsolescence in the age of AI, and fear of engaging with deep questions about meaning and purpose.
                </p>

                <p>
                  The project seeks to bridge this gap by demonstrating how philosophy, particularly the insights of 
                  thinkers like Aristotle, Wittgenstein, and Turing, remains deeply relevant to contemporary challenges. 
                  For instance, Wittgenstein's notion that "meaning is use" resonates with the way Large Language Models 
                  (LLMs) like GPT operate: meaning emerges from patterns of usage in language, rather than from fixed, 
                  intrinsic definitions. This connection shows how ancient philosophical ideas can illuminate cutting-edge 
                  technology.
                </p>

                <p>
                  Ultimately, the goal of Life_exe is to foster a renewed appreciation for interdisciplinary knowledge, 
                  encouraging individuals to pursue self-mastery and intellectual fulfillment in the age of AI. By 
                  reconnecting philosophy with practical applications—whether in technology, behavioral science, or 
                  personal development—the project aims to help people overcome fear, embrace complexity, and prepare 
                  for a future where human wisdom and machine intelligence complement each other.
                </p>

                <p>
                  This platform will serve as a hub for exploring these ideas through essays, resources, and collaborative 
                  discussions, inviting contributors from diverse fields to join in the pursuit of knowledge that is both 
                  profound and pragmatic.
                </p>
              </div>
            </CardContent>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-navy-primary/5 to-gold-accent/5 dark:from-navy-primary/20 dark:to-gold-accent/10 border-gold-accent/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-navy-primary dark:text-gold-accent mb-4">
                  Key Themes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>From Aristotle's logic to Turing's computation: A continuum of pragmatic reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Philosophy as a tool for personal mastery and societal progress</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Overcoming fear through interdisciplinary understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Wittgenstein's "meaning is use" and modern AI language models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gold-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>Preparing humanity for an AI-augmented future grounded in wisdom</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
