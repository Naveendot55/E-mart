# 🛒 E-Mart — Online Shopping Store

A modern, responsive e-commerce web application built with **React** and **Vite**. Browse products, filter by categories, search items, view product details, and manage your shopping cart — all in a sleek, fast interface.

🔗 **Live Demo:** [https://naveendot55.github.io/E-mart/](https://naveendot55.github.io/E-mart/)

---

## ✨ Features

- **🏠 Home Page** — Hero carousel, category cards, and product listings
- **🔍 Search** — Real-time product search across titles, descriptions, and brands
- **📂 Category Filtering** — Filter products by Women, Men, Clothing, and Food
- **📦 Product Details** — Dedicated product detail page for each item
- **🛒 Shopping Cart** — Add to cart, update quantities, and remove items
- **📱 Responsive Design** — Fully responsive layout using Bootstrap
- **⚡ Fast & Lightweight** — Powered by Vite for instant hot module reloading

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 7** | Build tool & dev server |
| **React Router v7** | Client-side routing (HashRouter) |
| **React Bootstrap** | UI components & responsive grid |
| **Axios** | HTTP client for API calls |
| **React Slick** | Image carousels | 
| **DummyJSON API** | Product data source |
| **GitHub Pages** | Deployment & hosting |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naveendot55/E-mart.git
   cd E-mart/my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
E-mart/
├── my-app/
│   ├── public/               # Static assets (images)
│   ├── src/
│   │   ├── compoments/
│   │   │   ├── navbar/       # Navigation bar with search
│   │   │   ├── caro/         # Hero carousel
│   │   │   ├── cartpage/     # Shopping cart page
│   │   │   ├── Productcarousel/  # Product image carousel
│   │   │   ├── Categorycards.jsx # Category filter cards
│   │   │   └── Productcard.jsx   # Product display card
│   │   ├── pages/
│   │   │   ├── home/         # Home page
│   │   │   └── products/     # Product detail page
│   │   ├── App.jsx           # Root component with routing
│   │   ├── main.jsx          # Entry point
│   │   └── App.css           # Global styles
│   ├── vite.config.js        # Vite configuration
│   └── package.json          # Dependencies & scripts
├── .gitignore
└── README.md
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This project is deployed on **GitHub Pages** using `gh-pages`.

To deploy your own version:

```bash
cd my-app
npm run deploy
```

This will build the project and publish the `dist` folder to the `gh-pages` branch.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for personal and educational use.

---

> Built with ❤️ using React + Vite
