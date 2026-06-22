import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmtkLpij.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DqVDo0Yv.mjs';
import { $ as $$Ficha } from '../chunks/Ficha_Cp7a4l7c.mjs';
export { renderers } from '../renderers.mjs';

const $$Proyecto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titulo": "El proyecto \u2014 Sin lugar para los b\xE1rbaros", "descripcion": "Qu\xE9 es este proyecto y con qu\xE9 principios de trabajo se construye." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="col" style="padding-top: 3rem;"> ${renderComponent($$result2, "Ficha", $$Ficha, { "texto": "El proyecto" })} <h1>De la tesis al espacio público</h1> <p>
Este proyecto nace a partir de una tesis doctoral ya finalizada y publicada,
      desarrollada en el campo de la comunicación desde una trayectoria antropológica,
      docente, de investigación y de intervención en el espacio político y social.
</p> <p>
El objetivo no es poner la tesis en internet ni reproducir su estructura académica
      en una página web. La tesis se entiende aquí como un corpus de conocimiento que
      puede dar lugar a múltiples formas de circulación pública: un concepto secundario
      puede convertirse en un artículo de divulgación, una escena puede ser la puerta de
      entrada a un episodio de podcast, una pregunta social actual puede organizar una
      serie de publicaciones.
</p> <hr class="rule"> <h2>Principios de trabajo</h2> <p>
Se mantiene un compromiso con el rigor de la investigación. Se distingue siempre
      entre datos empíricos, interpretaciones teóricas, argumentos propios y recursos
      narrativos utilizados para la divulgación.
</p> <p>
La comunicación pública no se entiende como una reducción del conocimiento, sino
      como un trabajo de traducción entre comunidades de lectura distintas: especialistas
      académicos, personas interesadas sin formación específica, y actores sociales,
      culturales y políticos vinculados con los problemas tratados. Cuando existan
      debates o controversias relevantes, se explicitarán.
</p> <hr class="rule"> <h2>Uso de inteligencia artificial</h2> <p>
La inteligencia artificial se usa como herramienta de apoyo — para ordenar
      materiales, explorar formatos narrativos, editar textos y diseñar estrategias de
      comunicación — pero no como autoridad intelectual ni como fuente de validación.
      Toda información factual, histórica o bibliográfica utilizada en las publicaciones
      se verifica mediante fuentes adecuadas.
</p> <hr class="rule"> <h2>Cómo se construye este espacio</h2> <p>
La prioridad inicial no es una plataforma tecnológicamente compleja, sino un
      espacio simple, fácil de actualizar, de bajo costo y con posibilidad de
      crecimiento. Funciona como una combinación de archivo de investigación, cuaderno
      de pensamiento y publicación periódica — y crece de forma deliberada, evitando
      sobredimensionarse antes de tener un núcleo sostenible de contenidos.
</p> </section> ` })}`;
}, "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/proyecto.astro", void 0);

const $$file = "/sessions/pensive-jolly-wright/mnt/migrar a/sitio-proyecto/src/pages/proyecto.astro";
const $$url = "/proyecto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyecto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
