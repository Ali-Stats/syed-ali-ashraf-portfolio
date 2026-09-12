import './App.css'

function App() {
  return (
    <div className="app">

         {/* ==================== ANIMATED DATA BACKGROUND ==================== */}

      <div className="data-background" aria-hidden="true">

        <div className="data-stars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="data-rain">
          <span>0101</span>
          <span>101</span>
          <span>001</span>
          <span>2048</span>
          <span>42</span>
          <span>110</span>
          <span>SQL</span>
          <span>76.18%</span>
          <span>010</span>
          <span>1001</span>
          <span>512</span>
          <span>2026</span>
          <span>0110</span>
          <span>1010</span>
          <span>128</span>
          <span>DATA</span>
          <span>0011</span>
          <span>64</span>
          <span>10010</span>
          <span>BI</span>
          <span>111</span>
          <span>256</span>
          <span>0001</span>
          <span>1011</span>
        </div>

      </div>


      {/* ==================== NAVBAR ==================== */}

      <header className="navbar">
        <div className="container navbar-inner">

          <a href="#home" className="logo">
            <span className="logo-mark">SA</span>
            <span>Syed Ali Ashraf</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Connect
          </a>

        </div>
      </header>


      <main>

        {/* ==================== HERO ==================== */}

        <section id="home" className="hero">

          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="container">

            <div className="hero-content">

              <div className="hero-text">

                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  DATA & BUSINESS INTELLIGENCE
                </div>

                <h1>
                  Syed Ali
                  <br />
                  <span>Ashraf</span>
                </h1>

                <h2>
                  Data Analyst & BI Developer
                </h2>

                <p className="hero-description">
                  I work with data, dashboards and business intelligence
                  technologies to transform complex information into
                  clear and useful insights.
                </p>

                <div className="hero-actions">

                  <a
                    href="#projects"
                    className="button button-primary"
                  >
                    Explore My Work
                    <span>↗</span>
                  </a>

                  <a
                    href="/Syed_Ali_Ashraf_CV.pdf"
                    download="Syed_Ali_Ashraf_CV.pdf"
                    className="button button-secondary"
                  >
                    Download CV
                  </a>

                </div>

              </div>


              {/* HERO ANALYTICS VISUAL */}

              <div className="hero-visual">

                <div className="visual-glow"></div>

                <div className="analytics-window">

                  <div className="window-header">

                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span className="window-title">
                      ANALYTICS / OVERVIEW
                    </span>

                    <span className="window-status">
                      ● LIVE
                    </span>

                  </div>


                  <div className="analytics-content">

                    <div className="analytics-heading">

                      <div>
                        <span>BUSINESS INTELLIGENCE</span>

                        <h3>
                          Data Overview
                        </h3>
                      </div>

                      <span className="analytics-period">
                        2026
                      </span>

                    </div>


                    <div className="mini-cards">

                      <div className="mini-card">
                        <span>DATA</span>
                        <strong>SQL</strong>
                        <small>Analysis</small>
                      </div>

                      <div className="mini-card">
                        <span>BI</span>
                        <strong>Power BI</strong>
                        <small>Reporting</small>
                      </div>

                      <div className="mini-card">
                        <span>VISUAL</span>
                        <strong>Tableau</strong>
                        <small>Dashboards</small>
                      </div>

                    </div>


                    <div className="chart-area">

                      <div className="chart-label">
                        ANALYTICAL WORKFLOW
                      </div>

                      <div className="chart">

                        <div className="chart-grid">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="chart-bars">

                          <i style={{ height: '35%' }}></i>
                          <i style={{ height: '52%' }}></i>
                          <i style={{ height: '43%' }}></i>
                          <i style={{ height: '70%' }}></i>
                          <i style={{ height: '61%' }}></i>
                          <i style={{ height: '84%' }}></i>
                          <i style={{ height: '74%' }}></i>
                          <i style={{ height: '92%' }}></i>

                        </div>

                        <div className="chart-line">

                          <svg
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >

                            <path
                              d="M0,115 C55,100 65,115 110,90 C155,65 160,90 210,70 C260,50 275,65 315,45 C355,25 390,55 425,30 C450,15 470,25 500,10"
                            />

                          </svg>

                        </div>

                      </div>

                    </div>


                    <div className="workflow">

                      <div className="workflow-item">
                        <span>01</span>
                        <strong>COLLECT</strong>
                      </div>

                      <div className="workflow-line"></div>

                      <div className="workflow-item">
                        <span>02</span>
                        <strong>TRANSFORM</strong>
                      </div>

                      <div className="workflow-line"></div>

                      <div className="workflow-item">
                        <span>03</span>
                        <strong>ANALYZE</strong>
                      </div>

                      <div className="workflow-line"></div>

                      <div className="workflow-item">
                        <span>04</span>
                        <strong>INSIGHT</strong>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="hero-bottom">

              <span>POWER BI</span>
              <span>TABLEAU</span>
              <span>SQL</span>
              <span>MICROSOFT FABRIC</span>
              <span>PYTHON</span>
              <span>AI / LLM</span>

            </div>

          </div>

        </section>


        {/* ==================== ABOUT ==================== */}

        <section id="about" className="section about-section">

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-number">01</span>
                <span className="section-label">
                  ABOUT ME
                </span>
              </div>

              <h2>
                Data meets
                <span> business.</span>
              </h2>

            </div>


            <div className="about-grid">

              <div className="about-copy">

                <p className="large-copy">
                  I'm a Data Analyst and BI Developer focused on
                  building analytical solutions that help turn data
                  into something people can understand and use.
                </p>

                <p>
                  My professional experience includes developing
                  reports and dashboards using Power BI and Tableau,
                  working with SQL and databases, preparing data for
                  analysis, and publishing BI solutions for business
                  users.
                </p>

                <p>
                  Alongside my professional work, I build portfolio
                  projects around Microsoft Fabric, APIs, PostgreSQL,
                  AI-assisted analytics and modern data workflows.
                </p>

              </div>


              <div className="about-panel">

                <div className="about-panel-header">
                  <span>CORE FOCUS</span>
                  <span>+</span>
                </div>

                <div className="focus-list">

                  <div>
                    <span>01</span>
                    <strong>
                      Business Intelligence
                    </strong>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>
                      Data Visualization
                    </strong>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>
                      Data & SQL
                    </strong>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>
                      Analytics Engineering
                    </strong>
                  </div>

                  <div>
                    <span>05</span>
                    <strong>
                      AI-assisted Analytics
                    </strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================== EXPERIENCE ==================== */}

        <section
          id="experience"
          className="section experience-section"
        >

          <div className="container">

            <div className="section-heading compact">

              <div>
                <span className="section-number">02</span>

                <span className="section-label">
                  EXPERIENCE
                </span>
              </div>

              <h2>
                Professional
                <span> journey.</span>
              </h2>

            </div>


            <div className="experience-list">

              <article className="experience-item">

                <div className="experience-date">
                  <span>2025 — PRESENT</span>
                </div>

                <div className="experience-main">

                  <div className="experience-title">

                    <div>

                      <h3>
                        Tableau Developer
                      </h3>

                      <p>
                         Uneecops Business Solutions · Consultant
                      </p>

                    </div>

                    <span className="experience-arrow">
                      ↗
                    </span>

                  </div>


                  <div className="experience-project">

                    <span>
                      PROJECT
                    </span>

                    <div>

                      <h4>
                        Assam Sewa Setu
                      </h4>

                      <p>
                        Tableau Developer working with PostgreSQL
                        data sources and Tableau Desktop to develop
                        dashboards and reports, publish workbooks to
                        Tableau Server, and manage user access in a
                        multi-dashboard environment.
                      </p>

                      <div className="tag-row">
                        <span>Tableau</span>
                        <span>PostgreSQL</span>
                        <span>Tableau Server</span>
                      </div>

                    </div>

                  </div>

                </div>

              </article>


              <article className="experience-item">

                <div className="experience-date">
                  <span>
                    SEP — DEC 2025
                  </span>
                </div>

                <div className="experience-main">

                  <div className="experience-title">

                    <div>

                      <h3>
                        Power BI Developer
                      </h3>

                      <p>
                        Payal Group · Uneecops Business Solutions
                      </p>

                    </div>

                    <span className="experience-arrow">
                      ↗
                    </span>

                  </div>


                  <div className="experience-project">

                    <span>
                      PROJECT
                    </span>

                    <div>

                      <h4>
                        Power BI Reporting
                      </h4>

                      <p>
                        Developed analytical reports using Power BI
                        and DAX, extracted data from SAP using SQL
                        queries for reporting, and published reports
                        to the Power BI Service testing environment.
                      </p>

                      <div className="tag-row">
                        <span>Power BI</span>
                        <span>DAX</span>
                        <span>SQL</span>
                        <span>SAP</span>
                      </div>

                    </div>

                  </div>

                </div>

              </article>


              <article className="experience-item">

                <div className="experience-date">
                  <span>2024</span>
                </div>

                <div className="experience-main">

                  <div className="experience-title">

                    <div>

                      <h3>
                        MIS Coordinator
                      </h3>

                      <p>
                        Froximo Technology Pvt Ltd
                      </p>

                    </div>

                    <span className="experience-arrow">
                      ↗
                    </span>

                  </div>

                </div>

              </article>


              <article className="experience-item">

                <div className="experience-date">
                  <span>
                    2016 — 2022
                  </span>
                </div>

                <div className="experience-main">

                  <div className="experience-title">

                    <div>

                      <h3>
                        Engineering & Construction
                      </h3>

                      <p>
                        Buildwauks Construction · Larsen & Toubro
                        Subcontractor · Gardenia · Prism Cement
                      </p>

                    </div>

                    <span className="experience-arrow">
                      ↗
                    </span>

                  </div>

                  <p className="experience-note">
                    Earlier professional experience in civil
                    engineering, site operations and construction.
                  </p>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ==================== PROJECTS ==================== */}

        <section
          id="projects"
          className="section projects-section"
        >

          <div className="container">

            <div className="section-heading">

              <div>
                <span className="section-number">03</span>

                <span className="section-label">
                  SELECTED PROJECTS
                </span>
              </div>

              <h2>
                Work built
                <span> with data.</span>
              </h2>

            </div>


            <div className="projects-grid">


              {/* PROJECT 01 */}

              <article className="project-card project-featured">

                <div className="project-visual project-visual-fabric">

                  <div className="simple-project-visual">

                    <span>01</span>

                    <strong>
                      MICROSOFT FABRIC
                    </strong>

                    <small>
                      LAKEHOUSE · ONELAKE · POWER BI
                    </small>

                  </div>

                </div>


                <div className="project-body">

                  <div className="project-meta">
                    <span>01</span>
                    <span>BI / DATA PLATFORM</span>
                  </div>

                  <h3>
                    Power BI & Microsoft
                    <br />
                    Fabric Analytics Platform
                  </h3>

                  <p>
                    An end-to-end analytics platform exploring
                    Microsoft Fabric, OneLake, Lakehouse architecture,
                    SQL Analytics Endpoint, Power BI, Power Query,
                    DAX and semantic models.
                  </p>

                  <div className="tag-row">
                    <span>Microsoft Fabric</span>
                    <span>OneLake</span>
                    <span>Lakehouse</span>
                    <span>Power BI</span>
                    <span>DAX</span>
                  </div>

                  <a
                    href="https://github.com/Ali-Stats/ga4-fabric-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </div>

              </article>


              {/* PROJECT 02 */}

              <article className="project-card">

                <div className="project-visual project-visual-weather">

                  <div className="simple-project-visual">

                    <span>02</span>

                    <strong>
                      WEATHER API
                    </strong>

                    <small>
                      PYTHON · REST API · POSTGRESQL
                    </small>

                  </div>

                </div>


                <div className="project-body">

                  <div className="project-meta">
                    <span>02</span>
                    <span>API / SQL</span>
                  </div>

                  <h3>
                    Weather API →
                    <br />
                    PostgreSQL Analytics
                  </h3>

                  <p>
                    A data analytics application using weather API
                    data, Python and PostgreSQL to collect, store
                    and analyze information through SQL.
                  </p>

                  <div className="tag-row">
                    <span>Python</span>
                    <span>REST API</span>
                    <span>PostgreSQL</span>
                    <span>SQL</span>
                  </div>

                  <a
                    href="https://github.com/Ali-Stats/weather-sql-analytics-using-weatherapi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </div>

              </article>


              {/* PROJECT 03 */}

              <article className="project-card">

                <div className="project-visual project-visual-supply">

                  <div className="simple-project-visual">

                    <span>03</span>

                    <strong>
                      SUPPLY CHAIN
                    </strong>

                    <small>
                      REST API · SQL · TABLEAU
                    </small>

                  </div>

                </div>


                <div className="project-body">

                  <div className="project-meta">
                    <span>03</span>
                    <span>API / TABLEAU</span>
                  </div>

                  <h3>
                    Supply Chain Analytics
                    <br />
                    API & Tableau
                  </h3>

                  <p>
                    A portfolio project focused on exposing
                    supply-chain operational data through REST API
                    endpoints and developing analytical dashboards
                    in Tableau.
                  </p>

                  <div className="tag-row">
                    <span>Python</span>
                    <span>REST API</span>
                    <span>SQL</span>
                    <span>Tableau</span>
                  </div>

                  <a
                    href="https://github.com/Ali-Stats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </div>

              </article>


              {/* PROJECT 04 */}

              <article className="project-card">

                <div className="project-visual project-visual-ai">

                  <div className="simple-project-visual">

                    <span>04</span>

                    <strong>
                      AI + POWER BI
                    </strong>

                    <small>
                      MCP · LANGCHAIN · LLMs
                    </small>

                  </div>

                </div>


                <div className="project-body">

                  <div className="project-meta">
                    <span>04</span>
                    <span>AI / ANALYTICS</span>
                  </div>

                  <h3>
                    Power BI MCP &
                    <br />
                    AI Analytics Assistant
                  </h3>

                  <p>
                    An AI-assisted analytics project exploring
                    MCP-based interaction between an LLM workflow
                    and Power BI for natural-language analytical
                    workflows.
                  </p>

                  <div className="tag-row">
                    <span>Power BI</span>
                    <span>MCP</span>
                    <span>LangChain</span>
                    <span>LangGraph</span>
                    <span>LLMs</span>
                  </div>

                  <a
                    href="https://github.com/Ali-Stats"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </div>

              </article>


              {/* PROJECT 05 */}

              <article className="project-card">

                <div className="project-visual project-visual-pizza">

                  <div className="simple-project-visual">

                    <span>05</span>

                    <strong>
                      PIZZA SALES
                    </strong>

                    <small>
                      SQL · POWER QUERY · POWER BI
                    </small>

                  </div>

                </div>


                <div className="project-body">

                  <div className="project-meta">
                    <span>05</span>
                    <span>POWER BI / SQL</span>
                  </div>

                  <h3>
                    Pizza Sales
                    <br />
                    Analytics
                  </h3>

                  <p>
                    An end-to-end analytics project involving data
                    preparation, SQL-based business analysis and an
                    interactive Power BI dashboard.
                  </p>

                  <div className="tag-row">
                    <span>Excel</span>
                    <span>SQL</span>
                    <span>Power BI</span>
                    <span>Power Query</span>
                  </div>

                  <a
                    href="https://github.com/Ali-Stats/Data-Analyst-Portfolio-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                </div>

              </article>

            </div>

          </div>

        </section>


        {/* ==================== SKILLS ==================== */}

        <section
          id="skills"
          className="section skills-section"
        >

          <div className="container">

            <div className="section-heading">

              <div>

                <span className="section-number">
                  04
                </span>

                <span className="section-label">
                  TOOLKIT
                </span>

              </div>

              <h2>
                Technologies I
                <span> work with.</span>
              </h2>

            </div>


            <div className="skills-grid">

              <div className="skill-card">
                <span>01</span>
                <h3>
                  Business Intelligence
                </h3>
                <p>
                  Power BI, Tableau Desktop, Tableau Server, Excel
                </p>
              </div>


              <div className="skill-card">
                <span>02</span>
                <h3>
                  Power BI & Fabric
                </h3>
                <p>
                  DAX, Power Query, Power BI Service, Data Modeling,
                  Semantic Models, Microsoft Fabric, Lakehouse, OneLake
                </p>
              </div>


              <div className="skill-card">
                <span>03</span>
                <h3>
                  Data & Databases
                </h3>
                <p>
                  SQL, PostgreSQL, MySQL, MongoDB, SAP
                </p>
              </div>


              <div className="skill-card">
                <span>04</span>
                <h3>
                  Programming & APIs
                </h3>
                <p>
                  Python, Pandas, NumPy, Matplotlib, REST APIs
                </p>
              </div>


              <div className="skill-card">
                <span>05</span>
                <h3>
                  AI & Analytics
                </h3>
                <p>
                  LangChain, LangGraph, Ollama, OpenAI API, MCP, LLMs
                </p>
              </div>


              <div className="skill-card">
                <span>06</span>
                <h3>
                  Development Tools
                </h3>
                <p>
                  Git, GitHub, VS Code, TypeScript
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ==================== EDUCATION ==================== */}

        <section className="section education-section">

          <div className="container">

            <div className="education-grid">

              <div>

                <span className="section-label">
                  EDUCATION
                </span>

                <h2>
                  B.Tech
                  <br />
                  <span>
                    Civil Engineering
                  </span>
                </h2>

              </div>


              <div className="education-details">

                <div>
                  <span>INSTITUTION</span>
                  <strong>BBD NITM, Lucknow</strong>
                </div>

                <div>
                  <span>YEAR</span>
                  <strong>2016</strong>
                </div>

                <div>
                  <span>RESULT</span>
                  <strong>76.18%</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================== CONTACT ==================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-glow"></div>

          <div className="container">

            <div className="contact-content">

              <span className="section-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's work with
                <br />
                <span>
                  data.
                </span>
              </h2>

              <p>
                I'm open to opportunities involving data analytics,
                business intelligence, visualization and modern
                data technologies.
              </p>


              <div className="contact-actions">

                <a
                  href="mailto:syeddaliashraf@gmail.com"
                  className="button button-primary"
                >
                  Get In Touch
                  <span>↗</span>
                </a>


                <a
                  href="tel:+918090417233"
                  className="button button-secondary"
                >
                  Call Me
                </a>


                <a
                  href="https://www.linkedin.com/in/syed-ali-ashraf-1451a1344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  LinkedIn
                </a>


                <a
                  href="https://github.com/Ali-Stats"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ==================== FOOTER ==================== */}

      <footer className="footer">

        <div className="container footer-inner">

          <span>
            © 2026 Syed Ali Ashraf
          </span>

          <span>
            DATA · BI · ANALYTICS
          </span>

          <a href="#home">
            BACK TO TOP ↑
          </a>

        </div>

      </footer>

    </div>
  )
}

export default App