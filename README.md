# Vedic Hindi School Website

A modern, responsive React-based website for Vedic Hindi School featuring immersive language learning and cultural education.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd vhs-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
vhs-site/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   ├── Footer.jsx       # Footer with links and newsletter
│   │   ├── Hero.jsx         # Full-width hero section
│   │   ├── Card.jsx         # Feature card component
│   │   ├── Accordion.jsx    # Expandable accordion
│   │   ├── Carousel.jsx     # Auto-rotating carousel
│   │   ├── Testimonial.jsx  # User testimonial
│   │   ├── CTA.jsx          # Call-to-action section
│   │   ├── Gallery.jsx      # Image grid gallery
│   │   ├── EventList.jsx    # Event listing
│   │   ├── Map.jsx          # Embedded map
│   │   └── Form.jsx         # Contact form
│   ├── routes/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Partnerships.jsx
│   │   ├── Chapters.jsx
│   │   ├── Knowledge.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx     # 404 page
│   ├── styles/              # CSS files
│   │   ├── tokens.css       # Design tokens & variables
│   │   ├── globals.css      # Global styles & reset
│   │   ├── layout.css       # Layout utilities
│   │   ├── components.css   # Component styles
│   │   └── utilities.css    # Utility classes
│   ├── App.jsx              # Main app component with routing
│   └── main.jsx             # React entry point
├── public/                  # Static assets
├── index.html               # HTML entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Primary:** #FF9933 (Indian Saffron)
- **Secondary:** #138808 (Indian Green)
- **Accent:** #000080 (Navy Blue)
- **Background:** #FFFFFF
- **Text:** #333333
- **Background Accent:** #F5F5F5

### Typography
- **Headings:** Poppins (600 font-weight)
- **Body:** Figtree (400 font-weight)

### Responsive Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1440px

## 📄 Pages

### Home
- Hero section with CTAs
- Mission overview with imagery
- Programs showcase (3-column)
- Student testimonials (carousel)
- Community CTA
- Event gallery
- Contact information and form

### About
- Company history (2-column)
- Mission statement
- Team members (3-column cards)
- Student testimonials (carousel)
- CTA to join

### Programs
- Program overview
- Credit program options (3-column)
- Teacher certification (2-column)
- Community teaching circles (3-column)
- FAQ section (accordion)

### Partnerships
- Benefits overview (2-column + list)
- Partnership process (3-column)
- Partner testimonials (carousel)
- FAQ (accordion)
- CTA to consult

### Global Chapters
- Chapter information (2-column)
- Benefits (3-column)
- Member testimonials (carousel)
- Upcoming events (2-column: list + map)
- CTA to join

### Knowledge Hub
- Resource categories overview
- Latest articles (3-column grid)
- FAQ (accordion)
- User testimonials (carousel)
- CTA to join community

### Contact
- Contact information (address, email, phone, hours)
- Contact form
- Embedded map
- FAQ (accordion)
- Newsletter CTA

## 🔧 Build Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📋 Features

### Implemented
- ✅ Full responsive design (mobile-first)
- ✅ React Router v6 for client-side routing
- ✅ Accessible components (ARIA labels, keyboard navigation)
- ✅ Reduced motion support for animations
- ✅ Mobile hamburger menu
- ✅ Sticky header
- ✅ Carousel with auto-rotation and manual controls
- ✅ Accordion with expand/collapse
- ✅ Contact form with validation
- ✅ Grid-based layout system
- ✅ CSS custom properties (tokens)
- ✅ Google Analytics 4 placeholder
- ✅ SEO meta tags
- ✅ Lazy-loading images

### To Implement
- [ ] Connect contact form to backend API
- [ ] Integrate GA4 tracking events
- [ ] Add real contact information
- [ ] Implement newsletter signup
- [ ] Add real testimonials and images
- [ ] Set up event management system
- [ ] Create admin dashboard
- [ ] Add payment integration for course enrollment
- [ ] Implement user authentication
- [ ] Add search functionality
- [ ] Set up blog/knowledge base

## 🔗 API Integration Points

### Contact Form
The contact form is currently configured to submit to a placeholder endpoint. Update in `src/components/Form.jsx`:

```javascript
const response = await fetch('/api/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Google Analytics
Update the GA4 tracking ID in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_GA4_ID"></script>
```

## ♿ Accessibility Features

- WCAG 2.1 Level AA compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible outlines
- High contrast color palette
- Reduced motion support
- Form validation and error messages
- Alt text for images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist folder
```

### Traditional Server
```bash
npm run build
# Copy dist folder to server
```

## 📝 Content Updates

### Adding New Programs
1. Edit relevant section in route page
2. Create Card component with program details
3. Update Programs.jsx or related page

### Adding Team Members
1. Update `teamMembers` array in About.jsx
2. Add new Card component with member info

### Adding Events
1. Update `upcomingEvents` array in relevant route
2. Events use EventList component

### Adding Testimonials
1. Create new Testimonial component in data array
2. Pass to Carousel component

## 🐛 Troubleshooting

### Port already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check CSS file imports in App.jsx

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Support

For questions or issues:
- Email: info@vedichiindischool.org
- Contact form: /contact page

## 📄 License

© 2025 Vedic Hindi School. All rights reserved.

---

**Made with ❤️ for the Hindi learning community**

हिन्दी सीखें, संस्कृति को जानें, विरासत का सम्मान करें।
