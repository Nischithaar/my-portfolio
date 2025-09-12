import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:nischithaaar03@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 flex items-center">
              Made with <Heart className="w-4 h-4 text-red-400 mx-2" /> by Nischitha A R
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nischitha A R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
