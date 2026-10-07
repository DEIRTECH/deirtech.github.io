import "./App.css";

import { publishedProjects } from "./content/projects";
import { buildNavigation, siteContent } from "./content/site";

function App() {
  const hasPublishedProjects = publishedProjects.length > 0;
  const navigation = buildNavigation(
    hasPublishedProjects,
    Boolean(siteContent.contact),
  );

  return (
    <>
      <a className="skip-link" href="#main-content">
        {siteContent.accessibility.skipLinkLabel}
      </a>
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <a className="brand" href={siteContent.homeHref}>
            <img
              src="/assets/deirtech-wordmark.png"
              alt={siteContent.brandName}
              width="1254"
              height="1254"
            />
          </a>
          <nav aria-label={siteContent.accessibility.navigationLabel}>
            <ul className="site-navigation">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="header-cta" href={siteContent.hero.ctaHref}>
            {siteContent.hero.ctaLabel}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="site-shell hero__grid">
            <div className="hero__content">
              <p className="eyebrow">
                <span aria-hidden="true">01</span>
                {siteContent.hero.eyebrow}
              </p>
              <h1 id="hero-title">
                {siteContent.hero.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
              <p className="hero__description">{siteContent.hero.description}</p>
              <a className="button-link" href={siteContent.hero.ctaHref}>
                {siteContent.hero.ctaLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className="hero-visual">
              <img
                src="/assets/ethereal-blue-arc.png"
                alt=""
                width="2048"
                height="768"
                fetchPriority="high"
              />
              <figcaption>
                <span>{siteContent.hero.visualLabel}</span>
                <span aria-hidden="true">↗</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="services"
          className="section services"
          aria-labelledby="services-title"
        >
          <div className="site-shell">
            <div className="section-intro">
              <p className="eyebrow">
                <span aria-hidden="true">02</span>
                {siteContent.services.eyebrow}
              </p>
              <div>
                <h2 id="services-title">{siteContent.services.title}</h2>
                <p>{siteContent.services.description}</p>
              </div>
            </div>
            <div className="service-list">
              {siteContent.services.items.map((service) => (
                <article className="service-row" key={service.title}>
                  <span className="service-row__index" aria-hidden="true">
                    {service.index}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-row__mark" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="section approach"
          aria-labelledby="approach-title"
        >
          <img
            className="approach__visual"
            src="/assets/neon-horizons.png"
            alt=""
            width="2048"
            height="768"
            loading="lazy"
          />
          <div className="approach__scrim" aria-hidden="true" />
          <div className="site-shell approach__content">
            <div className="section-intro section-intro--dark">
              <p className="eyebrow">
                <span aria-hidden="true">03</span>
                {siteContent.approach.eyebrow}
              </p>
              <div>
                <h2 id="approach-title">{siteContent.approach.title}</h2>
                <p>{siteContent.approach.description}</p>
              </div>
            </div>
            <ol className="approach-steps">
              {siteContent.approach.steps.map((step) => (
                <li key={step.title}>
                  <span>{step.index}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {hasPublishedProjects ? (
          <section id="work" className="section work" aria-labelledby="work-title">
            <div className="site-shell">
              <div className="section-intro">
                <p className="eyebrow">
                  <span aria-hidden="true">04</span>
                  Work
                </p>
                <h2 id="work-title">{siteContent.work.title}</h2>
              </div>
              <div className="project-grid">
                {publishedProjects.map((project) => (
                  <article className="project-card" key={project.slug}>
                    <img src={project.image} alt="" />
                    <div className="project-card__content">
                      <p className="eyebrow">{project.year}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                      <ul aria-label={siteContent.work.servicesLabel}>
                        {project.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                      {project.href ? (
                        <a href={project.href}>{siteContent.work.projectLinkLabel}</a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {siteContent.contact ? (
          <section
            id="contact"
            className="section contact"
            aria-labelledby="contact-title"
          >
            <div className="site-shell contact__grid">
              <p className="eyebrow">
                <span aria-hidden="true">04</span>
                {siteContent.contact.eyebrow}
              </p>
              <div>
                <h2 id="contact-title">{siteContent.contact.title}</h2>
                <p>{siteContent.contact.description}</p>
                <a
                  className="button-link contact__cta"
                  href={siteContent.contact.ctaHref}
                >
                  {siteContent.contact.ctaLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="contact__signal" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </section>
        ) : null}
      </main>

      <footer className="site-footer">
        <div className="site-shell site-footer__inner">
          <img
            src="/assets/deirtech-wordmark.png"
            alt={siteContent.brandName}
            width="1254"
            height="1254"
          />
          <p>Product Engineering &amp; AI</p>
          <p>
            © {new Date().getFullYear()} {siteContent.footer.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
