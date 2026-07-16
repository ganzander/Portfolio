# Premium Full-Stack AI & Developer Portfolio

A premium, highly interactive developer portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Features scroll-driven interactions, glassmorphic UI components, a custom mouse cursor lock, and a functional background notification API (Email + WhatsApp).

---

## Features

### Client & UI Experience
* **Custom Cursor Lock**: A global cursor lock locking carets and pointers to a customized asset (`/cursor.png`) with clean hover states.
* **Interactive Work Experience**: A scroll-driven GSAP/Framer-Motion chronological timeline. Cards display concise 3-bullet points with a "Read More" button opening an adjustable-height Dialog overlay showing detailed milestones and tech tags.
* **Featured Projects Showcase**: An interactive deck-stacking project slider. Projects feature custom SVGs structured specifically to emphasize **AI > Backend > Database** tech stacks. Clicking cards launches detail drawers with `object-contain` illustrations.
* **Clean & Modern Contact Form**: A structured, two-column form (image on left, input form on right) with custom file uploads (Resume, BRD, etc.), `autoComplete="off"` form overrides, and strict client validation.

### Backend & API Integration
* **Multipart Form API (`/api/contact`)**: A Next.js App Router POST endpoint that parses files and fields on the server.
* **Nodemailer SMTP Integration**: Automatically sends structured emails containing contact form messages and uploads.
* **Twilio WhatsApp API Alerts**: Automatically triggers background WhatsApp messages notifying you of new form entries in real-time.
* **Graceful Fallbacks**: If environment variables are missing, the endpoint hides all technical logs and prompts users with user-friendly notices, redirecting them to direct email/WhatsApp links.

---

## Tech Stack

* **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.animation.com/framer-motion) & [GSAP (GreenSock)](https://gsap.com/)
* **Emailing**: [Nodemailer](https://nodemailer.com/)
* **Notifications**: [Twilio REST API](https://www.twilio.com/)
* **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites
* [Node.js 18.x or later](https://nodejs.org/)
* npm, yarn, or pnpm

### 1. Clone & Install Dependencies
```bash
# Install NPM packages
npm install
```

### 2. Configure Environment Variables
Copy the `.env.local.example` file in the root directory to `.env.local`:
```bash
cp .env.local.example .env.local
```
Open `.env.local` and fill in your credentials:

```env
# --- Nodemailer (Gmail SMTP) ---
EMAIL_USER=XXXX
EMAIL_PASS=XXXX
EMAIL_TO=XXXX

# --- Twilio WhatsApp API (Optional) ---
TWILIO_ACCOUNT_SID=XXXX
TWILIO_AUTH_TOKEN=XXXX
TWILIO_FROM_NUMBER=XXXX
TWILIO_TO_NUMBER=XXXX
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

---

## Folder Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js      # Nodemailer & Twilio background notification endpoint
│   │   ├── globals.css           # Global typography & custom cursor setup
│   │   ├── layout.js             # Root HTML wrap & providers
│   │   └── page.js               # Landing page layouts
│   ├── components/
│   │   ├── Contact/
│   │   │   └── ContactSection.jsx # Contact form & uploader components
│   │   ├── Project/
│   │   │   └── ProjectCard.jsx    # Projects display grid & interactions
│   │   ├── WorkExperience/
│   │   │   └── WorkExperience.jsx # Timeline tree, GSAP logic, and detail modal
│   │   └── ui/                   # Shared UI primitives (Dialog, Select, Input, Button)
│   └── lib/
│       ├── experiences.js        # Timeline data storage
│       ├── projects.js           # Project metadata storage
│       └── site.js               # Site configuration (socials, emails, etc.)
├── public/                       # Image assets & cursor vectors
├── package.json                  # Dependencies configuration
└── .env.local.example            # Environment variables example template
```

---

## Security & Best Practices

* **App Passwords**: Never use your primary Gmail password for `EMAIL_PASS`. Always generate a secure Google App Password under *Account Security*.
* **Validation**: Form entries are checked on both the client (React state check) and server to prevent spam submissions.
* **Environment Protection**: Never check `.env.local` into Git control. It is already added to `.gitignore`.
