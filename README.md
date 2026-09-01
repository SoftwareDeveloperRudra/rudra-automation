# Rudra Umra — AI Automation & Full-Stack Portfolio Website

A production-ready, dark luxury personal brand, client acquisition platform, and AI automation landing page built for **Rudra Umra** (Full Stack Developer & AI Automation Engineer based in Surat, Gujarat, India).

---

## 🚀 Key Features & Capabilities

- **Dark Luxury Aesthetic**: Designed with deep slate/charcoal tones (`#030712`, `#0B0F19`), cyan & amber glow accents, glassmorphic cards, and subtle grid overlays inspired by Apple, Linear, and Vercel.
- **Conversion-Focused Copywriting**: Positioned around technical problem solving: *"Don't just build a website. Build a system that works for your business."*
- **16 Complete Sections**:
  1. `Navbar` — Transparent to glass blur header with mobile drawer menu.
  2. `Hero` — High-impact headline (*"BUILD. AUTOMATE. SCALE."*), location tag, and animated node workflow diagram.
  3. `PersonalBrand` — Rudra Umra introduction and statement.
  4. `TrustPositioning` — Business efficiency metrics and target industry scope.
  5. `Services` — 4 core cards (AI Automation, Business Websites, Booking Systems, AI Agents).
  6. `AutomationServices` — Interactive workflow diagrams (Lead, Booking, Inquiry, Follow-up).
  7. `AutomationDemo` — Live step-by-step interactive simulator (*"See Automation In Action"*).
  8. `LeadAudit` — Business Automation Audit form with validation and n8n webhook support.
  9. `Projects` — Featured projects (STUDYMATE AI, CAPTURRA, AI CONTENT AGENT, AUTOMATION SYSTEM) with interactive Case Study popup modals.
  10. `About` — Categorized skills matrix (Frontend, Backend, Database, AI, Automation).
  11. `Process` — 5-step delivery timeline (Discover → Design → Build → Automate → Launch).
  12. `Pricing` — Clear "Starting From" pricing tiers with disclaimers.
  13. `FAQ` — 8 expandable client questions.
  14. `FinalCTA` — High-contrast conversion section.
  15. `ContactForm` — Service selection dropdown and n8n webhook proxy.
  16. `Footer` — Brand statement, social links, location, and copyright.
- **Floating WhatsApp Trigger**: Glass button using prefilled outreach text powered by `NEXT_PUBLIC_WHATSAPP_NUMBER`.
- **n8n Webhook Proxy**: Safe server-side API route (`/api/lead`) that forwards form submissions to n8n without exposing webhook credentials.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel ready

---

## 📁 Environment Variables Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Define your environment variables in `.env.local`:

```env
# n8n Webhook URL for lead processing and audit requests
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/rudra-leads

# WhatsApp contact phone number (include country code without + sign, e.g. 918511092863 for India)
NEXT_PUBLIC_WHATSAPP_NUMBER=918511092863

# Optional Google Analytics or Vercel Analytics ID
NEXT_PUBLIC_ANALYTICS_ID=
```

---

## ⚙️ How To Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Run Production Preview**:
   ```bash
   npm start
   ```

---

## ⚡ How to Deploy on Vercel

1. Push your repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your project repository.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_N8N_WEBHOOK_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. Click **Deploy**. Vercel will automatically build and assign your production URL.

---

## 🔄 Complete Workflow Architecture (Website → n8n → Google Sheets → AI → Notification)

Here is how the automated pipeline functions when a client submits an audit request or contact form:

```
[ Visitor Submits Form ] 
          │
          ▼
[ Next.js API Route (/api/lead) ]
          │ (Forwards enriched JSON payload)
          ▼
[ n8n Webhook Node Trigger ]
          │
          ▼
[ Gemini / OpenAI LLM Node ] (Analyzes lead urgency, budget, & intent)
          │
          ▼
[ Google Sheets Node ] (Appends lead record to master database)
          │
          ▼
[ WhatsApp Business API / Gmail Node ] (Dispatches instant lead response)
          │
          ▼
[ Push Notification Node ] (Notifies Rudra on mobile in < 30 seconds)
```
