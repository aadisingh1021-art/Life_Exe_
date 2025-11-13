import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from "lucide-react";

const articleContent: Record<string, any> = {
  "aristotle-algorithmic-thinking": {
    title: "Aristotle and Algorithmic Thinking",
    author: "Life_exe Team",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Philosophy", "AI", "Logic"],
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&h=600&fit=crop",
    content: `
      <p>Aristotle's systematic approach to logic, developed over two millennia ago, laid crucial groundwork for what we now call algorithmic thinking. His work in formal logic, particularly syllogistic reasoning, represents one of the earliest forms of structured, rule-based thinking—a precursor to modern computation.</p>

      <h2>The Birth of Formal Logic</h2>
      <p>In his Organon, Aristotle developed a system of logic based on syllogisms: structured arguments where conclusions follow necessarily from premises. For example:</p>
      <ul>
        <li>All humans are mortal (major premise)</li>
        <li>Socrates is human (minor premise)</li>
        <li>Therefore, Socrates is mortal (conclusion)</li>
      </ul>

      <p>This systematic, rule-based approach to reasoning mirrors the step-by-step nature of algorithms. Just as a syllogism follows strict logical rules to reach a conclusion, an algorithm follows precise instructions to solve a problem.</p>

      <h2>From Logic to Computation</h2>
      <p>The connection between Aristotelian logic and modern computing becomes clearer when we consider how computers operate. At their core, computers execute instructions through Boolean logic—AND, OR, NOT operations—which are direct descendants of Aristotle's logical framework.</p>

      <p>Alan Turing, often called the father of computer science, built upon this logical foundation when he formalized the concept of computation with the Turing Machine. Turing's work showed that logical operations could be mechanized, that machines could follow algorithmic procedures to solve problems—precisely what Aristotle had done mentally with syllogisms.</p>

      <h2>Relevance to Modern AI</h2>
      <p>Today's artificial intelligence systems, particularly in their early rule-based forms (expert systems), operate on principles remarkably similar to Aristotelian logic. Even modern machine learning, while more probabilistic, still relies on logical structures and algorithmic procedures at its foundation.</p>

      <p>Understanding this historical connection reminds us that AI and computation aren't entirely new phenomena—they're the latest evolution of humanity's ancient quest to formalize reasoning and solve problems systematically.</p>

      <h2>Practical Implications</h2>
      <p>Recognizing the philosophical roots of algorithmic thinking has practical value. It helps us:</p>
      <ul>
        <li>Understand that logical reasoning is a skill that can be cultivated</li>
        <li>Appreciate the continuity between ancient wisdom and modern technology</li>
        <li>Approach AI not as alien or incomprehensible, but as an extension of rational thought</li>
        <li>Apply structured thinking to everyday problem-solving</li>
      </ul>

      <p>By studying Aristotle's logic, we don't just learn history—we sharpen the same mental tools that underpin all of modern computing and AI.</p>
    `
  },
  "wittgenstein-language-llms": {
    title: "Wittgenstein, Language, and LLMs",
    author: "Life_exe Team",
    date: "2025-01-10",
    readTime: "10 min read",
    tags: ["Philosophy", "AI", "Language"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop",
    content: `
      <p>Ludwig Wittgenstein's later philosophy, particularly his concept that "meaning is use," offers profound insights into how Large Language Models like GPT function. This connection between 20th-century philosophy and 21st-century AI reveals surprising parallels.</p>

      <h2>Meaning as Use</h2>
      <p>In his Philosophical Investigations, Wittgenstein argued against the idea that words have fixed, intrinsic meanings. Instead, he proposed that the meaning of a word is determined by how it's used in various contexts—what he called "language games."</p>

      <blockquote>"The meaning of a word is its use in the language." — Ludwig Wittgenstein</blockquote>

      <p>This was revolutionary because it shifted focus from definitions to practical application, from essence to function.</p>

      <h2>How LLMs Learn Meaning</h2>
      <p>Large Language Models operate on principles remarkably similar to Wittgenstein's philosophy. They don't store dictionary definitions or semantic rules. Instead, they learn meaning by analyzing billions of examples of how words are actually used in context.</p>

      <p>When an LLM encounters the word "bank," it doesn't consult a definition. It considers the surrounding words and predicts the most likely meaning based on usage patterns: financial institution or river edge. The model has learned these distinctions purely through exposure to language in use.</p>

      <h2>Language Games and Neural Networks</h2>
      <p>Wittgenstein's concept of "language games"—different contexts with different rules for how language operates—maps surprisingly well onto how neural networks process language. Different contexts activate different patterns in the network, just as different language games involve different rules for meaning.</p>

      <p>Consider the word "run":</p>
      <ul>
        <li>"I run every morning" (physical activity)</li>
        <li>"The program runs smoothly" (operation)</li>
        <li>"She'll run for office" (candidacy)</li>
        <li>"The colors run when wet" (bleeding)</li>
      </ul>

      <p>An LLM handles these variations not through rules but through learned patterns of usage—exactly as Wittgenstein suggested humans do.</p>

      <h2>Implications for Understanding AI</h2>
      <p>This philosophical perspective helps us understand both the capabilities and limitations of LLMs:</p>

      <p><strong>Capabilities:</strong> LLMs can generate contextually appropriate language because they've internalized patterns of usage across countless contexts.</p>

      <p><strong>Limitations:</strong> Like humans learning through usage alone, LLMs can sometimes generate plausible-sounding but incorrect information—they've learned patterns of expression without necessarily understanding underlying truths.</p>

      <h2>The Human Element</h2>
      <p>Wittgenstein emphasized that language is inherently social—we learn meaning through interaction with others. Similarly, LLMs learn from human-generated text, making them fundamentally dependent on human language use.</p>

      <p>This connection reminds us that AI language models aren't creating meaning from scratch—they're reflecting and recombining patterns of human meaning-making. Understanding this helps us use these tools more wisely and recognize their inherently human origins.</p>
    `
  }
};

export default function ArticleDetail() {
  const { id } = useParams();
  const article = id ? articleContent[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-6">Article Not Found</h1>
          <Link to="/articles">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/articles">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>

          <article>
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-gold-accent/10 text-gold-accent dark:bg-gold-accent/20"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-serif font-bold text-navy-primary dark:text-gold-accent mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
              <span className="font-medium">{article.author}</span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-navy-primary dark:prose-headings:text-gold-accent prose-a:text-gold-accent hover:prose-a:text-gold-light prose-blockquote:border-gold-accent prose-blockquote:bg-muted/50 prose-blockquote:py-2"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <Card className="mt-12 bg-muted/50">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground italic">
                  This article is part of the Life_exe project exploring the intersection of philosophy, 
                  human behavior, and AI. Comments and discussions can be added by integrating a system 
                  like Disqus or connecting a backend service.
                </p>
              </CardContent>
            </Card>
          </article>
        </motion.div>
      </div>
    </div>
  );
}
