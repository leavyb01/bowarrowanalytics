import bryanPhoto from "./assets/bryan-leavy.jpg";
import ronanPhoto from "./assets/ronan-maher.jpg";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Eye,
  Check,
  GraduationCap,
  Hammer,
  Hotel,
  LineChart,
  Menu,
  Phone,
  Search,
  Target,
  TrendingUp,
  UtensilsCrossed,
  X,
  Compass,
  MoveRight,
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
    icon: Compass,
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
    price: "",
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
    price: "",
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
    price: "",
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

function BryanStory() {
  return (
    <div className="website founder-story-page">
      <header className="site-header">
        <div className="nav-container">
          <a href="/" className="brand-link" aria-label="Bow & Arrow Analytics home">
            <span className="brand-mark">
              <Target size={70} />
            </span>

            <span className="brand-text">
              <strong>Bow & Arrow</strong>
              <small>Analytics</small>
            </span>
          </a>

          <a href="/#contact" className="nav-cta">
            Start a conversation
          </a>
        </div>
      </header>

      <main>
        <section className="founder-story-hero">
          <div className="founder-story-container">
            <div className="founder-story-copy">
              <a href="/" className="back-link">
                <ArrowRight size={17} />
                Back to Bow & Arrow Analytics
              </a>
              <p className="section-kicker">Bryan Leavy · Co-Founder</p>
              <h1>From the construction site to operational excellence.</h1>
              <p className="founder-story-lead">
                Turning practical experience into lasting improvement.
              </p>
            </div>

            <div className="founder-story-image-wrap">
              <img
                src={bryanPhoto}
                alt="Bryan Leavy"
                className="founder-story-image"
              />
            </div>
          </div>
        </section>

        <section className="founder-story-content">
          <div className="founder-story-container founder-story-body">
            <p>
              I didn't start my career in a boardroom. I started it on
              construction sites.
            </p>

            <p>
              Working hands-on in construction taught me the importance of
              strong foundations, attention to detail, and the value of seeing
              a job through from start to finish. Long before I entered the
              world of analytics, continuous improvement, and project
              management, I was learning first-hand how people, processes, and
              planning combine to deliver results.
            </p>

            <p>
              I later joined a global organisation as a Warehouse Operator,
              gaining a front-row seat to the complexity of large-scale
              operations and supply chains. While working on the shop floor, I
              became fascinated by how processes could be improved, how waste
              could be reduced, and how teams could be supported to work more
              effectively.
            </p>

            <p>That curiosity led me into project management and operational excellence.</p>

            <p>
              As my responsibilities grew, so did the scale of the challenges I
              was trusted to solve. Through successive promotions, I progressed
              from frontline operations into Operational Excellence leadership,
              leading transformation initiatives focused on LEAN operational
              processes, supply chain improvement, and organisational
              efficiency.
            </p>

            <p>
              Throughout my career, I have managed multi-million euro projects,
              worked with stakeholders across multiple countries, and led
              programmes that delivered measurable improvements in performance,
              productivity, and process effectiveness. Along the way, I earned
              my LEAN Black Belt certification and Six Sigma Green Belt
              certification, strengthening my ability to combine structured
              methodologies with practical, real-world experience.
            </p>

            <p>But one lesson has stood out above all others.</p>

            <p>
              The biggest opportunities for improvement are rarely hidden in the
              data alone. They're found where people, processes, and information
              intersect. The most successful transformations happen when
              organisations create visibility, build clarity, and bring people
              with them on the journey.
            </p>

            <p>Those principles became the foundation of Bow & Arrow Analytics.</p>

            <p>
              Starting this business has been a long-held ambition of mine.
              While I've been fortunate to work on transformative initiatives
              within large global organisations, I wanted the opportunity to
              help a wider range of businesses unlock the same benefits. Many
              organisations know they can perform better, but they struggle to
              identify where the real opportunities exist.
            </p>

            <p>That's where I help.</p>

            <p>
              Through data analytics, process improvement, operational
              excellence, and practical change management, I help organisations
              uncover what's holding them back and focus on what moves them
              forward.
            </p>

            <p>
              My approach is simple: understand the reality of the business,
              work alongside the people closest to the process, and deliver
              solutions that create lasting value.
            </p>

            <blockquote>
              Sustainable improvement isn't about complicated frameworks or
              impressive dashboards. It's about giving people the visibility,
              clarity, and confidence to make better decisions every day.
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-bottom">
          © 2026 Bow & Arrow Analytics. Illustrative dashboard metrics are not
          client results.
        </div>
      </footer>
    </div>
  );
}

