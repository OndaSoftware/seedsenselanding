import type { Metadata } from "next";
import type { IconType } from "react-icons";
import {
  FaBolt,
  FaChartLine,
  FaDatabase,
  FaRocket,
  FaShareAlt,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why SeedSense? - SeedSense",
  description:
    "Explore how SeedSense benefits your team and improves trial management efficiency.",
};

interface Benefit {
  icon: IconType;
  title: string;
  text: string;
  items: string[];
}

const benefits: Benefit[] = [
  {
    icon: FaDatabase,
    title: "Centralized Trial Data",
    text: "Stop relying on disconnected tools like spreadsheets. All your trial data lives in one easy-to-access platform.",
    items: [
      "Eliminate errors from manual data entry",
      "Consistent, reliable data for every trial",
      "Free your team to focus on results",
    ],
  },
  {
    icon: FaTasks,
    title: "Streamlined Task Management",
    text: "Keep your team organized and give managers full visibility into the progress of every trial.",
    items: [
      "Assign and track tasks in real time",
      "Stay ahead with overdue alerts",
      "Clear activity log for accountability",
    ],
  },
  {
    icon: FaBolt,
    title: "Real-Time Data Access",
    text: "Make faster decisions by giving your team immediate access to trial data as soon as it's available.",
    items: [
      "Access from anywhere, any device",
      "Everyone sees the latest information",
      "Respond quickly to changes",
    ],
  },
  {
    icon: FaShareAlt,
    title: "Effortless Data Sharing",
    text: "Share trial results with farmers, suppliers, and stakeholders quickly and securely.",
    items: [
      "Export in formats tailored to your needs",
      "Set permissions to protect data privacy",
      "Better collaboration across teams",
    ],
  },
  {
    icon: FaChartLine,
    title: "Better Decision-Making",
    text: "Make smarter business decisions with insights generated from comprehensive trial data.",
    items: [
      "Identify trends with analytics tools",
      "Plan ahead with detailed reports",
      "Empower your team to act confidently",
    ],
  },
  {
    icon: FaRocket,
    title: "Improved Efficiency",
    text: "Reduce time spent on admin tasks and focus on what matters most — your trials and results.",
    items: [
      "Automate repetitive tasks",
      "Simplified, user-friendly workflows",
      "Boost productivity organization-wide",
    ],
  },
];

const featuredBenefit: Benefit = {
  icon: FaUsers,
  title: "Stronger Collaboration",
  text: "Ensure everyone is on the same page with synchronized data and intuitive communication tools.",
  items: [
    "Integrates with existing systems",
    "Real-time communication across teams",
    "Unified approach to achieving goals",
  ],
};

function BenefitIcon({ icon: Icon }: { icon: IconType }) {
  return (
    <div className="mb-6 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-primary/8">
      <Icon aria-hidden className="text-base text-primary" />
    </div>
  );
}

function BenefitList({ items, bordered }: { items: string[]; bordered?: boolean }) {
  return (
    <ul className={bordered ? "border-t border-sage/35 pt-4" : ""}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 py-[0.45rem] text-[0.875rem] text-moss before:inline-block before:h-[5px] before:w-[5px] before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BenefitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-cream px-6 pt-24 pb-16 text-center sm:min-h-[55vh] sm:px-8 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[35%] left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(40,89,59,0.07)_0%,transparent_65%)]"
        />
        <div className="relative z-10 max-w-[720px]">
          <div className="mb-8 inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.24em] text-primary uppercase before:inline-block before:h-px before:w-7 before:bg-primary/40 before:content-[''] after:inline-block after:h-px after:w-7 after:bg-primary/40 after:content-['']">
            Why SeedSense
          </div>
          <h1 className="mb-6 font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
            Built for the way
            <br />
            you work the field.
          </h1>
          <p className="mx-auto max-w-[520px] text-[clamp(1rem,2vw,1.18rem)] leading-[1.75] font-light text-fern">
            From centralized data to real-time collaboration, SeedSense gives
            your team every advantage — in the office and out in the field.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <div className="bg-white px-6 pb-32 sm:px-8">
        <div className="px-2 pt-24 pb-8 text-center">
          <span className="mb-4 block text-[0.68rem] font-bold tracking-[0.22em] text-primary uppercase">
            The Advantage
          </span>
          <h2 className="mb-4 font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-ink">
            Everything your trials need.
            <br />
            Nothing they don&apos;t.
          </h2>
          <p className="mx-auto max-w-[520px] text-[1.04rem] leading-[1.72] text-fern">
            Seven core capabilities that save time, reduce errors, and help
            your team make better decisions, faster.
          </p>
        </div>

        <Reveal>
          <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-sage/30 bg-sage/25 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white px-9 py-11 transition-colors hover:bg-[#f9fdf9]"
              >
                <BenefitIcon icon={benefit.icon} />
                <h3 className="mb-3 font-serif text-[1.22rem] font-semibold text-ink">
                  {benefit.title}
                </h3>
                <p className="mb-5 text-[0.95rem] leading-[1.72] text-fern">
                  {benefit.text}
                </p>
                <BenefitList items={benefit.items} bordered />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-px flex max-w-[1100px] flex-col items-start gap-10 rounded-[20px] border border-sage/30 bg-white px-9 py-11 transition-colors hover:bg-[#f9fdf9] md:flex-row">
            <BenefitIcon icon={featuredBenefit.icon} />
            <div className="grid flex-1 grid-cols-1 gap-x-12 md:grid-cols-2">
              <h3 className="mb-3 font-serif text-[1.22rem] font-semibold text-ink md:col-span-2">
                {featuredBenefit.title}
              </h3>
              <p className="text-[0.95rem] leading-[1.72] text-fern">
                {featuredBenefit.text}
              </p>
              <BenefitList items={featuredBenefit.items} />
            </div>
          </div>
        </Reveal>
      </div>

      <ContactCta />
    </>
  );
}
