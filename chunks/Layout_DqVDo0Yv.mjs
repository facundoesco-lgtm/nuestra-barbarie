import { b as createAstro, c as createComponent, d as addAttribute, h as renderHead, a as renderTemplate, i as renderSlot } from './astro/server_BmtkLpij.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://tu-sitio.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titulo, descripcion = "Cuaderno de investigaci\xF3n y comunicaci\xF3n p\xFAblica a partir de una tesis doctoral en comunicaci\xF3n." } = Astro2.props;
  const path = new URL(Astro2.request.url).pathname;
  const links = [
    { href: "/proyecto/", label: "El proyecto" },
    { href: "/bitacora/", label: "Bit\xE1cora" },
    { href: "/podcast/", label: "Podcast" },
    { href: "/archivo/", label: "Archivo" },
    { href: "/recursos/", label: "Recursos" }
  ];
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${titulo}</title><meta name="description"${addAttribute(descripcion, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body> <header class="site-header"> <div class="wrap"> <a href="/" class="masthead" style="text-decoration:none; color:inherit;"> <span class="masthead-name">Facundo Escobar</span> <span class="masthead-kicker">Cuaderno de investigación — Sin lugar para los bárbaros</span> </a> <nav class="main-nav" aria-label="Navegación principal"> <ul> ${links.map((l) => renderTemplate`<li> <a${addAttribute(l.href, "href")}${addAttribute(path.startsWith(l.href) ? "page" : void 0, "aria-current")}>${l.label}</a> </li>`)} </ul> </nav> </div> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer class="site-footer"> <div class="wrap"> <div class="footer-top"> <p class="footer-note">
Un archivo de investigación, un cuaderno de pensamiento y una publicación periódica, todo en el mismo lugar.
</p> <form class="footer-form" onsubmit="return false;"> <label for="footer-email">Recibir nuevas entradas</label> <div class="footer-form-row"> <input type="email" id="footer-email" placeholder="tu@email.com" required> <button type="submit">Suscribirme</button> </div> </form> </div> <div class="footer-bottom"> <span>Facundo Escobar · © 2026</span> <a href="mailto:contacto@tudominio.com" style="color:var(--ink-soft);">Contacto</a> </div> </div> </footer> </body></html>`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
