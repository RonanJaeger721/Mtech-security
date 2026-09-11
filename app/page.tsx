"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

const services = [
  { n: "01", title: "Electric Fences", text: "Powerful perimeter protection that deters intruders and helps keep your property secure.", image: "/images/electric-fence.jpg", alt: "Secured electrical perimeter fence" },
  { n: "02", title: "CCTV Surveillance", text: "24/7 monitoring for real-time protection, visibility and greater peace of mind.", image: "/images/cctv.jpg", alt: "Outdoor CCTV surveillance cameras" },
  { n: "03", title: "Access Control", text: "Control who enters your property with smart, secure and reliable access systems.", image: "/images/access.jpg", alt: "Modern fingerprint access control system" },
  { n: "04", title: "Gate Automation", text: "Automated gate systems designed for greater convenience, safety and security.", image: "/images/gate.jpg", alt: "Modern automated entrance gate" },
  { n: "05", title: "Clear-View Fencing", text: "Strong, stylish and see-through perimeter fencing for a secure yet open environment.", image: "/images/clear-view.jpg", alt: "Strong open-mesh security fencing" },
  { n: "06", title: "Street Lighting", text: "Bright, energy-efficient street lighting designed to improve visibility and create safer roads and communities.", image: "/images/street-lights.jpg", alt: "Street lights illuminating a road at night" },
];

const values = [
  ["01", "Reliable Solutions", "Security systems designed around real-world protection."],
  ["02", "Modern Technology", "Smart security solutions using current technology."],
  ["03", "Tailored Systems", "Solutions configured around each property’s requirements."],
  ["04", "Professional Installation", "Clean, reliable installation with attention to detail."],
];

const process = [
  ["01", "Consultation", "We understand your security requirements."],
  ["02", "Site Assessment", "We evaluate the property and identify the right solution."],
  ["03", "Installation", "Your system is professionally installed and configured."],
  ["04", "Secure", "Your security solution is ready to protect your property."],
];

