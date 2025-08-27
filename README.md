# 🛍️ React Shoes Store Frontend

[![Watch the video](https://img.youtube.com/vi/X0nClVUayXo/0.jpg)](https://youtu.be/wiOMyPR7U4s)

A modern, responsive React-based e-commerce frontend for a shoes store with advanced filtering and search capabilities. Built with React 19, Vite, and modern CSS.

## ✨ Features

- **Advanced Product Filtering**: Filter shoes by category, brand, color, and price range
- **Real-time Search**: Search products by name with instant results
- **Responsive Design**: Mobile-first design that works on all devices
- **Product Cards**: Beautiful product displays with ratings, reviews, and pricing
- **Sidebar Navigation**: Easy-to-use filtering sidebar with multiple filter options
- **Recommended Products**: Curated product recommendations
- **Modern UI/UX**: Clean, intuitive interface with smooth interactions

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Styling**: CSS3 with custom components
- **Icons**: React Icons 5.5.0
- **HTTP Client**: Axios 1.11.0
- **Code Quality**: ESLint 9.32.0

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-filter-shoes-store-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Custom button component
│   ├── Button.css
│   ├── Card.jsx        # Product card component
│   ├── Card.css
│   ├── Input.jsx       # Search input component
│   └── Input.css
├── DB/
│   └── date.jsx        # Product data and mock database
├── Navigation/
│   ├── Nav.jsx         # Main navigation bar
│   └── Nav.css
├── Products/
│   ├── Products.jsx    # Products display component
│   └── products.css
├── Recommended/
│   ├── Recommned.jsx   # Recommended products section
│   └── rec.css
├── Sidebar/
│   ├── Sidebar.jsx     # Main sidebar component
│   ├── Sidebar.css
│   ├── Category/       # Category filter component
│   ├── Colors/         # Color filter component
│   └── Price/          # Price filter component
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
├── index.css          # Global styles
└── style.css          # Additional global styles
```

## 🎯 Key Components

### App.jsx

The main application component that manages:

- Product filtering state
- Search functionality
- Data filtering logic
- Component composition

### Sidebar Component

Provides filtering options:

- **Category Filter**: Filter by shoe categories (sneakers, flats, etc.)
- **Color Filter**: Filter by shoe colors
- **Price Filter**: Filter by price ranges
- **Brand Filter**: Filter by shoe brands

### Products Component

Displays filtered products with:

- Product images
- Product titles
- Star ratings
- Customer reviews
- Price information (original and discounted)

### Navigation Component

Features:

- Search bar for product search
- Responsive design
- Real-time search functionality

## 🔍 Filtering System

The application implements a sophisticated filtering system:

1. **Text Search**: Search products by name using the search bar
2. **Category Filtering**: Filter by shoe categories (sneakers, flats, etc.)
3. **Brand Filtering**: Filter by popular brands (Nike, Adidas, Vans, etc.)
4. **Color Filtering**: Filter by available colors
5. **Price Filtering**: Filter by price ranges
6. **Combined Filters**: Multiple filters can be applied simultaneously

## 📱 Responsive Design

The application is built with a mobile-first approach:

- Responsive grid layout for products
- Collapsible sidebar for mobile devices
- Touch-friendly interface elements
- Optimized for all screen sizes

## 🎨 Styling

- **CSS Modules**: Component-specific styling
- **Flexbox & Grid**: Modern layout techniques
- **Custom Properties**: CSS variables for consistent theming
- **Responsive Units**: Flexible sizing for different screen sizes

## 🔧 Development

### Adding New Products

To add new products, edit `src/DB/date.jsx` and add new product objects with the following structure:

```javascript
{
  img: "product-image-url",
  title: "Product Name",
  star: <AiFillStar className="rating-star" />,
  reviews: "(123 reviews)",
  prevPrice: "$140,00",
  newPrice: "200",
  company: "Brand Name",
  color: "color-name",
  category: "category-name"
}
```

### Customizing Styles

- Global styles: `src/index.css` and `src/style.css`
- Component styles: Individual `.css` files in each component directory
- Use CSS custom properties for consistent theming

## 🚀 Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the fast build tool
- React Icons for the beautiful icon library
- All contributors and supporters

---

**Happy Shopping! 🛍️**
