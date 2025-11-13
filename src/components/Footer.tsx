import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep dark:bg-navy-primary text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-accent mb-4">Life_exe</h3>
            <p className="text-sm text-gray-300">
              Philosophy as Pragmatic Progress
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-gold-accent transition-colors">About</Link></li>
              <li><Link to="/objectives" className="text-gray-300 hover:text-gold-accent transition-colors">Objectives</Link></li>
              <li><Link to="/explorer" className="text-gray-300 hover:text-gold-accent transition-colors">Explorer</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-gold-accent transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/outcomes" className="text-gray-300 hover:text-gold-accent transition-colors">Outcomes</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-gold-accent transition-colors">References</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-accent transition-colors" aria-label="Github">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@lifeexe.org" className="text-gray-300 hover:text-gold-accent transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Life_exe Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
