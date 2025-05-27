
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Arrhythmia Classification Using Deep Learning",
      description: "Developed a deep learning model with VGG16 to classify cardiac arrhythmias, achieving high accuracy on the MIT-BIH dataset using advanced neural network techniques.",
      tech: ["Deep Learning", "VGG16", "Python", "MIT-BIH Dataset"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Augmented Reality using Marker Detection",
      description: "Developed an innovative AR project displaying animations of diagrams in science books using Unity 3D and Vuforia for interactive educational experiences.",
      tech: ["Unity 3D", "Vuforia", "C#", "AR/VR"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Healthcare Migration Platform",
      description: "Worked as Full Stack Developer migrating services from ActiveBatch to AWS Airflow, developing scalable web applications with Java Springboot and Angular.",
      tech: ["Java", "Angular", "AWS", "Springboot", "TypeScript"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { 
      icon: Code, 
      name: "Frontend Development", 
      description: "Angular, TypeScript, HTML5, Tailwind CSS, Bootstrap, JavaScript" 
    },
    { 
      icon: Server, 
      name: "Backend Development", 
      description: "Java, Springboot, RESTful APIs, Microservices, Node.js" 
    },
    { 
      icon: Database, 
      name: "Database & DevOps", 
      description: "SQL Server, MongoDB, DynamoDB, Docker, Kubernetes, AWS" 
    }
  ];

  const experience = [
    {
      role: "Analyst",
      company: "DELOITTE, Gurugram, India",
      period: "June'23 – Present",
      responsibilities: [
        "Worked as a Full Stack Developer with Java Springboot and Angular for a healthcare client, focusing on migration from ActiveBatch to AWS Airflow",
        "Developed and maintained scalable web applications and automated workflows, improving system efficiency",
        "Collaborated with cross-functional teams to ensure seamless integration across the healthcare platform"
      ]
    },
    {
      role: "Associate Analyst",
      company: "DELOITTE, Gurugram, India", 
      period: "Jan'22 – May'23",
      responsibilities: [
        "Engineered Springboot Framework integration for Toyota, enabling dynamic UI & service interaction",
        "Developed modular Angular components with TypeScript for 'Store Closed Days' feature",
        "Engineered RESTful services and collaborated with frontend team for seamless API integration",
        "Built reusable components with SASS and responsive layouts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/a2744c7f-e731-4f64-8f61-cb140d0a2edc.png" 
              alt="Anshul Srivastava Profile" 
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg hover-scale object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Anshul Srivastava</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate Frontend Developer with hands-on experience building scalable and responsive UIs using Angular, TypeScript, and Java
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover-scale"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg hover-scale"
            >
              Get In Touch
            </Button>
          </div>
          <div className="animate-pulse">
            <ArrowDown 
              className="w-6 h-6 mx-auto text-gray-400 cursor-pointer hover:text-blue-600 transition-colors" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate frontend developer with hands-on experience building scalable and responsive UIs. 
              Adept at collaborating across teams to deliver modular, testable code with strong focus on performance, 
              maintainability, and seamless UX.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover-scale transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <skill.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
                <p className="text-gray-600 mb-4">
                  Started my journey at Vellore Institute of Technology with a Bachelor's in Information Technology. 
                  Currently working at Deloitte as an Analyst, where I've been developing scalable healthcare solutions 
                  and migrating legacy systems to modern cloud architectures.
                </p>
                <p className="text-gray-600 mb-6">
                  I'm passionate about creating efficient, user-friendly applications and have experience with deep learning 
                  projects and AR/VR technologies. I enjoy solving complex problems and delivering innovative solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Java", "JavaScript", "Angular", "TypeScript", "Springboot", "AWS", "MongoDB", "PowerShell"].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                  alt="Workspace" 
                  className="rounded-lg shadow-lg mx-auto hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My journey in the tech industry, working with leading companies to deliver innovative solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 hover:shadow-lg bg-white">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-2xl text-blue-600">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-gray-700 mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my work, demonstrating expertise in full-stack development, 
              deep learning, and innovative technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="group hover-scale transition-all duration-300 hover:shadow-xl bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:anshul.2506762@gmail.com" 
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors hover-scale"
            >
              <Mail className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">anshul.2506762@gmail.com</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/anshul-srivastava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors hover-scale"
            >
              <Linkedin className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600">Connect with me</p>
            </a>
            
            <a 
              href="https://github.com/anshul-srivastava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-gray-50 transition-colors hover-scale"
            >
              <Github className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600">View my code</p>
            </a>
          </div>

          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg hover-scale"
            onClick={() => window.open('mailto:anshul.2506762@gmail.com')}
          >
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Anshul Srivastava. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
