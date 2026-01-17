import { useEffect, useRef, useState } from "react";
import "./App.css";
import portrait from "./assets/notionface.png"
import linkedin from "./assets/linkedin.png"
import email from "./assets/email.png"

function useIsVisible(ref, threshold = 0.5) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}

export default function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const aboutVisible = useIsVisible(aboutRef);
  const skillsVisible = useIsVisible(skillsRef);
  const projectsVisible = useIsVisible(projectsRef);

  const PROJECTS = [
    
    {
      title: "Wildfire Smoke Detection (Ongoing: Paper in Progress)",
      description:
        "End-to-end computer vision pipeline for early-stage wildfire smoke detection using YOLO-based object detectors and spatial tiling for small-object localization.",
      tags: ["Python", "YOLO", "Computer Vision", "Research"],
      // link: "https://github.com/your-link-here",
      // icon: "🔥",
    },
    {
      title: "MediTrack (HackMIT 2025)",
      description:
        "Hospital inventory management dashboard built at HackMIT 2025 to track medical supplies, forecast demand, and reduce shortages.",
      tags: ["React", "Python", "Machine Learning", ],
      // link: "https://github.com/your-link-here",
      // icon: "🏥",
    },
    {
      title: "Nurgent (Congressional App Challenge Winner)",
      description:
        "NYC public restroom locator app built with Flutter (cross-platform), backed by Firebase, and integrated with the Google Maps API for real-time location search.",
      tags: ["Flutter", "Firebase", "App Development", "Google Maps API"],
      link: "https://www.congressionalappchallenge.us/23-ny06/",
      // icon: "📍",
    },
    {
      title: "Detecting Textual Influence in Social Media (Regeneron STS Scholar)",
      description:
        "Applied machine learning to Reddit text to discover the specific features that make posts more influential in shaping engagement and public discourse.",
      tags: ["Python", "Machine Learning", "Research", "Web Scraping"],
      link: "https://mazziotti.uchicago.edu/emc2/years/2024/wu_r/",
      // icon: "📱",
    },
  ];
  

  return (
    <>
      <nav className="navbar">
        <div className="navInner">
          <a href="#about" className="brandName">
            RACHEL WU
          </a>

          <div className="navLinks">
            <a
              href="#projects"
              className="navLink"
              style={{ borderBottom: skillsVisible ? "2px solid #000" : "2px solid transparent" }}
            >
              projects
            </a>
            {/* <a
              href="#skills"
              className="navLink"
              style={{ borderBottom: projectsVisible ? "2px solid #000" : "2px solid transparent" }}
            >
              skills
            </a> */}
          </div>
        </div>
      </nav>

      <main className="snapContainer">
      <section ref={aboutRef} id="about" className="snapSection">
  <div className="aboutGrid">
    {/* LEFT: image */}
    <div className="aboutImage">
      <img
        src= {portrait}
        alt="Rachel Wu"
      />
    </div>

    {/* RIGHT: centered text */}
    <div className="aboutText">
      <div className="textInner">
        <h1 className="brandName">HI, I'M RACHEL!</h1>
        <p>
          I'm currently a sophomore at MIT studying Computer Science, passionate
          about applying CS and machine learning to solve real-world problems.
          When I'm not doing schoolwork or working on projects, you'll probably
          find me hopping between new restaurants and cafes (all ranked on Beli!),
          sketching, or stopping mid-scroll to admire french bulldogs on my phone.
        </p>
        <div className = "contact">
          <a href="mailto:rachelwu@mit.edu">
        <img src= {email}/>
      </a>
      <a
        href="https://www.linkedin.com/in/rachel-marie-wu"
      >
        <img src = {linkedin}/>
      </a></div>
      </div>
    </div>
  </div>
</section>

        {/* <section ref={aboutRef} id="about" className="snapSection">
          <div className="sectionInner">
            <h1 className = 'brandName'>RACHEL WU</h1>
            <p>I'm currently a sophomore at MIT studying Computer Science, passionate about applying CS and machine learning to solve real-world problems. When I'm not doing schoolwork or working on projects, you'll probably find me hopping between new resaturants and cafes (all ranked on Beli), sketching, or stopping mid-scroll to admire french bulldogs on my phone. I'm always curious and a </p>
          </div>
        </section> */}

<section ref={projectsRef} id="projects" className="snapSection">
  <div className="sectionInner">
    <div className="projectsHeader">
      <h1 className="projectsTitle">Projects</h1>
      {/* <p className="projectsSubtitle">Click on any project to learn more</p> */}
    </div>

    <div className="projectsGrid">
      {PROJECTS.map((p) => (
        <a
          key={p.title}
          className="projectCard"
          href={p.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="projectIcon">{p.icon}</div>
          <h2 className="projectName">{p.title}</h2>
          <p className="projectDesc">{p.description}</p>

          <div className="projectTags">
            {p.tags.map((t) => (
              <span key={t} className="tagPill">
                {t}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

        {/* <section ref={projectsRef} id="projects" className="snapSection">
          <div className="sectionInner">
            <h1>Projects</h1>
          </div>
        </section> */}
        {/* <section ref={skillsRef} id="skills" className="snapSection">
          <div className="sectionInner">
            <h1 className="projectsTitle">Skills</h1>
          </div>
        </section> */}

        
      </main>
    </>
  );
}
