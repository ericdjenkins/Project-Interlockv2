import type { ReactNode } from "react";
import Link from "next/link";

const links = [["Home", "/"], ["Why", "/why"], ["About", "/about"], ["The Pathway", "/the-pathway"], ["FAQ", "/faq"], ["Get involved", "/get-involved"]];

export function PilotBanner() {
  return <aside className="pilotBanner" aria-label="Project status"><a href="/about#roadmap"><strong>Work in progress:</strong> Project Interlock is designing a Greater Boston pilot with a projected 2027 launch.<span>View the roadmap →</span></a></aside>;
}

export function SiteHeader() {
  return <><PilotBanner /><header className="siteHeader"><Link className="brand" href="/" aria-label="Project Interlock home"><img src="/assets/project-interlock-logo.png" alt="Project Interlock — Greater Boston Engineering and AI Pathways" /></Link><nav className="desktopNav" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav><a className="button buttonSmall buttonGold desktopCta" href="/get-involved#interest-form">Join the interest list <span aria-hidden="true">↗</span></a><details className="mobileMenu"><summary aria-label="Open navigation"><span /><span /><span /></summary><nav aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></details></header></>;
}

export function SiteFooter() {
  return <footer><div className="footerBrand"><img src="/assets/project-interlock-logo.png" alt="Project Interlock" /><p>Project Interlock is preparing a 2027 pilot in Greater Boston.</p><a className="footerEmail" href="mailto:ejenkins@projectinterlock.com">ejenkins@projectinterlock.com</a><small>Expected response time: 2–3 business days.</small></div><div className="footerLinks"><div><p>Explore</p><a href="/why">Why it matters</a><a href="/about">About</a><a href="/the-pathway">The Pathway</a><a href="/faq">FAQ</a><a href="/about#roadmap">Roadmap</a></div><div><p>Connect</p><a href="/get-involved#interest-form">Interest list</a><a href="/get-involved#partners">Partners</a></div></div><div className="footerBottom"><p>© 2026 Project Interlock. Greater Boston Engineering &amp; AI Pathways.</p><p className="privacyNote">Interest-form information is used only to respond and share Project Interlock updates. We do not sell personal information.</p><a href="#top">Back to top ↑</a></div></footer>;
}

export function InteriorPage({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children: ReactNode }) {
  return <main id="top"><SiteHeader /><section className="interiorHero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lead}</p></section>{children}<SiteFooter /></main>;
}
