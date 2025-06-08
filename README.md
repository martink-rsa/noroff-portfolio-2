# Portfolio 2 - Martin K

![Portfolio Screenshot](https://github.com/user-attachments/assets/69224f86-3319-469c-b0e1-4445c8bbb4fc)

A modern, responsive portfolio website showcasing my journey as a full-stack developer through my Noroff studies. Built with Next.js and featuring a purple theme with dark mode as default.

## Description

This portfolio website serves as my submission for Portfolio 2 at Noroff, presenting three key projects from my studies in an elegant, professional format. The site features:

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Purple-themed design with persistent theme switching
- **Project Showcase**: Three featured projects with detailed information and live links
- **Contact Form**: Functional contact form with form validation
- **Modern UI/UX**: Clean, professional design with smooth animations

### Featured Projects

- **Holidaze**: Accommodation booking platform with venue search and booking management
- **AuctionHouse**: Online bidding platform with secure authentication and real-time updates  
- **Luxur**: Premium e-commerce platform showcasing luxury products

## Built With

- [Next.js 15.3.3](https://nextjs.org/) - React framework for production
- [React 19](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installing

1. Clone the repository:

```bash
git clone https://github.com/martink-rsa/noroff-portfolio-2.git
```

2. Navigate to the project directory:

```bash
cd noroff-portfolio-2
```

3. Install dependencies:

```bash
npm install
```

### Running

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

To run ESLint:

```bash
npm run lint
```

## Features

- ✨ **Modern Design**: Clean, professional layout with purple accent colors
- 🌙 **Dark Mode**: Dark theme as default with light mode toggle
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized with Next.js for fast loading
- 🎯 **Accessibility**: Built with semantic HTML and proper ARIA labels
- 🔗 **SEO Friendly**: Proper meta tags and structured data

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── About.tsx       # About section with skills
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Hero.tsx        # Hero section
│   │   ├── ProjectCard.tsx # Individual project card
│   │   ├── Projects.tsx    # Projects showcase
│   │   └── ThemeToggle.tsx # Theme switcher
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout component
│   └── page.tsx           # Home page
```

## Contributing

This is a student project for Noroff Portfolio 2 assignment. While contributions are not expected, feedback and suggestions are welcome.

## Contact

- **GitHub**: [@martink-rsa](https://github.com/martink-rsa)
- **Email**: martin@example.com
- **LinkedIn**: [Martin K](https://linkedin.com/in/martink)

## License

This project is for educational purposes as part of Noroff studies.

## Acknowledgments

- **Noroff**: For providing the assignment brief and learning framework
- **Next.js Team**: For the excellent React framework and documentation
- **Tailwind CSS**: For the utility-first CSS framework
- **Vercel**: For hosting and deployment platform
