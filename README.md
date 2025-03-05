# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Overview:


Canvas Editor is a React-based web application that provides a simple yet powerful drawing and editing interface using the Fabric.js library. Users can add text, rectangles, circles, upload images, and delete elements with an intuitive toolbar.

Features:


Add Text: Insert editable text elements.
Draw Shapes: Add rectangles and circles.
Upload Images: Upload images and automatically scale them to fit the canvas.
Delete Elements: Remove selected objects from the canvas.
Fabric.js Integration: Leverages Fabric.js for enhanced canvas manipulation.

Technologies Used:


React 19 - Frontend framework
Fabric.js 6.6.1 - Canvas manipulation library
React Icons - For toolbar icons
Tailwind CSS - Styling
Vite - Build tool for faster development

Usage:


Use the toolbar to add text, rectangles, and circles.
Click on an object to move, resize, or edit it.
Upload an image to add it to the canvas.
Click the trash icon to remove the selected object.

Folder Structure


canvas-editor/
│── src/
│   ├── components/
│   │   ├── CanvasEditor.jsx
│   │   ├── Toolbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── tailwind.config.js
│── vite.config.js
