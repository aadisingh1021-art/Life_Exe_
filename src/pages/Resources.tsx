import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const references = [
  {
    category: "Philosophy",
    items: [
      {
        title: "Aristotle - Organon",
        description: "Foundational work on logic and reasoning",
        link: "https://plato.stanford.edu/entries/aristotle-logic/"
      },
      {
        title: "Wittgenstein - Philosophical Investigations",
        description: "Revolutionary work on language and meaning",
        link: "https://plato.stanford.edu/entries/wittgenstein/"
      },
      {
        title: "Leonardo da Vinci - Notebooks",
        description: "Renaissance thinking and interdisciplinary approach",
        link: "https://www.vam.ac.uk/collections/leonardo-da-vinci"
      }
    ]
  },
  {
    category: "Computer Science & AI",
    items: [
      {
        title: "Alan Turing - Computing Machinery and Intelligence",
        description: "Seminal paper introducing the Turing Test",
        link: "https://www.jstor.org/stable/2251299"
      },
      {
        title: "Stanford Encyclopedia of Philosophy - Artificial Intelligence",
        description: "Comprehensive overview of AI philosophy",
        link: "https://plato.stanford.edu/entries/artificial-intelligence/"
      },
      {
        title: "The Turing Machine",
        description: "Understanding Turing's theoretical model of computation",
        link: "https://plato.stanford.edu/entries/turing-machine/"
      }
    ]
  },
  {
    category: "Interdisciplinary Studies",
    items: [
      {
        title: "Philosophy and AI Ethics",
        description: "Ethical considerations in artificial intelligence",
        link: "https://plato.stanford.edu/entries/ethics-ai/"
      },
      {
        title: "Language, Logic, and AI",
        description: "Connections between linguistic philosophy and machine learning",
        link: "https://plato.stanford.edu"
      }
    ]
  }
];

const additionalResources = [
  {
    title: "Online Courses",
    items: [
      "MIT OpenCourseWare - Artificial Intelligence",
      "Stanford Online - Philosophy and AI",
      "Coursera - Philosophy and Critical Thinking"
    ]
  },
  {
    title: "Research Institutions",
    items: [
      "Future of Humanity Institute (Oxford)",
      "Center for Human-Compatible AI (UC Berkeley)",
      "AI Safety Research Community"
    ]
  },
  {
    title: "Community Forums",
    items: [
      "LessWrong - Rationality and AI Safety",
      "Philosophy Stack Exchange",
      "AI Alignment Forum"
    ]
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-6">
              Resources & References
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated collection of foundational texts, research papers, and learning resources
            </p>
          </div>

          {/* Primary References */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-8">
              Primary References
            </h2>

            {references.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold text-navy-primary dark:text-gold-accent mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-gold-accent" />
                  {category.category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg flex items-start justify-between gap-2">
                          <span>{item.title}</span>
                          <ExternalLink className="h-4 w-4 text-gold-accent flex-shrink-0" />
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gold-accent hover:text-gold-light flex items-center gap-2"
                        >
                          <LinkIcon className="h-4 w-4" />
                          Visit Resource
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </section>

          {/* Additional Resources */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-8">
                Additional Learning Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {additionalResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {resource.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <span className="inline-block w-1.5 h-1.5 bg-gold-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Citation Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-navy-primary/5 to-gold-accent/5 dark:from-navy-primary/20 dark:to-gold-accent/10 border-gold-accent/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-navy-primary dark:text-gold-accent mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Contribute to Our Library
                </h3>
                <p className="text-muted-foreground mb-4">
                  Have a resource you'd like to recommend? We welcome contributions from the community. 
                  Help us build a comprehensive library that bridges philosophy, behavioral science, and AI.
                </p>
                <Button className="bg-gold-accent text-navy-deep hover:bg-gold-light">
                  Suggest a Resource
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
