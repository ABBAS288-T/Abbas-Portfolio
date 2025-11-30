# Abbas Fahad - Personal Portfolio

A fully responsive, modern personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop.
- **Dark/Light Mode**: Toggle between themes with persistent preference.
- **Smooth Scrolling**: Enhanced navigation experience.
- **Project Gallery**: Grid layout for showcasing projects and images.
- **Modals**: Detailed view for project cards.
- **Contact Form**: Functional mailto link for direct contact.

## Project Structure

```
portfolio-site/
├─ index.html          # Main landing page
├─ gallery.html        # Image gallery page
├─ css/
│  ├─ main.css         # Core styles
│  ├─ responsive.css   # Media queries
│  └─ theme.css        # Theme variables
├─ js/
│  ├─ main.js          # General logic
│  ├─ menu.js          # Mobile menu
│  ├─ modal.js         # Project modals
│  └─ theme.js         # Theme toggler
└─ assets/
   └─ images/          # Images and icons
```

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio-site.git
    ```
2.  **Open the project:**
    Navigate to the project folder and open `index.html` in your web browser.

## Deployment (GitHub Pages)

1.  Push the code to a GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Select the **main** branch as the source.
4.  Click **Save**. Your site will be live at `https://yourusername.github.io/portfolio-site/`.

## Customization

-   **Profile Image**: Replace `assets/images/profile.jpg` with your own image.
-   **Projects**: Update the project data in `js/modal.js` and the HTML in `index.html`.
-   **Colors**: Modify the CSS variables in `css/theme.css`.

## License

MIT License
