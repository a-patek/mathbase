import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Collaborations & Media | MathBase",
  description: "MathBase collaborations, events, sponsors, and media coverage.",
};

export default function CollaborationsSponsorsPage() {
  return <main className="mb-collab-page">
    <header className="mb-collab-intro"><div><span>COLLABORATIONS & MEDIA</span><h1>Math grows through <em>community.</em></h1><p>Events, creative partnerships, sponsors, and stories that carry Math Base beyond the screen.</p></div><a className="mb-button-primary" href="https://www.instagram.com/math.base24/" target="_blank" rel="noreferrer">Follow on Instagram <span>↗</span></a></header>

    <section className="mb-collab-hero">
      <div><span>YALE MMATHS 2026</span><h2>Showing up for the mathematics—and the people around it.</h2><p>Math Base traveled to Yale MMATHS for a day centered on creative problem solving and mathematical community. The experience reflects what the project is built for: making serious mathematics feel social, welcoming, and worth sharing.</p><dl><div><dt>Yale</dt><dd>New Haven, CT</dd></div><div><dt>MMATHS</dt><dd>2026 competition</dd></div><div><dt>Math Base</dt><dd>In the community</dd></div></dl></div>
      <figure><Image src="/media/yale-mmaths-portrait.jpeg" alt="Two Math Base team members holding Yale MMATHS 2026 shirts" width={1170} height={1560} priority/><figcaption>Math Base at Yale MMATHS 2026</figcaption></figure>
    </section>

    <section className="mb-collab-section"><header><span>CREATIVE COLLABORATORS</span><h2>Tools that make mathematics visible.</h2></header><article className="mb-desmos-card"><div><Image src="/media/desmos.png" alt="Desmos" width={779} height={202}/></div><section><span>COLLABORATION</span><h3>Exploring mathematics with Desmos.</h3><p>Desmos brings mathematical ideas to life through dynamic graphs and interactive visual thinking—a natural fit for Math Base’s learning-first approach.</p></section><a href="https://www.desmos.com/" target="_blank" rel="noreferrer">Visit Desmos ↗</a></article></section>

    <section className="mb-community-collab"><figure><Image src="/img-4155.jpeg" alt="Math Base students outside Code Ninjas" width={1820} height={1180}/><figcaption>Math Base students outside Code Ninjas</figcaption></figure><div><span>COMMUNITY COLLABORATION</span><h2>Code Ninjas</h2><p>Code Ninjas has been one of the community spaces connected to Math Base’s student-led work—bringing together coding, mathematics, mentoring, and competition-focused collaboration.</p><small>LOCAL PARTNERSHIP · STUDENT COMMUNITY</small></div></section>

    <section className="mb-community-photo-grid">
      <figure className="is-wide"><Image src="/media/mathbase-bench.jpg" alt="Math Base students sharing a Math Base shirt" fill sizes="(max-width: 760px) 100vw, 60vw"/><figcaption>Growing the Math Base community</figcaption></figure>
      <figure><Image src="/media/mathbase-wall.jpg" alt="Two students wearing Math Base shirts" fill sizes="(max-width: 760px) 100vw, 30vw"/><figcaption>Student-built and student-led</figcaption></figure>
      <figure><Image src="/media/study-session.jpg" alt="Math Base students working together" fill sizes="(max-width: 760px) 100vw, 30vw"/><figcaption>Ideas taking shape together</figcaption></figure>
    </section>

    <section className="mb-collab-section"><header><span>PRESS & STORIES</span><h2>Math Base in the media.</h2></header><div className="mb-media-grid"><a href="https://www.tapinto.net/towns/hamilton-and-robbinsville/sections/education/articles/why-robbinsville-high-school-students-created-app-that-now-reaches-thousands" target="_blank" rel="noreferrer" className="mb-media-card mb-tapinto-card"><b>TAP<span>into</span></b><div><span>EDUCATION FEATURE</span><h3>Why Robbinsville High School students created an app that now reaches thousands</h3><p>Read the local story behind Math Base, its student founders, and the need that inspired the platform.</p><strong>Read the article ↗</strong></div></a><a href="https://www.instagram.com/p/De0HmgGAZ4p/" target="_blank" rel="noreferrer" className="mb-media-card mb-instagram-card"><Image src="/media/instagram.png" alt="" width={48} height={48}/><div><span>FEATURED POST</span><h3>Follow the story on Instagram.</h3><p>See the Math Base post and stay close to new events, milestones, and mathematics.</p><strong>View on Instagram ↗</strong></div></a></div></section>

    <section className="mb-collab-gallery"><figure><Image src="/media/yale-mmaths-landscape.jpeg" alt="Math Base team at Yale MMATHS 2026" width={1560} height={1170}/><figcaption>01 · Yale MMATHS 2026</figcaption></figure><div><Image src="/media/instagram.png" alt="" width={42} height={42}/><span>FOLLOW ALONG</span><h2>More mathematics, in motion.</h2><p>Events, challenges, behind-the-scenes work, and the people helping Math Base grow.</p><a className="mb-button-light" href="https://www.instagram.com/math.base24/" target="_blank" rel="noreferrer">Open Instagram <span>↗</span></a></div></section>
  </main>;
}
