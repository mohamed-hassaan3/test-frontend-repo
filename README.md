> 📄 For original instructions, please see [INSTRUCTION.md](./INSTRUCTION.md)


## ✅ COMPLETED_TASKS

- Integrated pre-built **Login** and **OTP** components using Axios.
- Implemented **Context API** for auth state sharing across login, OTP, and dashboard.
- Used **Flowbite React** for UI and tables.
- Used **Shadcn UI** for financial charts to demonstrate handling of multiple UI libraries.
- Created modular structure for `dashboard`, `charts`, and `tables` for scalability.
- Created `lib/api.ts` to centralize API handling.
- Added `.nvmrc` for consistent Node version control.
- Built custom **Signup form** (for testing purposes) to register users manually via API.
- Handled API errors gracefully in the UI (`403`, `401`) and displayed retryable feedback.
- Added `not-found.tsx` and `error.tsx` pages for fallback and UX consistency.
- Prepared `.env` and instructions in the README for setup clarity.

# 🚀 Frontend Engineer Assessment – Garage Hero

This is my submission for the Frontend Engineer take-home assessment. It includes a login and OTP flow, a modular dashboard structure, and clean UI integration based on the provided Figma design.

---

## 🔧 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Axios** – API integration
- **Flowbite React** – UI elements and data tables
- **Shadcn/UI** – Charts and additional UI components
- **Tailwind CSS** – Styling
- **React Context API** – State management across login, OTP, and dashboard
- **Custom Hooks** – Geolocation/IP handling
- **Modular Architecture** – Scalable and maintainable

---

## 📦 Project Highlights

- 🔐 **Authentication Flow**  
  Integrated pre-built Login and OTP components with full API handling, error feedback, and token state via Context.

- 🧾 **Dashboard Modules**  
  Dashboard prepared with modular charts, stat cards, and tables – organized for easy scaling.

- 📊 **Dual UI Libraries**  
  Used **Flowbite React** for base UI and tables, and **Shadcn UI** for charting – to demonstrate flexibility and integration between libraries.

- ⚙️ **Centralized API Layer**  
  Created a `lib/api.ts` to manage all API calls with consistent headers and authorization logic.

- 🗂️ **Modular Architecture**  
  Followed clean file organization by separating:
  - Pages via App Router
  - Shared components (`components/`)
  - Feature-level modules (`modules/`)
  - Types (`types/`), utilities (`utils/`), and context providers (`context/`)

- 🌐 **.nvmrc**  
  Included for consistent Node version control.

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── login/              # Login page route
│   ├── otp/                # OTP verification
│   ├── signup/             # Signup (for testing user creation)
│   ├── dashboard/          # Dashboard layout and page
│   ├── not-found.tsx       # Custom 404 page
│   ├── error.tsx           # Global error fallback
│   ├── layout.tsx          # App layout
│   ├── page.tsx            # Root landing page
│   └── globals.css         # Global styling
├── components/
│   ├── charts/             # Modular chart components
│   ├── dashboard/          # StatCards, tables, metrics
│   ├── ui/                 # Shared UI elements
│   ├── LoginForm.tsx
│   ├── OtpForm.tsx
│   └── SignupForm.tsx
├── modules/
│   ├── DashboardTables.tsx
│   ├── FinancialChart.tsx
│   ├── Header.tsx
│   └── Summary.tsx
├── context/
│   ├── AuthContext.tsx      # Auth context (login/token)
│   └── DashboardContext.tsx # Dashboard context (data/shared state)
├── hooks/
│   └── useGeolocation.tsx   # Hook to get client IP/geolocation
├── lib/
│   ├── api.ts              # Axios setup and services
│   ├── data.ts             # Table headers and mock values
│   └── utils.ts            # Common helper functions
├── types/
│   ├── auth.d.ts
│   └── global.d.ts
├── utils/
│   └── formatData.ts       # Table/chart formatting
└── .nvmrc                  # Node version control
⚠️ API Note
I followed all backend instructions, including test account creation via the /signup endpoint. However, I consistently received:

403: Could not validate API KEY on login

401: No authorization token provided on dashboard access

Despite this, I handled all errors gracefully in the UI with feedback, retries, and fallback states. The app is fully structured and ready to accept working API responses.

### 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/mohamed-hassaan3/test-frontend-repo.git
cd test-frontend-repo

# Set Node version
nvm use

# Install dependencies
npm install
Create a .env.local file:

# Create a .env file and add your API configuration
NEXT_PUBLIC_BACKEND_URL=<your-backend-url>
NEXT_PUBLIC_BACKEND_API_V1_KEY=<your-api-key>

# Run the app
npm run dev


🙏 Final Thoughts
This project demonstrates:

Scalable architecture

Multi-library integration

Clean, maintainable code

Strong error handling and user feedback

Thanks again for the opportunity! I’m excited to hear your feedback.

— Mohamed Hassaan