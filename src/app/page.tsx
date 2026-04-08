import Image from "next/image";
import { PHONE, PHONE_DISPLAY, BUSINESS_NAME } from "./layout";

const EMAIL = "david@burnsandsonsheating.com";

const services = [
  {
    title: "Furnace Repair & Installation",
    body: "Gas and electric furnace diagnosis, repair, replacement, and new installs. We service all major brands.",
    icon: "🔥",
  },
  {
    title: "Air Conditioning",
    body: "Central AC repair, replacement, and seasonal tune-ups to keep your home cool all summer long.",
    icon: "❄️",
  },
  {
    title: "Mini Splits",
    body: "Ductless mini split installation for additions, garages, and whole-home comfort — efficient and quiet.",
    icon: "🌬️",
  },
  {
    title: "Heat Pumps",
    body: "High-efficiency heat pump installation and service. Heat and cool your home from a single system.",
    icon: "♻️",
  },
  {
    title: "Indoor Air Quality",
    body: "Humidifiers, air purifiers, and ventilation upgrades for healthier air in every season.",
    icon: "🌿",
  },
  {
    title: "24/7 Emergency Service",
    body: "No heat in January? AC out in July? Call or text any time — we answer and we show up.",
    icon: "🚨",
  },
];

const discounts = [
  { label: "Senior discount", value: "10% off" },
  { label: "Veteran discount", value: "10% off" },
  { label: "First-time customer", value: "15% off" },
];

const cleanCheck = [
  { label: "AC Clean & Check", price: "$125" },
  { label: "Heating Clean & Check", price: "$125" },
  { label: "Both Systems, Same Visit", price: "$200" },
];

