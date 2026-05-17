# Wanderlust — Travel Booking Web Application

A full-stack, responsive travel booking platform where users can explore curated destinations, book trips, manage their bookings, and track their travel statistics — all in one place.

## 🌐 Live URL

[https://wonderlust-liart.vercel.app/](https://wonderlust-liart.vercel.app/)

---

## 📌 Purpose

Wanderlust is a modern travel booking web application built with Next.js. It allows users to browse handpicked travel destinations, book trips with a departure date, manage and cancel their bookings, and view their travel profile with live statistics. Admins can add, edit, and delete travel packages directly from the UI.

---

## ✨ Key Features

- **Hero Banner** — Full-screen landing section with search filters for location, date, budget, and group size
- **Featured Destinations** — Curated destination cards with images, pricing, country, and duration
- **All Destinations** — Full browsable destination catalogue with responsive grid layout
- **Destination Detail Page** — Full destination overview with description, departure date picker, and booking card
- **Trip Booking** — Select a departure date and book a trip; confirms with a toast notification
- **My Bookings** — View all confirmed bookings with destination image, departure date, price, and booking ID
- **Cancel Booking** — Cancel any booking with a confirmation alert dialog
- **User Authentication** — Email/password sign up and login, plus Google OAuth via Better Auth
- **User Profile** — Avatar, member since date, and live travel statistics (total bookings, countries visited, upcoming trips, total spent)
- **Edit Profile** — Update display name and profile image via modal
- **Add Destination** — Admin form to add new travel packages with name, country, category, price, duration, date, image, and description
- **Edit & Delete Destinations** — Edit modal and delete alert on the destination detail page
- **Why Wanderlust Section** — Safe & Secure, Expert Guides, and 24/7 Support highlights
- **Testimonials Carousel** — Sliding traveler reviews with prev/next navigation
- **CTA Section** — "Ready to Start Your Journey?" banner with background image and gradient overlay
- **Newsletter & Footer** — Footer with quick links, support links, contact info, and social icons
- **Fully Responsive** — Optimised for 320px mobile, 768px tablet, and desktop screens
- **Toast Notifications** — Success and error feedback via React Hot Toast
- **Error Page** — Custom `error.jsx` with retry and home navigation

---

## 🗂️ Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with banner, featured destinations, why us, testimonials, CTA |
| `/destinations` | All destinations grid |
| `/destinations/[id]` | Destination detail with booking card |
| `/my-bookings` | User's confirmed bookings |
| `/profile` | User profile and travel statistics |
| `/add-destination` | Admin form to add a new package |
| `/login` | Email/Google login |
| `/signup` | Email/Google sign up |

---

## 📦 npm Packages Used

### Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 15.x | React framework with App Router and SSR |
| `react` | 19.x | Core UI library |
| `react-dom` | 19.x | React DOM rendering |
| `better-auth` | — | Authentication (email/password + Google OAuth) |
| `@heroui/react` | — | UI component library (Button, Card, Modal, AlertDialog, Input, Select, DateField, etc.) |
| `lucide-react` | — | Icon library |
| `react-icons` | — | Additional icons (FcGoogle, BiArrowBack, LuMapPin, etc.) |
| `@gravity-ui/icons` | — | TrashBin icon for delete/cancel actions |
| `react-hot-toast` | — | Toast notifications |
| `tailwindcss` | 4.x | Utility-first CSS framework |

### Dev Dependencies

| Package | Purpose |
|---------|---------|
| `eslint` | Code linting |
| `eslint-config-next` | Next.js ESLint rules |
| `@types/react` | TypeScript types for React |
| `@types/node` | TypeScript types for Node.js |

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_SECRET=your-better-auth-secret
BETTER_AUTH_URL=https://your-frontend-url.vercel.app
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_SERVER_URL=https://your-backend-url.vercel.app
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/cseanwar/wonderlust.git
cd wonderlust

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm start
```

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── page.js                  # Home page
│   ├── layout.jsx               # Root layout with Navbar, Footer, Toaster
│   ├── error.jsx                # Global error boundary
│   ├── destinations/
│   │   ├── page.jsx             # All destinations
│   │   └── [id]/page.jsx        # Destination detail
│   ├── my-bookings/page.jsx     # User bookings
│   ├── profile/page.jsx         # User profile
│   ├── add-destination/page.jsx # Add new package
│   ├── login/page.jsx           # Login
│   └── signup/page.jsx          # Sign up
├── components/
│   ├── Navbar.jsx
│   ├── NavLink.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── Featured.jsx
│   ├── DestinationCard.jsx
│   ├── BookingCard.jsx
│   ├── BookingCancelAlert.jsx
│   ├── DeleteAlert.jsx
│   ├── EditModal.jsx
│   ├── UpdateUserModal.jsx
│   ├── WhyWondurlust.jsx
│   ├── Testimonials.jsx
│   └── StartYourJourney.jsx
└── lib/
    ├── auth.js                  # Better Auth server config
    └── auth-client.js           # Better Auth client config
```

---

## 🛠️ Deployment

- **Frontend** — Deployed on **Vercel**
- **Backend** — Deployed on **Vercel** (separate Express.js server)
- **Database** — **MongoDB Atlas**

---

## 📄 License

© 2026 Wanderlust. All rights reserved.