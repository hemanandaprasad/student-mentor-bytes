/**
 * Projects Section Component
 * Displays the portfolio project (this website)
 * This is my first full-stack project
 */

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">What I've been working on</p>
        </div>

        {/* Project Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border card-hover">
            {/* Project Image/Banner */}
            <div className="h-48 hero-gradient flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <svg
                  className="w-16 h-16 mx-auto mb-2 opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <p className="text-sm opacity-70">Portfolio Website</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Personal Portfolio Website
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This portfolio website is my first full-stack project, created to 
                understand frontend development, backend connectivity, database 
                integration, GitHub usage, and basic deployment.
              </p>

              {/* Technologies used */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-2">
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-badge skill-badge-attained">HTML5</span>
                  <span className="skill-badge skill-badge-attained">CSS3</span>
                  <span className="skill-badge skill-badge-attained">JavaScript</span>
                  <span className="skill-badge skill-badge-attained">React</span>
                  <span className="skill-badge skill-badge-learning">PostgreSQL</span>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-6">
                <p className="text-sm font-medium text-foreground mb-2">
                  Key Features:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[hsl(var(--skill-attained))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Single page application with smooth navigation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[hsl(var(--skill-attained))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Responsive design for all devices
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[hsl(var(--skill-attained))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Contact form connected to database
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[hsl(var(--skill-attained))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Clean and modern UI design
                  </li>
                </ul>
              </div>

              {/* Project Link */}
              <a
                href="https://github.com/hemanandaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
