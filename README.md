# SmartX Fleet Management Website

A standalone website dedicated to SmartX Fleet Management solution. This is a complete fleet tracking and management solution for modern transportation businesses.

## Features

- **Real-time GPS Tracking**: Monitor vehicle location, speed, and direction in real-time
- **Route Optimization**: Optimize delivery routes to reduce fuel costs and improve delivery times
- **Fuel Management**: Monitor fuel consumption and identify opportunities for cost savings
- **Maintenance Tracking**: Schedule and track vehicle maintenance to prevent breakdowns
- **Driver Safety**: Monitor driver behavior and implement safety protocols
- **Analytics & Reports**: Comprehensive reporting and analytics to optimize fleet performance

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd fleet-management-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
fleet-management-website/
├── public/
│   ├── images/
│   │   └── backgrounds/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ui/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Key Components

- **FleetManagementPage**: Main page component showcasing fleet management features
- **HeroSection**: Hero banner with call-to-action buttons
- **FeatureCard**: Reusable component for displaying features
- **SectionHeading**: Consistent section headings
- **CTASection**: Call-to-action sections

## Customization

### Styling
The project uses Tailwind CSS with custom CSS variables for theming. You can modify the color scheme by updating the CSS variables in `src/index.css`.

### Content
Update the content in `src/pages/FleetManagementPage.tsx` to customize the fleet management information displayed.

### Images
Replace the background images in `public/images/backgrounds/` with your own fleet management images.

## Deployment

This project can be deployed to any static hosting service such as:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

## License

This project is part of the SmartSuitex ecosystem and is proprietary software.

## Support

For support and questions about the SmartX Fleet Management solution, please contact our support team.
