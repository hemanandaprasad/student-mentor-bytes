/**
 * Hero Section Component
 * The main landing area with name and title
 * First thing visitors see when they open the portfolio
 */

const HeroSection = () => {
  // Function to scroll down to about section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Background decoration - simple circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="text-primary-foreground/80 text-lg sm:text-xl mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in stagger-1">
          A Hemananda Prasad
        </h1>

        {/* Title/Role */}
        <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 animate-fade-in stagger-2">
          Aspiring Cloud Engineer | BCA Student
        </p>

        {/* University name */}
        <p className="text-primary-foreground/70 mb-12 animate-fade-in stagger-3">
          Kristu Jayanti University, Bengaluru
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-4">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-card text-primary font-semibold rounded-lg hover:bg-card/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-foreground/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
