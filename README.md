# 🎬 Cinema & Media Database (CMDB)

A modern, responsive web application for browsing movies and TV shows – inspired by Rotana Cinema.  
Built with **React + TypeScript**, and powered by **TMDB API**, it features rich UI, full movie/TV data, Firebase authentication, and dark mode support.

## 🌐 Live Demo
🔗 [rotana-cinema-rose.vercel.app](https://cmdb-two.vercel.app/)

---

## 🚀 Features

### 🏠 Home Page
- 🔍 Search functionality.
- 🎞️ Trending Movies.
- 🎥 Upcoming Movies.
- 📺 Trending TV Shows.

---

### 🎬 Movies Page
- ✅ Pagination & Filtering.
- 🎫 Each movie card links to a **Movie Details Page**, split into:
  - **Movie Info**: overview, top cast (slider), and recommended movies.
  - **Cast & Crew**: full list of contributors.

---

### 📺 TV Shows Page
- ✅ Pagination & Filtering.
- 📘 Each show card leads to a **TV Show Details Page**, with:
  - **TV Info**: includes all seasons + top cast.
  - **Cast & Crew**: full listing.
- 📂 Clicking a season opens a **Season Details Page**:
  - Contains season info and a list of episodes (name, image, rating, air date).
- ▶️ Clicking an episode opens an **Episode Page**:
  - Includes full episode details + sliders for **Crew** and **Guest Stars**.

---

### 👤 People Page
- ✅ Supports Pagination.
- 📇 Each person card links to a **Person Details Page**, showing:
  - Biography summary.
  - Profession (e.g. Actor, Director, etc.).
  - Date and place of birth.
  - Known for: list of movies and TV shows they participated in.
  - External links: social media, Wikipedia, etc.

---

## 🔐 Authentication
- Firebase Authentication (Login/Register).

## 🌙 Dark Mode
- Full support for dark/light themes.

---

## 🧰 Built With

- **React** + **TypeScript**
- **React Router v7**
- **Tailwind CSS** + **Flowbite React**
- **Redux Toolkit**
- **TanStack React Query**
- **TMDB API**
- **Firebase Auth**
- **React Hook Form**
- **Font Awesome**
- **React Multi Carousel**
- **Date-fns**

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/rotana-cinema-clone.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
