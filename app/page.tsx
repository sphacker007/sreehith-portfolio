"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = ["About", "Skills", "Work", "Education", "Projects", "Expertise"];
const skills = [
  ["Programming", "Python · SQL · Pandas · NumPy"],
  ["Machine Learning", "Scikit-learn · XGBoost · LightGBM · Random Forest · Classification · Regression"],
  ["Big Data", "PySpark · Apache Spark · Databricks · Delta Lake · BigQuery"],
  ["Forecasting", "ARIMA · Prophet · Time-Series Analysis"],
  ["Applied AI", "LLMs · RAG · Embeddings · Vector Search · Gemini · Vertex AI"],
  ["MLOps", "MLflow · Experiment Tracking · Model Monitoring · Docker · Git · CI/CD"],
  ["Visualization", "Power BI · Matplotlib · Seaborn · SHAP"],
  ["Cloud", "AWS · GCP"],
];

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <main>
      <section className="hero" id="top">
        <Image className="hero-image" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=90" alt="Data visualizations on a large display" fill priority sizes="100vw" />
        <div className="hero-wash" />
        <header className="nav">
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />} <span>Menu</span></button>
          <nav aria-label="Primary navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}</nav>
          <div className="socials"><a href="mailto:sreehithyachamaneni@gmail.com" aria-label="Email Sreehith"><Mail /></a><a href="https://www.linkedin.com/in/sreehith-yachamaneni/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div>
        </header>
        {open && <div className="mobile-nav">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}</div>}
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: "easeOut" }}>
          <h1>SREEHITH<br />YACHAMANENI</h1>
          <p className="hero-title">Data Scientist <span>/</span> Machine Learning <span>/</span> Applied AI</p>
          <p className="hero-intro">Building intelligent solutions from complex data.</p>
        </motion.div>
        <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={18} /></a>
      </section>

      <section className="about section" id="about">
        <div className="section-grid">
          <div><SectionLabel>ABOUT SREEHITH</SectionLabel><Image className="editorial-image" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85" alt="Laptop showing analytics work" width={900} height={1100} /></div>
          <div className="about-copy">
            <p className="location">USA / DATA &amp; APPLIED AI</p>
            <p>Data Scientist specializing in machine learning, predictive analytics, forecasting, and applied AI. Transforming complex datasets into reliable models and meaningful business decisions.</p>
            <blockquote>“THE MOST USEFUL MODELS MAKE A COMPLEX QUESTION FEEL CLEAR.”</blockquote>
            <div className="stat"><strong>03</strong><span>YEARS ACROSS<br />DATA SCIENCE</span></div>
            <p>Across banking, fintech, industrial analytics, and supply-chain applications, Sreehith focuses on practical modeling, rigorous statistical analysis, explainability, and cloud-based data solutions that support confident decisions.</p>
            <p>His work brings together predictive modeling and modern AI systems—from reliable forecasting pipelines to retrieval-augmented research workflows—always with an eye on the people who need to act on the result.</p>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills"><SectionLabel>EXPERTISE</SectionLabel><h2>SKILLS</h2><div className="skill-list">{skills.map(([name, detail], i) => <motion.article key={name} initial={{opacity:0, y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}}><h3>{name}</h3><p>{detail}</p></motion.article>)}</div></section>

      <section className="work section" id="work"><SectionLabel>CAREER</SectionLabel><h2>WORK<br />EXPERIENCE</h2><div className="experience-list">
        <Experience role="Data Scientist" org="Capgemini" meta="USA  /  SEPTEMBER 2025 — PRESENT" body="Developing predictive analytics and applied AI solutions for industrial operations and analyst workflows." points={["Improved early industrial failure detection by 34%.", "Reduced forecasting error by 38% using XGBoost, LightGBM, Databricks, and MLflow.", "Integrated Vertex AI, Gemini, and vector search to reduce analyst research time by 42%."]} tags="Predictive Analytics · Forecasting · MLOps · Applied AI" />
        <Experience role="Junior Data Scientist" org="Persistent Systems" meta="INDIA  /  FEBRUARY 2021 — JULY 2023" body="Built credit-risk and fraud-detection analytical solutions across Python, SQL, AWS S3, PySpark, and Power BI." points={["Improved high-risk borrower recall by 38%.", "Reduced false-positive fraud alerts by 35%."]} tags="Credit Risk · Fraud Analytics · PySpark · Power BI" />
      </div></section>

      <section className="education section" id="education"><SectionLabel>BACKGROUND</SectionLabel><h2>EDUCATION</h2><div className="education-grid">
        <Education image="https://iiif.lib.ncsu.edu/iiif/4funk_1911_Bldg_in_July_2008-2/full/1000,/0/default.jpg" alt="Historic 1911 Building at North Carolina State University" location="NORTH CAROLINA STATE UNIVERSITY — RALEIGH, NC" degree="Master of Science in Computer Science" note="Graduate study focused on the analytical and computational foundations behind intelligent systems." date="GRADUATED JULY 2025" />
        <Education image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85" alt="University architecture" location="SRM INSTITUTE OF SCIENCE AND TECHNOLOGY — INDIA" degree="Bachelor of Technology in Computer Science and Engineering" note="A computer science foundation built through engineering study and practical problem solving." date="GRADUATED JULY 2022" />
      </div></section>

      <section className="projects section" id="projects"><SectionLabel>SELECTED WORK</SectionLabel><h2>FEATURED<br />PROJECTS</h2><div className="project-list">
        <Project number="01" title="AI-Powered Elephant Range Extension News Intelligence System" tools="PYTHON · BEAUTIFULSOUP · SELENIUM · GEMINI API" desc="AI-assisted news extraction and data structuring for ecological and wildlife movement research." />
        <Project number="02" title="Vendor Performance Analysis — Retail Inventory and Sales" tools="SQL · PYTHON · PANDAS · NUMPY" desc="Retail analysis focused on supplier profitability, purchasing concentration, and unsold inventory." />
        <Project number="03" title="NYC Taxi Fare Estimation and Tip Prediction" tools="PYTHON · RANDOM FOREST · REGRESSION · FEATURE ENGINEERING" desc="Predictive modeling using trip, temporal, and geographical data." />
      </div></section>

      <section className="expertise section" id="expertise"><SectionLabel>FOCUS AREAS</SectionLabel><h2>SELECTED<br />EXPERTISE</h2><div className="expertise-links">{["Predictive maintenance for industrial systems", "Credit risk modeling and fraud analytics", "Demand forecasting and time-series analysis", "Explainable AI and model interpretation", "Retrieval-augmented generation systems"].map((topic, index) => <div key={topic}><span>0{index + 1}</span><p>{topic}</p><ArrowUpRight /></div>)}</div></section>

      <footer className="contact section" id="contact"><SectionLabel>CONTACT</SectionLabel><h2>HAVE A COMPLEX DATA PROBLEM?<br /><em>LET&apos;S SOLVE IT.</em></h2><div className="contact-grid"><p>For collaborations, data science opportunities, or a conversation about intelligent systems.</p><div><a className="contact-link" href="mailto:sreehithyachamaneni@gmail.com">sreehithyachamaneni@gmail.com <ArrowUpRight /></a><a className="contact-link" href="https://www.linkedin.com/in/sreehith-yachamaneni/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div></div><div className="footer-line"><span>© 2026 SREEHITH YACHAMANENI — DATA SCIENCE &amp; APPLIED AI</span><span>USA</span></div></footer>
    </main>
  );
}

function Experience({ role, org, meta, body, points, tags }: { role:string; org:string; meta:string; body:string; points:string[]; tags:string }) { return <article className="experience"><div><h3>{role}</h3><p className="org">{org}</p></div><div><p className="meta">{meta}</p><p>{body}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><p className="tags">{tags}</p></div></article>; }
function Education({ image, alt, location, degree, note, date }: { image:string;alt:string;location:string;degree:string;note:string;date:string }) { return <article className="education-card"><Image src={image} alt={alt} width={1000} height={650} /><p className="meta">{location}</p><h3>{degree}</h3><p>{note}</p><p className="date">{date}</p></article>; }
function Project({ number, title, tools, desc }: {number:string;title:string;tools:string;desc:string}) { return <article className="project"><span>{number}</span><div><h3>{title}</h3><p className="meta">{tools}</p><p>{desc}</p></div><ArrowUpRight /></article>; }

