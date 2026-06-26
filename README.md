# AppName — Premium Desktop App Website

A production-ready, enterprise-style website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v3** to sell a desktop app for **₹59** with Razorpay checkout, multi-provider authentication, and a free GitHub repository option.

---

## ✨ Features

- **Home page** with animated hero, features, pricing, demo video, testimonials, and FAQ
- **Two clear options**: Paid app (₹59) as primary CTA + Free GitHub repo as secondary
- **Razorpay integration** with server-side order creation and HMAC signature verification
- **Multi-provider auth**: Google OAuth, Email/Password, and Mobile OTP
- **Protected dashboard** with download area gated by payment status
- **Payment success page** with confetti animation
- **Fully responsive** mobile + desktop design
- **Dark premium UI** with glassmorphism, gradient effects, and micro-animations

---

## 🛠 Tech Stack

| Layer        | Technology                    |
| ------------ | ----------------------------- |
| Framework    | Next.js 15 (App Router)       |
| Language     | TypeScript                    |
| Styling      | Tailwind CSS v3               |
| Auth         | Auth.js v5 (NextAuth)         |
| Payments     | Razorpay                      |
| Database     | PostgreSQL + Prisma ORM       |
| Deployment   | Vercel (recommended)          |

---

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** instance (local or cloud)
- **Razorpay** test account ([dashboard.razorpay.com](https://dashboard.razorpay.com))
- **Google Cloud** OAuth credentials ([console.cloud.google.com](https://console.cloud.google.com))

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd web
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then fill in the values in `.env.local`:

| Variable                        | Description                             |
| ------------------------------- | --------------------------------------- |
| `AUTH_SECRET`                   | Run `npx auth secret` to generate       |
| `AUTH_GOOGLE_ID`                | Google OAuth Client ID                  |
| `AUTH_GOOGLE_SECRET`            | Google OAuth Client Secret              |
| `DATABASE_URL`                  | PostgreSQL connection string            |
| `RAZORPAY_KEY_ID`              | Razorpay Key ID (test mode)             |
| `RAZORPAY_KEY_SECRET`          | Razorpay Key Secret (test mode)         |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID`  | Same as `RAZORPAY_KEY_ID` (client-side) |

### 3. Set up the database

```bash
npx prisma generate
npx prisma db push
```

Or if you want migration history:

```bash
npx prisma migrate dev --name init
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth pages (login, signup)
│   ├── dashboard/          # Protected dashboard
│   ├── payment/            # Payment success page
│   └── api/                # API routes
│       ├── auth/           # NextAuth + signup
│       ├── payment/        # Razorpay create-order & verify
│       ├── otp/            # Send & verify OTP
│       └── download/       # Protected download endpoint
├── components/
│   ├── ui/                 # Reusable primitives (Button, Card, Input, Badge, Modal)
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Home page sections
│   ├── auth/               # Auth forms and guards
│   ├── payment/            # Razorpay checkout, success card
│   └── dashboard/          # Sidebar, download card, payment history
├── lib/                    # Core libraries (auth, prisma, razorpay, utils)
├── hooks/                  # Custom hooks (useRazorpay, useAuth)
├── types/                  # TypeScript type declarations
└── middleware.ts            # Route protection
```

---

## 💳 Payment Flow

1. User clicks "Get App — ₹59"
2. Frontend calls `POST /api/payment/create-order`
3. Server creates Razorpay order and stores it in DB with `PENDING` status
4. Razorpay checkout modal opens on the client
5. User completes payment
6. Frontend receives payment response and calls `POST /api/payment/verify`
7. Server verifies HMAC-SHA256 signature
8. On success, payment status → `SUCCESS`, user marked as paid
9. User redirected to `/payment/success`

### Test Card Details

| Field       | Value             |
| ----------- | ----------------- |
| Card Number | 4111 1111 1111 1111 |
| Expiry      | Any future date   |
| CVV         | Any 3 digits      |
| OTP         | 1234 (test mode)  |

---

## 🔐 Authentication Flow

| Provider   | How it works                                  |
| ---------- | --------------------------------------------- |
| Google     | OAuth 2.0 via Auth.js Google provider          |
| Email      | Credentials provider with bcrypt password hash |
| Mobile OTP | Custom OTP flow via Credentials provider       |

**Mobile OTP (Development):** The OTP is logged to the server console. In production, integrate an SMS gateway (Twilio, MSG91, etc.).

---

## 🏗 Production Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add all environment variables
4. Deploy

### Google OAuth Redirect URI

For production, update the Google OAuth redirect URI to:
```
https://your-domain.com/api/auth/callback/google
```

---

## 📝 License

MIT
