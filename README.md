# Eddie's Blog

A modern, Apple-inspired blog platform built with Next.js and Strapi CMS. This project combines beautiful design with outstanding performance to create an exceptional blogging experience.

## 🚀 Features

- **Apple-Inspired Design**: Clean, minimalist interface following Apple's design principles
- **Lightning-Fast Performance**: Built with Next.js for optimal speed and SEO
- **Mobile-First Responsive**: Perfectly optimized for all devices
- **Headless CMS**: Powered by Strapi for flexible content management
- **TypeScript**: Full type safety throughout the application
- **Modern Development**: Uses latest React patterns and best practices

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Custom Properties** - Modern styling approach
- **Apple System Fonts** - Native font stack for optimal readability

### Backend
- **Strapi 5** - Headless CMS for content management
- **Node.js** - JavaScript runtime
- **TypeScript** - Backend type safety
- **SQLite** - Default database (configurable)

## 📦 Project Structure

```
eddie-blog/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # App Router pages and layouts
│   │   │   ├── about/       # About page
│   │   │   ├── articles/    # Articles listing page
│   │   │   ├── globals.css  # Global styles
│   │   │   ├── modern.css   # Apple-inspired theme
│   │   │   ├── layout.tsx   # Root layout
│   │   │   └── page.tsx     # Home page
│   │   └── component/       # Reusable components
│   │       └── header.tsx   # Navigation header
│   ├── package.json
│   └── next.config.ts
├── backend/                 # Strapi CMS backend
│   ├── src/
│   │   ├── api/            # API endpoints and content types
│   │   │   ├── article/    # Article content type
│   │   │   ├── author/     # Author content type
│   │   │   ├── category/   # Category content type
│   │   │   ├── about/      # About page content
│   │   │   └── global/     # Global settings
│   │   ├── components/     # Reusable Strapi components
│   │   └── index.ts        # Main Strapi configuration
│   ├── config/             # Strapi configuration files
│   ├── data/               # Sample data and uploads
│   └── package.json
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eddie-blog.git
   cd eddie-blog
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Development

1. **Start the Strapi backend**
   ```bash
   cd backend
   npm run develop
   ```
   The Strapi admin panel will be available at `http://localhost:1337/admin`

2. **Start the Next.js frontend** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

### Production Build

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   npm start
   ```

2. **Build and start the backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

## 🎨 Design Philosophy

This blog platform follows Apple's design principles:

- **Simplicity**: Clean, uncluttered interfaces that focus on content
- **Typography**: System font stacks for optimal readability across devices
- **Spacing**: Generous whitespace and consistent rhythm
- **Color**: Minimal color palette with strategic use of accent colors
- **Motion**: Subtle animations and smooth transitions
- **Accessibility**: High contrast ratios and keyboard navigation support

## 📱 Responsive Design

The platform is built mobile-first with breakpoints at:
- Mobile: 0-768px
- Tablet: 768px-1024px  
- Desktop: 1024px+

All components adapt fluidly across screen sizes with optimized touch targets for mobile devices.

## 🔧 Configuration

### Environment Variables

Create `.env.local` files in both frontend and backend directories:

**Frontend (.env.local)**
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

**Backend (.env)**
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

### Customization

- **Colors**: Modify CSS custom properties in `frontend/src/app/modern.css`
- **Typography**: Update font stacks in the `:root` selector
- **Layout**: Adjust max-width and spacing variables
- **Content Types**: Extend Strapi schemas in `backend/src/api/`

## 📚 Content Management

### Setting Up Content

1. **Access Strapi Admin**: Navigate to `http://localhost:1337/admin`
2. **Create Admin User**: Follow the setup wizard
3. **Add Content Types**: 
   - Articles with title, content, author, and category
   - Authors with name, bio, and avatar
   - Categories for organizing content
4. **Configure Permissions**: Set up API access for frontend

### Content Structure

- **Articles**: Main blog posts with rich text content
- **Authors**: Writer profiles and information  
- **Categories**: Topic-based organization
- **Global**: Site-wide settings and configuration

## 🚀 Deployment

### Vercel (Recommended for Frontend)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Build**: Set build command to `npm run build`
3. **Set Environment Variables**: Add your Strapi URL
4. **Deploy**: Automatic deployments on push to main branch

### Heroku (Recommended for Backend)

1. **Create Heroku App**: `heroku create your-app-name`
2. **Add Database**: `heroku addons:create heroku-postgresql:hobby-dev`
3. **Set Environment Variables**: Configure all required env vars
4. **Deploy**: `git push heroku main`

### Alternative Deployments

- **Railway**: Full-stack deployment with database
- **DigitalOcean**: App Platform for both frontend and backend
- **Netlify**: Frontend hosting with serverless functions
- **AWS**: EC2 or Elastic Beanstalk for backend hosting

## 🤝 Contributing

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Changes**: `git commit -m 'Add amazing feature'`
4. **Push to Branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Add tests for new features
- Update documentation as needed
- Maintain the Apple-inspired design language

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Eddie Chan**
- Portfolio: [Coming Soon]
- GitHub: [@eddiechan](https://github.com/eddiechan)
- LinkedIn: [Eddie Chan](https://linkedin.com/in/eddiechan)

## 🙏 Acknowledgments

- Apple Inc. for design inspiration
- Strapi team for the excellent CMS
- Next.js team for the amazing framework
- Open source community for tools and libraries

## 📞 Support

If you have questions or need help:

1. **Check Documentation**: Review this README and inline comments
2. **Search Issues**: Look through existing GitHub issues
3. **Create Issue**: Submit a detailed bug report or feature request
4. **Community**: Join our discussions in GitHub Discussions

---

**Built with ❤️ by Eddie Chan**
