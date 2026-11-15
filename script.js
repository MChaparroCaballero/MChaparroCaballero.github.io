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

// --- Desplegable personalizado de Habilidades ---
    const customSelect = document.getElementById('custom-skill-select');
    const trigger = customSelect?.querySelector('.select-trigger');
    const selectedText = document.getElementById('selected-category-text');
    const options = customSelect?.querySelectorAll('.select-option');
    const tagsContainer = document.getElementById('skills-tags-container');

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

    if (customSelect && trigger) {
        renderSkills('languages');

        // Abrir / cerrar menú
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            customSelect.classList.toggle('open');
        });

        // Seleccionar opción
        options.forEach(option => {
            option.addEventListener('click', () => {
                options.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                selectedText.textContent = option.textContent;
                renderSkills(option.getAttribute('data-value'));
                customSelect.classList.remove('open');
            });
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', () => {
            customSelect.classList.remove('open');
        });
    }
