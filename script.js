document.addEventListener('DOMContentLoaded', () => {
    // Control de Pestañas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            setTimeout(() => {
                targetPane.classList.add('active');
            }, 50);
        });
    });
});

// Función global para expandir/contraer las tarjetas de experiencia
function toggleExperience(cardElement) {
    // Opcional: si quieres que solo una esté abierta a la vez, descomenta las siguientes líneas:
    /*
    document.querySelectorAll('.exp-card').forEach(card => {
        if (card !== cardElement) card.classList.remove('expanded');
    });
    */
    cardElement.classList.toggle('expanded');
}
