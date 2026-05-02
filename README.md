#  Agency Portfolio Showcase App

A modern, responsive React application that allows an agency to showcase projects, add new work dynamically, and provide a seamless browsing experience for potential clients.

---

##  Features

*  **Landing Page**

  * Displays a list of projects in a clean, responsive grid layout

*  **Add New Projects**

  * Users can dynamically add new projects via a form

*  **Search Functionality**

  * Instantly filter projects based on user input

*  **Responsive Design**

  * Optimized for desktop, tablet, and mobile devices

*  **Real-Time Updates**

  * No page reloads—UI updates instantly with state changes

---

##  Tech Stack

* **Frontend:** React (Hooks)
* **State Management:** `useState`
* **Styling:** CSS (responsive grid + modern UI)

---

##  Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── ProjectForm.jsx
│   ├── ProjectList.jsx
│   ├── ProjectCard.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

##  Component Architecture

```
App
├── Header
├── SearchBar
├── ProjectForm
├── ProjectList
│   └── ProjectCard
```

---

##  State Management

State is managed at the **App level**:

* `projects` → stores all project data
* `searchTerm` → controls filtering

### Data Flow

* `SearchBar` updates `searchTerm`
* `ProjectForm` adds new projects
* `ProjectList` receives filtered projects
* `ProjectCard` displays individual project details

---

##  Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/wanja-juma/SPA-React-Portfolio-Platform.git
   cd portfolio-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

##  Usage

* Add a new project using the form
* Search projects using the search bar
* Browse projects in a responsive layout

---

##  Future Improvements

*  Add project images
*  Add tags/categories
*  Persist data using localStorage or backend API
*  Authentication for admin project uploads
*  Add animations (e.g., Framer Motion)

---

##  Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

##  License

This project is open-source and available under the MIT License.

---

##  Author

**Your Name**
RUTH WANJA JUMA

---

##  Acknowledgements

* Inspired by modern agency portfolio designs
* Built with React best practices and responsive design principles

