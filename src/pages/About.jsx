import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Lightbulb,
  Users,
  HeartHandshake,
  Repeat,
  ShieldCheck,
  Compass,
  BookOpen,
  Hammer,
  Share2,
} from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import CtaBand from "../components/CtaBand.jsx";
import CampusCollage from "../components/CampusCollage.jsx";
import { site } from "../data/siteConfig.js";
const story =
  "A university developer community gives students a space to explore technology, learn from peers, experiment with practical ideas, collaborate on projects and share what they know. GDG on Campus Poornima University is part of that tradition in Jaipur. It can be a starting point for a first line of code, a new technical interest, a collaborative project, or a conversation that changes how you approach a problem.";
const mv = {
  Mission: {
    c: "#4285F4",
    t: "Create an environment where students can learn, experiment, collaborate and develop practical technology skills.",
    k: ["Learn", "Experiment", "Collaborate", "Build"],
  },
  Vision: {
    c: "#F9AB00",
    t: "Encourage a culture of innovation, open learning and community-driven problem-solving.",
    k: ["Innovate", "Open learning", "Solve together"],
  },
};
const values = [
  [
    Lightbulb,
    "Curiosity",
    "Ask the odd question first. Every project starts with one.",
    "#FBBC05",
  ],
  [
    Users,
    "Collaboration",
    "Better work comes from more than one head.",
    "#4285F4",
  ],
  [
    HeartHandshake,
    "Inclusion",
    "Every skill level has a place to start.",
    "#EA4335",
  ],
  [
    Repeat,
    "Continuous learning",
    "Nobody ever finishes learning technology.",
    "#34A853",
  ],
  [
    ShieldCheck,
    "Responsible innovation",
    "Build things that are useful and considerate.",
    "#4285F4",
  ],
];
const steps = [
  [
    "Discover",
    "#4285F4",
    Compass,
    "Find a topic, tool or problem that sparks interest.",
  ],
  [
    "    Learn",
    "#EA4335",
    BookOpen,
    "Work through it with peers, docs and demos.",
  ],
  [
    "Build",
    "#F9AB00",
    Hammer,
    "Turn what you learned into something that runs.",
  ],
  [
    "Share",
    "#34A853",
    Share2,
    "Show it, explain it, and help the next person start.",
  ],
];
function Word({ w, i, n, p }) {
  const o = useTransform(p, [i / n, (i + 1) / n], [0.16, 1]);
  return (
    <motion.span style={{ opacity: o }} className="mr-[.26em] inline-block">
      {w}
    </motion.span>
  );
}
function ScrollWords({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const ws = text.split(" ");
  const cls =
    "font-display text-[clamp(1.4rem,3vw,2.3rem)] font-bold leading-[1.3] tracking-tight";
  return reduce ? (
    <p className={cls}>{text}</p>
  ) : (
    <p ref={ref} className={cls}>
      {ws.map((w, i) => (
        <Word key={i} w={w} i={i} n={ws.length} p={scrollYProgress} />
      ))}
    </p>
  );
}
function MissionVision() {
  const [k, setK] = useState("Mission");
  const d = mv[k];
  return (
    <div className="card !p-6 sm:!p-10">
      <div
        role="tablist"
        aria-label="Mission and vision"
        className="relative inline-flex rounded-full bg-[#F1F3F4] p-1"
      >
        {Object.keys(mv).map((n) => (
          <button
            key={n}
            role="tab"
            aria-selected={k === n}
            onClick={() => setK(n)}
            className="relative rounded-full px-6 py-2 text-sm font-semibold"
          >
            {k === n && (
              <motion.span
                layoutId="mv-pill"
                className="absolute inset-0 rounded-full bg-white shadow"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{n}</span>
          </button>
        ))}
      </div>
      <div className="relative mt-8 min-h-[250px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={k}
            role="tabpanel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <p
              className="display text-[clamp(1.6rem,3.6vw,2.8rem)] !leading-[1.15]"
              style={{ color: d.c }}
            >
              {d.t}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {d.k.map((x, i) => (
                <motion.li
                  key={x}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="rounded-full border px-4 py-1.5 text-sm font-semibold"
                  style={{ borderColor: d.c, color: d.c }}
                >
                  {x}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            strokeWidth="14"
            animate={{ stroke: d.c, opacity: 0.14 }}
            transition={{ duration: 0.6 }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="46"
            fill="none"
            strokeWidth="14"
            animate={{ stroke: d.c, opacity: 0.1 }}
          />
        </svg>
      </div>
      <p className="mt-4 text-xs text-mute">
        Proposed website copy, pending an official mission statement.
      </p>
    </div>
  );
}
function Values() {
  const [a, setA] = useState(0);
  return (
    <div className="flex flex-col gap-3 lg:h-[400px] lg:flex-row">
      {values.map(([I, t, d, c], i) => {
        const on = a === i;
        return (
          <motion.button
            layout
            key={t}
            onClick={() => setA(i)}
            onMouseEnter={() => setA(i)}
            onFocus={() => setA(i)}
            aria-expanded={on}
            style={{
              flex: on ? 3.2 : 1,
              background: on ? `${c}1f` : "rgba(255,255,255,.9)",
              borderColor: on ? c : "rgba(0,0,0,.1)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="relative flex min-w-0 flex-col overflow-hidden rounded-3xl border p-6 text-left lg:justify-between"
          >
            <motion.span
              layout="position"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-sm"
              style={{ color: c }}
            >
              <I size={24} aria-hidden />
            </motion.span>
            <motion.div layout="position" className="mt-4 min-w-0">
              <h3
                className={`display text-xl sm:text-2xl ${on ? "" : "lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-lg"}`}
              >
                {t}
              </h3>
              <AnimatePresence>
                {on && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 max-w-sm overflow-hidden text-mute"
                  >
                    {d}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );
}
function Approach() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 70%"],
  });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      <div
        aria-hidden
        className="absolute left-5 top-0 h-full w-0.5 bg-black/10 md:left-1/2 md:-translate-x-1/2"
      />
      <motion.div
        aria-hidden
        style={{ height: h }}
        className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-gblue via-gred to-ggreen md:left-1/2 md:-translate-x-1/2"
      />
      {steps.map(([s, c, I, d], i) => (
        <Reveal
          key={s}
          className={`relative pb-14 pl-14 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-14 md:text-left" : "md:pl-0 md:pr-14 md:text-right"}`}
        >
          <span
           className={`absolute top-1 z-10 grid h-10 w-10 place-items-center rounded-full border-2 bg-white ${i % 2 ? "left-[-3.5rem] md:left-[-1.25rem]" : "left-0 md:left-auto md:-right-5"}`}
            style={{ borderColor: c, color: c }}
          >
            <I size={18} aria-hidden />
          </span>
          <p className="display text-3xl sm:text-4xl" style={{ color: c }}>
            {s}
          </p>
          <p className="mt-2 text-mute">{d}</p>
        </Reveal>
      ))}
    </div>
  );
}
export default function About() {
  return (
    <PageTransition title="About">
      <PageHero
        title="Curiosity creates possibilities."
        text="Who we are, what we believe, and how we learn together."
      />
      <section className="section">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-gblue">
              Our story
            </p>
            <ScrollWords text={story} />
          </div>
          <div className="lg:sticky lg:top-28">
            <CampusCollage />
          </div>
        </div>
      </section>
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHeading
            title="Why we exist"
            text="Tap between the two to see how we put it."
          />
          <Reveal>
            <MissionVision />
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="What we value"
            text="Hover, tap or focus a value to open it."
          />
          <Values />
        </div>
      </section>
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHeading
            title="Our approach"
            text="Scroll to follow the path from first spark to shared work."
          />
          <Approach />
        </div>
      </section>
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <CampusCollage />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display h-sec">Rooted at Poornima University</h2>
            <p className="mt-5 text-lg leading-relaxed text-mute">
              The chapter is based at {site.chapter}, {site.city}. The
              university community is the setting where students explore
              interests beyond the classroom, connect with peers, and practise
              turning concepts into useful work.
            </p>
            <p className="mt-4 text-mute">
              For verified information about the university, visit its official
              website. For chapter announcements, use the official GDG community
              page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={site.universityUrl} variant="secondary">
                Visit poornima.edu.in
              </Button>
              <Button to="/events" variant="text">
                See events
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </PageTransition>
  );
}
