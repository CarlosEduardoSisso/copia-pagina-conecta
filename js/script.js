// Simula interatividade básica para fins didáticos
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada com sucesso!");

    // Exemplo de funcionalidade básica: Scroll suave para seções
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth',
                });
            }
        });
    });
});
