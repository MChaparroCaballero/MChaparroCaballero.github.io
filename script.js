document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el sistema de pestañas (Tabs)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones y paneles
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Activar el botón clicado
            btn.classList.add('active');

            // Mostrar el panel correspondiente
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Pequeña interactividad extra: Botón dinámico en "Sobre mí"
    const toggleBtn = document.getElementById('toggle-status-btn');
    const statusText = document.getElementById('status-text');

    const statuses = [
        "Buscando nuevos retos profesionales en desarrollo Full Stack y Frontend en Madrid.",
        "Experta en optimizar código limpio, APIs robustas y experiencias UI fluidas.",
        "¡Abierta a propuestas para proyectos tecnológicos innovadores con IA y Web Apps!"
    ];

    let currentIndex = 0;

    toggleBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % statuses.length;
        statusText.style.opacity = 0;
        setTimeout(() => {
            statusText.textContent = statuses[currentIndex];
            statusText.style.opacity = 1;
        }, 200);
    });
});

// --- Selector interactivo de Habilidades en el Aside ---
    const skillSelect = document.getElementById('skill-category-select');
    const tagsContainer = document.getElementById('skills-tags-container');

    // Base de datos completa con todas tus habilidades organizadas
    const skillsData = {
        languages: ["Java", "JavaScript", "Python", "C#", "PHP", "SQL"],
        backend: ["OpenSearch", "Node.js", "Oracle", "SSMS", "WebSockets", "Git y GitHub", "MySQL", "Docker"],
        frameworks: ["spaCy", "Vue.js", "Streamlit", "Django", "React", "Angular"],
        tools: ["OpenSearch Dashboards", "Consola Linux/Windows", "WSL", "VS Code", "Android Studio", "Eclipse", "IntelliJ", "XAMPP", "VMware", "Figma", "UMLstar", "Microsoft Office"]
    };

    function renderSkills(category) {
        if (!tagsContainer) return;
        const items = skillsData[category] || [];
        tagsContainer.innerHTML = '';
        
        items.forEach(skill => {
            const span = document.createElement('span');
            span.textContent = skill;
            tagsContainer.appendChild(span);
        });
    }

    if (skillSelect) {
        // Renderizar por defecto la primera opción
        renderSkills(skillSelect.value);

        // Escuchar cambios en el select
        skillSelect.addEventListener('change', (e) => {
            renderSkills(e.target.value);
        });
    }
