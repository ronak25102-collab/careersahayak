# 🎯 Career Sahayak - Find Your Perfect Career Path

![Career Sahayak](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

A comprehensive career guidance platform that helps students and professionals discover their perfect career path through personalized assessments and detailed career information.

## 🌟 Features

- **🎨 Dark Professional Theme** - Beautiful CloudPeak-inspired dark UI with blue gradient accents
- **📋 88+ Career Options** - Extensive database of career paths across multiple industries
- **🎯 Personalized Career Test** - 15-question assessment to match your interests and skills
- **💡 AI-Powered Chatbot** - Get instant career guidance and answers
- **🔍 Smart Search & Filters** - Easy navigation through career categories
- **📊 Detailed Career Insights** - Salary ranges, growth prospects, required skills, and more
- **💎 Glassmorphism Design** - Modern UI with backdrop blur effects
- **📱 Fully Responsive** - Works seamlessly on all devices

## 🚀 Live Demo

[View Live Site](https://your-username.github.io/careersahayak/)

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=Career+Sahayak+Homepage)

### Career Test
![Career Test](https://via.placeholder.com/800x400?text=Career+Assessment)

### Career Details
![Career Details](https://via.placeholder.com/800x400?text=Career+Information)

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Design:** Modern Dark Theme with Glassmorphism
- **Icons:** Emoji-based icons
- **Data:** JSON-based career database
- **Hosting:** GitHub Pages

## 📁 Project Structure

```
careersahayak.com/
├── src/
│   ├── css/
│   │   ├── style.css          # Main dark theme styles
│   │   └── chatbot.css        # Chatbot styles
│   ├── js/
│   │   ├── app.js            # Main application logic
│   │   ├── career-test.js    # Career test functionality
│   │   └── chatbot.js        # Chatbot functionality
│   ├── data/
│   │   └── careers.json      # Career database (88+ careers)
│   ├── pages/
│   │   ├── career-test.html  # Career assessment page
│   │   └── about.html        # About us page
│   └── index.html            # Homepage
├── .gitignore
└── README.md
```

## 🎨 Design Features

### Color Palette
- **Primary Background:** #0f172a (Dark Navy)
- **Secondary Background:** #1e293b (Slate)
- **Accent Color:** #3b82f6 (Blue)
- **Text Primary:** #f1f5f9 (Light)
- **Text Secondary:** #cbd5e1 (Gray)

### Key Design Elements
- Glassmorphism cards with backdrop blur
- Smooth gradient animations
- Responsive grid layouts
- Professional typography
- Hover effects and transitions

## 📦 Installation & Setup

### Prerequisites
- Web browser (Chrome, Firefox, Safari, or Edge)
- Node.js (optional, for local development server)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/careersahayak.git
   cd careersahayak
   ```

2. **Option A: Using Python**
   ```bash
   cd src
   python -m http.server 3000
   ```

3. **Option B: Using Node.js**
   ```bash
   npm install -g http-server
   cd src
   http-server -p 3000 -c-1 --cors
   ```

4. **Option C: Using VS Code**
   - Install "Live Server" extension
   - Right-click on `src/index.html`
   - Select "Open with Live Server"

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** → **/src** folder
   - Click **Save**

3. **Access your site**
   ```
   https://YOUR_USERNAME.github.io/careersahayak/
   ```

### Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings:
   - Base directory: `src`
   - Publish directory: `src`
5. Click "Deploy site"

### Deploy to Vercel

```bash
npm install -g vercel
cd src
vercel --prod
```

## 📊 Career Categories

The platform includes careers across these categories:

- 💻 **Technology** (20+ careers)
  - Software Developer, Data Scientist, Web Designer, AI Engineer, etc.

- 🏥 **Healthcare** (15+ careers)
  - Doctor, Nurse, Pharmacist, Medical Researcher, etc.

- 💼 **Business** (15+ careers)
  - Project Manager, Marketing Specialist, Business Analyst, etc.

- 🎓 **Education** (10+ careers)
  - Teacher, Professor, Educational Consultant, etc.

- 🎨 **Creative** (10+ careers)
  - Graphic Designer, Fashion Designer, Content Creator, etc.

- 🔧 **Engineering** (10+ careers)
  - Civil Engineer, Mechanical Engineer, Robotics Engineer, etc.

- ⚖️ **Law & Public Service** (8+ careers)
  - Lawyer, Judge, Public Administrator, etc.

## 🔧 Customization

### Adding New Careers

Edit `src/data/careers.json`:

```json
{
  "id": "unique-career-id",
  "title": "Career Title",
  "category": "Technology",
  "shortDescription": "Brief description for card display",
  "description": "Detailed career description with full information",
  "salary": "₹4,00,000 - ₹25,00,000 per year",
  "growth": "Excellent growth - High demand globally",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "education": "Bachelor's degree in relevant field",
  "responsibilities": "Key responsibilities and duties",
  "workEnvironment": "Work environment details"
}
```

### Modifying Theme Colors

Edit `src/css/style.css`:

```css
:root {
    --dark-primary: #0f172a;
    --dark-secondary: #1e293b;
    --blue-primary: #3b82f6;
    --blue-secondary: #60a5fa;
    /* Customize these values */
}
```

### Customizing Career Test

Edit `src/js/career-test.js` to modify:
- Questions
- Answer options
- Scoring logic
- Career recommendations

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the project**
2. **Create feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open Pull Request**

### Contribution Guidelines

- Follow existing code style
- Test thoroughly before submitting
- Update documentation if needed
- Add comments for complex logic
- Ensure responsive design

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and OS information

## 💡 Feature Requests

Have an idea? Open an issue with:
- Feature description
- Use case explanation
- Any relevant examples
- Mockups (if applicable)

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Career Sahayak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Ronak**
- GitHub: [@ronak25102](https://github.com/ronak25102)
- LinkedIn: [Ronak Profile](https://linkedin.com/in/ronak)
- Email: ronakkumar290@gmail.com

## 🙏 Acknowledgments

- Design inspiration from CloudPeak
- Career data compiled from various sources
- Icons from emoji sets
- Community feedback and contributions
- Open-source libraries and tools

## 📞 Support

Need help? Here's how to reach us:

- 📧 Email: info@careersahayak.com
- 🐛 Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/careersahayak/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/YOUR_USERNAME/careersahayak/discussions)

## 📈 Roadmap

### Version 1.1 (Planned)
- [ ] User authentication and profiles
- [ ] Save career favorites
- [ ] Career comparison feature
- [ ] More detailed salary information
- [ ] Video career guides

### Version 1.2 (Future)
- [ ] Career path visualization
- [ ] Mentor matching system
- [ ] Job listings integration
- [ ] Course recommendations
- [ ] Mobile app

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=YOUR_USERNAME/careersahayak&type=Date)](https://star-history.com/#YOUR_USERNAME/careersahayak&Date)

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/YOUR_USERNAME/careersahayak)
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/careersahayak?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/careersahayak?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/YOUR_USERNAME/careersahayak?style=social)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ for career guidance and student empowerment**

[Report Bug](https://github.com/YOUR_USERNAME/careersahayak/issues) • [Request Feature](https://github.com/YOUR_USERNAME/careersahayak/issues) • [View Demo](https://your-username.github.io/careersahayak/)

</div>
