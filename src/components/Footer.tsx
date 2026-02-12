import { Shield, Mail, Linkedin, MessageCircle, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/5 py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-bold">
              Rapid<span className="text-primary">Test</span> QA
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Find bugs before your users do.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Services", "Process", "FAQ", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:adarshmishra70931@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> adarshmishra70931@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/adarsh-jayprakash-mishra" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a href="https://wa.me/919235943357?text=Hi%20I%20want%20to%20test%20my%20website" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5" /> +91 9235943357
            </a>
            <a href="https://github.com/Code-By-Adarsh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RapidTest QA. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
