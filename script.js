// Base de datos unificada
const modalData = {
    infoHome: {
        title: "Bienvenida e Introducción General",
        youtubeId: "xSLk457Zot4",
        text: "Video de bienvenida al entorno virtual educativo y descripción del programa de Artes Plásticas."
    },
    info1: {
        btn1: {
            title: "Modelo de Mitchel Resnick",
            youtubeId: "Y7YPcmNJ1oo",
            image: "img/img-resnick.png",
            texto1: "La espiral del Pensamiento Creativo de Mitchel Resnick es un modelo de aprendizaje activo que se basa en experiencias lúdicas y creativas. Este proceso es continuo y se desarrolla a través de los siguientes pasos principales:",
            texto2: "Esta espiral favorece el desarrollo de la creatividad, la expresión, la resolución de problemas y el pensamiento crítico, permitiendo que el aprendizaje artístico sea significativo y centrado en el proceso de exploración y descubrimiento.",
            vinetas: [
                { titulo: "Imaginar", desc: "El proceso inicia cuando las personas estudiantes imaginan ideas iniciales para sus proyectos." },
                { titulo: "Crear", desc: "Las ideas se materializan al crear producciones, como obras artísticas." },
                { titulo: "Jugar", desc: "Los estudiantes juegan y experimentan con diversos materiales, explorando nuevas posibilidades." },
                { titulo: "Compartir", desc: "En este momento, se procede a compartir las creaciones realizadas con los demás." },
                { titulo: "Reflexionar", desc: "Finalmente, se realiza un proceso de reflexión sobre lo aprendido durante toda la experiencia." }
            ]
        },
        btn2: {
            title: "Modelo de Parsons",
            image: "img/img-Parson.png",
            texto1: "Orientación metodológica utilizada en la educación artística, especialmente en Artes Plásticas, busca fortalecer el aprendizaje estético de las personas estudiantes. Michael Parsons desarrolló una propuesta centrada en la experiencia estética, es decir, en la manera en que las personas observan, interpretan, sienten y valoran las obras de arte.",
            texto2: "De esta manera el arte se convierte en un espacio para desarrollar pensamiento crítico, sensibilidad estética, creatividad y construcción de significado.",
            vinetas: [
                { titulo: "Favoritismo", desc: "Las niñas y los niños valoran una obra según lo que más les gusta visualmente." },
                { titulo: "Belleza y realismo", desc: "La valoración se centra en qué tan 'bonita' o 'real' parece la obra." },
                { titulo: "Expresividad", desc: "Las personas estudiantes comienzan a identificar emociones, sentimientos e intenciones." },
                { titulo: "Estilo y forma", desc: "Se reconoce que existen distintas maneras de hacer arte. Se analizan técnicas y materiales." },
                { titulo: "Juicio crítico", desc: "La persona logra argumentar considerando contexto, intención y significado." },
                { titulo: "Fase integradora", desc: "Integra todas las fases anteriores desde múltiples perspectivas." }
            ]
        }
    },
    info2_doc1: {
        title: "Visualización: Planeamiento Artes Plásticas",
        pdfUrl: "txt/PLANEAMIENTO ARTES PLÁSTICAS 2026_IITRIMESTRE.pdf",
        text: "Documento técnico institucional correspondiente al Segundo Trimestre del periodo lectivo 2026."
    },
    info2_doc2: {
        title: "Visualización: Plantilla de Planeamiento Correlacionado",
        pdfUrl: "txt/Planeamiento Correlacionado AP.pdf",
        text: "Matriz pedagógica de correlación de contenidos curriculares del programa."
    },
    info3: {
        title: "El componente de Proyecto en la clase de Artes Plásticas",
        youtubeId: "dQw4w9WgXcQ", 
        text: "El componente Proyecto en la asignatura de Artes Plásticas para I y II Ciclo.",
        image: "img/componente-proyecto.png",
        pdfs: [
            { nombre: "Orientaciones para el desarrollo y evaluación del componente Proyecto", url: "txt/El proyecto I y II Ciclos Versión Diagramado.pdf" }
        ]
    },
    info3_faq: {
        title: "Preguntas Frecuentes sobre el componente Proyecto",
        faqs: [
            {
                q: "¿El proyecto de Artes Plásticas puede desarrollarse en el hogar?",
                a: "El proyecto está diseñado para desarrollarse principalmente en el aula, ya que requiere la mediación, el acompañamiento y la realimentación continua de la persona docente durante cada una de sus etapas. Sin embargo, dependiendo de la naturaleza del proyecto, del contexto educativo y del criterio profesional de la persona docente, algunas actividades complementarias en II Ciclo podrían realizarse en el hogar, considerando que determinados procesos artísticos requieren mayor tiempo de ejecución."
            },
            {
                q: "¿El proyecto de Artes Plásticas debe ser complejo o muy elaborado?",
                a: "No necesariamente. En Artes Plásticas, un proyecto no se define por su tamaño o complejidad, sino por el proceso de aprendizaje que desarrolla el estudiantado. En Primero y Segundo Ciclos, los proyectos deben ser accesibles, acordes con la edad, contextualizados y coherentes con los contenidos curriculares del período correspondiente."
            },
            {
                q: "¿Cómo se desarrolla el componente Proyecto para garantizar la participación del estudiantado que requiere apoyos educativos o adecuaciones de acceso al aprendizaje?",
                a: "La persona docente debe implementar los apoyos educativos, ajustes y adecuaciones curriculares que requiera cada estudiante, de manera coherente con las estrategias utilizadas durante el desarrollo de las lecciones. Por tanto, el proyecto debe garantizar oportunidades de aprendizaje accesibles, flexibles y equitativas, en concordancia con los principios del Diseño Universal para el Aprendizaje (DUA). Favoreciendo la participación y el desarrollo efectivo del proyecto por parte de todas las personas estudiantes."
            },
            {
                q: "¿Cuál es la duración recomendada de un proyecto?",
                a: "La duración debe ser establecida por la persona docente durante el período y dependerá del tipo de proyecto, de los contenidos curriculares, del contexto educativo y de la planificación realizada. Lo importante es que el proyecto se desarrolle de manera progresiva y permita completar adecuadamente sus diferentes etapas."
            },
            {
                q: "¿Cómo se evalúa el componente Proyecto en Primero y Segundo Ciclos?",
                a: "El componente proyecto se evalúa mediante un instrumento técnicamente elaborado, como una rúbrica analítica o una escala de desempeño, alineada con los contenidos curriculares. La evaluación considera el desempeño del estudiantado durante las etapas: Indagar y diseñar, Experimentar y crear, Socializar y reflexionar. Se valora tanto el proceso como el producto final. Además, pueden incorporarse procesos de autoevaluación y coevaluación acordes con la edad del estudiantado."
            },
            {
                q: "¿Cuál es el papel de la familia durante el desarrollo del proyecto?",
                a: "La participación de la familia debe orientarse al acompañamiento y apoyo del proceso, evitando intervenir en la elaboración del proyecto, ya que este constituye una evidencia del desempeño de la persona estudiante para efectos de la evaluación."
            },
            {
                q: "¿Todas las personas estudiantes deben desarrollar el mismo proyecto?",
                a: "No. La persona docente puede proponer una misma situación significativa o pregunta generadora para todo el grupo; sin embargo, el desarrollo del proyecto debe favorecer la creatividad, la expresión personal y la contextualización. Cada estudiante desarrolla propuestas propias, acordes con sus intereses, características y posibilidades, siempre que respondan a los contenidos establecidos durante el período."
            },
            {
                q: "¿Qué procede cuando una persona estudiante se ausenta durante alguna etapa del proyecto?",
                a: "Si la persona estudiante presenta una justificación y esta es avalada, se le brinda la oportunidad de realizar la etapa correspondiente y ser evaluada en igualdad de condiciones que el resto del estudiantado. En caso de no presentar justificación, o si esta no es avalada, la etapa debe presentarse y valorarse de manera formativa, señalando los ajustes que debe realizar. Es importante considerar que la calificación del componente de proyecto se obtiene a partir del cumplimiento de la totalidad de las etapas."
            },
            {
                q: "¿Es posible utilizar materiales reutilizados o de bajo costo en el proyecto?",
                a: "Sí. La selección de materiales debe responder a las características del proyecto, al nivel educativo y al contexto del estudiantado. El documento promueve experiencias artísticas contextualizadas y no condiciona el desarrollo del proyecto al uso de materiales específicos o de alto costo, por lo que pueden utilizarse materiales reciclados, reutilizados o disponibles en el entorno cuando sean pertinentes y coherentes con los procesos de mediación desarrollados durante las lecciones."
            },
            {
                q: "¿Qué evidencias debe conservar la persona docente durante el desarrollo del proyecto?",
                a: "La persona docente debe recopilar evidencias que permitan valorar el proceso de aprendizaje del estudiantado. Estas pueden incluir descripciones breves del desempeño, fotografías del proceso o del producto, así como los instrumentos de evaluación utilizados, como rúbricas analíticas o escalas de desempeño. Las evidencias deben reflejar el desarrollo de las diferentes etapas del proyecto. Estas evidencias constituyen respaldo del proceso de evaluación y de la mediación pedagógica desarrollada durante el período."
            }
        ]
    },
    info4_doc1: {
        title: "Visualización: Planeamiento Correlacionado de Artes Plásticas",
        pdfUrl: "txt/Planeamiento Correlacionado AP.pdf",
        text: "Documento técnico institucional correspondiente al Segundo Trimestre del periodo lectivo 2026."
    },
    info4_doc2: {
        title: "Visualización: Orientaciones para escuelas unidocentes",
        pdfUrl: "txt/Orientaciones Unidocentes AP.pdf",
        text: "Matriz pedagógica de correlación de contenidos curriculares del programa."
    }, 
    info4_doc3: {
        title: "Visualización: Cartel de alcance y secuencia para escuelas unidocentes",
        pdfUrl: "txt/CARTEL DE ALCANCE Y SECUENCIA ARTES PLASTICAS (2).pdf",
        text: "Matriz pedagógica de correlación de contenidos curriculares del programa."
    },
    info4_video: {
        title: "Visualización: Video Explicativo de Orientaciones",
        youtubeId: "dQw4w9WgXcQ",
        text: "Recurso audiovisual interactivo con las orientaciones metodológicas y pedagógicas."
    },
    info5: {
        title: "Evaluación y Recursos Complementarios",
        youtubeId: "dQw4w9WgXcQ",
        text: "Modulo informativo sobre los procesos de evaluación formativa y sumativa aplicados al área pedagógica."
    }
};

