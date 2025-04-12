# Kisan Rai Portfolio Website

A cinematic, interactive portfolio website featuring parallax effects, fluid animations, and minimalistic design.

## Features

- **Responsive Design**: Works beautifully on all devices from mobile to desktop
- **Cinematic Animations**: Smooth transitions and parallax scrolling effects
- **Interactive Elements**: Animated particles and interactive UI components
- **Dark Mode**: Sleek dark theme with accent highlights
- **Modern UI**: Clean, minimalist design with attention to typography and spacing

## Technologies Used

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Motion Library**: Framer Motion for smooth animations
- **Icons**: Lucide React icons
- **Routing**: Wouter for lightweight routing
- **Backend**: Express.js for serving the application

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository
   ```
   git clone https://github.com/yourusername/kisan-portfolio.git
   cd kisan-portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

### Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions
│   │   ├── App.tsx       # Main application component
│   │   └── main.tsx      # Application entry point
│   └── index.html        # HTML template
├── server/               # Backend Express server
│   ├── index.ts          # Server entry point
│   └── routes.ts         # API routes
├── shared/               # Shared types and utilities
├── public/               # Static assets
└── ...                   # Configuration files
```

## Customization

To customize the color scheme, edit the `theme.json` file:

```json
{
  "variant": "vibrant",
  "primary": "hsl(202, 100%, 56%)",
  "appearance": "dark",
  "radius": 0.5
}
```

## Contact

Kisan Rai
- Email: kisanrai939@gmail.com
- LinkedIn: https://www.linkedin.com/in/kisanrai/
- GitHub: https://github.com/Kisan303

## License

This project is open source and available under the [MIT License](LICENSE).