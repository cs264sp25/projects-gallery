# PGAi Projects Gallery

A collaborative gallery of student projects from the "Practical Generative AI" course at Johns Hopkins University. This site showcases innovative AI projects, their teams, and technical details, and provides a platform for students to share their work with the community.

## 🚀 Project Overview

This site is built with [Astro](https://astro.build/) and displays AI projects completed by students. Each project includes a detailed markdown file, team member images, and a PDF of the project slides.

## 📁 Folder Structure

```text
/
├── public/
│   ├── images/         # Team member photos (jpeg)
│   └── slides/         # Project slides (pdf)
├── src/
│   └── content/
│       └── projects/   # Project markdown files
│   └── pages/
│       └── contributing/  # Contribution guide
└── package.json
```

## 📝 How to Contribute

1. **Fork the repository**: [cs264sp25/projects-gallery](https://github.com/cs264sp25/projects-gallery)
2. **Clone your fork**:
   ```sh
   git clone https://github.com/your-username/projects-gallery.git
   cd projects-gallery
   ```
3. **Add your assets**:
   - Place your slides PDF in `public/slides/` (e.g., `spring2025-team01.pdf`)
   - Place team member images in `public/images/` (e.g., `spring2025-team01-griffin.jpeg`)
4. **Create your project markdown** in `src/content/projects/` (e.g., `spring2025-team01.md`).
5. **Follow the template** in the [contributing guide](src/pages/contributing/index.md).
6. **Commit and push** your changes, then open a pull request.

## 💻 Running Locally

Install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

The site will be available at [localhost:4321](http://localhost:4321).

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Contribution Guide](src/pages/contributing/index.md)

---

*This project is for educational purposes as part of the Practical Generative AI course at JHU.*