let lastActiveElement = null;

// Obtiene el origen actual para evitar el error 153
function getCurrentOrigin() {
    return window.location.origin !== 'null' && window.location.origin !== '' 
        ? window.location.origin 
        : 'http://localhost';
}

// Genera la URL dinámica asignando el parámetro origin obligatorio
function buildYouTubeUrl(youtubeId) {
    const origin = encodeURIComponent(getCurrentOrigin());
    return `https://www.youtube-nocookie.com/embed/${youtubeId}?enablejsapi=1&origin=${origin}`;
}

// Renderiza contenedor iframe dinámico
function getYouTubeEmbedHTML(youtubeId, title) {
    const embedUrl = buildYouTubeUrl(youtubeId);
    return `
        <div class="media-centered-col" style="margin: 20px auto; width: 100%; max-width: 550px;">
            <div class="youtube-container">
                <iframe 
                    src="${embedUrl}" 
                    title="Reproductor de video: ${title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
}

// Carga los videos estáticos en el DOM asignando sus URLs adaptadas
function updateStaticYouTubeIframes() {
    document.querySelectorAll('iframe[data-yt-id]').forEach(iframe => {
        const ytId = iframe.getAttribute('data-yt-id');
        if (ytId) {
            iframe.src = buildYouTubeUrl(ytId);
        }
    });
}

function pauseAllMedia() {
    document.querySelectorAll('audio, video').forEach(media => {
        media.pause();
        media.currentTime = 0;
    });

    document.querySelectorAll('iframe').forEach(iframe => {
        const src = iframe.src;
        iframe.src = src;
    });
}

function showInfo(event, id) {
    pauseAllMedia();
    
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('show');
        content.setAttribute('aria-hidden', 'true');
    });
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    
    const targetContent = document.getElementById(id);
    if (targetContent) {
        targetContent.classList.add('show');
        targetContent.removeAttribute('aria-hidden');
    }
    
    const currentBtn = event.currentTarget;
    currentBtn.classList.add('active');
    currentBtn.setAttribute('aria-selected', 'true');
}

function openModal(id, tipo) {
    pauseAllMedia();
    lastActiveElement = document.activeElement;
    
    const modal = document.getElementById('customModal');
    const body = document.getElementById('modal-body');

    if (tipo === 'visualizar_imagen') {
        body.innerHTML = `
            <h2 id="modal-title" style="color: #01263f; margin-top: 0; text-align: center;">Vista Ampliada</h2>
            <div style="text-align: center; width: 100%; display: flex; justify-content: center; align-items: center;">
                <img src="${id}" alt="Visualización ampliada de la imagen seleccionada" style="max-width: 80vw; max-height: 60vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
            </div>
        `;
        displayModal(modal);
        return; 
    }

    let data;
    let esBotonInfo1 = false;

    if (id.startsWith('info1-')) {
        const subClave = id.split('-')[1]; 
        data = modalData['info1'][subClave];
        esBotonInfo1 = true;
    } else {
        data = modalData[id];
    }

    if (!data) return;

    let contenidoHTML = '';

    if (esBotonInfo1) {
        if (id === 'info1-btn1') {
            let vinetasHTML = `<ul style="text-align: left; list-style-type: disc; padding-left: 20px; margin-bottom: 25px;">`;
            data.vinetas.forEach((vineta) => {
                vinetasHTML += `
                    <li style="margin-bottom: 12px;">
                        <h4 style="margin: 0 0 4px 0; color: #01263f;">${vineta.titulo}</h4>
                        <p style="margin: 0; color: #333; font-size: 0.95rem;">${vineta.desc}</p>
                    </li>`;
            });
            vinetasHTML += `</ul>`;

            body.innerHTML = `
                <h2 id="modal-title" style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
                ${getYouTubeEmbedHTML(data.youtubeId, data.title)}
                <hr style="border: 1px solid #fcda6f; margin: 20px 0;">
                <div class="grid-two-columns">
                    <div class="column-left" style="text-align: left;">
                        <p style="color: #222; font-size: 1rem; line-height: 1.5; margin-bottom: 20px;">${data.texto1}</p>
                        ${vinetasHTML}
                        <p style="color: #444; font-style: italic; margin-bottom: 25px; border-left: 4px solid #fcda6f; padding-left: 10px;">${data.texto2}</p>
                    </div>
                    <div class="column-right media-centered-col">
                        <img src="${data.image}" alt="Diagrama explicativo del modelo Resnick" style="width: 100%; max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;">
                    </div>
                </div>
            `;
        } else {
            contenidoHTML += `<p style="text-align: left; color: #222; font-size: 1rem; line-height: 1.5; margin-bottom: 20px;">${data.texto1}</p>`;
            contenidoHTML += `<ul style="text-align: left; list-style-type: disc; padding-left: 20px; margin-bottom: 25px;">`;
            data.vinetas.forEach((vineta) => {
                contenidoHTML += `
                    <li style="margin-bottom: 12px;">
                        <h4 style="margin: 0 0 4px 0; color: #01263f;">${vineta.titulo}</h4>
                        <p style="margin: 0; color: #333; font-size: 0.95rem;">${vineta.desc}</p>
                    </li>`;
            });
            contenidoHTML += `</ul>`;
            contenidoHTML += `<p style="text-align: left; color: #444; font-style: italic; margin-bottom: 25px; border-left: 4px solid #fcda6f; padding-left: 10px;">${data.texto2}</p>`;

            body.innerHTML = `
                <h2 id="modal-title" style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
                <div style="text-align: center; margin: 20px 0;" class="media-centered-col">
                    <button class="gallery-item-btn" onclick="openModal('${data.image}', 'visualizar_imagen')" aria-label="Ampliar imagen del Modelo de Parsons">
                        <img src="${data.image}" class="modal-img" alt="Diagrama de etapas del modelo de Parsons" style="display: inline-block; max-width: 90%; height: auto; border-radius: 10px;">
                    </button>
                </div>
                <hr style="border: 1px solid #fcda6f; margin: 20px 0;">
                ${contenidoHTML}
            `;
        }

    } else if (tipo === 'faq' && data.faqs) {
        let faqsHTML = `<div class="faq-container" style="text-align: left; margin-top: 20px;">`;
        data.faqs.forEach((faq, index) => {
            faqsHTML += `
                <div class="faq-item" style="margin-bottom: 10px; border: 1px solid #ccc; border-radius: 6px; overflow: hidden;">
                    <button class="faq-question" id="faq-btn-${index}" aria-expanded="false" aria-controls="faq-answer-${index}" onclick="toggleFaq(${index})" style="width: 100%; text-align: left; background: #f8f9fa; border: none; padding: 12px 15px; font-weight: bold; color: #01263f; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
                        <span>${faq.q}</span>
                        <span id="faq-icon-${index}" aria-hidden="true" style="font-size: 1.2rem;">+</span>
                    </button>
                    <div id="faq-answer-${index}" class="faq-answer" role="region" aria-labelledby="faq-btn-${index}" style="display: none; padding: 15px; background: #fff; color: #222; border-top: 1px solid #eee; line-height: 1.5;">
                        ${faq.a}
                    </div>
                </div>
            `;
        });
        faqsHTML += `</div>`;

        body.innerHTML = `
            <h2 id="modal-title" style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
            ${faqsHTML}
        `;
    } else {
        if (tipo === 'pdfs' && data.pdfs) {
            contenidoHTML = `<h3>Documentos descargables</h3><div class="pdf-list-modal">`;
            data.pdfs.forEach((doc) => {
                contenidoHTML += `
                    <div class="pdf-item">
                        <span>${doc.nombre}</span>
                        <a href="${doc.url}" class="download-link" download target="_blank" rel="noopener noreferrer">Descargar PDF</a>
                    </div>`;
            });
            contenidoHTML += `</div>`;
        }

        let elementoMultimediaHTML = '';
        if (tipo === 'visualizar_pdf') {
            elementoMultimediaHTML = `
                <div style="text-align: center; margin: 15px 0; width: 100%;">
                    <iframe src="${data.pdfUrl}" title="Visor de documento PDF" style="width: 100%; height: 48vh; border: 1px solid #ccc; border-radius: 8px;"></iframe>
                    <div style="margin-top: 12px;">
                        <a href="${data.pdfUrl}" target="_blank" rel="noopener noreferrer" class="action-btn" style="display: inline-block; text-decoration: none; padding: 8px 20px; font-size: 0.9rem; background-color: #1e7e34; color: white; border-radius: 5px; font-weight: bold;">Abrir PDF en ventana completa</a>
                    </div>
                </div>`;
        } else if (tipo === 'visualizar_video' || data.youtubeId) {
            elementoMultimediaHTML = getYouTubeEmbedHTML(data.youtubeId, data.title);
        }

        let separadorOpcional = contenidoHTML !== '' ? `<hr style="border: 1px solid #fcda6f; margin: 20px 0;">` : '';

        body.innerHTML = `
            <h2 id="modal-title" style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
            ${elementoMultimediaHTML}
            <p style="margin-top: 15px; color: #333;">${data.text || ''}</p>
            ${separadorOpcional}
            ${contenidoHTML}
        `;
    }

    displayModal(modal);
}

function displayModal(modal) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) closeBtn.focus();
}

function toggleFaq(index) {
    const ans = document.getElementById(`faq-answer-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    const btn = document.getElementById(`faq-btn-${index}`);
    
    if (ans.style.display === "none" || ans.style.display === "") {
        ans.style.display = "block";
        icon.textContent = "-";
        btn.setAttribute('aria-expanded', 'true');
    } else {
        ans.style.display = "none";
        icon.textContent = "+";
        btn.setAttribute('aria-expanded', 'false');
    }
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    
    pauseAllMedia();

    if (lastActiveElement) {
        lastActiveElement.focus();
    }
}

// Event Listeners y Navegación por teclado
document.addEventListener('DOMContentLoaded', () => {
    updateStaticYouTubeIframes();
});

document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('customModal');
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }

    if (document.activeElement.classList.contains('tab-btn')) {
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const index = tabs.indexOf(document.activeElement);

        if (event.key === 'ArrowRight') {
            const nextTab = tabs[(index + 1) % tabs.length];
            nextTab.focus();
            nextTab.click();
        } else if (event.key === 'ArrowLeft') {
            const prevTab = tabs[(index - 1 + tabs.length) % tabs.length];
            prevTab.focus();
            prevTab.click();
        }
    }
});

window.onclick = function(event) {
    const modal = document.getElementById('customModal');
    if (event.target === modal) {
        closeModal();
    }
};