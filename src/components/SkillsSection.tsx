/**
 * Skills Section Component
 * Displays skills in three categories:
 * 1. Skills Attained - Technologies I already know
 * 2. Skills to Learn - Technologies I'm planning to learn
 * 3. Tools & Environment - Development tools I use
 */

// Skills data organized by category
const skillsAttained = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Node.js",
  "Digital Engineering",
];

const skillsToLearn = [
  "Cloud Computing Fundamentals",
  "Computer Networking Basics",
  "Linux (Basic Commands)",
  "Git & Version Control",
  "AWS / Azure Fundamentals",
];

const toolsAndEnvironment = [
  "Fedora Linux",
  "Dell Laptop",
  "VS Code",
  "GitHub (basic usage)",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skills Attained Card */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover">
            <div className="flex items-center gap-3 mb-6">
              {/* Check icon */}
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--skill-attained)/0.15)] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[hsl(var(--skill-attained))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Skills Attained
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsAttained.map((skill) => (
                <span key={skill} className="skill-badge skill-badge-attained">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skills to Learn Card */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover">
            <div className="flex items-center gap-3 mb-6">
              {/* Book icon */}
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--skill-learning)/0.15)] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[hsl(var(--skill-learning))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Skills Yet to Gain
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsToLearn.map((skill) => (
                <span key={skill} className="skill-badge skill-badge-learning">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Environment Card */}
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border card-hover md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Tool icon */}
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--skill-tools)/0.15)] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[hsl(var(--skill-tools))]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Tools & Environment
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolsAndEnvironment.map((tool) => (
                <span key={tool} className="skill-badge skill-badge-tools">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
