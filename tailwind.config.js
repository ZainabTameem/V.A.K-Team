/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'vak-bg':     '#060d1f',
        'vak-card':   '#0c1830',
        'vak-border': 'rgba(255,255,255,0.07)',
        'vak-text':   '#dce4f0',
        'vak-muted':  '#55627a',
        'vak-blue':   '#3b7cff',
        'vak-orange': '#f5a623',
        'vak-green':  '#00e5a0',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
        'sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}