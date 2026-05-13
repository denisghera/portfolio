import React from 'react';
import './WriteUps.css';

function WriteUps() {
  const writeups = [
    {
      id: 1,
      title: "HTB: Hospital",
      type: "Web & Pivoting",
      description: "Bypassing file upload filters to gain a foothold, exploiting a GhostScript vulnerability via malicious EPS files, and pivoting to a Windows backend.",
      tags: ["Linux", "GhostScript", "Windows", "XAMPP"]
    },
    {
      id: 2,
      title: "HTB: LogForge",
      type: "Web Application",
      description: "Exploiting the infamous Log4j (CVE-2021-44228) vulnerability within a Tomcat environment to achieve RCE, followed by Java-based privilege escalation.",
      tags: ["Linux", "Log4j", "Tomcat", "Java"]
    },
    {
      id: 3,
      title: "HTB: Pressed",
      type: "CMS Exploitation",
      description: "A practical dive into WordPress enumeration, leveraging vulnerable plugins for an initial shell, and escalating privileges via misconfigured system binaries.",
      tags: ["Linux", "WordPress", "PHP", "SUID"]
    },
    {
      id: 4,
      title: "HTB: Agile",
      type: "Source Code Analysis",
      description: "Chaining Local File Inclusion (LFI) in a Flask/Werkzeug application to extract console pins, and auditing a custom password manager for lateral movement.",
      tags: ["Linux", "Werkzeug", "Flask", "Python"]
    }
  ];

  return (
    <section id="writeups" className="writeups-container">
      <h2 className="section-title">Latest Write-ups</h2>
      <p className="section-subtitle">Methodology, CTF walkthroughs, and security research. In development...</p>

      <div className="writeups-grid">
        {writeups.map((item) => (
          <div key={item.id} className="writeup-card">
            <span className="writeup-type">{item.type}</span>
            <h3 className="writeup-title">{item.title}</h3>
            <p className="writeup-desc">{item.description}</p>
            <div className="writeup-tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WriteUps;