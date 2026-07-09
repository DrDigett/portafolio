/* ============================================
   PROJECTS DATA
   ============================================ */
const PROJECTS = [
  {
    id: 'criptoexchange',
    title: 'CriptoExchange',
    image: 'https://i.imgur.com/eN2ddbo.jpeg',
    description: 'Aplicación frontend desarrollada en Vue.js, usando Vue Router para navegación y TailwindCSS para diseño responsivo. Integra Chart.js, Vue-Chartkick y Numeral.js para visualización y procesamiento de datos de criptomonedas en tiempo real. Incluye ESLint, Prettier y buenas prácticas de componentes y modularidad.',
    url: 'https://eloquent-curran-914e8b.netlify.app/',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Single Page Application desarrollada con Vue.js 2 que permite comparar el valor del dólar frente a distintas criptomonedas en tiempo real. El proyecto está pensado para que el usuario pueda visualizar de forma rápida y clara cómo fluctúa el precio de diferentes activos digitales frente a una moneda fiat de referencia.' },
      { title: 'Arquitectura', type: 'text', content: 'Funcionalidades principales: <br> Consulta y comparación de cotizaciones de múltiples criptomonedas frente al dólar. <br> Visualización de datos mediante gráficos interactivos (Chart.js / vue-chartkick). <br> Navegación entre vistas mediante Vue Router. <br> Indicadores de carga (spinners) para mejorar la experiencia mientras se obtienen los datos. <br> Interfaz responsive estilizada con Tailwind CSS.' },
      { title: 'Funcionalidad destacada', type: 'text', content: 'Visualización de criptomonedas en tiempo real con gráficos interactivos. Datos actualizados dinámicamente. Arquitectura modular con componentes Vue reutilizables y buenas prácticas de desarrollo.' },
      { title: 'Stack técnico', type: 'list', content: ['Vue.js', 'Vue Router', 'TailwindCSS', 'Chart.js', 'Numeral.js', 'ESLint', 'Prettier'] },
      { title: 'Enlaces', type: 'links', content: { deploy: 'https://eloquent-curran-914e8b.netlify.app/', github: 'https://github.com/DrDigett/CriptoExchange' } }
    ]
  },
  {
    id: 'babel-plus',
    title: 'BaBel+',
    image: 'https://i.imgur.com/VILJC79.jpeg',
    description: 'BaBel+ es un gestor de consumo de contenido para el usuario estructurado como un grafo interconectado. Usa React 19 + TypeScript en el frontend, Hono como API REST, PostgreSQL con Drizzle ORM y Groq AI (el LLM: LLaMA 3.1) para clasificación automática de nodos. Arquitectura monorepo con npm workspaces, despliegue en Render. Permite catalogar libros, películas, artículos y más; crear relaciones semánticas entre ellos; visualizar un grafo interactivo force-directed; y armar listas compartibles con IDs cortos. Todo con tema oscuro responsive.',
    url: 'https://babel-plus-api.onrender.com/',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Aplicación full-stack tipo "knowledge graph" que permite crear, organizar y relacionar nodos de información, con una funcionalidad de IA integrada que sugiere automáticamente la clasificación de un nuevo nodo y sus relaciones con nodos existentes. Estructurado como monorepo con separación clara entre cliente, servidor y tipos compartidos.' },
      { title: 'Arquitectura', type: 'text', content:'Arquitectura por capas (Layered Architecture) con enfoque API-First: <br> Cliente: SPA en React 19 + Vite, con enrutamiento vía React Router y páginas para Dashboard, detalle de nodo y vista de grafo. <br>Servidor: API REST construida con Hono (framework HTTP ligero en TypeScript/ESM), con rutas por recurso y una capa de servicio para la lógica de IA. <br>Base de datos: PostgreSQL sobre Render, con Drizzle ORM para el acceso a datos y migraciones. Shared kernel: paquete compartido de tipos TypeScript entre cliente y servidor para mantener consistencia de contratos.'},
      { title: 'Funcionalidad destacada', type: 'text', content: ' "Smart Add" con IA: <br>Al crear un nodo, el sistema envía el texto a la API de Groq (modelo llama-3.1-8b) junto con los títulos de nodos existentes, y la IA responde clasificando el tipo de nodo y sugiriendo relaciones automáticas con nodos ya presentes en el grafo, que luego se persisten en la base de datos.' },
      { title: 'Stack técnico', type: 'list', content: ['React 19', 'TypeScript', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'Groq AI (LLaMA 3.1)', 'npm Workspaces', 'Render'] },
      { title: 'Enlaces', type: 'links', content: { deploy: 'https://babel-plus-api.onrender.com/', github: 'https://github.com/DrDigett/Babel' } }
    ]
  },
  {
    id: 'api-simpsons',
    title: 'API-SIMPsons',
    image: 'https://i.imgur.com/Z9U4RbD.jpeg',
    description: 'Desarrollado con React.js + TypeScript y Vite, consume una API paginada para visualizar personajes de The Simpsons. Implementa paginación server-side, renderizado dinámico mediante componentes reutilizables, gestión de estado con hooks, diseño responsive con CSS modular y CSS Grid.',
    url: 'https://api-sim-psons.vercel.app/',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Aplicación web desarrollada con React.js + TypeScript y Vite que consume una API paginada para visualizar personajes de The Simpsons. Implementa paginación server-side, renderizado dinámico mediante componentes reutilizables, gestión de estado con hooks y diseño responsive con CSS Grid.' },
      { title: 'Arquitectura', type: 'text', content: 'Frontend moderno construido con React + TypeScript, utilizando Vite como bundler para desarrollo rápido. Consume una API REST con paginación server-side. Los componentes reutilizables se renderizan dinámicamente según los datos recibidos. Los hooks de React gestionan el estado de la aplicación. CSS Grid proporciona un diseño responsivo y adaptable.' },
      { title: 'Funcionalidad destacada', type: 'text', content: 'Visualización de personajes de The Simpsons con paginación fluida. Componentes reutilizables para cards, paginación y layouts. Diseño responsive que se adapta a cualquier dispositivo.' },
      { title: 'Stack técnico', type: 'list', content: ['React.js', 'TypeScript', 'Vite', 'CSS Grid', 'React Hooks'] },
      { title: 'Enlaces', type: 'links', content: { demo: 'https://api-sim-psons.vercel.app/', github: '' } }
    ]
  },
  {
    id: 'compulab',
    title: 'CompuLab+',
    image: 'src/images/proyect-2.png',
    description: 'Proyecto web de simuladores y visualizaciones científicas, centrado en la construcción de apps interactivas y modulares. Emplea JavaScript (ES6+), Canvas 2D y Bootstrap para interfaz responsiva. Incorpora carga dinámica de componentes reutilizables, gestión de estado de navegación, animaciones optimizadas con requestAnimationFrame y manejo de asincronía con fetch/async-await.',
    url: 'https://drdigett.github.io/CompuLab/index.html',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Proyecto web de simuladores y visualizaciones científicas, centrado en la construcción de aplicaciones interactivas y modulares. Emplea JavaScript (ES6+), Canvas 2D y Bootstrap para interfaz responsiva. Incorpora carga dinámica de componentes reutilizables, gestión de estado de navegación y animaciones optimizadas.' },
      { title: 'Arquitectura', type: 'text', content: 'Aplicación modular con carga dinámica de componentes. Canvas 2D para simulaciones y visualizaciones científicas. Bootstrap proporciona la estructura responsiva. Las animaciones se optimizan con requestAnimationFrame para rendimiento fluido. Manejo de asincronía con fetch y async-await para carga de datos.' },
      { title: 'Funcionalidad destacada', type: 'text', content: 'Simuladores científicos interactivos con visualizaciones en Canvas 2D. Carga dinámica de componentes sin recargar la página. Animaciones suaves y optimizadas con requestAnimationFrame.' },
      { title: 'Stack técnico', type: 'list', content: ['JavaScript (ES6+)', 'Canvas 2D', 'Bootstrap', 'Fetch API', 'Async/Await', 'requestAnimationFrame'] },
      { title: 'Enlaces', type: 'links', content: { demo: 'https://drdigett.github.io/CompuLab/index.html', github: '' } }
    ]
  },
  {
    id: 'mortytk',
    title: 'MortyTK',
    image: 'src/images/proyect-3.png',
    description: 'Una Single Page Application con JavaScript Vanilla, integrando una REST API, manejo de rutas con hash routing, consumo de datos asincrónicos y estructura basada en componentes y renderizado dinámico.',
    url: 'https://drdigett.github.io/SPA-MortyTienesKvenir/',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Una Single Page Application construida con JavaScript Vanilla, integrando una REST API, manejo de rutas con hash routing, consumo de datos asincrónicos y estructura basada en componentes con renderizado dinámico. Todo sin frameworks ni librerías externas.' },
      { title: 'Arquitectura', type: 'text', content: 'SPA construida completamente con JavaScript Vanilla. El hash routing permite la navegación entre vistas sin recargar la página. El consumo de datos asincrónicos se realiza mediante fetch. La estructura de componentes se implementa con funciones de renderizado dinámico que generan el HTML según los datos recibidos.' },
      { title: 'Funcionalidad destacada', type: 'text', content: 'Aplicación SPA funcional sin frameworks externos. Navegación fluida con hash routing. Integración con API REST para datos dinámicos. Renderizado dinámico de componentes.' },
      { title: 'Stack técnico', type: 'list', content: ['JavaScript Vanilla', 'REST API', 'Hash Routing', 'HTML5', 'CSS3'] },
      { title: 'Enlaces', type: 'links', content: { demo: 'https://drdigett.github.io/SPA-MortyTienesKvenir/', github: '' } }
    ]
  },
  {
    id: 'antidoto-edit',
    title: 'Antídoto Edit',
    image: 'src/images/proyect-3.png',
    description: 'Antídoto Edit es la página de una editorial peruana comprometida con la cultura nacional. Este sitio web, desarrollado con HTML, CSS y JavaScript, emplea APIs JSON para contenido dinámico. Descubre la pasión por la escritura en este antídoto.',
    url: 'https://antidotoedit.github.io/',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Antídoto Edit es el sitio web de una editorial peruana comprometida con la cultura nacional. Desarrollado con HTML, CSS y JavaScript vanilla, emplea APIs JSON para contenido dinámico. Presenta un catálogo de publicaciones con diseño limpio y tipografía cuidada.' },
      { title: 'Arquitectura', type: 'text', content: 'Sitio web estático con contenido dinámico mediante APIs JSON. La estructura HTML semántica proporciona buena accesibilidad y SEO. CSS con diseño limpio y tipográfico. JavaScript se encarga de consumir las APIs y renderizar el contenido editorial dinámicamente.' },
      { title: 'Funcionalidad destacada', type: 'text', content: 'Catálogo dinámico de publicaciones editoriales. Integración con APIs JSON para contenido actualizable. Diseño limpio enfocado en la legibilidad y experiencia de lectura.' },
      { title: 'Stack técnico', type: 'list', content: ['HTML5', 'CSS3', 'JavaScript', 'JSON APIs'] },
      { title: 'Enlaces', type: 'links', content: { demo: 'https://antidotoedit.github.io/', github: '' } }
    ]
  },
  {
    id: 'ruletajs',
    title: 'RuletaJS',
    image: 'src/images/proyect-3.png',
    description: 'Ruleta interactiva construida con JavaScript y CSS. Utiliza cálculos de rotación, clip-path y transformaciones CSS para generar segmentos precisos y animar giros controlados. El botón inicia un giro con transición suave, selecciona un número aleatorio y mantiene una interfaz limpia, responsiva y funcional.',
    url: 'https://drdigett.github.io/CDP-RULETA/',
    github: '',
    sections: [
      { title: 'Descripción', type: 'text', content: 'Ruleta interactiva construida con JavaScript y CSS puro. Utiliza cálculos de rotación, clip-path y transformaciones CSS para generar segmentos precisos y animar giros controlados. El botón inicia un giro con transición suave, selecciona un número aleatorio y mantiene una interfaz limpia y responsiva.' },
      { title: 'Arquitectura', type: 'text', content: 'Aplicación interactiva standalone sin dependencias externas. Los segmentos de la ruleta se generan con clip-path y transformaciones CSS calculadas dinámicamente. El giro se controla con transiciones CSS suaves. La lógica de selección aleatoria determina el resultado final. Todo el diseño es responsivo.' },
      { title: 'Funcionalidad destacada', type: 'text', content: 'Segmentos precisos generados con clip-path CSS. Animación de giro con transiciones suaves. Selección aleatoria con resultados visuales claros. Interfaz limpia, funcional y responsive.' },
      { title: 'Stack técnico', type: 'list', content: ['JavaScript', 'CSS3 (clip-path, transforms)', 'HTML5'] },
      { title: 'Enlaces', type: 'links', content: { demo: 'https://drdigett.github.io/CDP-RULETA/', github: '' } }
    ]
  }
];
