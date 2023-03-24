import './globals.css'

export const metadata = {
  title: 'Fresha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  )
}
