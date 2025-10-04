# Data Scientist Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, designed specifically for junior Data Scientists to showcase their skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, dark theme with appealing green accents
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Sections**: Hero, About, Skills, Projects, Hobbies, Blog, Contact
- **Easy Customization**: Separate data files for easy content updates
- **No Backend**: Static site perfect for GitHub Pages deployment

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── App.js                  # Main React component
├── components/             # React components
│   ├── Navigation.js       # Sticky navigation
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills with visual display
│   ├── Projects.js        # Projects grid
│   ├── Hobbies.js         # Hobbies section
│   ├── Blog.js            # Blog posts
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer with social links
├── data/                  # Content data files
│   ├── skills.js          # Skills data
│   ├── projects.js        # Projects data
│   └── blog.js            # Blog posts data
└── README.md              # This file
```

## 🛠️ Customization Guide

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`components/Hero.js`):
- Update the title and description
- Replace the profile image URL
- Update social media links

**About Section** (`components/About.js`):
- Update the about text
- Modify education, experience, certifications, and achievements
- Replace the about image

**Contact Section** (`components/Contact.js`):
- Update contact information (email, phone, location)
- Modify social media links

### 2. Skills

Edit `data/skills.js` to update your technical skills:
- Modify skill names and proficiency levels
- Add or remove skills
- Update skill categories

### 3. Projects

Edit `data/projects.js` to showcase your projects:
- Add project details (title, description, tech stack)
- Update project images
- Add live demo and GitHub links
- Mark projects as featured or not

### 4. Blog Posts

Edit `data/blog.js` to add your blog posts:
- Add new blog post objects
- Include title, excerpt, content, date, tags
- Add featured images
- Mark posts as featured

### 5. Styling

The website uses Tailwind CSS. You can customize:
- Colors: Update the green accent color throughout the files
- Fonts: Change the Google Fonts import in `index.html`
- Animations: Modify CSS animations in the `<style>` section

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Pages (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Your site will be available at**:
   `https://yourusername.github.io/your-repo-name`

### Method 2: Using gh-pages package

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d ."
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🎨 Customization Tips

### Adding New Sections

1. Create a new component in `components/`
2. Add the section to `App.js`
3. Add navigation link in `components/Navigation.js`

### Adding Animations

The website includes several CSS animations:
- `fade-in-up`: Fade in with upward movement
- `hover:scale-105`: Scale on hover
- Custom scrollbar styling

### Color Scheme

The website uses a consistent color palette:
- Background: `bg-gray-900` (dark)
- Secondary: `bg-gray-800` (darker)
- Accent: `text-green-400` (green)
- Text: `text-gray-100` (light)

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly buttons and links
- Optimized images and content

## 🔧 Development

To run locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Open in browser**:
   Navigate to `http://localhost:3000`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue on GitHub.

---

**Happy coding! 🚀**
