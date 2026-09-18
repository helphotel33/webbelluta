# webbelluta

Web de Belluta — jamones y paletas premium. Next.js estático, sin base de datos ni PHP.

## Cómo funciona

- `app/page.js` — toda la portada. Los textos están aquí.
- `app/globals.css` — colores y estilos. Los colores de marca están arriba del todo, en `:root`.
- `public/img/` — las fotos.

Los botones de compra abren WhatsApp con el mensaje escrito. El número y los mensajes
están en las primeras líneas de `app/page.js`.

## Desarrollo

```bash
npm install
npm run dev
```

## Publicar

Push a la rama principal. Vercel despliega solo, en unos dos minutos.

## Pendiente

- Reseñas reales de Google (ahora hay tres huecos)
- Versión en inglés en `/en`
- Páginas de aviso legal, privacidad y cookies
- Plazo de entrega y perfiles de Instagram y Facebook
