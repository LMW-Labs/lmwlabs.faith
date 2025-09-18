# LMW Labs Portfolio

A modern React portfolio showcasing AI-integrated business solutions and projects.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Create React App**
   ```bash
   npx create-react-app lmw-portfolio
   cd lmw-portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Replace Files**
   - Copy all the component files into their respective directories
   - Replace the default files with the ones provided
   - Update your project structure as shown below

4. **Add Images**
   - Create `public/images/projects/` directory
   - Add your project images:
     - `threadripper.png`
     - `proplistai.png` 
     - `vectr.png`
     - `coming-soon-1.png`
     - `coming-soon-2.png`
     - `coming-soon-3.png`

5. **Start Development Server**
   ```bash
   npm start
   ```

## 📁 Project Structure

```
lmw-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
│       ├── projects/
│       │   ├── threadripper.png
│       │   ├── proplistai.png
│       │   ├── vectr.png
│       │   └── coming-soon-*.png
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navigation.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── projects/
│   │       ├── ProjectCard.jsx
│   │       └── ProjectStats.jsx
│   ├── data/
│   │   └── projects.js
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Adding New Projects
Edit `src/data/projects.js` to add new projects:

```javascript
{
  id: 'new-project',
  title: '🌟 New Project',
  subtitle: 'Project Description',
  description: 'Detailed project description...',
  image: '/images/projects/new-project.png',
  tags: ['React', 'Node.js'],
  status: 'development', // live, development, planning
  featured: false,
  links: {
    demo: 'https://your-demo.com',
    github: 'https://github.com/your-repo'
  },
  stats: {
    users: '1K+',
    features: '25+'
  },
  technologies: [
    { name: 'React', icon: Code2, color: 'text-blue-500' }
  ]
}
```

### Updating Contact Information
- Update email in `Contact.jsx` and `Footer.jsx`
- Add your social media links in `Footer.jsx`
- Update the logo URL in `Navigation.jsx`

### Styling Customization
- Colors: Edit `tailwind.config.js`
- Fonts: Update in `src/styles/index.css`
- Components: Modify individual component files

## 🛠️ Features

- ✅ Responsive design
- ✅ Modern React with hooks
- ✅ Tailwind CSS styling
- ✅ Smooth scrolling navigation
- ✅ Project filtering and stats
- ✅ Live statistics for projects
- ✅ Interactive project cards
- ✅ SEO optimized
- ✅ Accessible design

## 📱 Components

### Navigation
- Fixed header with smooth scrolling
- Active section highlighting
- Mobile responsive

### Project Cards
- Image support with overlays
- Status badges (Live, Development, Planning)
- Technology stack display
- Project statistics
- External links (demo, GitHub)

### Sections
- Hero with call-to-action
- About with feature highlights
- Projects with filtering
- Contact form
- Footer with social links

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### Vercel
1. Connect your GitHub repo to Vercel
2. Auto-deployment on push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/lmw-portfolio"`
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you need help setting up or customizing this portfolio, feel free to reach out!