document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const openModalBtns = document.querySelectorAll('.open-modal');

    // Project Data (In a real app, this might come from a JSON file or API)
    const projects = {
        '1': {
            title: 'E-Commerce Platform',
            description: 'A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, and payment gateway integration.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://via.placeholder.com/600x300?text=E-Commerce+Project'
        },
        '2': {
            title: 'Portfolio Website',
            description: 'A personal portfolio website designed to showcase skills and projects. Built with semantic HTML, modern CSS, and vanilla JavaScript.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'https://via.placeholder.com/600x300?text=Portfolio+Project'
        },
        '3': {
            title: 'Task Management App',
            description: 'A productivity application that allows users to organize tasks, set deadlines, and track progress. Features drag-and-drop interface.',
            tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            image: 'https://via.placeholder.com/600x300?text=Task+App+Project'
        }
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior if it's an anchor
            const projectId = btn.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                const techStack = project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('');

                modalBody.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="margin-bottom: 10px; color: var(--text-main);">${project.title}</h2>
                    <p style="margin-bottom: 20px; color: var(--text-muted);">${project.description}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                        ${techStack}
                    </div>
                    <a href="#" class="btn btn-primary" onclick="return false;">View Live Demo</a>
                `;

                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModalFunc() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    closeModal.addEventListener('click', closeModalFunc);

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunc();
        }
    });
});
