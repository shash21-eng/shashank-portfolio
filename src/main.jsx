import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, BrainCircuit, Check,
  Code2, Database, Github, Linkedin, Mail, Menu, MessageSquareText,
  Network, Server, Sparkles, Terminal, X, Zap
} from 'lucide-react';
import './styles.css';

const PROFILE = {
  name: 'Shashank N',
  email: 'shashin2105@gmail.com',
  github: 'https://github.com/shash21-eng',
  linkedin: 'https://www.linkedin.com/in/shashank-n-b20477366/',
};

const projects = [
  {
    number: '01', label: 'AI PRODUCT · LEAD AUTOMATION', title: 'ElevateBox AI Agent',
    description: 'An AI voice-sales workflow for ecommerce teams that extracts structured lead details from call transcripts, classifies leads as HOT, WARM, or COLD, and selects a follow-up action: WhatsApp message, callback, or queued follow-up. A hybrid LLM and rule-based pipeline preserves critical details when model output is incomplete.',
    tags: ['Python', 'FastAPI', 'Uvicorn', 'LLM extraction', 'Twilio WhatsApp API'],
    icon: Bot, featured: true, link: 'https://github.com/shash21-eng/ElevateBox-AI-Agent',
    linkLabel: 'View project'
  },
  {
    number: '02', label: 'GENERATIVE AI · DOCUMENT-GROUNDED RAG', title: 'Agentic AI RAG Chatbot',
    description: 'A document-grounded chatbot that answers questions from an Agentic AI eBook. A LangGraph-orchestrated pipeline retrieves relevant PDF passages and returns a structured answer with a confidence score and source chunks, including page number, similarity score, and text for traceability.',
    tags: ['Python 3.11', 'FastAPI', 'LangGraph', 'LangChain', 'Pinecone', 'Sentence Transformers', 'Gemini 2.5 Flash'],
    icon: BrainCircuit, link: 'https://github.com/shash21-eng/agentic-ai-rag-chatbot', linkLabel: 'View project'
  },
  {
    number: '03', label: 'BACKEND · REST API', title: 'URL Shortener REST API',
    description: 'A Flask REST API that converts long URLs into six-character short links and supports custom aliases, link listing and inspection, deletion, and HTTP 302 redirects. It checks generated codes for uniqueness, returns 409 Conflict for duplicate custom codes, and increments click counts atomically on redirects.',
    tags: ['Python 3', 'Flask', 'SQLite', 'REST/JSON', 'HTTP 302'],
    icon: Network, link: 'https://github.com/shash21-eng/url-shortener', linkLabel: 'View project'
  },
];

