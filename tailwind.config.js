/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { backgroundImage :{
        'my-background':"url('src/assets/myBackground.jpg')",
        'image-overlay':"linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0))"
    }},
  },
  plugins: [],
}

