/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // Manual toggle for precision
  theme: {
    extend: {
      colors: {
        // "Linear-style" Dark Palette
        // Using Zinc for that neutral, premium tech look
        background: '#09090b', // zinc-950
        surface: '#18181b', // zinc-900
        'surface-highlight': '#27272a', // zinc-800
        border: '#3f3f46', // zinc-700

        primary: '#3b82f6', // blue-500 (keeping blue as core accent)
        'primary-glow': 'rgba(59, 130, 246, 0.5)',

        text: {
          primary: '#f4f4f5', // zinc-100
          secondary: '#a1a1aa', // zinc-400
          tertiary: '#71717a', // zinc-500
        }
      },
      fontFamily: {
        // We'll rely on system fonts for "San Francisco" feel on Mac, 
        // Inter is great if we load it, but system-ui is fastest and cleanest default.
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter: '-0.01em',
        normal: '0',
        wide: '0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)', // Apple-esque spring-like curve
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
      }
    },
  },
  plugins: [],
}
