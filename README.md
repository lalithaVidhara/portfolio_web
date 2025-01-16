# Portfolio Website

This is a personal portfolio website built with **React**, **Next.js**, **TypeScript**, and **Sanity CMS**. It showcases my projects, skills, and experience, offering a platform to present myself professionally.

## Inspiration

This project is inspired by **Mitchell Sparrow's portfolio** and **Sonny Sangha's  video**.

## Features

- Dynamic content management with Sanity CMS
- Responsive design for all devices
- Modern technologies: React, Next.js, and TypeScript
- SEO optimization for improved discoverability

## Live Demo

[View the Live Site](#) *(Replace with your live URL)*

---

## Installation Guide

Follow the steps below to clone and set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/lalithaVidhara/portfolio_web.git
cd your-repo-name
```

### 2. Install Dependencies (Main Folder)
```bash
npm install
```

### 3. Navigate to the Sanity Folder and Install Dependencies
```bash
cd sanity
npm install
```

### 4. Set Up Environment Variables
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_SANITY_DATASET={YOUR_DATASET_NAME}
NEXT_PUBLIC_SANITY_PROJECT_ID=[YOUR_ID]
NEXT_PUBLIC_BASE_URL=http://localhost:3000/
```

### 5. Warning: Avoid Using `npm audit fix --force`
Running `npm audit fix --force` after installations may break the project. Proceed cautiously.

---

## Running the Development Server

### 1. Start the Main Application (Frontend)
Run the following command in the main folder:
```bash
npm run dev
```

### 2. Start Sanity Studio
Navigate to the `sanity` folder and run:
```bash
npm run start
```

---

## Folder Structure

```
root/
├── components/
├── pages/
├── public/
├── sanity/
│   ├── schemas/
│   ├── studio/
│   ├── package.json
├── styles/
├── utils/
├── package.json
```

---

## Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **CMS**: Sanity CMS
- **Styling**: CSS/SCSS
- **Tooling**: npm

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

- **Lalitha Sri Vidhara** - [GitHub Profile](https://github.com/lalithaVidhara)
