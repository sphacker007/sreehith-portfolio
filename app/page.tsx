"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = ["About", "Skills", "Work", "Education", "Projects", "Expertise"];
const skills = [
  ["Programming", "Python · SQL · R · Pandas · NumPy · SciPy"],
  ["Machine Learning", "Scikit-learn · XGBoost · LightGBM · Classification · Regression · Clustering"],
  ["Deep Learning & AI", "PyTorch · TensorFlow · NLP · LLMs · RAG · Embeddings · Vector Search"],
  ["GPU & NVIDIA AI", "RAPIDS cuDF · cuML · CUDA · Triton Inference Server · GPU Performance Analysis"],
  ["Data Engineering", "Apache Spark · PySpark · Databricks · Delta Lake · Snowflake · ETL/ELT"],
  ["MLOps", "MLflow · Docker · FastAPI · Git · CI/CD · Model Monitoring · Data Drift"],
  ["Cloud", "AWS S3 · Amazon SageMaker · Data Pipelines · Data Validation"],
  ["Visualization & Explainability", "Power BI · Tableau · Matplotlib · Seaborn · SHAP · Feature Importance"],
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
          <div className="socials"><a href="mailto:ysreehith@gmail.com" aria-label="Email Sreehith"><Mail /></a><a href="https://www.linkedin.com/in/sreehith-yachamaneni/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div>
        </header>
        {open && <div className="mobile-nav">{nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}</div>}
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: "easeOut" }}>
          <h1>SREEHITH<br />YACHAMANENI</h1>
          <p className="hero-title">Data Scientist <span>/</span> Machine Learning <span>/</span> AI Infrastructure</p>
          <p className="hero-intro">Building reliable machine learning systems from complex data.</p>
        </motion.div>
        <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={18} /></a>
      </section>

      <section className="about section" id="about">
        <div className="section-grid">
          <div><SectionLabel>ABOUT SREEHITH</SectionLabel><Image className="editorial-image" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85" alt="Laptop showing analytics work" width={900} height={1100} /></div>
          <div className="about-copy">
            <p className="location">USA / DATA &amp; APPLIED AI</p>
            <p>Data Scientist with 3 years of experience developing machine learning models, analyzing large datasets, and delivering data-driven insights across fintech analytics and AI infrastructure.</p>
            <blockquote>“THE MOST USEFUL MODELS MAKE A COMPLEX QUESTION FEEL CLEAR.”</blockquote>
            <div className="stat"><strong>03</strong><span>YEARS ACROSS<br />DATA SCIENCE</span></div>
            <p>His work spans fraud detection, credit-risk prediction, anomaly detection, feature engineering, model evaluation, and predictive analytics—supported by GPU-accelerated processing, model monitoring, and rigorous statistical analysis.</p>
            <p>From NVIDIA telemetry and demand forecasting to fintech risk analytics, Sreehith develops reliable machine learning solutions designed to improve analytical accuracy and support better business decisions.</p>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills"><SectionLabel>EXPERTISE</SectionLabel><h2>SKILLS</h2><div className="skill-list">{skills.map(([name, detail], i) => <motion.article key={name} initial={{opacity:0, y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}}><h3>{name}</h3><p>{detail}</p></motion.article>)}</div></section>

      <section className="work section" id="work"><SectionLabel>CAREER</SectionLabel><h2>WORK<br />EXPERIENCE</h2><div className="experience-list">
        <Experience role="Data Scientist" org="NVIDIA" meta="USA  /  SEPTEMBER 2025 — PRESENT" body="Developing GPU-accelerated machine learning, telemetry analytics, forecasting, anomaly detection, and AI infrastructure solutions." points={["Processed 2.4M telemetry records with Python, SQL, and NVIDIA cuDF, reducing feature-preparation runtime by 30% against a Pandas baseline.", "Trained XGBoost and PyTorch models using GPU utilization, latency, and frame-rate features, improving incident recall by 18% versus logistic regression.", "Built time-series forecasts with XGBoost and MLflow, lowering simulated regional GPU-demand forecast MAE by 15% across six evaluation windows.", "Developed a RAG assistant with NVIDIA NeMo Retriever, embeddings, vector search, and NeMo Evaluator, achieving 90% citation-grounded answers across 100 test questions.", "Deployed FastAPI scoring through NVIDIA Triton Inference Server while tracking latency, drift, and throughput with Prometheus and Grafana."]} tags="GPU ANALYTICS · FORECASTING · RAG · MLOPS · MODEL DEPLOYMENT" />
        <Experience role="Jr. Data Scientist" org="LatentView Analytics" meta="INDIA  /  FEBRUARY 2021 — JULY 2023" body="Built fraud detection and credit-risk analytics using Python, SQL, Pandas, PySpark, and explainable machine learning." points={["Analyzed 500K payment transactions across five merchant categories to support fraud investigations and transaction-risk analysis.", "Engineered 12 behavioral features and developed logistic regression and XGBoost models achieving 82% recall on a fraud test dataset.", "Integrated 300K loan records and trained logistic regression and LightGBM models achieving 0.78 ROC-AUC for loan-default risk assessment.", "Automated MLflow experiments and Great Expectations data-quality checks across eight experiments to improve reproducibility."]} tags="FRAUD ANALYTICS · CREDIT RISK · PYSPARK · SHAP · POWER BI" />
      </div></section>

      <section className="education section" id="education"><SectionLabel>BACKGROUND</SectionLabel><h2>EDUCATION</h2><div className="education-grid">
        <Education image="https://iiif.lib.ncsu.edu/iiif/4funk_1911_Bldg_in_July_2008-2/full/1000,/0/default.jpg" alt="Historic 1911 Building at North Carolina State University" location="NORTH CAROLINA STATE UNIVERSITY — RALEIGH, NC" degree="Master of Science in Computer Science" note="Graduate study focused on the analytical and computational foundations behind intelligent systems." date="GRADUATED JULY 2025" />
        <Education image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85" alt="University architecture" location="SRM INSTITUTE OF SCIENCE AND TECHNOLOGY — INDIA" degree="Bachelor of Technology in Computer Science and Engineering" note="A computer science foundation built through engineering study and practical problem solving." date="GRADUATED JULY 2022" />
      </div></section>

      <section className="projects section" id="projects"><SectionLabel>SELECTED WORK</SectionLabel><h2>FEATURED<br />PROJECTS</h2><div className="project-list">
        <Project number="01" title="AI-Powered Elephant Range Extension News Intelligence System" tools="PYTHON · REQUESTS · BEAUTIFULSOUP · SELENIUM · GEMINI API" desc="AI-assisted extraction pipeline that transforms semi-structured elephant-range news into research-ready datasets for ecological and wildlife-movement studies." href="https://github.com/ysreehith/Elephant-Web-Scraper" />
        <Project number="02" title="Vendor Performance Analysis — Retail Inventory and Sales" tools="SQL · PYTHON · PANDAS · NUMPY · HYPOTHESIS TESTING" desc="Retail pipeline and EDA identifying supplier profitability, purchasing concentration, and $2.71M in unsold inventory." href="https://github.com/ysreehith/vendor-performance-analysis-sql-python" />
        <Project number="03" title="NYC Taxi Fare Estimation and Tip Prediction" tools="PYTHON · RANDOM FOREST · REGRESSION · FEATURE ENGINEERING" desc="Regression and Random Forest models using trip, temporal, and geospatial features for taxi-fare and tip prediction." href="https://github.com/ysreehith/Taxi-Fare-Estimation-and-Tip-Prediction-for-NYC-Taxi-and-Limousine-Commission-using-Python" />
      </div></section>

      <section className="expertise section" id="expertise"><SectionLabel>FOCUS AREAS</SectionLabel><h2>SELECTED<br />EXPERTISE</h2><div className="expertise-links">{["GPU-accelerated telemetry analytics", "Fraud detection and credit risk modeling", "Demand forecasting and time-series analysis", "Explainable AI and model interpretation", "Retrieval-augmented generation systems"].map((topic, index) => <div key={topic}><span>0{index + 1}</span><p>{topic}</p></div>)}</div></section>

      <footer className="contact section" id="contact"><SectionLabel>CONTACT</SectionLabel><h2>HAVE A COMPLEX DATA PROBLEM?<br /><em>LET&apos;S SOLVE IT.</em></h2><div className="contact-grid"><p>For collaborations, data science opportunities, or a conversation about intelligent systems.</p><div><a className="contact-link" href="mailto:ysreehith@gmail.com"><span className="contact-label"><Mail />ysreehith@gmail.com</span><ArrowUpRight /></a><a className="contact-link" href="https://www.linkedin.com/in/sreehith-yachamaneni" target="_blank" rel="noreferrer"><span className="contact-label"><Linkedin />LinkedIn</span><ArrowUpRight /></a><a className="contact-link" href="https://github.com/ysreehith" target="_blank" rel="noreferrer"><span className="contact-label"><Github />GitHub</span><ArrowUpRight /></a></div></div><div className="footer-line"><span>© 2026 SREEHITH YACHAMANENI — DATA SCIENCE &amp; APPLIED AI</span><span>USA</span></div></footer>
    </main>
  );
}

function Experience({ role, org, meta, body, points, tags }: { role:string; org:string; meta:string; body:string; points:string[]; tags:string }) { return <article className="experience"><div><h3>{role}</h3><p className="org">{org}</p></div><div><p className="meta">{meta}</p><p>{body}</p><ul>{points.map(point => <li key={point}>{point}</li>)}</ul><p className="tags">{tags}</p></div></article>; }
function Education({ image, alt, location, degree, note, date }: { image:string;alt:string;location:string;degree:string;note:string;date:string }) { return <article className="education-card"><Image src={image} alt={alt} width={1000} height={650} /><p className="meta">{location}</p><h3>{degree}</h3><p>{note}</p><p className="date">{date}</p></article>; }
function Project({ number, title, tools, desc, href }: {number:string;title:string;tools:string;desc:string;href:string}) { return <article className="project"><span>{number}</span><div><h3>{title}</h3><p className="meta">{tools}</p><p>{desc}</p></div><a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title} on GitHub`}><ArrowUpRight /></a></article>; }

