"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Wallet, Users } from "lucide-react";
import { fadeUp, viewportSettings } from "@/lib/animations";

// Base estimates are anchored to the published pricing tiers so the
// calculator never quotes something the sales conversation can't honour.
const PROJECT_TYPES = [
  { id: "website", label: "Marketing Website", base: 3000, weeks: 3 },
  { id: "webapp", label: "Web Application", base: 10000, weeks: 6 },
  { id: "saas", label: "SaaS Platform", base: 25000, weeks: 12 },
  { id: "ai", label: "AI / ML Solution", base: 20000, weeks: 10 },
  { id: "mobile", label: "Mobile App", base: 18000, weeks: 10 },
] as const;

const SCOPES = [
  { id: "mvp", label: "MVP / Lean", mult: 1 },
  { id: "standard", label: "Standard", mult: 1.6 },
  { id: "advanced", label: "Advanced", mult: 2.4 },
] as const;

const ADDONS = [
  { id: "design", label: "Custom design system", cost: 4000, weeks: 1 },
  { id: "integrations", label: "3rd-party integrations", cost: 3500, weeks: 1 },
  { id: "ai", label: "AI features", cost: 6000, weeks: 2 },
  { id: "support", label: "Ongoing support (3mo)", cost: 4500, weeks: 0 },
];

// Blended cost of running an equivalent in-house squad for the project
// duration (2 senior engineers + fractional design/PM), used only for a
// directional comparison — labelled as an estimate in the UI.
const INHOUSE_MONTHLY = 14000;

function formatUSD(n: number) {
  if (n >= 1000) return "$" + Math.round(n / 1000).toLocaleString() + "K";
  return "$" + Math.round(n).toLocaleString();
}

export function Calculator() {
  const [typeId, setTypeId] = useState<(typeof PROJECT_TYPES)[number]["id"]>(
    "webapp"
  );
  const [scopeId, setScopeId] = useState<(typeof SCOPES)[number]["id"]>(
    "standard"
  );
  const [addons, setAddons] = useState<string[]>(["design"]);

  const result = useMemo(() => {
    const type = PROJECT_TYPES.find((t) => t.id === typeId)!;
    const scope = SCOPES.find((s) => s.id === scopeId)!;

    const addonCost = ADDONS.filter((a) => addons.includes(a.id)).reduce(
      (sum, a) => sum + a.cost,
      0
    );
    const addonWeeks = ADDONS.filter((a) => addons.includes(a.id)).reduce(
      (sum, a) => sum + a.weeks,
      0
    );

    const low = type.base * scope.mult + addonCost;
    const high = low * 1.35;
    const weeks = Math.round(type.weeks * scope.mult + addonWeeks);

    const inhouse = Math.round((weeks / 4.3) * INHOUSE_MONTHLY);
    const savings = inhouse - (low + high) / 2;

    return { low, high, weeks, inhouse, savings };
  }, [typeId, scopeId, addons]);

  const toggleAddon = (id: string) =>
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  return (
    <section
      id="calculator"
      className="py-[clamp(5rem,8vw,10rem)] bg-bg-secondary"
    >
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 mx-auto">
            <span className="w-6 h-px bg-gold" />
            Instant Estimate
          </span>
          <h2 className="text-[clamp(2.2rem,1.6rem+3vw,3.6rem)] font-bold tracking-[-0.02em] text-text-primary mb-5">
            Estimate Your <span className="text-gradient">Project</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] leading-relaxed mx-auto">
            A ballpark in seconds — no email required. Final scope is confirmed
            on your free discovery call.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-[1100px] mx-auto">
          {/* Inputs */}
          <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 space-y-8">
            {/* Project type */}
            <div>
              <label className="block text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                Project Type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTypeId(t.id)}
                    className={`px-4 py-3 rounded-xl text-sm text-left transition-all duration-200 border ${
                      typeId === t.id
                        ? "border-gold/40 bg-gold/[0.08] text-text-primary"
                        : "border-white/[0.08] bg-white/[0.02] text-text-secondary hover:border-gold-border"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scope */}
            <div>
              <label className="block text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                Scope
              </label>
              <div className="grid grid-cols-3 gap-3">
                {SCOPES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScopeId(s.id)}
                    className={`px-4 py-3 rounded-xl text-sm transition-all duration-200 border ${
                      scopeId === s.id
                        ? "border-gold/40 bg-gold/[0.08] text-text-primary"
                        : "border-white/[0.08] bg-white/[0.02] text-text-secondary hover:border-gold-border"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-4">
                Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {ADDONS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => toggleAddon(a.id)}
                    className={`px-4 py-3 rounded-xl text-sm text-left transition-all duration-200 border ${
                      addons.includes(a.id)
                        ? "border-gold/40 bg-gold/[0.08] text-text-primary"
                        : "border-white/[0.08] bg-white/[0.02] text-text-secondary hover:border-gold-border"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-2 rounded-3xl p-8 md:p-10 border border-gold/20 bg-gold/[0.03] flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs text-text-tertiary tracking-wider uppercase mb-2">
                <Wallet className="w-3.5 h-3.5 text-gold" />
                Estimated Investment
              </div>
              <div className="text-3xl font-bold text-gradient">
                {formatUSD(result.low)} – {formatUSD(result.high)}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs text-text-tertiary tracking-wider uppercase mb-2">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Estimated Timeline
              </div>
              <div className="text-2xl font-semibold text-text-primary">
                ~{result.weeks} weeks
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs text-text-tertiary tracking-wider uppercase mb-2">
                <Users className="w-3.5 h-3.5 text-gold" />
                vs. In-house team (est.)
              </div>
              <div className="text-sm text-text-secondary">
                Building this with an in-house squad over the same period runs
                roughly{" "}
                <span className="text-text-primary font-semibold">
                  {formatUSD(result.inhouse)}
                </span>{" "}
                in salary alone.
              </div>
            </div>

            <a
              href="#contact"
              className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-350 group"
            >
              Get An Exact Quote
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p className="text-[0.65rem] text-text-tertiary text-center mt-3">
              Directional estimate only — not a binding quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
