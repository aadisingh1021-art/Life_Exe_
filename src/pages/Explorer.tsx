import { useState, useCallback, useRef, useEffect } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Info } from "lucide-react";

interface Node {
  id: string;
  name: string;
  type: "philosopher" | "concept" | "technology";
  description: string;
  details: string;
  quote?: string;
}

interface Link {
  source: string;
  target: string;
}

const graphData = {
  nodes: [
    {
      id: "aristotle",
      name: "Aristotle",
      type: "philosopher",
      description: "Ancient Greek philosopher and polymath",
      details: "Aristotle (384-322 BCE) was a Greek philosopher whose systematic approach to logic laid the groundwork for algorithmic thinking. His work in formal logic, particularly syllogistic reasoning, represents one of the earliest forms of structured, rule-based thinking.",
      quote: "The whole is greater than the sum of its parts."
    },
    {
      id: "wittgenstein",
      name: "Wittgenstein",
      type: "philosopher",
      description: "Austrian philosopher of language",
      details: "Ludwig Wittgenstein (1889-1951) revolutionized philosophy of language with his idea that 'meaning is use.' This concept resonates deeply with how modern Large Language Models operate, where meaning emerges from patterns of usage rather than fixed definitions.",
      quote: "The limits of my language mean the limits of my world."
    },
    {
      id: "turing",
      name: "Alan Turing",
      type: "philosopher",
      description: "Father of computer science and AI",
      details: "Alan Turing (1912-1954) formalized the concept of computation with the Turing Machine and posed the fundamental question 'Can machines think?' in his paper 'Computing Machinery and Intelligence,' extending philosophical inquiry into the realm of artificial intelligence.",
      quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    },
    {
      id: "davinci",
      name: "Leonardo da Vinci",
      type: "philosopher",
      description: "Renaissance polymath",
      details: "Leonardo da Vinci (1452-1519) embodied interdisciplinary thinking, seamlessly blending art, science, and engineering. His approach demonstrates the power of connecting diverse fields of knowledge.",
      quote: "Learning never exhausts the mind."
    },
    {
      id: "logic",
      name: "Formal Logic",
      type: "concept",
      description: "Systematic reasoning framework",
      details: "Formal logic provides the foundation for algorithmic thinking, enabling structured problem-solving and computational processes. Aristotle's syllogisms were an early form of logical reasoning that would eventually influence computer science.",
      quote: ""
    },
    {
      id: "algorithmic",
      name: "Algorithmic Thinking",
      type: "concept",
      description: "Step-by-step problem solving",
      details: "Algorithmic thinking involves breaking down problems into discrete, executable steps—a direct descendant of Aristotelian logic and the foundation of all modern computing.",
      quote: ""
    },
    {
      id: "meaning",
      name: "Meaning as Use",
      type: "concept",
      description: "Wittgenstein's language philosophy",
      details: "Wittgenstein's concept that meaning emerges from how language is used in context, rather than from fixed definitions. This idea parallels how Large Language Models learn meaning from vast patterns of language usage.",
      quote: ""
    },
    {
      id: "selfmastery",
      name: "Self-Mastery",
      type: "concept",
      description: "Personal development and wisdom",
      details: "The pursuit of self-knowledge, discipline, and wisdom—a core philosophical goal that remains essential in the age of AI. It involves understanding oneself, overcoming fear, and cultivating virtue.",
      quote: ""
    },
    {
      id: "llms",
      name: "Large Language Models",
      type: "technology",
      description: "AI systems like GPT",
      details: "LLMs represent a practical application of both Wittgenstein's philosophy (meaning from usage) and Turing's vision of machine intelligence. They demonstrate how machines can process and generate language in ways that mirror human communication patterns.",
      quote: ""
    },
    {
      id: "turingmachine",
      name: "Turing Machine",
      type: "technology",
      description: "Theoretical model of computation",
      details: "Turing's abstract computational device that formalized the concept of algorithm and computation. It proved that certain logical problems could be solved mechanically, bridging philosophy and computer science.",
      quote: ""
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      type: "technology",
      description: "Machine intelligence systems",
      details: "AI represents the culmination of centuries of philosophical inquiry into the nature of intelligence, reasoning, and consciousness. It challenges us to reconsider fundamental questions about what it means to think.",
      quote: ""
    }
  ] as Node[],
  links: [
    { source: "aristotle", target: "logic" },
    { source: "logic", target: "algorithmic" },
    { source: "algorithmic", target: "turingmachine" },
    { source: "turing", target: "turingmachine" },
    { source: "turing", target: "ai" },
    { source: "wittgenstein", target: "meaning" },
    { source: "meaning", target: "llms" },
    { source: "llms", target: "ai" },
    { source: "turingmachine", target: "ai" },
    { source: "aristotle", target: "selfmastery" },
    { source: "davinci", target: "selfmastery" },
    { source: "selfmastery", target: "ai" },
    { source: "algorithmic", target: "ai" }
  ] as Link[]
};

