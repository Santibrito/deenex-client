Aquí tenés un **README / brief** listo para pegárselo a una IA para que te genere **un único `index.html`** con **Tailwind** y usando tus **tokens de color**. Incluye **descripción de la página** + **todos los textos crudos** inventariados, para que después los mejores.

---

# README — Deenex Landing (brief para IA)

## Objetivo

Generar una **landing page corporativa, moderna, minimalista y simple** para **Deenex**, enfocada en cadenas **multisucursal** (gastro/retail) que quieren **recuperar el control de sus clientes**, **reducir comisiones**, y operar con **datos propios**. La página vende una plataforma modular (Ventas, Marketing, AI, Club) y empuja a **Agendar Demo / Conectar con Ventas** por WhatsApp.

## Restricciones técnicas (obligatorias)

- Entregar **1 solo archivo**: `index.html`
- Usar **TailwindCSS** (CDN).
- No usar frameworks (ni React/Vue/Next).
- Diseño: **corporativo, minimalista, moderno, limpio**, con buen spacing y tipografía clara.
- Usar estos tokens/colores y tipografías (tal cual):

```css
:root {
  --primary: #5423e7;
  --secondary: #ffffff;
  --tertiary: #6c6c89;
  --title-color: #121217;

  --font-heading: "DM Sans", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

### Reglas de estilo (para que el diseño quede consistente)

- Fondo general claro (`--secondary`), texto principal `--title-color`, texto secundario `--tertiary`.
- `--primary` solo para acentos: botones, highlights, badges, links activos.
- Tipografías:
  - Headings: `--font-heading`
  - Body: `--font-body`

- Botones: borde redondeado, tamaño cómodo, hover suave.
- Cards: borde sutil, sombra muy leve, padding generoso.
- Layout: contenedor centrado, máximo ancho (ej. `max-w-6xl`), mucho aire.
- Animaciones: muy sutiles (fade/translate al aparecer) sin librerías externas (opcional).
