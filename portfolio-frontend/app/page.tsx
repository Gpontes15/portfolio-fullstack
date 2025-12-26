import Image from "next/image";
// Importando ícones (Java, Spring, Docker, etc...) e agora WhatsApp/Instagram
import { FaJava, FaDocker, FaGithub, FaLinkedin, FaLinux, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiPostgresql, SiApachekafka, SiTailwindcss } from "react-icons/si";

// --- TIPAGEM ---
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  githubUrl: string | null;
  deployUrl: string | null;
  techStack: string | null;
  completionDate: string | null;
}

// --- BUSCA DE DADOS (BACKEND) ---
async function getProjects(): Promise<Project[]> {
  try {
    // Não esqueça do /api/projects no final!
    const res = await fetch('https://portfolio-fullstack-kodq.onrender.com/api/projects', { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
}

// --- LISTA DE SKILLS (HARDCODED PARA VISUAL) ---
const skills = [
  { name: "Java", icon: <FaJava className="w-8 h-8 text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-green-500" /> },
  { name: "Docker", icon: <FaDocker className="w-8 h-8 text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" /> },
  { name: "Kafka", icon: <SiApachekafka className="w-8 h-8 text-red-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
  { name: "Linux / Infra", icon: <FaLinux className="w-8 h-8 text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" /> },
];

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION (SOBRE MIM) */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Foto com efeito de brilho */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Gabriel Pontes" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
              Gabriel <span className="text-blue-500">Pontes</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Desenvolvedor Full Stack focado em arquiteturas escaláveis. 
              Transformo desafios de infraestrutura e backend complexo em soluções simples e performáticas usando <strong className="text-blue-400">Java</strong> e <strong className="text-white">Docker</strong>.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1">
                Ver Projetos
              </a>
              <a href="https://github.com/SEU_USER" target="_blank" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-all border border-gray-700 flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TECH STACK (NOVO!) */}
      <div className="bg-gray-950 py-12 border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 font-semibold uppercase tracking-wider mb-8">
            Tecnologias que domino
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center opacity-70 hover:opacity-100 transition-opacity">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-gray-600 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PROJETOS */}
      <div id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
          <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
          Projetos Selecionados
        </h2>
        
        {projects.length === 0 ? (
          <p className="text-gray-500 text-center py-10">O Backend parece estar offline 😴 (Verifique o Docker/Java)</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col">
                
                {project.imageUrl ? (
                  <div className="relative w-full h-48 overflow-hidden bg-gray-800 border-b border-gray-800">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ) : (
                  <div className="h-48 bg-gray-800 flex items-center justify-center text-gray-600">
                    Sem Imagem
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.split(',').map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-blue-300 bg-blue-900/20 px-2 py-1 rounded">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                        <FaGithub /> Código
                      </a>
                    )}
                    {project.deployUrl && (
                      <a href={project.deployUrl} target="_blank" className="text-sm font-semibold text-blue-500 hover:text-blue-400 flex items-center gap-1 transition-colors">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. FOOTER (ATUALIZADO!) */}
      <footer className="bg-gray-950 border-t border-gray-900 py-12 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Gabriel Pontes</h3>
            <p className="text-sm text-gray-500 mt-1">Engenharia da Computação & Full Stack Dev</p>
          </div>
          
          <div className="flex gap-6 items-center">
            {/* GitHub */}
            <a href="https://github.com/gpontes15" target="_blank" className="text-gray-400 hover:text-white transition-colors text-2xl" title="Meu GitHub">
              <FaGithub />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/gpontes203/" target="_blank" className="text-gray-400 hover:text-blue-500 transition-colors text-2xl" title="Meu LinkedIn">
              <FaLinkedin />
            </a>

            {/* WhatsApp - Coloque seu número com código do país (ex: 5511999999999) */}
            <a href="https://wa.me/5585994090412" target="_blank" className="text-gray-400 hover:text-green-500 transition-colors text-2xl" title="Me chame no WhatsApp">
              <FaWhatsapp />
            </a>

            {/* Instagram - Coloque seu usuário */}
            <a href="https://instagram.com/gpontes26" target="_blank" className="text-gray-400 hover:text-pink-500 transition-colors text-2xl" title="Meu Instagram">
              <FaInstagram />
            </a>
          </div>

          <p className="text-xs text-gray-600">
            © 2024 - Feito com Java, Spring & Next.js
          </p>
        </div>
      </footer>
    </main>
  );
}