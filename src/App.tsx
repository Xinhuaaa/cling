import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  Command,
  Compass,
  Flame,
  Layers,
  Menu,
  Palette,
  PanelLeft,
  PanelRight,
  Plus,
  Search,
  Settings,
  Sparkles
} from 'lucide-react';

const navLinks = [
  { label: 'Overview', icon: Compass },
  { label: 'Workspace', icon: Layers },
  { label: 'Flow Studio', icon: Sparkles },
  { label: 'Metrics', icon: BarChart3 }
];

const menuSections = [
  {
    title: 'Collections',
    items: [
      { label: 'Launch Readiness', count: 12 },
      { label: 'Growth Experiments', count: 8 },
      { label: 'Design QA', count: 5 }
    ]
  },
  {
    title: 'Shortcuts',
    items: [
      { label: 'Recent briefs' },
      { label: 'Shared with me' },
      { label: 'Archive' }
    ]
  }
];

const toggles = [
  { label: 'Guided mode', description: 'Interactive walkthroughs & hints' },
  { label: 'Adaptive theme', description: 'Matches system preference automatically' },
  { label: 'Motion depth', description: 'Enable layered parallax transitions' }
];

export default function App() {
  const [activeLink, setActiveLink] = useState('Overview');
  const [activeSettings, setActiveSettings] = useState<string[]>(['Guided mode', 'Adaptive theme']);

  const handleToggle = (label: string) => {
    setActiveSettings(current =>
      current.includes(label)
        ? current.filter(item => item !== label)
        : [...current, label]
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top navigation bar */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-white/5"
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-6">
          <button className="inline-flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-foreground hover:border-white/20 transition">
            <Menu className="size-5" />
          </button>
          <div className="flex items-center gap-3">
            <motion.div
              className="size-10 rounded-full bg-gradient-to-br from-accent/80 to-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Cling OS</p>
              <p className="text-lg font-semibold text-foreground">Creative Command Center</p>
            </div>
          </div>
          <nav className="flex-1 flex items-center gap-1 justify-center">
            {navLinks.map(({ label, icon: Icon }) => (
              <motion.button
                key={label}
                onClick={() => setActiveLink(label)}
                whileHover={{ y: -2 }}
                className={`group px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition ${
                  activeLink === label
                    ? 'bg-white/10 text-foreground shadow-soft'
                    : 'text-white/60 hover:text-foreground hover:bg-white/5'
                }`}
              >
                <Icon className="size-4" />
                {label}
              </motion.button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
              <input
                placeholder="Search primitives"
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
            </div>
            <button className="size-10 inline-flex items-center justify-center rounded-full bg-accent/20 text-accent hover:bg-accent/30 transition">
              <Bell className="size-4" />
            </button>
            <button className="size-10 inline-flex items-center justify-center rounded-full bg-white/10 text-foreground hover:bg-white/20 transition">
              <Command className="size-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main body layout */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)_260px]">
          {/* Left menu */}
          <motion.aside
            initial={{ x: -24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="hidden lg:flex flex-col gap-6"
          >
            <section className="rounded-3xl border border-white/5 bg-white/5/50 backdrop-blur-xl p-6 space-y-6">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span className="inline-flex items-center gap-2 font-medium text-white">
                  <PanelLeft className="size-4" />
                  Navigator
                </span>
                <button className="inline-flex items-center gap-1 text-white/50 hover:text-foreground transition text-xs">
                  <Plus className="size-3" />
                  New
                </button>
              </div>
              {menuSections.map(section => (
                <div key={section.title} className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{section.title}</p>
                  <div className="space-y-2">
                    {section.items.map(item => (
                      <motion.button
                        key={item.label}
                        whileHover={{ x: 4 }}
                        className="w-full flex items-center justify-between rounded-xl border border-white/5 bg-white/0 px-4 py-3 text-sm text-white/70 hover:text-foreground hover:border-white/20 hover:bg-white/5 transition"
                      >
                        {item.label}
                        {item.count && (
                          <span className="text-xs font-semibold text-accent/80">{item.count}</span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  <Flame className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Momentum</p>
                  <p className="text-xs text-white/50">4 active initiatives</p>
                </div>
              </div>
              <div className="space-y-2 text-xs text-white/60">
                <p className="flex items-center gap-2">
                  <Check className="size-3 text-accent" />
                  Team alignment session scheduled
                </p>
                <p className="flex items-center gap-2">
                  <Check className="size-3 text-accent" />
                  Design QA handoff ready
                </p>
              </div>
            </section>
          </motion.aside>

          {/* Content area */}
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="rounded-[2.5rem] border border-white/5 bg-white/5/60 backdrop-blur-xl px-10 py-12 shadow-soft"
            >
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex-1 min-w-[240px] space-y-4">
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                    <Sparkles className="size-3" /> New release
                  </p>
                  <h1 className="text-4xl font-semibold leading-tight text-foreground">
                    Compose adaptive journeys with <span className="text-accent">Cling Flow</span>
                  </h1>
                  <p className="text-sm text-white/60 max-w-xl">
                    Orchestrate storytelling canvases, synthesize creative intelligence, and deploy branded
                    experiences with a single, minimal surface. Built for design teams who love clarity.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold"
                    >
                      Launch Flow
                      <ArrowUpRight className="size-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 hover:text-foreground hover:border-white/30"
                    >
                      Explore playbook
                      <ChevronRight className="size-4" />
                    </motion.button>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                  className="relative flex-1 min-w-[260px]"
                >
                  <div className="absolute -top-6 -right-6 size-20 rounded-full bg-accent/30 blur-3xl" />
                  <div className="rounded-3xl border border-white/10 bg-background/60 p-6 shadow-soft space-y-4">
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span className="inline-flex items-center gap-2 text-white">
                        <Layers className="size-4" /> Flow canvas
                      </span>
                      <span>v2.8</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs text-white/60">
                      {['Persona map', 'Narrative arc', 'Asset curation', 'Signal sync'].map(item => (
                        <div key={item} className="rounded-2xl border border-white/5 bg-white/5 p-3">
                          <p className="font-medium text-white/90">{item}</p>
                          <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40">Active</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="grid gap-6 md:grid-cols-2"
            >
              {[
                {
                  icon: PanelRight,
                  title: 'Pattern Library',
                  description: 'Curated interface primitives mapped to flow states and brand energy.'
                },
                {
                  icon: Palette,
                  title: 'Styling System',
                  description: 'Design tokens with responsive palettes, motion curves, and depth ramping.'
                },
                {
                  icon: Flame,
                  title: 'Momentum Labs',
                  description: 'Experiment hub to test hypotheses, share insights, and align next actions.'
                },
                {
                  icon: Compass,
                  title: 'Narrative Maps',
                  description: 'Define key beats, emotional peaks, and success metrics in one view.'
                }
              ].map(({ icon: Icon, title, description }) => (
                <motion.article
                  key={title}
                  whileHover={{ translateY: -4 }}
                  className="rounded-3xl border border-white/5 bg-white/5/40 backdrop-blur-xl p-6 space-y-4"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-white/60">{description}</p>
                </motion.article>
              ))}
            </motion.div>
          </section>

          {/* Settings panel */}
          <motion.aside
            initial={{ x: 24, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
            className="hidden lg:flex flex-col gap-6"
          >
            <section className="rounded-3xl border border-white/5 bg-white/5/50 backdrop-blur-xl p-6 space-y-6">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span className="inline-flex items-center gap-2 font-medium text-white">
                  <PanelRight className="size-4" />
                  Settings
                </span>
                <button className="inline-flex items-center gap-1 text-white/50 hover:text-foreground transition text-xs">
                  <Settings className="size-3" />
                  Customize
                </button>
              </div>
              <div className="space-y-4">
                {toggles.map(toggle => {
                  const enabled = activeSettings.includes(toggle.label);
                  return (
                    <button
                      key={toggle.label}
                      onClick={() => handleToggle(toggle.label)}
                      className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                        enabled
                          ? 'border-accent/50 bg-accent/10 text-foreground'
                          : 'border-white/5 bg-white/0 text-white/60 hover:border-white/20 hover:text-foreground'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{toggle.label}</p>
                        <div
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                            enabled ? 'bg-accent/60' : 'bg-white/10'
                          }`}
                        >
                          <motion.span
                            layout
                            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                            className={`size-5 rounded-full bg-background shadow-sm ${
                              enabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-white/50">{toggle.description}</p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-white/5 bg-gradient-to-br from-accent/20 via-transparent to-transparent p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-accent/30 text-accent flex items-center justify-center">
                  <ArrowUpRight className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Live briefing</p>
                  <p className="text-xs text-white/60">Next sync in 2 hours</p>
                </div>
              </div>
              <p className="text-sm text-white/60">
                Align with stakeholders, capture decisions, and broadcast updates from the command surface.
              </p>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 hover:text-foreground hover:border-white/30 transition">
                Open agenda
                <ChevronRight className="size-4" />
              </button>
            </section>
          </motion.aside>
        </div>
      </main>

      <footer className="border-t border-white/5 py-6">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Cling Collective. Crafted for calm collaboration.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Command className="size-3" />
              Palette mode
            </span>
            <span className="inline-flex items-center gap-1">
              <Settings className="size-3" />
              Privacy
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
