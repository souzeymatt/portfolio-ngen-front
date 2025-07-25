import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Code, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Calendar,
  User,
  Briefcase,
  GraduationCap,
  Send,
  ChevronDown,
  Star,

  Cpu,
  Server,
  Smartphone,
  Monitor
} from 'lucide-react';
import ngenlogo from './assets/ngenlogo.png';  // all lowercase
// React Icons
import { SiHtml5, SiCss3, SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiFlutter, SiExpress, SiMysql, SiMongodb, SiFirebase, SiPostman, SiVite, SiNginx } from "react-icons/si";
import { FaJs, FaReact, FaBootstrap, FaWordpress, FaPhp, FaLaravel, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import { SiDjango, SiFlask } from "react-icons/si"; // valid Si exports
import { MdSecurity } from "react-icons/md"; // used as JWT icon replacement
import { AiOutlineApi } from "react-icons/ai"; // Replaces BiApi, which does not exist
import { VscCode } from "react-icons/vsc"; // VS Code icon

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [professionText, setProfessionText] = useState("");
  const fullProfessionText = "_ Full Stack Developer & Software Engineer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullProfessionText.length) {
        setProfessionText(prev => prev + fullProfessionText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert(result.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message. Please try again later.');
  }
};


const skills = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'PHP', icon: FaPhp },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Python', icon: IoLogoPython },
  { name: 'Django', icon: SiDjango },
  { name: 'Flask', icon: SiFlask },
  { name: 'MySQL', icon: SiMysql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'JWT', icon: MdSecurity }, // JWT replaced with MdSecurity
  { name: 'API', icon: AiOutlineApi }, // FIX: Replaced BiApi with AiOutlineApi
  { name: 'Postman', icon: SiPostman },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Docker', icon: FaDocker },
  { name: 'VS Code', icon: VscCode },
  { name: 'Vite', icon: SiVite },
];




  const projects = [
    {
      title: 'Telegram Bot Automation',
      description: 'Developed advanced Telegram bots using Python, PHP, Node.js, and Laravel with API integration and real-time message handling.',
      tech: ['Python', 'PHP', 'Node.js', 'Laravel'],
      icon: Smartphone
    },
    {
      title: 'Student Grade Management System',
      description: 'Built a Windows desktop application using C# and MS Access with CRUD operations and printable reports.',
      tech: ['C#', 'MS Access', 'Windows Forms'],
      icon: Monitor
    },
    {
      title: 'E-commerce Web Application',
      description: 'Created a full-featured e-commerce platform using Python Flask with user authentication and responsive design.',
      tech: ['Python', 'Flask', 'SQLAlchemy', 'HTML/CSS'],
      icon: Globe
    },
    {
      title: 'RESTful API Development',
      description: 'Developed secure APIs using Entity Framework, MVC architecture, and JWT authentication.',
      tech: ['.NET Core', 'Entity Framework', 'JWT'],
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen futuristic-bg text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center w-full md:w-auto">
              <img src={ngenlogo} alt="N.G.EN Logo" className="h-16 md:h-20 w-auto" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center tech-grid">
        <div className="container mx-auto px-6 text-center">
          <div className={`${isVisible.home ? 'fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="teal-gradient">Nusayba</span>
            </h1>
            <h2 className="text-3xl md:text-4xl mb-8 text-gray-300">
              {professionText}
            </h2>
            <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Crafting innovative digital solutions with cutting-edge technologies
            </p>
            <div className="flex justify-center space-x-6">
              <button className="neon-border px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all">
                <a href="#contact" className="flex items-center space-x-2">
                  <Mail className="moving-icon" size={20} />
                  <span>Get In Touch</span>
                </a>
              </button>
              <button className="teal-gradient-bg px-8 py-3 rounded-lg text-black font-semibold hover:shadow-lg transition-all">
                <a href="#projects" className="flex items-center space-x-2">
                  <Briefcase size={20} />
                  <span>View Projects</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="floating-animation text-cyan-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`${isVisible.about ? 'slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="teal-gradient">About Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Personal Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <User className="text-cyan-400" size={20} />
                    <span>Nusayba Abd Al-Muttalib Al-Qaziri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-cyan-400" size={20} />
                    <span>nusi0101ns@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-cyan-400" size={20} />
                    <span>+218-924895396</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-cyan-400" size={20} />
                    <span>Benghazi, Libya</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-cyan-400" size={20} />
                    <span>Born: January 4, 2000</span>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold">Bachelor of Science in Software Engineering</h4>
                    <p className="text-gray-400">Modern American University</p>
                    <p className="text-gray-400">Class of 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={`${isVisible.experience ? 'fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="teal-gradient">Experience</span>
            </h2>
            <div className="space-y-8">
              <div className="glass-effect p-6 rounded-lg neon-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">Full Stack Developer</h3>
                    <p className="text-gray-400">Personal Projects / Contributions</p>
                  </div>
                  <span className="text-sm text-gray-500">03/2020 - Present</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Developed Telegram bots using Python, PHP, Node.js, and Laravel</li>
                  <li>• Built Windows desktop applications with C# and MS Access</li>
                  <li>• Created e-commerce web applications using Python Flask</li>
                  <li>• Applied .NET Core fundamentals with Entity Framework</li>
                </ul>
              </div>

              <div className="glass-effect p-6 rounded-lg neon-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">Back-End Foundations Lecturer</h3>
                    <p className="text-gray-400">Elites Center</p>
                  </div>
                  <span className="text-sm text-gray-500">06/2025 - Present</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Instructed students on Python fundamentals and Flask framework</li>
                  <li>• Developed RESTful APIs with SQLAlchemy ORM</li>
                  <li>• Mentored students on Git/GitHub workflows</li>
                </ul>
              </div>

              <div className="glass-effect p-6 rounded-lg neon-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">Computer Science Teacher</h3>
                    <p className="text-gray-400">Seddara School</p>
                  </div>
                  <span className="text-sm text-gray-500">09/2024 - 05/2025</span>
                </div>
                <p className="text-gray-300">Delivered engaging lessons to Elementary and Mid School students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`${isVisible.skills ? 'slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="teal-gradient">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg neon-border hover:glow-effect transition-all flex flex-col items-center justify-center text-center">
                  <skill.icon className="text-cyan-400 moving-icon mb-3" size={48} />
                  <h3 className="font-semibold text-xl">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className={`${isVisible.projects ? 'fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="teal-gradient">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg neon-border hover:glow-effect transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <project.icon className="text-cyan-400 moving-icon" size={24} />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`${isVisible.contact ? 'slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="teal-gradient">Get In Touch</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-cyan-400 moving-icon" size={20} />
                    <span>nusi0101ns@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-cyan-400 moving-icon" size={20} />
                    <span>+218-924895396</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-cyan-400 moving-icon" size={20} />
                    <span>Benghazi, Libya</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/in/nusayba-alqaziri-525439366" className="neon-border p-3 rounded-lg hover:glow-effect transition-all">
                      <Linkedin className="moving-icon" size={24} />
                    </a>
                    <a href="https://github.com/souzeymatt" className="neon-border p-3 rounded-lg hover:glow-effect transition-all">
                      <Github className="moving-icon" size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full teal-gradient-bg text-black font-semibold py-3 rounded-lg hover:glow-effect transition-all flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/40">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={ngenlogo} alt="N.G.EN Logo" className="h-16 md:h-20 w-auto" />
            <span className="text-lg font-semibold teal-gradient">N.G.EN Software Engineering</span>
          </div>
          <p className="text-gray-400">© 2025 Nusayba Al-Qaziri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

