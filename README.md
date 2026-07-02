# 📌 KeenKeeper

A sophisticated friendship management platform designed to help users organize, track, and maintain meaningful relationships and friendships effortlessly.

---

## 🚀 Project Overview

**KeenKeeper** acts as a personal shelf for your connections. It balances an intuitive user interface with interactive charts, dynamic timeline filters, and detailed individual tracking to ensure you never lose touch with the people who matter most.

---

## 🛠️ Technologies Used

This project leverages modern web development tools and frameworks to deliver a fast, responsive, and seamless user experience:

* **Framework:** Next.js (App Router)
* **Core Library:** React (Underlying engine powering Next.js)
* **Data Visualization:** Recharts (For responsive and dynamic analytics)
* **Styling & UI Components:** Tailwind CSS & DaisyUI
* **Icons:** React Icons & Lucide React
* **Code Quality:** ESLint

---

## ✨ Key Features

* **👥 Dynamic Friend Management & Tracking:** Seamlessly view, add, and organize your friends list with real-time status updates and custom tags.

* **📈 Rich Friendship Analytics & Stats:** An interactive statistics page featuring responsive data visualizations (like Pie/Donut charts via Recharts) to analyze your relationship distributions at a glance.

* **⏳ Interactive Milestone Timeline:** A dedicated, clean chronological timeline interface to look back at meaningful memories and birthdays, equipped with advanced dynamic sorting and status filters.

---

## 🔗 Interactivity Implemented

### 🔍 Dynamic Timeline Filtering
* **Real-time Content Sorting:** Implemented client-side filtering on the Timeline page, allowing users to toggle and filter friendship milestones dynamically without any page reloads or delays.

### 📊 Responsive Analytics (Recharts)
* **Interactive Data Visualization:** Integrated responsive Recharts components that dynamically render analytics data, automatically adjusting to different device widths while providing smooth hover tooltips.

### ⚡ Button Micro-interactions (Enhanced UX)
* **Real-time Tactile Feedback:** Every core button is enhanced with dynamic responsive styling (`hover:scale-105` and `active:scale-95`). When a user hovers, the button expands smoothly, and upon clicking, it shrinks slightly to mimic a physically pressable button.
* **Smooth State Transitions:** Leveraged Tailwind's `transition-all duration-200` to ensure color shifts, filtering updates, and scaling happen fluidly rather than abruptly.

### 📱 Adaptive Navigation & Layouts
* **Dynamic Navigation System (`Mylink`):** Integrated a customized link-tracking system that changes pages instantly, preserving a seamless client-side flow.
* **Fluid Responsive Elements:** UI elements dynamically re-adjust their padding and font sizes (`text-xs` on mobile) or hide descriptive text to perfectly match tiny screens (375px) up to large monitors.

### 🛠️ Advanced Routing & State Management
* **Dynamic Error Handling:** Implemented customized context-specific `not-found` page handling for dynamic paths (`friend/[id]`) by triggering Next.js `notFound()` utility whenever a profile is missing.
* **Global Overlays:** Utilized React Context API (`CheckInContext`) to manage client-side state across independent interactive UI components like modal overlays.

---

## 🛠️ Getting Started

To run this project locally, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/jk-jumur/assignment-7.git](https://github.com/jk-jumur/assignment-7)