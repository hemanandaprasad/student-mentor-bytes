# Personal Portfolio Website

## 📋 Project Overview

This is a **single-page portfolio website** created as a college project for BCA at Kristu Jayanti University, Bengaluru. The project demonstrates frontend development, backend connectivity, and database integration.

**Author:** A Hemananda Prasad  
**Email:** hemanandan21@gmail.com  
**GitHub:** [github.com/hemanandaprasad](https://github.com/hemanandaprasad)

---

## 🛠️ Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5 & CSS3** - Core web technologies

### Backend
- **Lovable Cloud** - Backend-as-a-Service (uses PostgreSQL database)
- **REST API** - For contact form submissions

### Database
- **PostgreSQL** - Relational database for storing contact submissions

---

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation bar
│   │   ├── HeroSection.tsx # Landing section
│   │   ├── AboutSection.tsx # About me
│   │   ├── SkillsSection.tsx # Skills display
│   │   ├── ProjectsSection.tsx # Projects
│   │   ├── ContactSection.tsx # Contact form
│   │   └── Footer.tsx      # Footer
│   ├── integrations/       # Backend integration
│   │   └── supabase/       # Database client
│   ├── pages/
│   │   └── Index.tsx       # Main page
│   ├── index.css           # Global styles
│   └── main.tsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
└── README.md               # This file
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or bun package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/hemanandaprasad/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

---

## 📝 Features

1. **Responsive Design** - Works on all screen sizes (mobile, tablet, desktop)
2. **Smooth Scrolling** - Navigation with smooth scroll animations
3. **Contact Form** - Working form that saves data to database
4. **Modern UI** - Clean, professional design with subtle animations
5. **Accessibility** - Semantic HTML and ARIA labels

---

## 💾 Database Schema

The contact form submissions are stored in a `contact_submissions` table:

| Column     | Type      | Description              |
|------------|-----------|--------------------------|
| id         | UUID      | Unique identifier        |
| name       | TEXT      | Sender's name            |
| email      | TEXT      | Sender's email           |
| message    | TEXT      | Message content          |
| created_at | TIMESTAMP | Date and time submitted  |

---

## 🔧 For Mentor Testing

### How to Test the Website

1. **Navigation**
   - Click on menu items (Home, About, Skills, Projects, Contact)
   - Observe smooth scrolling to each section

2. **Responsive Design**
   - Resize browser window to test mobile layout
   - Check hamburger menu on mobile view

3. **Contact Form**
   - Fill in name, email, and message
   - Click "Send Message"
   - Observe success message

4. **External Links**
   - GitHub and LinkedIn links open in new tabs
   - Email link opens default mail client

---

## 📦 Deployment

This website is hosted on **Lovable** (free hosting).

### Live URL
The website is accessible at the published URL after deployment.

### How to Deploy Updates
1. Make changes to the code
2. Push to GitHub repository
3. The site updates automatically via CI/CD

---

## 🌐 Custom Domain Setup (Optional)

To connect a custom domain (.com, .org, .in):

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In Lovable: Go to Project Settings → Domains
3. Click "Connect Domain" and enter your domain
4. Add the DNS records provided:
   - A Record: Point to the provided IP address
   - TXT Record: For verification
5. Wait for DNS propagation (up to 72 hours)

---

## 📌 Sample Git Commit Messages

```
Initial commit - project setup with React and Tailwind

Added navigation header with mobile menu

Created hero section with gradient background

Implemented about section with profile info

Added skills section with three categories

Built projects section with portfolio card

Implemented contact form with database connection

Added footer with social links

Fixed mobile responsiveness issues

Updated README with project documentation
```

---

## 🎓 Academic Information

- **Course:** Bachelor of Computer Applications (BCA)
- **University:** Kristu Jayanti University
- **Location:** Bengaluru, Karnataka, India
- **Project Type:** Full-stack Web Development

---

## 📞 Contact

- **Email:** hemanandan21@gmail.com
- **GitHub:** [github.com/hemanandaprasad](https://github.com/hemanandaprasad)
- **LinkedIn:** [A Hemananda Prasad](https://www.linkedin.com/in/a-hemananda-prasad-a4b692356/)

---

## 📄 License

This project is created for educational purposes as part of BCA coursework.

© 2025 A Hemananda Prasad. All rights reserved.
