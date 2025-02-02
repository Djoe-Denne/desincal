# Desincal - Professional Pest Control Website

A modern, responsive website for Desincal, a professional pest control company based in Béziers, France. Built with Astro, React, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Astro, React, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Ready**: Structured data, meta tags, and semantic HTML
- **Contact Form**: Integrated with EmailJS for easy communication
- **Service Sections**: Detailed information about pest control services
- **Image Optimization**: Lazy loading and responsive images
- **Accessibility**: ARIA labels and semantic markup

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [React](https://reactjs.org) - UI Components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [EmailJS](https://www.emailjs.com) - Contact Form Handling
- [TypeScript](https://www.typescriptlang.org) - Type Safety

## 📦 Project Structure

```text
/
├── public/
│   ├── cafard/      # Cockroach related images
│   ├── carousel/    # Carousel images
│   ├── punaise/     # Bed bug related images
│   ├── rongeur/     # Rodent related images
│   ├── termite/     # Termite related images
│   └── logo.png     # Company logo
├── src/
│   ├── components/  # React components
│   │   ├── icons/   # SVG icons as React components
│   │   └── ...
│   ├── data/       # JSON data files
│   ├── layouts/    # Astro layouts
│   ├── pages/      # Astro pages
│   └── styles/     # CSS styles
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📝 License

MIT License

Copyright (c) 2024 Desincal

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