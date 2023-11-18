import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: (_theme: any) => ({
        DEFAULT: {
          css: {
            /* color: theme('colors.black'), */
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
