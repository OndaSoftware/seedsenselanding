import Image from "next/image";
import type { Metadata } from "next";
import type { IconType } from "react-icons";
import {
  FaBullseye,
  FaChartLine,
  FaEye,
  FaPlug,
  FaSeedling,
  FaShieldAlt,
} from "react-icons/fa";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Who We Are - SeedSense",
  description:
    "Learn more about who we are at SeedSense, our mission, and our commitment to revolutionizing seed trials.",
};

interface Pillar {
  icon: IconType;
  title: string;
  text: string;
  delay: 1 | 2 | 3;
}

const pillars: Pillar[] = [
  {
    icon: FaSeedling,
    title: "Practical Innovation",
    text: "We prioritize results over empty promises. Every feature is built to make a real impact in the field, not to tick a buzzword box.",
    delay: 1,
  },
  {
    icon: FaPlug,
    title: "Seamless Integration",
    text: "Our software fits into existing workflows without disruption—no rip-and-replace, no months of onboarding before you see value.",
    delay: 2,
  },
  {
    icon: FaChartLine,
    title: "Measurable Value",
    text: "We measure our success by the results our users achieve. If it doesn't deliver measurable value, we keep building.",
    delay: 3,
  },
  {
    icon: FaBullseye,
    title: "Precision-First",
    text: "Seed trials demand accuracy. We're driven by a commitment to precision in everything we build, from data entry to reporting.",
    delay: 1,
  },
  {
    icon: FaShieldAlt,
    title: "Integrity Always",
    text: "Every decision is guided by integrity and excellence. We earn trust through honest work and transparent relationships.",
    delay: 2,
  },
  {
    icon: FaEye,
    title: "Ignored Problems",
    text: "We solve what others overlook. The seed industry deserves the same technological attention as any other modern sector.",
    delay: 3,
  },
];

function SectionLabel({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`block text-[0.68rem] font-bold tracking-[0.22em] uppercase ${
        dark ? "text-accent" : "text-primary"
      }`}
    >
      {children}
    </span>
  );
}

