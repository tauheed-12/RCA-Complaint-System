# Code Of Conduct

## Local System Setup:

```javascript
npm install
```

```javascript
npm start
```

## Structure:

`public/`: Contains static files like `index.html`.

`src/`:

- `App.js`: Root component.

- `assets/`: Stores static assets like images, fonts, etc.

- `components/`: Contains reusable UI components.

- `apis/`: API interaction logic. All API calls should be in this folder.

&nbsp;&nbsp;&nbsp;&nbsp; Example: `apiStudent.js` - API calls related to student details.

- `pages/`: Contains all the pages (e.g., HomePage.jsx, Login.jsx, etc.).

- `Routes.js`: Manages routing for all pages using React Router.

`tailwind.config.js:`

- Contains custom Tailwind CSS styles, including font sizes, font families, and colors.

- Use these custom styles across all pages for consistency.

&nbsp;&nbsp;&nbsp;&nbsp; Example:

```html
<button className="bg-jmi-green hover:bg-jmi-hovergreen text-desktop-heading sm:text-phone-heading py-2 px-4 font-ginto">
  Student Details
</button>
```

- If a style is used frequently and may be reused in other files, add it here first to maintain uniformity.

`CODE_OF_CONDUCT.md:`

- Maintain this document to ensure proper communication and consistency within the project.

