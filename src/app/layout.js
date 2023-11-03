import './globals.css'

export const metadata = {
  title: 'Barbershop Demo',
  description: 'Barbershop Demo before big projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
