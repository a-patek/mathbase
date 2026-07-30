import Image from "next/image";
import Link from "next/link";
import { HeroScrollDemo } from "@/components/ui/demo";

const proofLines = [
  ["Assumption", "Assume n is even."],
  ["Definition", "Then n = 2k for some integer k."],
  ["Algebra", "Squaring gives n² = 4k²."],
  ["Rewrite", "So n² = 2(2k²), which is even."],
  ["Conclusion", "Therefore n² is even."],
];

const learningCards = [
  { number: "01", symbol: "◇", title: "Learn proofs", body: "Start with the structure of a proof, then build toward logic, direct proofs, and deeper topics.", href: "/learn", meta: "Structured curriculum" },
  { number: "02", symbol: "✎", title: "Practice problems", body: "Work through problems that reward clean reasoning instead of memorized tricks.", href: "/practice", meta: "Proof feedback" },
  { number: "03", symbol: "♜", title: "Compete", body: "Join MathBase contests and apply for the travel competition team.", href: "/competition", meta: "Original problems" },
];

const branches = ["Number theory", "Combinatorics", "Graph theory", "Logic", "Algebra", "Geometry"];

export default function Home() {
  return <main className="mb-home">
    <section className="mb-home-hero">
      <div className="mb-home-intro">
        <div className="mb-kicker"><span/> Proof-based math learning</div>
        <h1>Learn to think in <em>proofs.</em></h1>
        <p>Move from mathematical intuition to rigorous reasoning through focused lessons, thoughtful practice, and competition opportunities.</p>
        <div className="mb-home-actions"><Link className="mb-button-primary" href="/learn">Start learning <span>→</span></Link><Link className="mb-button-secondary" href="/competition">View competitions <span>↗</span></Link></div>
        <div className="mb-principles"><div><strong>Proof-first</strong><small>curriculum</small></div><div><strong>Free</strong><small>resources</small></div><div><strong>Student-led</strong><small>team</small></div></div>
      </div>

      <div className="mb-proof-stage">
        <div className="mb-stage-grid"/>
        <article className="mb-proof-card">
          <header><div><span>PROOF PREVIEW</span><h2>A clean argument, line by line</h2></div><b>Direct proof</b></header>
          <div className="mb-proof-claim"><span>CLAIM</span><p>If <i>n</i> is even, then <i>n²</i> is even.</p></div>
          <ol>{proofLines.map(([label,line],index)=><li key={label}><span>{String(index+1).padStart(2,"0")}</span><p>{line}</p><small>{label}</small></li>)}</ol>
        </article>
        <div className="mb-proof-float"><span>✓</span><p><strong>Every step justified</strong><small>Complete argument</small></p></div>
      </div>
    </section>

    <HeroScrollDemo />

    <section className="mb-home-section">
      <header className="mb-section-head"><div><span>BUILD YOUR FOUNDATION</span><h2>Three ways to grow.</h2></div><p>Learn the language of proof, apply it deliberately, then test your ideas in competition.</p></header>
      <div className="mb-path-grid">{learningCards.map(card=><Link key={card.title} href={card.href} className="mb-path-card"><div className="mb-card-top"><span>{card.number}</span><i>{card.symbol}</i></div><h3>{card.title}</h3><p>{card.body}</p><div><small>{card.meta}</small><b>→</b></div></Link>)}</div>
    </section>

    <section className="mb-team-feature">
      <div className="mb-team-photo"><Image src="/img-4155.jpeg" alt="MathBase students outside a collaboration space" width={1820} height={1180}/><span>STUDENT-LED · PROOF-DRIVEN</span></div>
      <div className="mb-team-copy"><span>COMPETITION TEAM</span><h2>Train seriously.<br/><em>Compete together.</em></h2><p>MathBase is building a team for students who want to practice advanced problem solving and travel to college competitions.</p><Link className="mb-button-light" href="/competition-team">Apply to join <span>→</span></Link></div>
    </section>

    <section className="mb-home-section mb-subjects">
      <header className="mb-section-head"><div><span>EXPLORE THE CURRICULUM</span><h2>A foundation that branches into real problem solving.</h2></div><Link href="/learn">Browse all lessons →</Link></header>
      <div className="mb-branch-grid">{branches.map((branch,index)=><Link href="/learn" key={branch}><span>{["ℤ","◫","⌘","∀","∑","△"][index]}</span><strong>{branch}</strong><i>↗</i></Link>)}</div>
    </section>
  </main>;
}
