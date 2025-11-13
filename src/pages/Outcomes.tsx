import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Users, BookOpen, Lightbulb } from "lucide-react";

const outcomes = [
  {
    icon: Target,
    title: "Interdisciplinary Platform",
    description: "A dynamic website that connects philosophy, human behavior, and AI, making complex ideas accessible and actionable."
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Foster a community of thinkers and practitioners who value wisdom, self-mastery, and responsible technological progress."
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Curated essays, resources, and discussions that bridge ancient philosophical wisdom with modern challenges."
  },
  {
    icon: Lightbulb,
    title: "Practical Applications",
    description: "Demonstrate how philosophical insights can inform personal development, AI ethics, and societal progress."
  }
];

const methodology = [
  {
    phase: "Analysis & Research",
    description: "Deep exploration of philosophical texts, AI concepts, and their practical intersections.",
    tasks: [
      "Study key philosophical works (Aristotle, Wittgenstein, Turing)",
      "Analyze modern AI developments and their philosophical implications",
      "Identify actionable connections between ancient wisdom and contemporary challenges"
    ]
  },
  {
    phase: "Platform Development",
    description: "Create an engaging, accessible website that presents complex ideas clearly.",
    tasks: [
      "Design intuitive navigation and interactive visualizations",
      "Write clear, compelling content that bridges technical and philosophical domains",
      "Develop tools for exploration and learning (concept graphs, timelines)"
    ]
  },
  {
    phase: "Community Engagement",
    description: "Build a collaborative space for ongoing dialogue and contribution.",
    tasks: [
      "Invite interdisciplinary contributors from philosophy, tech, and behavioral science",
      "Create opportunities for discussion and knowledge sharing",
      "Iterate based on community feedback and emerging insights"
    ]
  }
];

const timeline = [
  {
    week: "Week 1",
    focus: "Foundation",
    activities: "Research core concepts, outline content structure, identify key connections"
  },
  {
    week: "Week 2",
    focus: "Development",
    activities: "Build platform architecture, create initial content, design visualizations"
  },
  {
    week: "Week 3",
    focus: "Integration",
    activities: "Develop interactive features, refine content, test user experience"
  },
  {
    week: "Week 4",
    focus: "Launch & Iterate",
    activities: "Public launch, gather feedback, begin community building, plan future content"
  }
];

export default function Outcomes() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Expected Outcomes */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-4">
                Expected Outcomes
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tangible results and impact areas of the Life_exe project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-primary to-gold-accent flex items-center justify-center flex-shrink-0">
                          <outcome.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{outcome.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{outcome.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-4">
                Methodology
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured three-phase approach to achieving our objectives
              </p>
            </motion.div>

            <div className="space-y-8">
              {methodology.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="text-5xl font-bold text-gold-accent/20">
                          {index + 1}
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{phase.phase}</CardTitle>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-gold-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-4">
                Four-Week Timeline
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A structured approach to launching the Life_exe platform
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-primary via-gold-accent to-navy-primary hidden md:block" />

              <div className="space-y-8">
                {timeline.map((week, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gold-accent border-4 border-background hidden md:block" />

                    <Card className="md:ml-20">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-bold text-gold-accent">
                            {week.week}
                          </span>
                          <CardTitle className="text-xl">{week.focus}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{week.activities}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
