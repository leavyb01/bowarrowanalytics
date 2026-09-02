import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  GraduationCap,
  Hammer,
  Hotel,
  Lightbulb,
  LineChart,
  Menu,
  Phone,
  Search,
  Target,
  TrendingUp,
  UtensilsCrossed,
  X,
} from "lucide-react";
import "./App.css";

const sectors = [
  {
    icon: Hotel,
    number: "01",
    title: "Hotels & Hospitality",
    description:
      "Create one clear view of commercial, guest and operational performance, from occupancy and RevPAR to labour and service quality.",
    examples: "Booking pace • Guest satisfaction • Labour efficiency",
  },
  {
    icon: UtensilsCrossed,
    number: "02",
    title: "Food & Beverage",
    description:
      "See where margin is won or lost by connecting sales, menu mix, waste, labour, purchasing and customer demand.",
    examples: "Menu engineering • Waste • Cost of sales",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Education",
    description:
      "Bring student performance, attendance and intervention data together so educators can identify trends and act earlier.",
    examples: "Attendance • Attainment • Intervention impact",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Construction & Landscaping",
    description:
      "Improve invoice flow and apply LEAN thinking to materials, labour, project progress, rework and operational handoffs.",
    examples: "Invoice cycle • Materials • Labour utilisation",
  },
];

const approach = [
  {
    icon: Search,
    number: "01",
    title: "Reveal",
    description:
      "Understand the operation, the decisions being made, the friction slowing progress and the evidence already available.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Clarify",
    description:
      "Define what good looks like and identify the measures that will make performance and opportunity visible.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Connect",
    description:
      "Build a practical insight system that connects the information and tells a clear, dependable story.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Improve",
    description:
      "Turn performance signals into focused action, LEAN improvement and measurable organisational learning.",
  },
];

const plans = [
  {
    name: "Bronze",
    label: "Clarity Foundation",
    description:
      "For organisations that need to understand their available data, uncover what is missing and identify the first improvement opportunity.",
    price: "From €2,500",
    cadence: "Project-based engagement",
    features: [
      "Data and process discovery review",
      "Data availability and capture-gap assessment",
      "Priority KPI and opportunity map",
      "One focused insight solution",
      "Scheduled refresh, where supported",
      "Consultative handover",
    ],
  },
  {
    name: "Silver",
    label: "Continuous Improvement",
    description:
      "For organisations that want visibility plus a regular partner to translate performance signals into practical improvement.",
    price: "From €750 per month",
    cadence: "Monthly advisory partnership",
    featured: true,
    features: [
      "Everything in Clarity Foundation",
      "Broader management insight solution",
      "Monthly performance review",
      "Improvement opportunity backlog",
      "LEAN and process recommendations",
      "Ongoing KPI refinement",
    ],
  },
  {
    name: "Gold",
    label: "Embedded Excellence",
    description:
      "For organisations seeking an embedded analytics and operational-excellence capability without building a full internal function.",
    price: "Custom engagement",
    cadence: "Embedded advisory partnership",
    features: [
      "Everything in Continuous Improvement",
      "More frequent operational reviews",
      "Multi-area or multi-site visibility",
      "Staff data-literacy training",
      "Improvement-project coaching",
      "Priority support and roadmap reviews",
    ],
  },
];

const articles = [
  {
    category: "Founder story",
    title: "From the warehouse floor to operational clarity",
    description:
      "How frontline operational experience and project leadership shaped a practical approach to analytics.",
  },
  {
    category: "Operational excellence",
    title: "A dashboard is not the destination",
    description:
      "Visibility only creates value when it changes conversations, decisions and the way work gets done.",
  },
  {
    category: "LEAN practice",
    title: "Finding ambiguity inside everyday processes",
    description:
      "A practical perspective on delays, waste, handoffs and making improvement opportunities visible.",
  },
];