const skillGroups = [
  { title: 'AI & LLM APPLICATIONS', icon: BrainCircuit, skills: ['LangChain', 'RAG', 'FAISS', 'Embeddings', 'Prompt engineering', 'LLM tool calling'] },
  { title: 'BACKEND ENGINEERING', icon: Server, skills: ['Python', 'FastAPI', 'Django', 'Flask', 'REST APIs', 'Pydantic'] },
  { title: 'DATA & STORAGE', icon: Database, skills: ['MySQL', 'SQL', 'Pandas', 'NumPy', 'Vector search'] },
  { title: 'TOOLS & FOUNDATIONS', icon: Terminal, skills: ['Git & GitHub', 'Docker fundamentals', 'HTML & CSS', 'C / C++ / Java', 'OS & networking'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Shashank N home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SHASHANK N</span></a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href={PROFILE.linkedin} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO AI & BACKEND OPPORTUNITIES</div>
            <h1>I build things<br />that make <span className="gradient-text">AI useful.</span></h1>
            <p className="hero-subtitle">I’m Shashank — a computer science engineer focused on backend systems and practical AI applications. I turn ideas into APIs, intelligent workflows, and products people can actually use.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowRight size={16} /></a><a className="button button-ghost" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div>
            <div className="hero-meta"><span><span className="meta-symbol">⌘</span> Python-first engineering</span><span><span className="meta-symbol">✳</span> AI product thinking</span></div>
          </div>
          <div className="hero-visual" aria-label="Decorative AI system illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="core-glow" /><div className="core"><BrainCircuit size={54} strokeWidth={1.25} /></div>
            <div className="float-card card-api"><span className="mini-icon"><Server size={15} /></span><span><b>API layer</b><small>Fast · Structured · Reliable</small></span><span className="live-pill">LIVE</span></div>
            <div className="float-card card-rag"><span className="mini-icon purple"><Sparkles size={15} /></span><span><b>AI + RAG</b><small>Context-aware responses</small></span></div>
            <div className="float-card card-python"><span className="python-mark">Py</span><span><b>Python</b><small>My core toolkit</small></span></div>
            <div className="visual-caption"><span className="caption-line" /> BUILDING AT THE INTERSECTION OF AI & SOFTWARE</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDownRight size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>Curious by nature.<br /><span className="muted-heading">Builder by choice.</span></h2></div>
          <div className="about-content"><p className="about-lead">I’m interested in the engineering behind useful AI — not just the model, but everything around it.</p><p className="body-copy">From building APIs and data workflows to experimenting with retrieval-augmented generation and AI agents, I enjoy connecting backend fundamentals with emerging AI capabilities. My focus is on making systems understandable, dependable, and useful in real-world scenarios.</p><div className="education-card"><div className="education-icon"><Code2 size={21} /></div><div><span className="tiny-label">EDUCATION</span><h3>B.Tech, Computer Science & Engineering</h3><p>MS Ramaiah University of Applied Sciences</p></div><div className="education-score"><strong>8.6</strong><span>/ 10 CGPA</span></div></div></div>
        </section>

        <section className="work section-wrap section-block" id="work">
          <div className="section-heading work-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>Projects with a <span className="gradient-text">purpose.</span></h2></div><a className="text-link" href={PROFILE.github} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={15} /></a></div>
          <div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className={project.featured ? 'project-card project-featured' : 'project-card'} key={project.number}><div className="project-top"><span className="project-number">/{project.number}</span><div className="project-icon"><Icon size={20} strokeWidth={1.6} /></div><span className="project-arrow"><ArrowUpRight size={17} /></span></div><span className="project-label">{project.label}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowRight size={15} /></a></article>; })}</div>
          <p className="project-note"><span className="note-star">✳</span> Project descriptions summarize the intended scope. Visit the linked repositories for implementation details and current status.</p>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading"><span className="section-index">03 / TOOLKIT</span><h2>The tools I use<br /><span className="muted-heading">to bring ideas to life.</span></h2></div>
          <div className="skills-grid">{skillGroups.map(group => { const Icon = group.icon; return <div className="skill-card" key={group.title}><div className="skill-title"><Icon size={18} /><h3>{group.title}</h3></div><div className="skill-chips">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>; })}</div>
          <div className="principles-row"><div><Zap size={17} /><span>Build practical solutions</span></div><div><MessageSquareText size={17} /><span>Keep systems explainable</span></div><div><Network size={17} /><span>Think end-to-end</span></div></div>
        </section>

        <section className="contact section-wrap section-block" id="contact"><div className="contact-panel"><div className="contact-orb" /><span className="section-index">04 / YOUR TURN</span><h2>Have a problem<br />worth <span className="gradient-text">building for?</span></h2><p>I’m looking to connect with teams building thoughtful AI products and reliable backend systems. Let’s talk.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${PROFILE.email}`}>Send me an email <ArrowUpRight size={16} /></a><button className="button button-ghost" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'Copy email'}</button></div><div className="social-links"><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a><a href={`mailto:${PROFILE.email}`}><Mail size={17} /> Email <ArrowUpRight size={13} /></a></div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span></a><span>Designed & built by Shashank N</span><span>© {new Date().getFullYear()} · Built with React</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
