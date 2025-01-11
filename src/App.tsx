import React from 'react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { Github, Linkedin, Mail, Terminal, Code, Palette, Database } from 'lucide-react';
import { CipherText } from './components/CipherText';
import { NeonCursor } from './components/NeonCursor';
import { RotatingTitles } from './components/RotatingTitles';

function App() {
  return (
    <div className="min-h-screen bg-purple-950 text-purple-100 overflow-x-hidden">
      <NeonCursor />
      
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-purple-900/20 to-purple-950" />
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_500px_at_50%_200px,#8b5cf640,transparent)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative">
        <header className="mb-20 text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/50 hover:ring-purple-400 transition-all duration-300 transform hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            <CipherText text="John Doe" delay={0} />
          </h1>
          <div className="text-xl text-purple-300">
            <RotatingTitles />
          </div>
        </header>

        <Section title="About Me" delay={1500}>
          <p className="text-lg leading-relaxed">
            I craft digital experiences with code. Specializing in modern web technologies,
            I build applications that are both beautiful and functional.
          </p>
        </Section>

        <Section title="Interests" delay={2000}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group p-6 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40">
              <Terminal className="w-8 h-8 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <h3 className="font-bold mb-2 group-hover:text-purple-300 transition-colors">Backend Development</h3>
              <p className="text-purple-200">Building robust and scalable server-side applications</p>
            </div>
            <div className="group p-6 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40">
              <Code className="w-8 h-8 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <h3 className="font-bold mb-2 group-hover:text-purple-300 transition-colors">Frontend Development</h3>
              <p className="text-purple-200">Crafting beautiful and responsive user interfaces</p>
            </div>
            <div className="group p-6 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40">
              <Database className="w-8 h-8 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <h3 className="font-bold mb-2 group-hover:text-purple-300 transition-colors">Database Design</h3>
              <p className="text-purple-200">Architecting efficient and scalable data solutions</p>
            </div>
          </div>
        </Section>

        <Section title="Projects" delay={2500}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Project Alpha"
              description="A real-time collaboration platform built with React and WebSocket"
              technologies={['React', 'Node.js', 'WebSocket', 'MongoDB']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Project Beta"
              description="AI-powered content management system with advanced analytics"
              technologies={['Python', 'TensorFlow', 'React', 'PostgreSQL']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </Section>

        <Section title="Certificates" delay={3000}>
          <div className="space-y-4">
            <div className="group p-6 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40">
              <h3 className="font-bold group-hover:text-purple-300 transition-colors">AWS Certified Solutions Architect</h3>
              <p className="text-purple-300">Amazon Web Services • 2023</p>
            </div>
          </div>
        </Section>

        <Section title="Connect With Me" delay={3500}>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
            >
              <Github className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
            >
              <Linkedin className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:example@email.com"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
            >
              <Mail className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              <span>Email</span>
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;