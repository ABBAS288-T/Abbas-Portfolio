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

    // Add Project Button Logic
    const addProjectBtn = document.getElementById('add-project-btn');
    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const content = `
                <h2 style="margin-bottom: 20px; color: var(--text-main);">Add New Project</h2>
                <form id="add-project-form" style="display: flex; flex-direction: column; gap: 15px;">
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: var(--text-muted);">Project Title</label>
                        <input type="text" required style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid var(--border-color); background: var(--bg-body); color: var(--text-main);">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: var(--text-muted);">Description</label>
                        <textarea required rows="4" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid var(--border-color); background: var(--bg-body); color: var(--text-main);"></textarea>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 5px; color: var(--text-muted);">Image URL</label>
                        <input type="url" placeholder="https://..." style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid var(--border-color); background: var(--bg-body); color: var(--text-main);">
                    </div>
                    <button type="submit" class="btn btn-primary">Save Project</button>
                </form>
            `;
            openModal(content);

            // Handle form submission (mock)
            setTimeout(() => {
                const form = document.getElementById('add-project-form');
                if (form) {
                    form.addEventListener('submit', (ev) => {
                        ev.preventDefault();
                        alert('Project added successfully! (This is a demo)');
                        closeModalFunc();
                    });
                }
            }, 100);
        });
    }

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
