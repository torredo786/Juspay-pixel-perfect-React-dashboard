Here’s the improved version:

# ⚡ Juspay Pixel Perfect React Dashboard

A modern, pixel-perfect, and responsive dashboard built with **React**, **Vite**, **Ant Design**, **Material-UI**, and **Recharts**.  
This project demonstrates a professional dashboard UI with theming, charts, tables, and modular components.

---

## ✨ Features

- 🎨 **Pixel-perfect UI** – Clean, modern, and fully responsive design  
- 🌙 **Dark/Light Theme** – Toggle between dark and light modes  
- 🖥️ **Dashboard Layout** – Sidebar navigation, header, notifications panel, and main content area  
- 📊 **Charts & Analytics** – Bar, line, pie charts, and world map visualizations using Recharts  
- 📑 **Order List & Tables** – Paginated, searchable, and sortable order list  
- 🔍 **Smart Search & Sorting** – Search and sort orders by name  
- 🔔 **Interactive Notifications** – Expand notifications on click for more details  
- 🔄 **Quick Refresh** – Refresh the dashboard directly from the header  
- ♻️ **Component-based Architecture** – Modular, reusable React components  
- 📘 **TypeScript-ready** – Easily extendable to TypeScript (current codebase is JS/JSX)  

---

## 🛠️ Tech Stack

- ⚛️ **React 19**  
- ⚡ **Vite** – Super fast development with HMR  
- 🎨 **Ant Design** – UI components  
- 🖌️ **Material-UI** – Theming and styles  
- 📈 **Recharts** – Data visualizations  
- 🧹 **ESLint** – Code linting and formatting  
- 🎯 **CSS Modules** – Scoped styling at component level  

---

## 📂 Folder Structure



pixel-perfect/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/ # SVGs and icon components
│ ├── components/
│ │ ├── Charts/ # Chart and analytics components
│ │ ├── Dashboard/ # Main dashboard layout
│ │ ├── Header/ # Top navigation bar
│ │ ├── MainContent/ # Dashboard main content
│ │ ├── MetricCard/ # Metric summary cards
│ │ ├── NotificationsPanel/ # Notifications and activities
│ │ ├── Sidebar/ # Sidebar navigation
│ │ └── ui/ # UI primitives (accordion, button, etc.)
│ ├── App.jsx # Root app with theme providers
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md


---

## 🚀 Getting Started

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)  
- npm or yarn package manager  

---

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pixel-perfect-dashboard.git

# Navigate to the project folder
cd pixel-perfect

# Install dependencies
npm install
# or
yarn install

▶️ Running the App
npm run dev
# or
yarn dev


Now open your browser at:
👉 http://localhost:5173/

📦 Building for Production
npm run build
# or
yarn build

🧹 Linting

Check for linting issues with:

npm run lint
# or
yarn lint

🎨 Customization

Theming: Toggle between dark and light themes in the header

Charts: Update chart data in src/components/Charts/

Sidebar/Menu: Customize navigation items inside Sidebar.jsx

Order List: Extend search and sorting logic in OrderList.jsx

Notifications: Modify notification expansion behavior in NotificationsPanel.jsx

Header: Customize refresh logic and controls in Header.jsx

🌐 Deployment

This project is deployed on Vercel:
👉 Live Demo