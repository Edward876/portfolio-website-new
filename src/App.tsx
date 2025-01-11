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
        <div className="absolute inset-0 bg-gradient-to-b from-[#17153B] via-[#17153B]/20 to-[#17153B]" />



        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_500px_at_50%_200px,#8b5cf640,transparent)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative">
        <header className="mb-20 text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/50 hover:ring-purple-400 transition-all duration-300 transform hover:scale-105">
            <img
              src="src/components/IMG_20240920_212733_295.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            <CipherText text="Supratim Saha" delay={0} />
          </h1>
          <div className="text-xl text-purple-300">
            <RotatingTitles />
          </div>
        </header>

        <Section title="About Me" delay={1500}>
          <p className="text-lg leading-relaxed">
        A tech enthusiast and machine learning developer specializing in computer vision and convolutional neural networks (CNNs), I thrive on exploring new technologies and creating innovative solutions. Proficient in Python and experienced in programming languages like C and JavaScript, I have a passion for simplifying complex tasks. Having participated in three hackathons and actively contributing to projects on GitHub, I’m always eager to collaborate, learn, and share knowledge to drive impactful advancements in the tech world.
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
              <h3 className="font-bold mb-2 group-hover:text-purple-300 transition-colors">Machine Learning </h3>
              <p className="text-purple-200">Passionate about machine learning, I enjoy building intelligent systems that solve real-world problems, with a special focus on computer vision and CNNs.s</p>
            </div>
            <div className="group p-6 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40">
              <Database className="w-8 h-8 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <h3 className="font-bold mb-2 group-hover:text-purple-300 transition-colors">Dataset Building</h3>
              <p className="text-purple-200">Enthusiastic about web scraping, I enjoy extracting valuable insights from the web and transforming raw data into well-structured datasets, enabling innovative applications and impactful machine learning projects.</p>
            </div>
          </div>
        </Section>

        <Section title="Projects" delay={2500}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Animal Classification Model"
              description="This project is an animal classification model that identifies various animals from an input image. The model was trained to recognize 90 different animal species, ranging from common pets to wild animals. It is designed to help in classifying animals based on visual features in images."
              technologies={['Python', 'ML', 'CNN', 'TensorFlow']}
              githubUrl="https://github.com/Edward876/Wildlife-classifier"
              
            />
            <ProjectCard
              title="BCD to Seven-Segment Display Clock"
              description="This project combines the power of Verilog with Python to create a digital clock that simulates a seven-segment display using Binary-Coded Decimal (BCD)"
              technologies={['Python', 'Verilog']}
              githubUrl="https://github.com/Edward876/BCD-to-Seven-Segment-display-Clock"
              
            />

            <ProjectCard
              title="RAG Chatbot with Hugging Face and FAISS"
              description="This project demonstrates a Retrieval-Augmented Generation (RAG) chatbot. It combines document retrieval with text generation using open-source tools like Hugging Face Transformers, FAISS, and LangChain."
              technologies={['Python', 'PyTorch', 'Hugging Face', 'Langchain']}
              githubUrl="https://github.com/Edward876/rag-chatbot"
              
            />

<ProjectCard
              title="Shinichi: A Telegram Bot for Enhanced Interactive Communication"
              description="Shinichi is a Java-based Telegram bot designed to streamline user interaction and provide quick access to media and educational resources directly within Telegram chats. Developed to enhance communication, Shinichi supports a variety of commands that make navigating daily digital tasks simpler and more efficient."
              technologies={['Java', 'Node.js', 'Webscrapping', 'API']}
              githubUrl="https://github.com/Edward876/Shinichi-Bot-Telegram"
              
            />
          </div>
          
        </Section>

        <Section title="Certificates" delay={3000}>
          <div className="space-y-4">
          <a
  href="https://coursera.org/share/0ba546b56d701e4a0fcb4598f3e1308e"
  target="_blank"
  rel="noopener noreferrer"
  className="group block p-6 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
>
  <h3 className="font-bold group-hover:text-purple-300 transition-colors">Programming in C++: A Hands-on Introduction</h3>
  <p className="text-purple-300">Codio • 2024</p>
</a>


            <a
  href="https://coursera.org/share/ae3eb45d1beb4423090a58e485e8e560"
  target="_blank"
  rel="noopener noreferrer"
  className="group block p-7 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
>
  <h3 className="font-bold group-hover:text-purple-300 transition-colors">Databases and SQL for Data Science with Python</h3>
  <p className="text-purple-300">IBM • 2024</p>
</a>


            <a
  href="https://coursera.org/share/3e557a339cfcd073081bc013378dbfbb"
  target="_blank"
  rel="noopener noreferrer"
  className="group block p-8 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
>
  <h3 className="font-bold group-hover:text-purple-300 transition-colors">Data Structures</h3>
  <p className="text-purple-300">University of California San Diego • 2024</p>
</a>

            <a
  href="https://coursera.org/share/e9936dea659519b34fd9a2b8f1a25145"
  target="_blank"
  rel="noopener noreferrer"
  className="group block p-9 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
>
  <h3 className="font-bold group-hover:text-purple-300 transition-colors">Machine Learning: Regression</h3>
  <p className="text-purple-300">University Of Washington • 2024</p>
</a>

<a
  href="https://coursera.org/share/643433e8fddd1036d027811b46c04787"
  target="_blank"
  rel="noopener noreferrer"
  className="group block p-9 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
>
  <h3 className="font-bold group-hover:text-purple-300 transition-colors">Statistics for Data Science with Python</h3>
  <p className="text-purple-300">IBM • 2024</p>
</a>
          </div>
        </Section>

        <Section title="Connect With Me" delay={3500}>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/Edward876"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
            >
              <Github className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              <span>Edward876</span>
            </a>
            <a
              href="https://www.linkedin.com/in/supratim-saha-548399233/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-900/30 border border-purple-700/50 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-purple-800/40"
            >
              <Linkedin className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
              <span>Supratim </span>
            </a>
            <a
              href="mailto:supratimsaha876@gmail.com"
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