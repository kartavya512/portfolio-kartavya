
import './globals.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata = {
  title: "Kartavya Gupta | Software Developer",
  description:
    "Software Developer specializing in full-stack development, AI-powered applications, and scalable web systems.",

  keywords: [
    "Kartavya Gupta",
    "Software Developer",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "Machine Learning Engineer",
  ],

  authors: [{ name: "Kartavya Gupta" }],
  creator: "Kartavya Gupta",

  openGraph: {
    title: "Kartavya Gupta | Developer Portfolio",
    description:
      "Explore projects, AI work, and software engineering portfolio of Kartavya Gupta.",
    url: "https://kartavya-gupta.vercel.app/",
    siteName: "Kartavya Portfolio",
    
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kartavya Gupta | Developer Portfolio",
    description:
      "Software developer building AI-powered applications and modern web experiences.",
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
