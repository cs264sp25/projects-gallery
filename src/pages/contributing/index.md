---
title: "Contributing to PGAi Projects"
description: "Contributing your project to the PGAi Projects gallery"
layout: "../../layouts/Article.astro"
---

# Contributing Your Project

This guide will walk you through the process of adding your AI project to this showcase. The process is straightforward and designed to be accessible to all students.

> **Important:** Only students who have completed a project in the "Practical Generative AI" course should submit their work.

## Step 1: Fork the Repository

Start by forking the [GitHub repository](https://github.com/cs264sp25/projects-gallery) to your own GitHub account.

## Step 2: Clone Your Fork

Clone the forked repository to your local machine:

```sh
git clone https://github.com/your-username/projects-gallery.git
cd projects-gallery
```

## Step 3: Prepare Your Assets

- **Slides:** Export your final project slides as a PDF and place the file in the `public/slides` directory. Name it using the format: `springYYYY-teamXX.pdf` (e.g., `spring2025-team01.pdf`).
- **Team Member Images:** Add a photo for each team member in the `public/images` directory. Name each file using the format: `springYYYY-teamXX-firstname.jpeg` (e.g., `spring2025-team01-griffin.jpeg`).

## Step 4: Create a New Markdown File

Create a new markdown file in the `src/content/projects` directory. Name your file using this format: `springYYYY-teamXX.md`.

## Step 5: Add Your Project Content

Your markdown file should follow this template (update all fields as appropriate):

```md
---
title: "Your Project Title"
description: "A brief (1-2 sentence) description of your project"
year: "YYYY"
githubUrl: "https://github.com/cs264spYY/teamXX"
slidesUrl: "/slides/springYYYY-teamXX.pdf"
teamMembers:
  - name: "Your Name"
    linkedinUrl: "https://www.linkedin.com/in/your-profile/" # optional
    githubUrl: "https://github.com/your-username" # optional
    photoUrl: "/images/springYYYY-teamXX-firstname.jpeg"
  # Add more team members as needed
---

## Project Overview

Write a comprehensive overview of your project here. Explain what problem it solves and why it's valuable.

## Problem Statement

Describe the problem your project addresses and why it matters.

## Key Features

- Feature 1 with brief explanation
- Feature 2 with brief explanation
- Feature 3 with brief explanation

## Technical Architecture

Describe the technical architecture of your solution. Explain which AI models you used, how you integrated them, and any interesting implementation details.

## Implementation Details

Share any notable implementation details, workflows, or technical challenges you solved.

## Limitations

Discuss any current limitations or constraints of your project.

## Future Development Plans

If you had more time, what would you add or change?
```

## Step 6: Commit and Push Your Changes

Commit your new markdown file, slides PDF, and team member images. Push your changes to your forked repository.

## Step 7: Create a Pull Request

Go to the original repository on GitHub and create a pull request from your fork. Provide a clear title and description for your PR.

## Guidelines for Submissions

- Make sure your project description is comprehensive and well-written.
- Only include accurate information about your project and team members.
- Use high-quality images that represent your project well (if applicable).
- Ensure all links (GitHub, slides, etc.) are working correctly.
- Respect the privacy of team members (get permission before adding contact info).

## Need Help?

If you encounter any issues during the submission process, you can:

- Reach out to your course instructor
- Create an issue on the GitHub repository
- Ask a classmate who has already submitted their project
