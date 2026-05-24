Actúa como un desarrollador Frontend y diseñador UX/UI experto. Tu tarea es generar el código completo para mi portafolio profesional de una sola página. Soy un técnico de campo en infraestructuras y seguridad en transición hacia roles de IT, Sistemas y Desarrollo remoto. 

Quiero que utilices Astro y Tailwind CSS para construir este proyecto estático.

### 1. Sistema de Diseño, Estética e Interactividad
* **Tema general:** "Dark Mode" elegante con una sutil estética retro-tech de los años 80/90 y atmósfera "cinematic noir". 
* **Colores:** Fondos en negro profundo o gris carbón (`bg-gray-900` o `bg-black`). Usa colores de acento vibrantes estilo terminal clásico (un verde neón apagado, cian o ámbar monocromo) para botones y hover states.
* **Tipografía:** Fuente sans-serif geométrica (como Inter o Montserrat) para titulares/textos. Fuente monoespaciada (como Fira Code o Roboto Mono) para etiquetas de habilidades y código.
* **Interactividad (CRÍTICO):** Para que la web no sea pesada de leer, DEBES implementar componentes de "Acordeón" (desplegables usando `<details>` y `<summary>` con estilo Tailwind, o componentes interactivos de Astro/React). La experiencia laboral y la formación deben mostrar solo el título por defecto y desplegar los detalles al hacer clic.

### 2. Estructura y Contenido Requerido

* **Hero Section:**
    * Titular: "Iván Campos Armero. Construyendo soluciones IT desde la infraestructura física hasta el software."
    * Subtítulo: "Especialista en Sistemas, Redes y Desarrollo Híbrido."
    * Botón de CTA: "Ver perfil completo".

* **Sobre Mí (Terminal interactiva):**
    * Crea una ventana visual que simule una terminal de comandos. Muestra una animación sencilla de un comando `whoami` que imprima un resumen: "Entiendo la tecnología desde el enrutador físico hasta el script. Combino mi experiencia resolviendo problemas en campo con mi formación en Desarrollo de Aplicaciones Multiplataforma (DAM) en la UOC y programación en Python."

* **Core Skills (Matriz visual compacta):**
    * Sistemas y Redes: Mikrotik, Wimax, CGNAT, RADIUS, Linux.
    * Desarrollo: Python, Git, Automatización, IA.
    * Hardware: Mantenimiento HW/SW, IoT, Plataformas de Seguridad (Climax, Proview).

* **Experiencia Laboral (Lista Desplegable / Acordeón):**
    * **[Acordeón 1] Técnico de Alarmas - Prosegur / Insyte:** Configuración IoT, cámaras, centralitas y resolución autónoma en plataformas Climax/Proview.
    * **[Acordeón 2] Técnico de Oficina - AVATEL:** Gestión de redes Wimax, Fibra, IP PBX y soporte IT remoto.
    * **[Acordeón 3] Instalador de Internet - Icono Enterprise:** Diagnóstico y resolución de averías en redes HFC.
    * **[Acordeón 4] Otros roles enfocados en el cliente:** Recepcionista en NHotels (Gestión de reservas, atención al cliente) y Dependiente Técnico en Repairpart (Venta y reparación de equipos de videojuegos).

* **Formación y Certificaciones (Lista Desplegable / Acordeón):**
    * **[Acordeón 1] Informática y Desarrollo:** Desarrollo de Aplicaciones Multiplataforma (UOC), SMR (IES Paco Molla Petrer) y Seguridad Informática (Instituto Formación Permanente Alicante).
    * **[Acordeón 2] Estudios Base:** Bachiller Científico (Monóvar) y E.S.O.
    * **[Acordeón 3] Idiomas y Permisos:** Inglés y Valenciano. Carnet B y A (vehículo propio).

* **Contacto (Footer):**
    * Texto: "¿Buscas un perfil técnico resolutivo y autónomo? Conectemos."
    * Enlaces a GitHub, LinkedIn, correo (camposarmero.ivan@gmail.com) y teléfono (+34677099841). Ubicación: Alicante.

Por favor, inicializa los componentes de Astro asegurando que los desplegables (accordions) funcionen correctamente y aplica Tailwind para que la experiencia de usuario sea fluida y profesional.