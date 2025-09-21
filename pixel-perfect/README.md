
# Juspay Pixel Perfect React Dashboard

A modern, pixel-perfect, and responsive dashboard built with **React**, **Vite**, **Ant Design**, **Material-UI**, and **Recharts**.  
This project demonstrates a professional dashboard UI with theming, charts, tables, and modular components.

---

## ✨ Features

- 🎨 **Pixel-perfect UI**: Clean, modern, and responsive design.  
- 🌙 **Dark/Light Theme**: Toggle between dark and light modes.  
- 🖥️ **Dashboard Layout**: Sidebar navigation, header, notifications panel, and main content area.  
- 📊 **Charts & Analytics**: Bar, line, pie charts, and world map visualizations using Recharts.  
- 📑 **Order List & Tables**: Paginated, searchable order list and top-selling products table.  
- 🔔 **Notifications & Activities**: Real-time notifications, activities, and contacts panel.  
- ♻️ **Component-based Architecture**: Modular, reusable React components.  
- 📘 **TypeScript-ready**: Easily extendable to TypeScript (current codebase is JS/JSX).  

---

## 🛠️ Tech Stack

- **React 19**  
- **Vite** (for fast development and HMR)  
- **Ant Design** (UI components)  
- **Material-UI** (theming)  
- **Recharts** (data visualization)  
- **ESLint** (code linting)  
- **CSS Modules** (component-level styling)  

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
│ │ ├── MainContent/# Dashboard main content
│ │ ├── MetricCard/ # Metric summary cards
│ │ ├── NotificationsPanel/ # Notifications and activities
│ │ ├── Sidebar/ # Sidebar navigation
│ │ └── ui/ # UI primitives (accordion, button, etc.)
│ ├── App.jsx # App root with theme providers
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
- npm or yarn  

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


The app will be available at:
👉 http://localhost:5173/
 (or as shown in your terminal)

📦 Building for Production
npm run build
# or
yarn build

🧹 Linting

Run ESLint to check for code issues:

npm run lint
# or
yarn lint

🎨 Customization

Theming: Easily switch between dark and light themes using the toggle in the header.

Charts: Update chart data in the respective components under src/components/Charts/.

Sidebar/Menu: Customize navigation items in Sidebar.jsx.