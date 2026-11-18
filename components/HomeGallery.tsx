"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/media/yale-mmaths-landscape.jpeg",
    alt: "Math Base team members at Yale MMATHS 2026",
    eyebrow: "YALE MMATHS 2026",
    title: "Taking Math Base into the room.",
    copy: "A day of collaborative problem solving, competition, and mathematical community at Yale.",
    href: "/collaborations-sponsors",
    link: "See the event",
    fit: "cover",
  },
  {
    src: "/img-4155.jpeg",
    alt: "Math Base students outside Code Ninjas",
    eyebrow: "COMMUNITY COLLABORATION",
    title: "Built with community around us.",
    copy: "Code Ninjas is one of the spaces connecting Math Base with coding, mentoring, and student-led problem solving.",
    href: "/collaborations-sponsors",
    link: "Explore collaborations",
    fit: "cover",
  },
  {
    src: "/media/yale-mmaths-portrait.jpeg",
    alt: "Two Math Base team members holding Yale MMATHS shirts",
    eyebrow: "BEHIND THE PROJECT",
    title: "Proofs are serious. Learning can still be social.",
    copy: "The people, events, and shared experiences that keep the mathematics moving beyond the screen.",
    href: "/team",
    link: "Meet the team",
    fit: "cover",
  },
  {
    src: "/mbo-shirt.png",
    alt: "Math Base Venn diagram shirt",
    eyebrow: "MATH BASE IDENTITY",
    title: "Mathematics you can recognize.",
    copy: "A visual identity shaped by sets, overlap, curiosity, and the idea that every student can find a way into the problem.",
    href: "/collaborations-sponsors",
    link: "See our story",
    fit: "contain",
  },
];

export default function HomeGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6000,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () =>
    setActive((current) => (current + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="mb-home-gallery-section">
      <header className="mb-gallery-heading">
        <div>
          <span>MATH BASE IN MOTION</span>
          <h2>A look beyond the lessons.</h2>
        </div>
        <p>
          Events, collaborations, people, and small moments from the community
          growing around Math Base.
        </p>
      </header>

      <div
        className="mb-home-gallery"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Math Base highlights"
      >
        <div
          className={`mb-gallery-image ${slide.fit === "contain" ? "is-contained" : ""}`}
        >
          {slides.map((item, index) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 760px) 100vw, 65vw"
              loading="eager"
              unoptimized
              className={index === active ? "is-active" : ""}
            />
          ))}

          <div className="mb-gallery-count">
            <span>{String(active + 1).padStart(2, "0")}</span> /{" "}
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        <div className="mb-gallery-copy" aria-live="polite">
          <span>{slide.eyebrow}</span>
          <h3>{slide.title}</h3>
          <p>{slide.copy}</p>
          <Link href={slide.href}>
            {slide.link} <b>→</b>
          </Link>

          <div className="mb-gallery-controls">
            <button type="button" onClick={previous} aria-label="Previous slide">
              ←
            </button>
            <div role="tablist" aria-label="Choose a gallery slide">
              {slides.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  onClick={() => setActive(index)}
                >
                  <i className={index === active ? "is-active" : ""} />
                </button>
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Next slide">
              →
            </button>
          </div>
        </div>

        {!paused && (
          <div key={active} className="mb-gallery-progress" aria-hidden="true" />
        )}
      </div>
    </section>
  );
}
