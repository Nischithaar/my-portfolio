import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI & ML Development",
      description: "Hands-on experience in building ML models and intelligent systems"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Problem Solving",
      description: "Designing innovative solutions to real-world challenges"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new tools, technologies, and research in AI"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-white">Nischitha A R</span>, 
              an aspiring AI & ML professional and software developer. 
              Currently pursuing a B.E. in Artificial Intelligence & Machine Learning at 
              PES Institute of Technology & Management, Shivamogga (VTU, 2026).
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about solving real-world problems with AI, I have worked on 
              projects such as <span className="text-white font-medium">Credit Card Fraud Detection</span> 
              and a <span className="text-white font-medium">Multi-Model AI System for Lung Disease Detection</span>. 
              I enjoy building intelligent, user-friendly digital solutions that make a difference.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond coding, I’m interested in open-source contribution, exploring new 
              technologies, and collaborating with teams to innovate and grow. 
              With strong problem-solving skills, effective communication, and a mindset 
              of continuous learning, I aim to create a meaningful impact in the AI field.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                Continuous Learner
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 transform"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
