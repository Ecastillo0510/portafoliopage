const datos_proyectos = [ 

    /*objetos*/

    /*1- Balans Industrial*/
    {
        name: "Balans Industrial",
        description: "Es una empresa de consultoría e ingeniería que proporciona servicios técnicos especializados en áreas como el diseño mecánico y el control de procesos.",
        image: "img/Logo_last.png",
        tegnologias: ["WordPress", "HTML", "CSS", "JavaScript"],
        demoLink: "https://balansindustrial.com/en/", 
    },

    /*2- El Sistema Texas*/
    {
        name: "El Sistema Texas",
        description: "Busca la transformación social y personal de niños, jóvenes y adultos en Texas a través de la práctica colectiva de la música de alta calidad",
        image: "img/texa_logo.png",
        tegnologias: ["WordPress", "HTML", "CSS", "JavaScript"],
        demoLink: "https://elsistematexas.org/",  
    },

    /*3- Aparicio Realty*/
    {
        name: "Aparicio Realty",
        description: "Es una firma de servicios inmobiliarios con sede en Texas, enfocada en ofrecer un servicio completo de compra, venta y alquiler de viviendas.",
        image: "img/newlogo.png",
        tegnologias: ["WordPress", "HTML", "CSS", "JavaScript"],
        demoLink: "https://www.apariciorealty.net/",   
    },

    /*4- Realtor Ivanna Mendoza*/
    {
        name: "Realtor Ivanna Mendoza",
        description: "Aplicación frontend creada con React y Tailwind CSS que simula la interfaz de X (Twitter), incluyendo posts y perfil.",
        image: "img/Logo-Ivanna-Mendoza-White.webp",
        tegnologias: ["React", "Tailwind CSS", "Redux"],
        demoLink: "https://realtorivannamendoza.com/",   
    },

    /*5- Gisela Rojas*/
    {
        name: "Gisela Rojas",
        description: "Aplicación frontend creada con React y Tailwind CSS que simula la interfaz de X (Twitter), incluyendo posts y perfil.",
        image: "ruta/a/imagen-proyecto2.jpg",
        tegnologias: ["React", "Tailwind CSS", "Redux"],
        demoLink: "https://giselarojas.com/",     
    },
    
    /*6-Caissa Realty*/
    {
        name: "Caissa Realty",
        description: "Aplicación frontend creada con React y Tailwind CSS que simula la interfaz de X (Twitter), incluyendo posts y perfil.",
        image: "ruta/a/imagen-proyecto2.jpg",
        tegnologias: ["React", "Tailwind CSS", "Redux"],
        demoLink: "https://caissarealty.com/",
    },


];




document.addEventListener('DOMContentLoaded', () => {

    /*llamamos el id del html*/
    const container = document.getElementById('projects-container');

    datos_proyectos.forEach( projectos => { 
    
        const tegnologiasTags = projectos.tegnologias.map(tegnologias => 

            `<span class="tegnologias-tag">${tegnologias}</span>`

        ).join(''); // Une todos los spans en una sola cadena


        // Crea el HTML completo para la tarjeta
        const projectHTML = `

            <div class="project-card">

                <div class="project-image-container">
                    <img src="${projectos.image}" alt="Captura de ${projectos.name}">
                </div>

                <div class="project-info">

                    <h3>${projectos.name}</h3>

                    <p class="project-description">${projectos.description}</p>

                    <div class="project-tegnologias-stack">
                        ${tegnologiasTags}
                    </div>

                    <div class="project-links">
                        <a href="${projectos.demoLink}" target="_blank" class="btn btn-primary">Demo en Vivo</a>
                    </div>

                </div>

            </div>
        `;
        
        // Inserta la tarjeta en el contenedor
        container.insertAdjacentHTML('beforeend', projectHTML);
    });
});


/*funcion para que salga el menu*/
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelector('.menu-links');

    if (menuToggle && menuLinks) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active'. Si la tiene, la quita; si no, la pone.
            menuLinks.classList.toggle('active');
        });
    }
});