# 💼 Job Portal

A modern, responsive job portal web application built with Next.js 14, featuring real-time job filtering, detailed job listings, and an intuitive application system.

![Job Portal](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

- 🎯 **Smart Job Filtering** - Filter jobs by location, title, and job type (Full-time/Internship)
- 🏢 **20+ Real Company Listings** - Jobs from Google, Microsoft, Meta, Amazon, and more
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations
- 🔍 **Detailed Job Pages** - Comprehensive job descriptions with requirements
- 📝 **Application System** - Built-in application form with file upload
- 🧭 **Easy Navigation** - Sticky navbar and back button functionality
- ⚡ **Fast Performance** - Optimized with Next.js App Router

## 🚀 Demo

**[Live Demo](https://job-portal-nextjs-six.vercel.app/)** - Check out the live application!

## 📸 Screenshots

### Home Page
Landing page with call-to-action to browse jobs

### Jobs Listing
Filter and browse through available positions

### Job Details
Detailed job information with apply button

### Application Form
Simple form to submit your application

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Font:** [Geist](https://vercel.com/font) by Vercel
- **Language:** JavaScript/JSX
- **Routing:** Next.js File-based Routing

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
job-portal/
├── app/
│   ├── components/
│   │   ├── Back.jsx           # Back button component
│   │   ├── JobCard.jsx        # Job card component
│   │   ├── JobFilter.jsx      # Filter component
│   │   └── Navbar.jsx         # Navigation bar
│   ├── data/
│   │   └── job.js             # Job listings data
│   ├── jobs/
│   │   ├── [id]/
│   │   │   ├── apply/
│   │   │   │   └── page.js    # Application page
│   │   │   ├── page.js        # Job details page
│   │   │   ├── error.js       # Error handling
│   │   │   └── loading.js     # Loading state
│   │   └── page.js            # Jobs listing page
│   ├── layout.js              # Root layout
│   ├── page.js                # Home page
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🎨 Key Features Explained

### Job Filtering
Real-time filtering with three criteria:
- **Location** - Search by city or remote
- **Job Title** - Search by role name
- **Job Type** - Filter by Full-time or Internship

### Job Data
20 realistic job listings including:
- Frontend, Backend, Full Stack roles
- Data Science & Machine Learning
- DevOps, Mobile, and Cloud positions
- Jobs from top tech companies

### Application Flow
1. Browse jobs on the listings page
2. Click on a job to view details
3. Click "Apply Now" button
4. Fill out the application form
5. Upload resume (PDF format)
6. Submit application

## 🎯 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🌐 Deployment

This project is deployed on **Vercel** and is live at:
**https://job-portal-nextjs-six.vercel.app/**

### Deploy Your Own

Fork this repository and deploy it on Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/job-portal)

Vercel automatically detects Next.js and handles the build configuration.

## 🔮 Future Enhancements

- [ ] User authentication (login/signup)
- [ ] Save favorite jobs
- [ ] Advanced search with salary range
- [ ] Company profiles
- [ ] Application tracking dashboard
- [ ] Email notifications
- [ ] Backend API integration
- [ ] Database for job listings
- [ ] Admin panel for job management
- [ ] Resume parser


## 🙏 Acknowledgments

- Job data inspired by real job postings from top tech companies
- UI design inspired by modern job portals
- Built with Next.js documentation and best practices

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me at sujith7344@gmail.com

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ using Next.js and Tailwind CSS
