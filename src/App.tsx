import { useState } from "react";
import { motion } from "framer-motion";
import {
  Command,
  LayoutDashboard,
  Palette,
  Settings,
  Bell,
  Search,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
  LifeBuoy,
} from "lucide-react";

const sidebarItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Content", icon: Layers },
  { label: "Engagement", icon: TrendingUp },
  { label: "Audience", icon: Users },
  { label: "Automations", icon: Sparkles },
  { label: "Support", icon: LifeBuoy },
];

const quickActions = [
  { label: "Generate Brief", icon: Command },
  { label: "Adjust Tone", icon: Palette },
  { label: "Fine-tune", icon: Settings },
];

const settingsToggles = [
  { label: "Dark Mode", description: "Auto-switch by system preference" },
  { label: "Animations", description: "Enable subtle motion feedback" },
  { label: "Smart Suggestions", description: "Surface insights in context" },
];

const activityTimeline = [
  {
    title: "Strategy sync",
    detail: "AI summarized last workshop and highlighted next steps.",
    time: "2h ago",
  },
  {
    title: "Tone adjustment",
    detail: "Refined onboarding emails to match brand voice.",
    time: "Yesterday",
  },
  {
    title: "Audience insights",
    detail: "Identified key cohort shifts in weekly report.",
    time: "Aug 21",
  },
];

export default function App() {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Outer container centers the app with generous whitespace */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-6 py-8">
        {/* Top navigation bar */}
        <motion.header
          className="flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900/80 px-6 py-4 backdrop-blur"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-500/10 p-2">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Cling Studio</p>
              <h1 className="text-lg font-semibold">Narrative Intelligence Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="search"
                placeholder="Search insights"
                className="w-56 rounded-2xl border border-zinc-800 bg-zinc-950/90 py-2 pl-10 pr-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
              />
            </div>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-2"
            >
              <Bell className="h-4 w-4" />
            </motion.button>
            <div className="h-8 w-px bg-zinc-800" />
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-gradient-to-tr from-blue-500 to-zinc-300" />
              <div>
                <p className="text-sm font-medium">Ava Morgan</p>
                <p className="text-xs text-zinc-500">Lead Strategist</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-xs"
              >
                Log out
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Main layout: sidebar, content, settings panel */}
        <motion.main
          className="grid flex-1 grid-cols-[220px_minmax(0,1fr)_280px] gap-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          {/* Left sidebar */}
          <aside className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5">
            <div className="space-y-1 text-xs text-zinc-500">
              <p className="uppercase tracking-[0.3em]">Workspace</p>
              <p className="text-sm text-zinc-300">Curated flows & automations</p>
            </div>
            <nav className="flex flex-col gap-2">
              {sidebarItems.map(({ label, icon: Icon }) => {
                const isActive = activeItem === label;
                return (
                  <motion.button
                    key={label}
                    onClick={() => setActiveItem(label)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    className={`group flex items-center justify-between rounded-2xl border px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "border-blue-500/40 bg-blue-500/10 text-blue-400"
                        : "border-transparent bg-transparent text-zinc-400 hover:border-zinc-800 hover:bg-zinc-900 hover:text-zinc-200"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className={`h-4 w-4 ${isActive ? "text-blue-400" : "text-zinc-500"}`} />
                      {label}
                    </span>
                    <motion.span
                      layout
                      className={`h-2 w-2 rounded-full ${isActive ? "bg-blue-400" : "bg-zinc-800"}`}
                    />
                  </motion.button>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Quick actions</p>
              <div className="flex flex-col gap-2">
                {quickActions.map(({ label, icon: Icon }) => (
                  <motion.button
                    key={label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-left text-sm text-zinc-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-200"
                  >
                    <Icon className="h-4 w-4 text-blue-300" />
                    {label}
                  </motion.button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content area */}
          <section className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
            <header className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Live narrative</p>
                <h2 className="text-2xl font-semibold text-zinc-100">
                  {activeItem} overview
                </h2>
                <p className="max-w-xl text-sm text-zinc-400">
                  Explore the evolving storyline of your product moments. Visualize tone,
                  cadence, and audience response in real time with AI-curated highlights.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl border border-blue-500/50 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-100 shadow-lg shadow-blue-500/10"
              >
                Generate insight
              </motion.button>
            </header>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-sm font-semibold text-zinc-200">Narrative Velocity</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">Week snapshot</p>
                <div className="mt-6 flex h-36 items-end gap-2">
                  {[60, 80, 45, 90, 75, 95, 70].map((value, index) => (
                    <motion.div
                      key={index}
                      layout
                      className="flex-1 rounded-full bg-gradient-to-t from-blue-500/10 via-blue-400/40 to-blue-300/60"
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.5, ease: "easeOut" }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
                whileHover={{ y: -4 }}
              >
                <h3 className="text-sm font-semibold text-zinc-200">Emotional Resonance</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-zinc-500">Channel blend</p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-zinc-300">
                  {["Curiosity", "Trust", "Momentum", "Clarity", "Excitement", "Empathy"].map(
                    (tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-center"
                      >
                        {tag}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-200">Activity timeline</h3>
                <button className="text-xs text-blue-300 hover:text-blue-200">View all</button>
              </div>
              <div className="mt-4 space-y-3">
                {activityTimeline.map(({ title, detail, time }) => (
                  <motion.div
                    key={title}
                    whileHover={{ x: 4 }}
                    className="flex items-start justify-between rounded-2xl border border-transparent bg-transparent px-4 py-3 hover:border-zinc-800 hover:bg-zinc-900/60"
                  >
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{title}</p>
                      <p className="text-xs text-zinc-500">{detail}</p>
                    </div>
                    <span className="text-xs text-zinc-500">{time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Right settings panel */}
          <aside className="flex flex-col gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Settings</p>
              <h3 className="text-lg font-semibold text-zinc-100">Experience controls</h3>
            </div>

            <div className="space-y-3">
              {settingsToggles.map(({ label, description }) => (
                <motion.label
                  key={label}
                  whileHover={{ y: -1 }}
                  className="flex flex-col gap-1 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-200">{label}</span>
                    <motion.span
                      layout
                      className="relative inline-flex h-5 w-10 items-center rounded-full bg-blue-500/30"
                    >
                      <motion.span
                        layout
                        className="absolute left-1 h-3 w-3 rounded-full bg-blue-300 shadow-lg"
                      />
                    </motion.span>
                  </div>
                  <p className="text-xs text-zinc-500">{description}</p>
                </motion.label>
              ))}
            </div>

            <div className="mt-auto space-y-3 rounded-2xl border border-blue-500/40 bg-blue-500/10 p-4">
              <div className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-blue-200" />
                <div>
                  <p className="text-sm font-medium text-blue-100">Visual style presets</p>
                  <p className="text-xs text-blue-200/70">Balance focus between narrative and metrics.</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl border border-blue-500/50 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-100"
              >
                Explore palettes
              </motion.button>
            </div>
          </aside>
        </motion.main>

        {/* Footer */}
        <footer className="flex justify-between rounded-3xl border border-zinc-800 bg-zinc-900/70 px-6 py-4 text-xs text-zinc-500">
          <span>© 2024 Cling Studio. Crafted for narrative-first teams.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300">
              Privacy
            </a>
            <a href="#" className="hover:text-zinc-300">
              Terms
            </a>
            <a href="#" className="hover:text-zinc-300">
              Support
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
