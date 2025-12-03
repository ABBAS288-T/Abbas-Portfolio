document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    const openModalBtns = document.querySelectorAll('.open-modal');

    // Project Data
    const projects = {
        '1': {
            title: 'E-Commerce Platform',
            description: 'A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, and payment gateway integration.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'assets/images/project1.jpg'
        },
        '2': {
            title: 'Portfolio Website',
            description: 'A personal portfolio website designed to showcase skills and projects. Built with semantic HTML, modern CSS, and vanilla JavaScript.',
            tech: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'assets/images/project2.jpg'
        },
        '3': {
            title: 'Task Management App',
            description: 'A productivity application that allows users to organize tasks, set deadlines, and track progress. Features drag-and-drop interface.',
            tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            image: 'assets/images/project3.jpg'
        }
    };

    // Function to open modal
    function openModal(content) {
        modalBody.innerHTML = content;
        modal.classList.add('show');
        // We are NOT setting overflow hidden on body to avoid scroll locking issues.
        // If we wanted to, we would add a class 'modal-open' to body and handle it in CSS,
        // but to be 100% safe against the user's issue, we'll leave body scrollable.
    }

    // Function to close modal
    function closeModalFunc() {
        modal.classList.remove('show');
        // No overflow reset needed since we didn't set it.
    }

    // Event Listeners for "View Details" buttons
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const project = projects[projectId];

            if (project) {
                const techStack = project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('');
                const content = `
                    <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius: 8px; margin-bottom: 20px;">
                    <h2 style="margin-bottom: 10px; color: var(--text-main);">${project.title}</h2>
                    <p style="margin-bottom: 20px; color: var(--text-muted);">${project.description}</p>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
                        ${techStack}
                    </div>
                    <a href="#" class="btn btn-primary" onclick="return false;">View Live Demo</a>
                `;
                openModal(content);
            }
        });
    });



    // Close button click
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