function Logo({ light = false }: { light?: boolean }) {
  return <span className={`brand-logo ${light ? "brand-logo--light" : ""}`}><Image src="/mtech-logo-transparent.png" alt="MTECH Security" width={1776} height={887} priority /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.14 });
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello MTECH Security, I would like to enquire about a security solution.%0A%0AName: ${encodeURIComponent(String(data.get("name")))}%0APhone: ${encodeURIComponent(String(data.get("phone")))}%0AEmail: ${encodeURIComponent(String(data.get("email")))}%0AService: ${encodeURIComponent(String(data.get("service")))}%0AMessage: ${encodeURIComponent(String(data.get("message")))}`;
    window.open(`https://wa.me/263786582207?text=${message}`, "_blank", "noopener,noreferrer");
  }

  const links = [["Home","home"],["About","about"],["Services","services"],["Why MTECH","why"],["Projects","projects"],["Contact","contact"]];
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <a href="#home" className="nav-brand" aria-label="MTECH Security home"><Logo light /></a>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <a className="btn btn--primary nav-quote" href="#contact">Get a quote <span aria-hidden="true">↗</span></a>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Toggle navigation"><span/><span/></button>
        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>{links.map(([label,id],i) => <a key={id} style={{"--i": i} as React.CSSProperties} onClick={() => setMenuOpen(false)} href={`#${id}`}>{label}<span>0{i+1}</span></a>)}<a onClick={() => setMenuOpen(false)} className="btn btn--primary" href="#contact">Get a quote</a></div>
      </header>

      <section id="home" className="hero">
        <Image src="/images/hero-cctv.jpg" alt="Modern building protected by professional CCTV surveillance" fill priority sizes="100vw" className="hero__image" />
        <div className="hero__veil"/><div className="hero__grid" aria-hidden="true"/><div className="hero__blade hero__blade--one" aria-hidden="true"/><div className="hero__blade hero__blade--two" aria-hidden="true"/>
        <div className="shell hero__content" id="main-content"><p className="eyebrow hero__eyebrow"><span/> Integrated security technology</p><h1><span>Safer Today.</span><strong>Secure Tomorrow.</strong></h1><p className="hero__copy">Modern security solutions designed to protect your home, business and community.</p><div className="hero__actions"><a className="btn btn--primary" href="#contact">Get a quote <span aria-hidden="true">↗</span></a><a className="btn btn--ghost" href="#services">Our services <span aria-hidden="true">↓</span></a></div></div>
        <div className="hero__signal glass"><span className="signal-dot"/><div><small>Direct response</small><a href="tel:+263786582207">+263 78 658 2207</a></div></div><a className="scroll-cue" href="#about"><span>Scroll to explore</span><i/></a>
      </section>

      <section id="about" className="about section-pad"><div className="shell about__layout"><div className="about__visual" data-reveal><Image src="/images/cctv.jpg" alt="Professional outdoor CCTV installation" fill sizes="(max-width: 800px) 100vw, 55vw"/><div className="about__index"><strong>M</strong><span>Protection / visibility / control</span></div></div><div className="about__panel glass light-glass" data-reveal><p className="eyebrow"><span/> About MTECH Security</p><h2>Security built<br/>around you.</h2><p>MTECH Security delivers modern security solutions designed to protect homes, businesses and communities. From intelligent surveillance to perimeter protection and automated access, we combine reliable technology with practical security solutions.</p><a className="text-link" href="#services">Explore our systems <span aria-hidden="true">→</span></a></div></div></section>

      <section id="services" className="services section-pad"><div className="shell services__intro" data-reveal><div><p className="eyebrow"><span/> What we do</p><h2>Complete security<br/>solutions.</h2></div><p>From perimeter protection to intelligent monitoring, MTECH Security provides solutions designed to give you greater control, visibility and peace of mind.</p></div><div className="service-list">{services.map((service, index) => <article key={service.title} className={`service-row ${index % 2 ? "service-row--reverse" : ""}`} data-reveal><div className="service-row__image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 800px) 100vw, 56vw"/><span className="service-row__number">{service.n}</span></div><div className="service-row__content"><span className="service-row__line"/><p className="eyebrow">System {service.n}</p><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" className="learn-link">Learn more <span aria-hidden="true">↗</span></a></div></article>)}</div></section>

      <section id="why" className="why section-pad"><div className="why__outline" aria-hidden="true">M</div><div className="shell"><p className="eyebrow" data-reveal><span/> Why MTECH</p><div className="why__heading" data-reveal><h2>Security without<br/>compromise.</h2><p>Purpose-built protection. Carefully installed. Ready for the real world.</p></div><div className="values">{values.map(([n,title,text]) => <article key={n} data-reveal><span>{n}</span><div className="value-mark" aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="statement"><Image src="/images/electric-fence.jpg" alt="Protected perimeter infrastructure" fill sizes="100vw"/><div className="statement__overlay"/><div className="shell statement__content" data-reveal><p className="eyebrow"><span/> Proactive protection</p><h2>Protection starts<br/>before the threat arrives.</h2><p>Strong security isn’t just about reacting. It’s about creating systems that deter, monitor and control before problems occur.</p><a href="#contact" className="btn btn--primary">Talk to MTECH <span aria-hidden="true">↗</span></a></div></section>

      <section id="projects" className="projects section-pad"><div className="shell"><div className="section-head" data-reveal><div><p className="eyebrow"><span/> Our work</p><h2>Built for real<br/>environments.</h2></div><p>Temporary imagery showing the installation categories we deliver. Ready to be replaced with MTECH project photography.</p></div><div className="project-grid">{services.slice(0,5).map((item,i)=><figure key={item.title} className={`project project--${i+1}`} data-reveal><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw"/><figcaption><span>{item.title.replace("Surveillance", "Installation")}</span><small>0{i+1} / MTECH SYSTEMS</small></figcaption></figure>)}</div></div></section>

      <section className="process section-pad"><div className="shell"><div className="process__head" data-reveal><p className="eyebrow"><span/> Our process</p><h2>From assessment<br/>to protection.</h2></div><div className="process__track">{process.map(([n,title,text])=><article key={n} data-reveal><span className="process__number">{n}</span><div className="process__node"/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="cta-section"><div className="cta-section__cut" aria-hidden="true"/><div className="shell cta-section__inner" data-reveal><p className="eyebrow"><span/> Your next move</p><h2>Ready to secure<br/>your property?</h2><p>Talk to MTECH Security about the right security solution for your home, business or project.</p><div className="cta-section__actions"><a className="btn btn--dark" href="#contact">Request a quote <span aria-hidden="true">↗</span></a><a className="cta-call" href="tel:+263786582207"><small>Call direct</small>+263 78 658 2207</a><a className="cta-call" href="https://wa.me/263786582207?text=Hello%20MTECH%20Security%2C%20I%20would%20like%20to%20enquire%20about%20a%20security%20solution." target="_blank" rel="noreferrer"><small>WhatsApp</small>Start a conversation</a></div></div></section>

      <section id="contact" className="contact section-pad"><div className="shell contact__layout"><div className="contact__copy" data-reveal><p className="eyebrow"><span/> Contact MTECH</p><h2>Let’s talk<br/>security.</h2><p>Tell us what you need to protect. Your enquiry will open securely in WhatsApp, ready to send to our team.</p><div className="contact__direct"><span>Call / WhatsApp</span><a href="tel:+263786582207">+263 78 658 2207</a></div></div><form className="contact-form glass" onSubmit={submitEnquiry} data-reveal><div className="field-grid"><label>Name<input name="name" type="text" autoComplete="name" required placeholder="Your full name"/></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required placeholder="e.g. +263 7..."/></label></div><div className="field-grid"><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>Service required<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Electric Fence</option><option>CCTV Surveillance</option><option>Access Control</option><option>Gate Automation</option><option>Clear View Fence</option><option>Street Lighting</option><option>Other</option></select></label></div><label>Message<textarea name="message" required rows={5} placeholder="Tell us about your property or security requirements"/></label><button className="btn btn--primary" type="submit">Send enquiry <span aria-hidden="true">↗</span></button><small className="form-note">Your message opens in WhatsApp for review before sending.</small></form></div></section>

      <footer><div className="shell footer__grid"><div><Logo light/><p>Safer Today, Secure Tomorrow.</p></div><div><h3>Navigate</h3>{links.filter(([,id])=>id!=="why").map(([l,id])=><a key={id} href={`#${id}`}>{l}</a>)}</div><div><h3>Services</h3>{services.map(s=><a key={s.title} href="#services">{s.title}</a>)}</div><div><h3>Contact</h3><a className="footer-phone" href="tel:+263786582207">+263 78 658 2207</a><a href="https://wa.me/263786582207?text=Hello%20MTECH%20Security%2C%20I%20would%20like%20to%20enquire%20about%20a%20security%20solution." target="_blank" rel="noreferrer">Open WhatsApp ↗</a></div></div><div className="shell footer__bottom"><span>© 2026 MTECH Security. All Rights Reserved.</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
