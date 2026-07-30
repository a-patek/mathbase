"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <section className="mb-scroll-demo overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-scroll-title">
            <span>THE MATH BASE WORKSPACE</span>
            <h2>Ideas become arguments.<br /><em>Arguments become proofs.</em></h2>
            <p>Move through a focused learning environment built for rigorous mathematical thinking.</p>
          </div>
        }
      >
        <div className="mb-scroll-image">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1800&q=85"
            alt="Mathematical formulas on a dark board"
            height={900}
            width={1600}
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
          <div className="mb-scroll-overlay"><span>PROOF MODE</span><strong>Reason clearly. Write completely.</strong><small>Lessons · Practice · Competition</small></div>
        </div>
      </ContainerScroll>
    </section>
  );
}