export default function Explorer() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: Math.max(600, window.innerHeight - 300)
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleNodeClick = useCallback((node: any) => {
    setSelectedNode(node as Node);
  }, []);

  const getNodeColor = (type: string) => {
    switch (type) {
      case "philosopher":
        return "#d4af37"; // gold
      case "concept":
        return "#0ea5a4"; // teal
      case "technology":
        return "#1e3a8a"; // navy
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-6">
            Concept Explorer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Explore the interconnections between philosophers, concepts, and technologies. Click on any node to learn more.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gold-accent" />
              <span>Philosophers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#0ea5a4" }} />
              <span>Concepts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-navy-primary" />
              <span>Technologies</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div ref={containerRef} className="bg-muted/30">
                  <ForceGraph2D
                    graphData={graphData}
                    width={dimensions.width}
                    height={dimensions.height}
                    nodeLabel="name"
                    nodeAutoColorBy="type"
                    nodeColor={(node: any) => getNodeColor(node.type)}
                    nodeRelSize={8}
                    linkColor={() => "#94a3b8"}
                    linkWidth={2}
                    onNodeClick={handleNodeClick}
                    nodeCanvasObject={(node: any, ctx, globalScale) => {
                      const label = node.name;
                      const fontSize = 14 / globalScale;
                      ctx.font = `${fontSize}px Sans-Serif`;
                      const textWidth = ctx.measureText(label).width;
                      const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.4);

                      ctx.fillStyle = getNodeColor(node.type);
                      ctx.beginPath();
                      ctx.arc(node.x, node.y, 8, 0, 2 * Math.PI);
                      ctx.fill();

                      ctx.textAlign = "center";
                      ctx.textBaseline = "middle";
                      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
                      ctx.fillRect(
                        node.x - bckgDimensions[0] / 2,
                        node.y + 12,
                        bckgDimensions[0],
                        bckgDimensions[1]
                      );

                      ctx.fillStyle = "#1e293b";
                      ctx.fillText(label, node.x, node.y + 12 + bckgDimensions[1] / 2);
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <AnimatePresence mode="wait">
              {selectedNode ? (
                <motion.div
                  key={selectedNode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="sticky top-24">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: getNodeColor(selectedNode.type) }}
                            />
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">
                              {selectedNode.type}
                            </span>
                          </div>
                          <CardTitle className="text-2xl">{selectedNode.name}</CardTitle>
                          <CardDescription className="mt-2">
                            {selectedNode.description}
                          </CardDescription>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedNode(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {selectedNode.details}
                      </p>
                      {selectedNode.quote && (
                        <blockquote className="border-l-4 border-gold-accent pl-4 italic text-sm text-muted-foreground bg-muted/50 p-4 rounded-r">
                          "{selectedNode.quote}"
                        </blockquote>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Card className="sticky top-24">
                    <CardContent className="pt-6 text-center">
                      <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Click on any node in the graph to view detailed information about philosophers, concepts, and technologies.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