const serviceAgreements = [
  {
    name: "Dual-System Annual Plan",
    price: "$250",
    cadence: "per year",
    highlights: [
      "2 system inspections (spring + fall)",
      "Full heating & cooling cleaning",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Single-System Annual Plan",
    price: "$150",
    cadence: "per year",
    highlights: [
      "1 seasonal cleaning",
      "Complimentary service call included",
      "Priority scheduling",
    ],
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[var(--brand-navy)] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <header className="relative sticky top-0 z-40 bg-[var(--brand-navy)] text-white shadow-lg shadow-black/30">
        {/* soft gradient separator */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt={`${BUSINESS_NAME} logo`}
              width={56}
              height={56}
              priority
              className="rounded-full ring-2 ring-[var(--brand-ice)]"
            />
            <div className="leading-tight">
              <div className="font-black text-lg sm:text-xl tracking-tight">Burns and Sons</div>
              <div className="text-[11px] sm:text-xs text-[var(--brand-ice-2)] uppercase tracking-wider font-semibold">
                Heating · Cooling · Services
              </div>
            </div>
          </a>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-12 lg:gap-16 text-base font-bold">
            <a href="#services" className="hover:text-[var(--brand-ice-2)] transition-colors">Services</a>
            <a href="#pricing" className="hover:text-[var(--brand-ice-2)] transition-colors">Pricing</a>
            <a href="#about" className="hover:text-[var(--brand-ice-2)] transition-colors">About</a>
            <a href="#area" className="hover:text-[var(--brand-ice-2)] transition-colors">Service Area</a>
            <a href="#contact" className="hover:text-[var(--brand-ice-2)] transition-colors">Contact</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-fire)] px-5 py-2.5 text-base font-black text-white shadow-lg hover:bg-[var(--brand-fire-2)] transition-colors"
          >
            <span aria-hidden>📞</span>
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* HERO */}
        <section
          id="top"
          className="relative overflow-hidden text-white"
          style={{
            background:
              "linear-gradient(120deg, #0a1b2e 0%, #12325a 45%, #0a1b2e 100%)",
          }}
        >
          {/* Fire/ice glow accents */}
          <div
            aria-hidden
            className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30 will-change-transform"
            style={{ background: "radial-gradient(circle, #3ba9e0, transparent 60%)", transform: "translateZ(0)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 will-change-transform"
            style={{ background: "radial-gradient(circle, #e8481c, transparent 60%)", transform: "translateZ(0)" }}
          />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-ice)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-ice-2)] ring-1 ring-[var(--brand-ice)]/40">
                <span>★</span> Family-owned · Licensed & Insured · Est. 2026
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Erie&apos;s Trusted{" "}
                <span className="bg-gradient-to-r from-[var(--brand-ice-2)] via-white to-[var(--brand-fire-2)] bg-clip-text text-transparent">
                  Heating & Cooling
                </span>{" "}
                Specialists
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-200">
                Honest pricing. Quality workmanship. Fast response. Burns and Sons is a
                family-owned HVAC company built on 15 years of hands-on experience, bringing
                hometown care to every service call in Erie, PA.
              </p>

              {/* First-time customer offer — inline, tasteful */}
              <div className="mt-6 flex items-center gap-4 rounded-xl border border-[var(--brand-gold)]/40 bg-[var(--brand-gold)]/10 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-gold)] text-[var(--brand-navy)] text-lg font-black shadow-lg shadow-[var(--brand-gold)]/30">
                  15%
                </div>
                <div className="text-sm">
                  <div className="font-bold text-[var(--brand-gold)]">New customer offer</div>
                  <div className="text-slate-200">
                    Save 15% on your first service with Burns and Sons.
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-fire)] px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-[var(--brand-fire-2)] transition-colors"
                >
                  📞 Call {PHONE_DISPLAY}
                </a>
                <a
                  href={`sms:${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-bold text-white ring-1 ring-white/30 hover:bg-white/20 transition-colors"
                >
                  💬 Text Us
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
                <span className="flex items-center gap-2"><span className="text-[var(--brand-ice-2)]">✓</span> Free estimates</span>
                <span className="flex items-center gap-2"><span className="text-[var(--brand-ice-2)]">✓</span> 24/7 emergency service</span>
                <span className="flex items-center gap-2"><span className="text-[var(--brand-ice-2)]">✓</span> 15 years of experience</span>
              </div>
            </div>

            {/* Logo showcase + promo badge */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 -m-6 rounded-full blur-2xl will-change-transform"
                  style={{
                    background:
                      "conic-gradient(from 180deg, #e8481c, #f7b733, #3ba9e0, #e8481c)",
                    opacity: 0.35,
                    transform: "translateZ(0)",
                  }}
                />
                <Image
                  src="/logo.jpg"
                  alt={`${BUSINESS_NAME} — fire and ice HVAC logo`}
                  width={420}
                  height={420}
                  priority
                  sizes="(max-width: 1024px) 280px, 420px"
                  className="relative rounded-full ring-4 ring-[var(--brand-ice)]/50 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
          style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-fire)]">
              What we do
            </div>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              HVAC Services for Erie Homes & Businesses
            </h2>
            <p className="mt-4 text-slate-600">
              From a noisy furnace to a full system replacement, we handle heating and cooling
              across every season — residential and commercial.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--brand-fire)]/40 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-ice)]/15 to-[var(--brand-fire)]/15 text-2xl">
                  <span aria-hidden>{s.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--brand-navy)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="bg-[var(--brand-navy)] text-white"
          style={{ contentVisibility: "auto", containIntrinsicSize: "1200px" }}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-ice-2)]">
                Transparent pricing
              </div>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">Straightforward Rates, No Surprises</h2>
              <p className="mt-4 text-slate-300">
                Clean & check pricing, annual service agreements, and discounts for the folks who
                keep our community running.
              </p>
            </div>

            {/* Clean & Check */}
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="text-lg font-bold text-[var(--brand-ice-2)]">Clean & Check</h3>
                <ul className="mt-4 divide-y divide-white/10">
                  {cleanCheck.map((i) => (
                    <li key={i.label} className="flex items-center justify-between py-3 text-sm">
                      <span>{i.label}</span>
                      <span className="font-bold text-white">{i.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service agreements */}
              {serviceAgreements.map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-2xl p-6 ring-1 ${
                    p.featured
                      ? "bg-gradient-to-br from-[var(--brand-gold)]/25 to-[var(--brand-gold)]/5 ring-[var(--brand-gold)]/60"
                      : "bg-white/5 ring-white/10"
                  }`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 right-4 rounded-full bg-[var(--brand-gold)] px-3 py-1 text-xs font-bold text-[var(--brand-navy)] shadow-lg shadow-[var(--brand-gold)]/30">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-black">{p.price}</span>
                    <span className="text-sm text-slate-300">/{p.cadence.replace("per ", "")}</span>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-slate-200">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-[var(--brand-ice-2)]">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Discounts */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-[var(--brand-fire)]/15 via-white/5 to-[var(--brand-ice)]/15 p-6 ring-1 ring-white/10">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-[var(--brand-ice-2)]">Discounts</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Thanks for your service, and for welcoming us into your home.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {discounts.map((d) => (
                    <li
                      key={d.label}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20"
                    >
                      {d.value} · {d.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT + FLYER */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
          style={{ contentVisibility: "auto", containIntrinsicSize: "900px" }}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-fire)]">
                Our story
              </div>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                A Local, Family-Owned HVAC Company
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Burns and Sons Heating &amp; Cooling is proudly based in Erie, PA. Founded by{" "}
                <strong>David Burns</strong>, our mission has always been simple — provide honest,
                reliable heating and cooling service to homeowners who trust us. We focus on quality
                workmanship, fair pricing, and treating every customer like family.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Experience</dt>
                  <dd className="mt-1 text-2xl font-black text-[var(--brand-navy)]">15+ years</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Availability</dt>
                  <dd className="mt-1 text-2xl font-black text-[var(--brand-navy)]">24 / 7</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">Estimates</dt>
                  <dd className="mt-1 text-2xl font-black text-[var(--brand-navy)]">Free</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-2">
              <div className="relative mx-auto w-full max-w-sm">
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-3xl blur-xl opacity-40 will-change-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, #3ba9e0, #e8481c)",
                    transform: "translateZ(0)",
                  }}
                />
                <Image
                  src="/flyer.jpg"
                  alt="Burns and Sons promotional flyer — pricing, discounts, and service agreements"
                  width={600}
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 384px"
                  className="relative w-full rounded-2xl shadow-2xl ring-1 ring-slate-200"
                />
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">
                Pricing flyer · Save it or share with a neighbor
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section
          id="area"
          className="bg-white"
          style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
        >
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-fire)]">
              Where we work
            </div>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Proudly Serving Erie, PA</h2>
            <p className="mt-4 text-slate-600">
              Burns and Sons is based in Erie and serves residential and commercial customers
              throughout the city. Not sure if you&apos;re in our area? Give us a call and we&apos;ll
              let you know.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-base font-bold text-[var(--brand-navy)]">
              <span aria-hidden>📍</span> Erie, Pennsylvania
            </div>
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section
          id="contact"
          className="relative overflow-hidden bg-[var(--brand-navy)] text-white"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20 will-change-transform"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, #3ba9e0, transparent 40%), radial-gradient(circle at 80% 70%, #e8481c, transparent 40%)",
              transform: "translateZ(0)",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-ice-2)]">
                  Get in touch
                </div>
                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  Ready When You Are — Day or Night
                </h2>
                <p className="mt-4 max-w-lg text-slate-300">
                  Call or text for a free estimate, emergency service, or to schedule a tune-up. We
                  answer our phones and we show up when we say we will.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-fire)] text-xl">📞</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Call or text</div>
                      <div className="text-xl font-bold">{PHONE_DISPLAY}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-ice)] text-xl">✉️</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</div>
                      <div className="text-xl font-bold">{EMAIL}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-navy-2)] ring-1 ring-[var(--brand-ice)]/40 text-xl">📍</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Service area</div>
                      <div className="text-xl font-bold">Erie, PA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form mockup */}
              <form
                aria-label="Contact Burns and Sons"
                className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl ring-1 ring-white/10 sm:p-8"
                action="#"
              >
                <h3 className="text-xl font-black text-[var(--brand-navy)]">Request a Free Estimate</h3>
                <p className="mt-1 text-sm text-slate-600">Call or text for the fastest response, or send us a note here.</p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-semibold">Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[var(--brand-fire)] focus:outline-none"
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-semibold">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[var(--brand-fire)] focus:outline-none"
                      placeholder="(814) 555-0123"
                    />
                  </label>
                </div>

                <label className="mt-4 block text-sm">
                  <span className="font-semibold">Service needed</span>
                  <select
                    name="service"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[var(--brand-fire)] focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Choose a service…</option>
                    {services.map((s) => (
                      <option key={s.title}>{s.title}</option>
                    ))}
                    <option>Something else</option>
                  </select>
                </label>

                <label className="mt-4 block text-sm">
                  <span className="font-semibold">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[var(--brand-fire)] focus:outline-none"
                    placeholder="Tell us what's going on…"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-[var(--brand-fire)] px-6 py-3 text-base font-bold text-white shadow-lg hover:bg-[var(--brand-fire-2)] transition-colors"
                >
                  Send Request
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Or just call us at <a href={`tel:${PHONE}`} className="font-bold text-[var(--brand-fire)]">{PHONE_DISPLAY}</a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black text-slate-400">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpg"
                  alt={`${BUSINESS_NAME} logo`}
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-[var(--brand-ice)]"
                />
                <div>
                  <div className="font-bold text-white">Burns and Sons</div>
                  <div className="text-xs uppercase tracking-wider">Heating · Cooling · Services</div>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm">
                Family-owned HVAC in Erie, PA. Licensed, insured, and ready to help — day or night.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Services</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white">Furnace repair</a></li>
                <li><a href="#services" className="hover:text-white">AC service</a></li>
                <li><a href="#services" className="hover:text-white">Mini splits</a></li>
                <li><a href="#services" className="hover:text-white">Heat pumps</a></li>
                <li><a href="#services" className="hover:text-white">24/7 emergency</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Contact</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a></li>
                <li>Erie, PA</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs">
            © {new Date().getFullYear()} {BUSINESS_NAME} LLC. Licensed &amp; insured. Est. 2026.
          </div>
        </div>
      </footer>
    </>
  );
}
