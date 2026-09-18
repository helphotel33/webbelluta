import './globals.css';

export const metadata = {
  metadataBase: new URL('https://belluta.es'),
  title: 'Belluta · Jamón y Paleta Premium de la Sierra de Huelva',
  description:
    'Jamones de 24 meses y paletas de 12, nunca más de 1.000 piezas al año. Precio directo y envío a toda la península. Tradición desde 1951.',
  openGraph: {
    title: 'Belluta · Jamón y Paleta Premium',
    description:
      'Jamones y paletas cuidados sin prisa en la Sierra de Huelva. Tradición desde 1951.',
    url: 'https://belluta.es',
    siteName: 'Belluta',
    locale: 'es_ES',
    type: 'website',
    images: ['/img/hero.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=IBM+Plex+Mono:wght@400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
