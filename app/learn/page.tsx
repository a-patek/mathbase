import Image from "next/image";
import Link from "next/link";
import { lessons } from "@/data/lessons";

type LessonModule = {
  title: string;
  topic?: string;
  subsections?: { slug: string; title: string }[];
};

const rawEntries = Object.entries(lessons as unknown as Record<string, LessonModule>);
const isBranchSlug = (slug: string) => slug.startsWith("number-theory") || slug.startsWith("combinatorics") || slug.startsWith("graph-theory");
const coreModules = rawEntries.filter(([slug]) => !isBranchSlug(slug));
const branchModules = rawEntries.filter(([slug]) => isBranchSlug(slug));

const icons = [
  "/learn-icons/foundations.png", "/learn-icons/logic.png", "/learn-icons/operations.png",
  "/learn-icons/geometry.png", "/learn-icons/relations.png", "/learn-icons/graph.png",
  "/learn-icons/sets.png", "/learn-icons/equations.png", "/learn-icons/symmetry.png",
];

const moduleMeta: Record<string,{label?:string;blurb?:string;tag?:string}> = {
  "what-is-a-proof": {label:"Module 1",blurb:"What proofs are really doing, and how mathematicians think with them.",tag:"Start here"},
  logic: {label:"Module 2",blurb:"Propositions, implications, truth tables, and quantifiers."},
  "direct-proofs": {label:"Module 3",blurb:"Turn definitions into step-by-step arguments using direct proof."},
  counterexamples: {label:"Module 4",blurb:"Disprove false claims and build minimal counterexamples."},
  "contradiction-contrapositive": {label:"Module 5",blurb:"Use contrapositive and contradiction to prove tricky statements."},
  induction: {label:"Module 6",blurb:"Learn induction as a logical structure, not just a magic trick."},
  "sets-and-functions": {label:"Module 7",blurb:"A proof-oriented view of sets, functions, and mappings."},
  "number-theory": {tag:"Branch A",blurb:"Divisibility, modular arithmetic, primes, and Diophantine equations."},
  combinatorics: {tag:"Branch B",blurb:"Counting principles, invariants, and classic olympiad-style problems."},
  "graph-theory": {tag:"Branch C",blurb:"Vertices, edges, paths, cycles, and graph colorings."},
};

export default function LearnPage(){
  const lessonCount=rawEntries.reduce((sum,[,item])=>sum+(item.subsections?.length??0),0);
  return <main className="mb-learn-page">
    <section className="mb-learn-hero">
      <div className="mb-learn-hero-copy"><span>STRUCTURED PROOF CURRICULUM</span><h1>Learn mathematics by <em>building the argument.</em></h1><p>Move from the language of proof into the ideas that power olympiad problems, contest mathematics, and proof-based courses.</p><div><Link href="#core-track">Start the core track <b>→</b></Link><Link href="/practice">Try a problem <b>↗</b></Link></div></div>
      <div className="mb-learn-art" aria-hidden="true"><span className="mb-art-orbit"/><div>{icons.slice(2,6).map((src,index)=><span key={src} className={`mb-art-tile tile-${index+1}`}><Image src={src} alt="" width={120} height={120}/></span>)}</div><strong>IDEA</strong><i>→</i><strong>PROOF</strong></div>
    </section>

    <section className="mb-learn-body">
      <div className="mb-learn-roadmap"><div><span>YOUR ROADMAP</span><h2>{branchModules.length?"Core foundations. Three branches. One connected toolkit.":"Seven foundations. One connected proof toolkit."}</h2><p>{branchModules.length?"Move from proof language into number theory, combinatorics, and graph theory as your problem-solving range grows.":"Build the reasoning habits that carry from definitions and logic into contradiction, induction, sets, and functions."}</p></div><div className="mb-roadmap-stats"><span><strong>{rawEntries.length}</strong> modules</span><span><strong>{lessonCount}</strong> lessons</span>{branchModules.length>0&&<span><strong>{branchModules.length}</strong> branches</span>}</div><div className="mb-roadmap-line" aria-hidden="true">{[1,2,3,4,5].map(step=><i className={step<4?"is-reached":""} key={step}>{step}</i>)}</div></div>

      <section id="core-track" className="mb-track-section"><header><div><span>01 · BUILD THE FOUNDATION</span><h2>Core proof track</h2><p>Follow these modules in order. Each one adds a reusable reasoning habit.</p></div><small>{coreModules.length} MODULES</small></header><div className="mb-core-grid">{coreModules.map(([slug,data],index)=>{const meta=moduleMeta[slug]??{};return <Link key={slug} href={`/learn/${slug}`} className="mb-module-card"><div className={`mb-module-visual visual-${(index%4)+1}`}><Image src={icons[index%icons.length]} alt="" width={150} height={150}/><span>{String(index+1).padStart(2,"0")}</span></div><div className="mb-module-copy"><p>{meta.label??`Module ${index+1}`}{meta.tag&&<b>{meta.tag}</b>}</p><h3>{data.title}</h3><span>{meta.blurb??"Explore concepts and proof techniques in this topic."}</span><footer><small>{data.subsections?.length??0} lessons</small><strong>Open module →</strong></footer></div></Link>})}</div></section>

      <section className="mb-method-break"><div><Image src="/learn-icons/equations.png" alt="Illustrated notebook with mathematical equations" width={230} height={230} loading="eager"/></div><section><span>THE MATH BASE METHOD</span><h2>Read it. Try it. Explain it.</h2><p>Each lesson pairs mathematical reading with notebook work and a chance to refine your explanation. The goal is not to recognize a method—it is to make the reasoning yours.</p><ul><li><b>01</b> Understand the idea</li><li><b>02</b> Build the proof</li><li><b>03</b> Explain the key step</li></ul></section></section>

      {branchModules.length>0&&<section className="mb-track-section mb-branch-section"><header><div><span>02 · CHOOSE A DIRECTION</span><h2>Branches of mathematics</h2><p>Once the core feels familiar, follow the questions that interest you most.</p></div><small>{branchModules.length} BRANCHES</small></header><div className="mb-branch-learning-grid">{branchModules.map(([slug,data],index)=>{const meta=moduleMeta[slug]??{};const icon=icons[6+index];return <Link key={slug} href={`/learn/${slug}`} className={`mb-branch-learning-card branch-${index+1}`}><Image src={icon} alt="" width={130} height={130}/><span>{meta.tag??"Branch"}</span><h3>{data.title}</h3><p>{meta.blurb??"Build proof-based fluency in this branch."}</p><footer><small>{data.subsections?.length??0} lessons</small><strong>Explore →</strong></footer></Link>})}</div></section>}

      <section className="mb-learn-cta"><Image src="/learn-icons/symmetry.png" alt="Illustration of symmetric curves" width={150} height={150} loading="eager"/><div><span>READY TO APPLY IT?</span><h2>A proof becomes useful when you can build it yourself.</h2><p>Take an idea from the curriculum into a focused practice problem.</p></div><Link href="/practice">Open practice <b>→</b></Link></section>
    </section>
  </main>;
}