function fadeUp(delaySeconds: number) {
  return { animationDelay: `${delaySeconds}s` } as const;
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-76px)] flex-col items-center justify-center overflow-hidden bg-cream px-6 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[40%] left-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(40,89,59,0.06)_0%,transparent_65%)]"
        />
        <div className="relative z-10 max-w-[860px] text-center">
          <div
            className="mb-9 inline-flex animate-fade-up items-center gap-3.5 text-[0.68rem] font-semibold tracking-[0.24em] text-primary uppercase opacity-0 before:inline-block before:h-px before:w-8 before:bg-primary/40 before:content-[''] after:inline-block after:h-px after:w-8 after:bg-primary/40 after:content-['']"
            style={fadeUp(0.25)}
          >
            Onda Software
          </div>
          <h1
            className="mb-9 animate-fade-up font-serif text-[clamp(3.8rem,9vw,7.5rem)] leading-[0.95] font-semibold tracking-[-0.025em] text-ink opacity-0"
            style={fadeUp(0.45)}
          >
            Who We Are
          </h1>
          <p
            className="mx-auto mb-14 max-w-[580px] animate-fade-up text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.75] font-light text-fern opacity-0"
            style={fadeUp(0.65)}
          >
            A practical software company focused on solving overlooked problems
            in established industries—starting with seed trials.
          </p>
          <div
            className="flex animate-fade-up flex-col items-center gap-2.5 opacity-0"
            style={fadeUp(1.1)}
          >
            <div className="h-12 w-px animate-pulse-bar bg-gradient-to-b from-primary/50 to-transparent" />
            <span className="text-[0.65rem] tracking-[0.18em] text-primary/45 uppercase">
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* Belief statement */}
      <section className="bg-white px-6 py-24 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-[920px]">
          <SectionLabel>Our Belief</SectionLabel>
          <p className="mt-8 font-serif text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.3] font-light text-forest">
            Established industries deserve modern tools. Our mission is to bring{" "}
            <strong className="font-semibold text-primary">
              efficiency, clarity, and real innovation
            </strong>{" "}
            to seed companies—starting with SeedSense, and building from there.
          </p>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-night px-6 py-24 sm:px-8 sm:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[120px] -bottom-[120px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(102,187,106,0.055)_0%,transparent_70%)]"
        />
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-10 md:grid-cols-[220px_1fr] md:gap-20">
          <Reveal className="md:sticky md:top-[120px]">
            <SectionLabel dark>Our Mission</SectionLabel>
            <div className="mt-4 h-px w-8 bg-accent/35" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="mb-9 font-serif text-[clamp(2.1rem,4.5vw,3.6rem)] leading-[1.15] font-semibold text-white">
                Making data simple and actionable for the seed industry.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mb-6 text-[1.1rem] leading-[1.85] text-white/55">
                We believe that for established industries to grow into the
                future, they must adopt technologies—both big and small. Our
                mission is to bring tools that drive efficiency, clarity, and
                innovation to seed companies.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-[1.1rem] leading-[1.85] text-white/55">
                Looking ahead, we aim to expand our platform beyond trials and
                research, delivering tools that support commercial
                decision-making and breeding technologies for a more
                competitive future.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="bg-surface px-6 py-24 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-18">
            <Reveal>
              <SectionLabel>What We Stand For</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-8 max-w-[540px] font-serif text-[clamp(2.1rem,4vw,3rem)] leading-[1.15] font-semibold text-forest">
                Built on principles that actually matter.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Reveal key={pillar.title} delay={pillar.delay} className="h-full">
                <div className="h-full rounded-[18px] border border-sage/28 bg-white p-10 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(40,89,59,0.11)]">
                  <div className="mb-6 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-mint">
                    <pillar.icon aria-hidden className="text-[1.1rem] text-primary" />
                  </div>
                  <h3 className="mb-3 font-serif text-[1.2rem] font-semibold text-forest">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.72] text-fern">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Onda Software */}
      <section className="bg-white px-6 py-24 sm:px-8 sm:py-36">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-28">
          <div>
            <Reveal>
              <SectionLabel>Meet Onda Software</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 mb-7 font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.18] font-semibold text-forest">
                Two founders. One overlooked industry. A lot of ambition.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mb-5 text-[1.05rem] leading-[1.82] text-[#5e6e60]">
                Onda Software is a private, independent company founded by two
                friends with backgrounds in agriculture and technology. We
                started because we kept hearing the same frustration from seed
                companies—critical trial data scattered across spreadsheets,
                emails, and notebooks with no single source of truth.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="text-[1.05rem] leading-[1.82] text-[#5e6e60]">
                Our team consists of engineers, designers, and industry experts
                dedicated to creating tools that genuinely make a difference.
                We&apos;re driven by a commitment to precision, efficiency, and
                addressing the challenges that traditional solutions have
                ignored for decades.
              </p>
            </Reveal>
          </div>
          <Reveal delay={2} className="-order-1 md:order-none">
            <div className="relative">
              <Image
                src="/images/pic02new.jpg"
                alt="Onda Software Team"
                width={612}
                height={408}
                className="w-full rounded-[22px] shadow-[0_40px_80px_rgba(8,15,10,0.2)]"
              />
              <div className="absolute bottom-[-1.25rem] left-4 rounded-2xl bg-night px-8 py-6 shadow-[0_20px_48px_rgba(8,15,10,0.3)] md:bottom-[-1.75rem] md:left-[-1.75rem]">
                <span className="block font-serif text-[2.8rem] leading-none font-semibold text-accent">
                  100%
                </span>
                <span className="mt-1.5 block text-[0.72rem] tracking-[0.12em] text-white/50 uppercase">
                  Industry Focused
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative overflow-hidden bg-night px-6 py-24 text-center sm:px-8 sm:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(102,187,106,0.065)_0%,transparent_68%)]"
        />
        <div className="relative z-10 mx-auto max-w-[760px]">
          <Reveal>
            <SectionLabel dark>Our Commitment</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-8 mb-8 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] font-semibold text-white">
              We measure success by the results you achieve.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mb-12 text-[1.1rem] leading-[1.82] text-white/50">
              Every feature and update we build is guided by our commitment to
              integrity and excellence. We&apos;re here to support the growth
              and transformation of the industries we serve—not just to ship
              software.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a
              href="#contact"
              className="inline-block rounded-full bg-primary px-11 py-4 text-base font-semibold text-white transition-all hover:-translate-y-[3px] hover:bg-primary-dark hover:shadow-[0_16px_40px_rgba(40,89,59,0.35)]"
            >
              Request a Demo
            </a>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
