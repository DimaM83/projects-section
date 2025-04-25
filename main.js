// Ждём полной загрузки DOM, чтобы элементы уже существовали на странице

document.addEventListener("DOMContentLoaded", () => {

    // Массив всех проектов (10 штук). Каждый объект содержит данные одного проекта.
    const projects = [
        {
            title: "Wallet Webservice",
            stack: "React, JavaScript, Node JS, Git",
            img: "./images/project-wallet@2x.webp",
            link: "https://github.com/yourteam/wallet"
        },
        {
            title: "Green harvest webservice",
            stack: "React, JavaScript, Node JS, Git",
            img: "./images/project-greenharvest@2x.webp",
            link: "https://github.com/yourteam/green-harvest"
        },
        {
            title: "English Exellence website",
            stack: "HTML / CSS / JS",
            img: "./images/project-english@2x.webp",
            link: "https://github.com/yourteam/english-excellence"
        },
        {
            title: "energy flow webservice",
            stack: "React / SCSS",
            img: "./images/project-energyflow@2x.webp",
            link: "#"
        },
        {
            title: "mimino website",
            stack: "HTML / CSS",
            img: "./images/project-mimino@2x.webp",
            link: "#"
        },
        {
            title: "Power Pulse",
            stack: "JS / Node.js",
            img: "./images/project-powerpulse@2x.webp",
            link: "#"
        },
        {
            title: "fruitbox online store",
            stack: "HTML / CSS / JS",
            img: "./images/project-fruitbox@2x.webp",
            link: "#"
        },
        {
            title: "wallet webservice",
            stack: "React, JavaScript",
            img: "./images/project-wallet@2x.webp",
            link: "#"
        },
        {
            title: "vyshyvanka vibes Landing Page",
            stack: "React, Tailwind CSS",
            img: "./images/project-vyshyvanka@2x.webp",
            link: "#"
        },
        {
            title: "starlight studio landing page",
            stack: "JS / Node.js / Git",
            img: "./images/project-starlight@2x.webp",
            link: "#"
        }
    ];

    // Сколько проектов показывать на странице сначала
    let visibleProjects = 3;

    // Главная функция отрисовки проектов
    function renderProjects() {

        // Получаем ul, куда вставляются проекты
        const list = document.querySelector("#projects-list");

        // Очищаем список перед новой отрисовкой
        list.innerHTML = "";

        // Отрезаем нужное количество проектов
        const visible = projects.slice(0, visibleProjects);

        // Перебираем каждый проект и создаём HTML
        visible.forEach(project => {
            const li = document.createElement("li");
            li.classList.add("projects__item");

            // HTML разметка проекта
            li.innerHTML = `
        <img
            class="projects__image"
            src="${project.img}"
            srcset="${project.img} 1x, ${project.img} 2x"    // Используем одну версию картинки @2x и подставляем её для обоих DPR (1x и 2x)  
            alt="${project.title}"
            width="320"
            height="180"
        />
        <p class="projects__stack">${project.stack}</p>
        <h3 class="projects__name">${project.title.toUpperCase()}</h3>
        <div class="projects__link-wrapper">
<a
    class="projects__link"
    href="${project.link}"
    target="_blank"
    rel="noopener noreferrer"
>
    VISIT
    <img
    class="projects__icon"
    src="./images/icon-projects.svg"
    alt="Arrow icon"
    width="18"
    height="18"
    />
</a>
</div>

        `;

            // Добавляем готовый li в ul
            list.appendChild(li);
        });

        // Показываем или скрываем кнопку "Load more", если все проекты загружены
        const button = document.querySelector("#projects-load-more");
        if (visibleProjects >= projects.length) {
            button.style.display = "none";
        } else {
            button.style.display = "block";
        }
    }

    // Событие по нажатию на "Load more"
    document.querySelector("#projects-load-more").addEventListener("click", () => {
        visibleProjects += 3;     // Увеличиваем количество показываемых проектов
        renderProjects();         // И перерисовываем список 
    });

    // Первая отрисовка при загрузке
    renderProjects();
});
