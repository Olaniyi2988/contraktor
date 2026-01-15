# Contraktor – Artisan Marketplace UI + Admin Dashboard

**A responsive web application to explore artisans, view profiles, request services, and monitor admin insights.**

Built with **React**, **TypeScript**, and **Bootstrap**.

---

## 📦 Features

### **Screens**

1. **Explore Artisans**

   * List view of artisans with **search** and **filters** (trade, location, rating, availability).
   * Pagination for large lists.
   * Debounced search to optimize performance.

2. **Artisan Profile**

   * Displays artisan details, availability, and portfolio.
   * Includes **Request Service** form with validation, feedback, and disabled state during submission.

3. **Admin Dashboard**

   * Shows analytics with charts (e.g., requests per day).
   * Dashboard cards display key stats like total artisans, requests today, and average rating.

---

### **Functional Requirements Implemented**

* Debounced search and filtering.
* Persisted last used filters in **localStorage**.
* Form validation with friendly error messages.
* Routing between pages using **React Router**.
* Loading, empty, and success/error states for data interactions.

---

### **State Management**

* **Local state:** `useState` for form inputs, search query, and pagination.
* **Shared state:** Custom hooks (`useDashboardStats`, `useRequestsChartData`) manage global-like data for dashboards.
* **Justification:** For this small-to-medium scale project, **React hooks and custom hooks** provide simple, maintainable, and performant state management without the overhead of Redux/Zustand.

---

## 🛠️ Tech Stack

* **Frontend:** React 19
* **Styling/UI:** Bootstrap 5 + custom CSS
* **Routing:** React Router v6
* **Charts:** Recharts
* **Data:** Mocked JSON files (`artisans.json`, `requests.json`)

---

## 🔧 Setup & Run

1. Clone the repository:

```bash
git clone https://github.com/Olaniyi2988/contraktor.git
cd contraktor
```

2. Install dependencies:

```bash
npm install
```

3. Run the application locally:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view in the browser.

---

## 🗂️ Project Structure

```
src/
│
├─ components/       # Reusable components (cards, modals, tables, forms)
├─ hooks/            # Custom hooks for state and logic
├─ pages/            # Page-level components (Dashboard, ExplorePage, ProfilePage)
├─ services/         # Mock API service layer
├─ data/             # Static JSON data for artisans and requests
├─ utils/            # Helper functions (debounce, filter)
├─ types/            # Shared TypeScript types
├─ assets/           # CSS and images
└─ App.tsx           # App root and routing
```

---

## 🗄️ Mock API / Data

* **Artisans:** `src/data/artisans.json`
* **Requests:** `src/data/requests.json`
* Simulated API calls via service layer (`services/artisanService.ts`, `services/requestService.ts`)
* Methods:

  * `getAllArtisans()`
  * `getArtisanById(id)`
  * `getRequests()`
  * `addRequest(request)`

All requests use **localStorage** to persist new service requests.

---

## ⚙️ Key Decisions & Tradeoffs

* **State management:** Chose **hooks + custom hooks** for simplicity and maintainability. Redux or Zustand would be overkill for this project scale.
* **Mock data:** Used **static JSON + localStorage** for simplicity. Could swap for JSON Server or MSW in future.
* **Debounce search:** Improves performance and prevents unnecessary re-renders.
* **Responsive design:** Bootstrap grid and components used for fast layout and mobile-friendly UI.
* **Charts:** **Recharts** provides a lightweight way to visualize requests per day.

---

## 🧪 Testing

* Lightweight **unit test** included for `filterArtisans` utility: ensures search functionality returns correct results.
* Run tests:

```bash
npm test
```

---

## ✅ Accessibility & UX

* All forms have proper labels.
* Buttons are accessible via keyboard.
* Visual feedback for loading, success, and empty states.
* Portfolio images have `alt` text for screen readers.

---

## 📌 Live Demo (Optional)

https://contraktor-z9w4.vercel.app/

---

## 📝 Notes

* The app is **fully functional** using only mock data.
* All key interactions (search, pagination, requests) are preserved between page reloads via **localStorage**.