function RonanStory() {
  return (
    <div className="website founder-story-page">
      <header className="site-header">
        <div className="nav-container">
          <a href="/" className="brand-link" aria-label="Bow & Arrow Analytics home">
            <span className="brand-mark">
              <Target size={70} />
            </span>

            <span className="brand-text">
              <strong>Bow & Arrow</strong>
              <small>Analytics</small>
            </span>
          </a>

          <a href="/#contact" className="nav-cta">
            Start a conversation
          </a>
        </div>
      </header>

      <main>
        <section className="founder-story-hero">
          <div className="founder-story-container">
            <div className="founder-story-copy">
              <a href="/" className="back-link">
                <ArrowRight size={17} />
                Back to Bow & Arrow Analytics
              </a>
              <p className="section-kicker">Ronan Maher · Co-Founder</p>
              <h1>Built from the shop floor.</h1>
              <p className="founder-story-lead">
                Turning operational experience into meaningful change.
              </p>
            </div>

            <div className="founder-story-image-wrap">
              <img
                src={ronanPhoto}
                alt="Ronan Maher"
                className="founder-story-image"
              />
            </div>
          </div>
        </section>

        <section className="founder-story-content">
          <div className="founder-story-container founder-story-body">
            <p>
              My background spans construction, pharmaceutical manufacturing,
              safety leadership, and continuous improvement. That journey has
              given me a unique perspective on business performance: the best
              improvements are discovered where the work happens.
            </p>

            <p>
              From operating heavy machinery on construction projects to
              managing production activities within a GMP-regulated
              pharmaceutical environment, I developed a practical
              understanding of operations, quality, safety, and delivery.
            </p>

            <p>
              Those experiences taught me that sustainable improvement is not
              achieved through reports alone. It comes from engaging with
              people, understanding process constraints, and identifying the
              root causes that prevent organisations from performing at their
              best.
            </p>

            <p>
              As a Continuous Improvement Specialist, I partner with teams
              across multiple functions to simplify processes, reduce
              inefficiencies, strengthen compliance, and deliver measurable
              results while maintaining the highest standards of safety and
              product quality.
            </p>

            <blockquote>
              Great organisations thrive when operational experience and
              data-driven decision making work together.
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-bottom">
          © 2026 Bow & Arrow Analytics. Illustrative dashboard metrics are not
          client results.
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  if (window.location.pathname === "/ronan-maher") {
    return <RonanStory />;
  }

  if (window.location.pathname === "/bryan-leavy") {
    return <BryanStory />;
  }

 async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const response = await fetch(
    "https://formspree.io/f/myeyjjnv",
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (response.ok) {
    setFormSent(true);
    event.target.reset();
  } else {
    alert("Sorry, something went wrong. Please try again.");
  }
}
  return (
    <div className="website">
      <header className="site-header">
        <div className="nav-container">
          <a href="#top" className="brand-link" aria-label="Bow & Arrow Analytics home">
            <span className="brand-mark">
              <Target size={70

              } />
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
            <a href="#pricing">Partnerships</a>
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
            <a href="#pricing">Partnerships</a>
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
                Based in Ireland. Partnering with organisations globally.
              </p>
            </div>

            <DashboardPreview />
          </div>

          <div className="hero-strip">
            <span>Visibility</span>
            <span>Clarity</span>
            <span>Insight</span>
            <span className="hero-strip-pair">
              <span>Improvement</span>
              <span>Momentum</span>
            </span>
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
      <Eye size={65} />
    </div>

    <h3>Visibility</h3>

    <p>
      Reveal what is happening across the operation and establish one dependable
      view of performance.
    </p>
  </article>

  <article className="clarity-card clarity-card-highlight">
    <span className="card-number">02</span>
    <div className="clarity-icon">
      <Compass size={65} />
    </div>

    <h3>Clarity</h3>

    <p>
      Understand why outcomes are changing and focus attention on the losses and
      opportunities that matter.
    </p>
  </article>

  <article className="clarity-card">
    <span className="card-number">03</span>
    <div className="clarity-icon">
      <Search size={65} />
    </div>

    <h3>Insight</h3>

    <p>
      Connect data, people and processes to uncover patterns, opportunities and
      hidden constraints.
    </p>
  </article>

  <article className="clarity-card clarity-card-highlight">
    <span className="card-number">04</span>
    <div className="clarity-icon">
      <TrendingUp size={65} />
    </div>

    <h3>Improvement</h3>

    <p>
      Translate insight into focused action, continuous improvement and
      measurable operational gains.
    </p>
  </article>

  <article className="clarity-card">
    <span className="card-number">05</span>
    <div className="clarity-icon">
      <MoveRight size={65} />
    </div>

    <h3>Momentum</h3>

    <p>
      Build sustainable progress, stronger decision making and long-term
      organisational capability.
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
              <h2>Choose the right level of partnership for your organisation.</h2>
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
          <div className="section-container">
            <p className="section-kicker">Meet the founders</p>

            <h2>
              Built on operational experience, analytics and continuous
              improvement.
            </h2>

            <div className="founder-grid">
              <div className="founder-profile">
                <div className="founder-image-frame">
                  <img
                    src={bryanPhoto}
                    alt="Bryan Leavy"
                    className="founder-photo"
                  />
                  <h3>Bryan Leavy</h3>
                  <p className="founder-role">Co-Founder</p>
                  <a href="/bryan-leavy" className="founder-link">
                    Explore Bryan's Journey →
                  </a>
                </div>
              </div>

              <div className="founder-profile">
                <div className="founder-image-frame">
                  <img
                    src={ronanPhoto}
                    alt="Ronan Maher"
                    className="founder-photo"
                  />
                  <h3>Ronan Maher</h3>
                  <p className="founder-role">Co-Founder</p>
                 <a href="/ronan-maher" className="founder-link">
                    Explore Ronan's Journey →
                  </a>
                </div>
              </div>
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
                    Your enquiry has been received successfully. We'll review your challenge and be in touch shortly.
                  </p>
                  <button type="button" onClick={() => setFormSent(false)}>
                    Return to form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <label htmlFor="contact-name">
                      Name
                      <input
                        id="contact-name"
                        type="text"
                        name="ContactName"
                        placeholder="Your name"
                        required
                      />
                    </label>

                    <label htmlFor="organisation">
                      Organisation
                      <input
                        id="organisation"
                        type="text"
                        name="Organisation"
                        placeholder="Organisation name"
                      />
                    </label>

                    <label htmlFor="email">
                      Email
                      <input
                        id="email"
                        type="email"
                        name="Email"
                        placeholder="Your email"
                        required
                      />
                    </label>

                    <label htmlFor="sector">
                      Sector
                      <select name="Sector" id="sector" defaultValue="">
                        <option value="" disabled>
                          Select your sector
                        </option>
                        <option>Hotels & Hospitality</option>
                        <option>Food & Beverage</option>
                        <option>Education</option>
                        <option>Construction & Landscaping</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label htmlFor="challenge">
                      Challenge
                      <textarea
                        id="challenge"
                        name="Challenge"
                        rows="5"
                        placeholder="What challenge, frustration, inefficiency or lack of visibility are you trying to solve?"
                        required
                      />
                    </label>
                  </div>

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
            <a href="#pricing">Partnerships</a>
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