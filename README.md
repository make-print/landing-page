# Make-Print Landing Page

This is the static landing page for the Make-Print project, designed to be hosted on GitHub Pages. It provides an overview of the platform's features, an FAQ section, and comprehensive documentation for developers looking to build the project locally.

## Overview

The landing page is a static HTML/CSS/JS implementation that replicates the look and feel of the original React-based homepage but is optimized for lightweight, static hosting. It serves two main purposes:
1.  **Marketing**: Showcasing the features of Make-Print to potential users and clients.
2.  **Documentation**: Providing a centralized guide for developers to set up the complex multi-service architecture of Make-Print.

## Key Features

-   **Static & Fast**: Built with vanilla HTML, CSS (Tailwind via CDN), and JavaScript. No build process required for the landing page itself.
-   **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop.
-   **Interactive Elements**: Includes a sticky header, mobile navigation menu, FAQ accordion, and dynamic copyright year.
-   **Documentation Hub**: Includes a dedicated `docs.html` page with detailed instructions on setting up the Client, Server, File Converter, and Primitives repositories.

## File Structure

-   `index.html`: The main landing page containing the hero section, features list, and FAQ.
-   `docs.html`: The documentation page with guides for local development setup.
-   `styles.css`: Custom CSS for animations and specific styling needs not covered by Tailwind utility classes.
-   `script.js`: JavaScript logic for UI interactions (mobile menu, scroll effects, FAQ toggles).
-   `assets/`: Directory containing images, icons, and screenshots used on the site.

## How to Deploy

Since this is a static site, it can be deployed to any static hosting service.

### GitHub Pages
1.  Ensure this `landing-page` folder is the root of your repository or push the contents of this folder to a specific branch (e.g., `gh-pages`).
2.  Go to your repository settings on GitHub.
3.  Navigate to the "Pages" section.
4.  Select the source branch and folder.
5.  Save.

## Local Development

To make changes to the landing page:
1.  Open the folder in your code editor.
2.  Open `index.html` or `docs.html` in your web browser.
3.  Edit the files and refresh the browser to see changes.

## Customization

-   **Contact Email**: The site is configured to direct inquiries to `erud1t3.devs@gmail.com`. Search and replace this email in the HTML files if needed.
-   **Links**: Update GitHub, Discord, and social media links in the footer and navigation as necessary.

## License

This project is part of the Make-Print open-source ecosystem.
