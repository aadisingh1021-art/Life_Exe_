import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Network, BookOpen, Target, Lightbulb, Users } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const objectives = [
    {
      icon: Target,
      text: "Pursuit of self-mastery and knowledge through overcoming fear and embracing philosophical wisdom in the age of AI",
    },
    {
      icon: Users,
      text: "Building a fulfilled society guided by ethical, intellectual, and spiritual insights, not merely technological advancement",
    },
    {
      icon: Network,
      text: "Fostering interdisciplinary dialogue to achieve personal mastery, social harmony, and technological responsibility",
    },
    {
      icon: Lightbulb,
      text: "Preparing humanity to embrace the future while grounded in the wisdom of the past",
    },
    {
      icon: Brain,
      text: "Achieving self-mastery through understanding diverse philosophies across all walks of life",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container mx-auto px-6 text-center z-10 fade-in-section">
          <div className="mb-8 inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-12 h-12 text-accent" />
              <Network className="w-12 h-12 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Life_exe
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-light">
            Philosophy as Pragmatic Progress
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Exploring the intersection of philosophy, human behavior, and artificial intelligence—from Aristotle's foundations to Turing's vision
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById("abstract")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore the Project
          </Button>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-24 px-6 fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Abstract</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <Card className="p-8 md:p-12 shadow-lg border-border/50">
            <p className="text-lg text-foreground/90 leading-relaxed">
              This project explores the intersection of philosophy, human behavior, and artificial intelligence, 
              focusing on the intellectual continuum from Aristotle's foundations of logic to Alan Turing's vision 
              of machine intelligence. Philosophy has long been the bedrock of inquiry into truth, reason, and ethics. 
              Yet, as modern science and technology advance, knowledge fragmented into rigid domains. This rigidity—often 
              rooted in fear of uncertainty—restricts progress and obstructs humanity's ability to adapt to future challenges 
              fostering a path toward individual self-mastery and technologically responsible societal progress. By reconnecting 
              philosophy, behavioral science, and AI, the project aims to dismantle mental and institutional barriers, cultivate 
              self-mastery, and foster interdisciplinary collaboration.
            </p>
          </Card>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-secondary/50 to-background fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Introduction</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed text-center">
              Throughout history philosophy has laid down the foundation on which modern technology and society stand. 
              But as we move forward in time, the different fields of knowledge get hardened into rigid blocks and the 
              connection between different fields which allowed us to reach where we are getting lost and future progress 
              is threatened which is born out of fear. To successfully lead humanity towards a better future we need to 
              overcome this fear and work towards the betterment of society.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 px-6 fade-in-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Objectives</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission to bridge ancient wisdom with modern technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <div className="flex flex-col items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-foreground/90 leading-relaxed">{objective.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/50 fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Expected Outcomes</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <Card className="p-8 md:p-12 shadow-lg border-border/50">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                After the completion of this project, we should gain multi-faceted 3-D understanding of various trivial 
                and non-trivial concepts which play a vital role in our not so banal life such as how Aristotle laid the 
                foundation for algorithmic thinking, Ludwig Wittgenstein's "meaning is use" in LLM.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                A dedicated platform for collaboration between experts from different fields results in a more informed 
                understanding and boycotting long-held, fear-driven belief of conforming to a particular field but rather 
                interconnecting fields like Leonardo da Vinci and the universe.
              </p>
              <div className="mt-8 p-6 bg-accent/5 rounded-lg border-l-4 border-accent">
                <p className="text-lg text-foreground font-semibold mb-2">A Blueprint for Progress</p>
                <p className="text-foreground/80">
                  Redirecting society to embrace an atmosphere of clarity and inquiry. Overcome fears and traditional 
                  boundaries to achieve true mastery.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Methodology</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Rigorous Analysis",
                description: "Deep analysis of philosophical ideas and their interconnections",
              },
              {
                title: "Expert Collaboration",
                description: "Collaboration between intellectuals to refine and develop ideas",
              },
              {
                title: "Dynamic Platform",
                description: "Frontend and backend integration to showcase findings",
              },
              {
                title: "Interactive Exploration",
                description: "Users can explore interconnections between philosophical concepts and AI applications",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-border/50"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Da Vinci Quote Section */}
      <section className="py-24 px-6 bg-navy-primary text-primary-foreground fade-in-section">
        <div className="container mx-auto max-w-4xl text-center">
          <Network className="w-16 h-16 text-accent mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
            "His mind would recognize no boundaries; he sought the connections between all natural phenomena. 
            In this sense, he was ahead of his time and the first real Renaissance man."
          </blockquote>
          <p className="text-xl text-primary-foreground/80">— On Leonardo da Vinci</p>
          <div className="mt-12 p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Da Vinci remains the icon and the inspiration for a new form of knowledge. In this form, 
              what matters are the connections between things, not what separates them.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-24 px-6 fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Conclusion</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
          <Card className="p-8 md:p-12 shadow-lg border-border/50">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                It was inferred that the so called "rigidity of knowledge" has seeped in all the branches of society 
                like architecture, education, even the most banal of things. And this rigidity is born out of fear so, 
                this fear needs to be rooted of the society if a substantial progress towards a better future is warranted.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                The project aims to create a wider understanding of the problem and underline ways in which society and 
                individuals can build a fearless attitude towards the unknown better future consisting of unknown, 
                unexpected things which are the key to a better future.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                To help achieve this and demonstrate the endless possibilities that lie ahead, collaborations with experts 
                from different fields were done to lay out examples of such endeavors.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">Life_exe: Philosophy as Pragmatic Progress</p>
          <p className="text-primary-foreground/70">Connecting ancient wisdom with modern technology</p>
        </div>
      </footer>

      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Index;
