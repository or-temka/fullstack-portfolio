import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import styles from './layout.module.scss'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="Rentime" />
      </head>
      <body className={`${montserrat.variable}`}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