function DashboardPreview() {
  const bars = [40, 56, 48, 67, 62, 78, 72, 89, 83, 96];

  return (
    <div className="dashboard-shell">
      <div className="dashboard-window">
        <div className="dashboard-header">
          <div>
            <span className="dashboard-label">Commercial visibility</span>
            <h2>Hotel performance</h2>
          </div>

          <div className="dashboard-icon">
            <BarChart3 size={23} />
          </div>
        </div>

        <div className="metric-grid">
          <div className="metric-card">
            <span>Occupancy</span>
            <strong>82.4%</strong>
            <small>▲ 4.1%</small>
          </div>

          <div className="metric-card">
            <span>ADR</span>
            <strong>€164</strong>
            <small>▲ 7.2%</small>
          </div>

          <div className="metric-card">
            <span>RevPAR</span>
            <strong>€135</strong>
            <small>▲ 11.6%</small>
          </div>
        </div>

        <div className="chart-panel">
          <div className="chart-heading">
            <span>Room revenue</span>
            <span>Illustrative data</span>
          </div>

          <div className="bar-chart">
            {bars.map((height, index) => (
              <div
                className="bar-column"
                key={index}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="chart-axis">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>
      </div>

      <div className="dashboard-badge">Built for action</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <div className="website">
      <header className="site-header">
        <div className="nav-container">
          <a href="#top" className="brand-link" aria-label="Bow & Arrow Analytics home">
            <span className="brand-mark">
              <Target size={22} />
            </span>

            <span className="brand-text">
              <strong>Bow & Arrow</strong>
              <small>Analytics</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#why">Why us</a>
            <a href="#sectors">Sectors</a>
            <a href="#approach">Approach</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#insights">Insights</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Start a conversation
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#why">Why us</a>
            <a href="#sectors">Sectors</a>
            <a href="#approach">Approach</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Start a conversation</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-shape" aria-hidden="true" />

          <div className="hero-container">
            <div className="hero-copy">
              <p className="eyebrow">Visibility. Clarity. Momentum.</p>

              <h1>
                Reveal what is holding you back.
                <span> Focus on what moves you forward.</span>
              </h1>

              <p className="hero-description">
                Bow & Arrow Analytics turns operational ambiguity into
                visibility, insight and practical improvement. We connect
                data, processes and people so leaders can make confident
                decisions and build stronger organisations.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-link">
                  Find your clarity
                  <ArrowRight size={18} />
                </a>

                <a href="#approach" className="secondary-link">
                  How we create value
                </a>
              </div>

              <p className="international-note">
                Based in Ireland. Partnering with organisations anywhere.
              </p>
            </div>

            <DashboardPreview />
          </div>

          <div className="hero-strip">
            <span>Visibility</span>
            <span>Clarity</span>
            <span>Insight</span>
            <span>Improvement</span>
            <span>Momentum</span>
          </div>
        </section>

        <section className="content-section clarity-section" id="why">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Beyond dashboards</p>
              <h2>The real product is clarity.</h2>
            </div>

            <div className="section-introduction">
              <p>
                A dashboard may be part of the solution, but it is never the
                entire solution. We uncover the decisions you need to make,
                the ambiguity slowing progress and the processes creating
                loss.
              </p>
            </div>
          </div>

          <div className="clarity-grid">
            <article className="clarity-card">
              <span className="card-number">01</span>
              <div className="clarity-icon">
                <Building2 size={25} />
              </div>
              <h3>Visibility</h3>
              <p>
                Reveal what is happening across the operation and establish
                one dependable view of performance.
              </p>
            </article>

            <article className="clarity-card clarity-card-highlight">
              <span className="card-number">02</span>
              <div className="clarity-icon">
                <Lightbulb size={25} />
              </div>
              <h3>Clarity</h3>
              <p>
                Understand why outcomes are changing and focus attention on
                the losses and opportunities that matter.
              </p>
            </article>

            <article className="clarity-card">
              <span className="card-number">03</span>
              <div className="clarity-icon">
                <TrendingUp size={25} />
              </div>
              <h3>Momentum</h3>
              <p>
                Convert insight into focused improvement work and measurable
                organisational progress.
              </p>
            </article>
          </div>
        </section>

        <section className="dark-section" id="sectors">
          <div className="section-container">
            <p className="section-kicker section-kicker-light">
              Where we help
            </p>

            <h2 className="light-heading">
              Different sectors.
              <span> The same need for better visibility.</span>
            </h2>

            <div className="sector-grid">
              {sectors.map((sector) => {
                const Icon = sector.icon;

                return (
                  <article className="sector-card" key={sector.title}>
                    <div className="sector-card-top">
                      <span className="sector-icon">
                        <Icon size={27} />
                      </span>
                      <span className="sector-number">{sector.number}</span>
                    </div>

                    <h3>{sector.title}</h3>
                    <p>{sector.description}</p>
                    <div className="sector-examples">{sector.examples}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="content-section approach-section" id="approach">
          <div className="approach-layout">
            <div className="approach-title">
              <p className="section-kicker">Our approach</p>
              <h2>From ambiguity to action.</h2>
              <p>
                We begin with the business problem, not the software. The
                technology follows the decisions, behaviours and outcomes the
                organisation needs.
              </p>
            </div>

            <div className="approach-list">
              {approach.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="approach-item" key={item.number}>
                    <span className="approach-icon">
                      <Icon size={22} />
                    </span>
                    <span className="approach-number">{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="section-container">
            <div className="pricing-heading">
              <p className="section-kicker">Ways to work together</p>
              <h2>Choose the partnership your ambition needs.</h2>
              <p>
                Each engagement is scoped around data readiness, complexity,
                organisational size and business priorities.
              </p>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`pricing-card ${
                    plan.featured ? "pricing-card-featured" : ""
                  }`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="recommended-label">Recommended</span>
                  )}

                  <span className={`plan-marker plan-${plan.name.toLowerCase()}`} />

                  <p className="plan-label">{plan.label}</p>
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <p className="plan-price">{plan.price}</p>

                  <div className="feature-list">
                    {plan.features.map((feature) => (
                      <div className="feature-item" key={feature}>
                        <Check size={17} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cadence-box">{plan.cadence}</div>

                  <a className="pricing-link" href="#contact">
                    Discuss {plan.name}
                    <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>

            <p className="pricing-note">
              Bronze is a defined setup engagement. Silver and Gold combine an
              initial setup with ongoing advisory support. Final investment is
              confirmed after discovery.
            </p>
          </div>
        </section>

        <section className="founder-section" id="about">
          <div className="section-container founder-layout">
            <div className="founder-card">
              <div className="founder-decoration" aria-hidden="true" />
              <p>Founder</p>
              <h2>
                Bryan
                <br />
                Leavy
              </h2>
              <span>Analytics • LEAN culture • Operational excellence</span>
            </div>

            <div className="founder-copy">
              <p className="section-kicker section-kicker-dark">
                Built from operational experience
              </p>

              <h2>Practical insight, grounded in the real world of work.</h2>

              <p>
                My experience began on the warehouse floor before progressing
                into junior project management and then senior project
                management within a globally renowned pharmaceutical company.
              </p>

              <p>
                That journey taught me that sustainable improvement does not
                begin with a chart. It begins by understanding the work, the
                people doing it and the barriers keeping good organisations
                from performing at their best.
              </p>

              <strong>
                Bow & Arrow Analytics exists to help organisations thrive
                rather than simply survive.
              </strong>
            </div>
          </div>
        </section>

        <section className="content-section insights-section" id="insights">
          <div className="insights-heading">
            <div>
              <p className="section-kicker">Ideas and experience</p>
              <h2>From the field.</h2>
            </div>

            <p>
              A home for practical perspectives on analytics, operations,
              leadership and continuous improvement.
            </p>
          </div>

          <div className="article-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.title}>
                <p className="article-category">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <span className="coming-soon">
                  Coming soon
                  <ArrowRight size={15} />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-container contact-layout">
            <div className="contact-copy">
              <p className="section-kicker section-kicker-dark">
                Start with the ambiguity
              </p>

              <h2>What do you wish you could see more clearly?</h2>

              <p>
                Tell us where decisions feel slow, losses feel hidden or
                performance is difficult to explain. That is where the
                conversation begins.
              </p>

              <a href="tel:+353871854333" className="contact-phone-link">
                <span>
                  <Phone size={20} />
                </span>
                +353 87 185 4333
              </a>
            </div>

            <div className="contact-card">
              {formSent ? (
                <div className="success-message">
                  <span>
                    <Check size={28} />
                  </span>
                  <h3>Your enquiry is ready.</h3>
                  <p>
                    This prototype form is not connected to email yet. The live
                    form will require a form service or backend.
                  </p>
                  <button type="button" onClick={() => setFormSent(false)}>
                    Return to form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label>
                      Name
                      <input type="text" required />
                    </label>

                    <label>
                      Organisation
                      <input type="text" />
                    </label>
                  </div>

                  <label>
                    Work email
                    <input type="email" required />
                  </label>

                  <label>
                    Sector
                    <select defaultValue="Hotels & Hospitality">
                      <option>Hotels & Hospitality</option>
                      <option>Food & Beverage</option>
                      <option>Education</option>
                      <option>Construction & Landscaping</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    Where does ambiguity exist today?
                    <textarea rows="5" required />
                  </label>

                  <button className="form-submit" type="submit">
                    Start the conversation
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <strong>Bow & Arrow Analytics</strong>
            <p>
              Creating visibility, clarity and operational improvement for
              organisations in Ireland and beyond.
            </p>
          </div>

          <div className="footer-links">
            <strong>Explore</strong>
            <a href="#why">Why us</a>
            <a href="#sectors">Sectors</a>
            <a href="#approach">Approach</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-contact">
            <strong>Talk to Bryan</strong>
            <a href="tel:+353871854333">+353 87 185 4333</a>
            <p>Newbridge, Ireland</p>
            <p>Working internationally</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Bow & Arrow Analytics. Illustrative dashboard metrics are not
          client results.
        </div>
      </footer>
    </div>
  );
}

export default App;