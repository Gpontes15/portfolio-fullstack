import Image from "next/image";
import { FaJava, FaDocker, FaGithub, FaLinkedin, FaLinux, FaWhatsapp, FaInstagram, FaNetworkWired, FaMicrochip, FaDatabase, FaServer } from "react-icons/fa";
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
    const res = await fetch('https://portfolio-fullstack-kodq.onrender.com/api/projects', { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
}

// --- LISTA DE SKILLS (ATUALIZADA COM FOCO EM INFRA/BACK) ---
const skills = [
  { name: "Java", icon: <FaJava className="w-8 h-8 text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-green-500" /> },
  { name: "Infra & Redes", icon: <FaNetworkWired className="w-8 h-8 text-purple-500" /> },
  { name: "Docker", icon: <FaDocker className="w-8 h-8 text-blue-500" /> },
  { name: "SQL / RMS", icon: <FaDatabase className="w-8 h-8 text-gray-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" /> },
  { name: "Suporte N2/N3", icon: <FaServer className="w-8 h-8 text-red-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
];

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION (SOBRE MIM - VERSÃO FINAL) */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          
          {/* Foto com efeito de brilho */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Gabriel Pontes" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Texto Sobre Mim */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Gabriel <span className="text-blue-500">Pontes</span>
            </h1>
            <h2 className="text-xl font-semibold text-gray-300 mb-6 flex flex-col md:flex-row gap-2 justify-center md:justify-start">
              <span>Engenharia da Computação</span>
              <span className="hidden md:block">•</span>
              <span>Java Developer</span>
            </h2>
            
            <div className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base space-y-4">
              <p>
                Minha jornada na tecnologia combina base acadêmica sólida com <strong>experiência real de campo</strong>. 
                Sou Técnico em Redes pela EEEP Adolfo Ferreira (2021) e acadêmico de Engenharia da Computação na UNIFOR (desde 2022).
              </p>
              <p>
                Não sou apenas um dev de código: trago bagagem prática de <strong>Suporte TI e Service Desk</strong>, atuando na sustentação de sistemas críticos de varejo (SysPDV, RMS, ERPs). 
                Sei como resolver problemas de rede, banco de dados e infraestrutura sob pressão.
              </p>
              <p>
                Hoje, canalizo essa vivência para o <strong>Backend Java</strong>, criando softwares que não apenas funcionam, mas são resilientes e escaláveis.
              </p>
            </div>
            
            {/* Badges de Autoridade */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-mono rounded border border-blue-800">🎓 Eng. Computação (2026)</span>
              <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-mono rounded border border-purple-800">📡 Téc. Redes (2021)</span>
              <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs font-mono rounded border border-green-800">💼 Exp. Varejo & Suporte</span>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20">
                Ver Projetos
              </a>
              <a href="https://www.linkedin.com/in/gpontes203/" target="_blank" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-all border border-gray-700 flex items-center gap-2">
                <FaLinkedin /> Conectar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TECH STACK (REFOCADA) */}
      <div className="bg-gray-950 py-12 border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 font-semibold uppercase tracking-wider mb-8">
            Stack Técnica & Vivência Profissional
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center opacity-80 hover:opacity-100 transition-opacity">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-blue-500/30 transition-colors">
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
          Portfólio de Projetos
        </h2>
        
        {projects.length === 0 ? (
          <div className="text-center py-20 bg-gray-900/50 rounded-2xl border border-gray-800">
            <p className="text-gray-400 mb-2">Carregando projetos...</p>
            <p className="text-xs text-gray-600">(Aguardando o servidor do Render iniciar) ☕</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col h-full">
                
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
                  <div className="h-48 bg-gray-800 flex items-center justify-center text-gray-600 border-b border-gray-800">
                    <span className="text-4xl opacity-20">☕</span>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.split(',').map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-blue-300 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/30">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-400 text-sm mb-6 line-clamp-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors hover:bg-gray-800 px-3 py-2 rounded-lg">
                        <FaGithub /> Código
                      </a>
                    )}
                    {project.deployUrl && (
                      <a href={project.deployUrl} target="_blank" className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors hover:bg-blue-900/20 px-3 py-2 rounded-lg">
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

      {/* 4. FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-900 py-16 mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            
            {/* Lado Esquerdo */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Gabriel Pontes</h3>
              <p className="text-gray-400">Engenharia da Computação (UNIFOR) & Java Dev</p>
              <p className="text-sm text-gray-600 mt-2">Experiência sólida em Sustentação de Sistemas e Infraestrutura.</p>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex gap-6 items-center">
              <a href="https://github.com/gpontes15" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all text-3xl" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/gpontes203/" target="_blank" className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all text-3xl" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/5585994090412" target="_blank" className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all text-3xl" title="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/gpontes26" target="_blank" className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all text-3xl" title="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-900 mt-10 pt-8 text-center">
            <p className="text-xs text-gray-600 font-mono">
              Desenvolvido com ☕ Java Spring Boot, ⚛️ Next.js & 🐳 Docker
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}