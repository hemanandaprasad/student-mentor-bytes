/**
 * About Section Component
 * Contains personal introduction and background information
 */

const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
            {/* Profile image placeholder - using initials */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full hero-gradient flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">
                  HP
                </span>
              </div>
            </div>

            {/* About text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an aspiring Cloud Engineer currently pursuing my Bachelor of 
                Computer Applications (BCA) at Kristu Jayanti College, Bengaluru. 
                I am passionate about understanding how cloud platforms power modern 
                applications and how scalable, secure systems are built and managed.
              </p>

              <p>
                My academic journey has helped me build a strong foundation in 
                programming, computer networks, operating systems, and problem-solving. 
                I am currently exploring cloud computing concepts, working with Linux, 
                Git, and learning the basics of AWS/Azure, virtualization, and 
                deployment workflows.
              </p>

              <p>
                I am eager to grow as a cloud professional by gaining hands-on 
                experience, working on real-world projects, and learning industry 
                best practices. I am open to internships, collaborative projects, 
                and learning opportunities in cloud computing and IT infrastructure.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">BCA</p>
                  <p className="text-sm text-muted-foreground">Degree Program</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">Cloud</p>
                  <p className="text-sm text-muted-foreground">Focus Area</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-2xl font-bold text-primary">Bengaluru</p>
                  <p className="text-sm text-muted-foreground">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
