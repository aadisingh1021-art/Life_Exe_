import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag } from "lucide-react";

const articles = [
  {
    id: "aristotle-algorithmic-thinking",
    title: "Aristotle and Algorithmic Thinking",
    excerpt: "Exploring how Aristotle's systematic approach to logic laid the groundwork for modern algorithmic thinking and computation.",
    author: "Life_exe Team",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Philosophy", "AI", "Logic"],
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&h=400&fit=crop"
  },
  {
    id: "wittgenstein-language-llms",
    title: "Wittgenstein, Language, and LLMs",
    excerpt: "How Wittgenstein's 'meaning is use' philosophy illuminates the functioning of Large Language Models and modern AI.",
    author: "Life_exe Team",
    date: "2025-01-10",
    readTime: "10 min read",
    tags: ["Philosophy", "AI", "Language"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop"
  },
  {
    id: "overcoming-fear-philosophy",
    title: "Overcoming Fear: Philosophy for Progress",
    excerpt: "Examining how philosophical wisdom can help us overcome the fear and anxiety that often accompany rapid technological change.",
    author: "Life_exe Team",
    date: "2025-01-05",
    readTime: "6 min read",
    tags: ["Self-Mastery", "Philosophy"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop"
  },
  {
    id: "turing-machine-intelligence",
    title: "From Turing Machines to Machine Intelligence",
    excerpt: "Tracing the evolution from Turing's theoretical computation model to modern artificial intelligence systems.",
    author: "Life_exe Team",
    date: "2025-01-01",
    readTime: "12 min read",
    tags: ["AI", "Computer Science", "Philosophy"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: "interdisciplinary-approach",
    title: "The Power of Interdisciplinary Thinking",
    excerpt: "Why connecting philosophy, behavioral science, and technology is essential for personal mastery and societal progress.",
    author: "Life_exe Team",
    date: "2024-12-28",
    readTime: "7 min read",
    tags: ["Interdisciplinary", "Self-Mastery"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
  },
  {
    id: "davinci-renaissance-thinking",
    title: "Leonardo da Vinci and Renaissance Thinking",
    excerpt: "Lessons from da Vinci's polymathic approach to knowledge and its relevance in the age of specialization.",
    author: "Life_exe Team",
    date: "2024-12-20",
    readTime: "9 min read",
    tags: ["Philosophy", "Interdisciplinary", "History"],
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=400&fit=crop"
  }
];

export default function Articles() {
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
              Articles & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore in-depth articles connecting philosophy, human behavior, and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gold-accent/10 text-gold-accent dark:bg-gold-accent/20"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <CardTitle className="text-2xl group-hover:text-gold-accent transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{article.author}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link to={`/articles/${article.id}`}>
                      <Button variant="outline" className="w-full group/btn">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
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
