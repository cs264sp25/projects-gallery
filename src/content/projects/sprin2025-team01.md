---
title: "Note-AI"
description: "Transform the note-taking process through intelligent AI integration, helping students and professionals organize, understand, and review their notes more effectively."
year: "2025"
githubUrl: "https://github.com/cs264sp25-homework/team-01"
slidesUrl: "/slides/spring2025-team01.pdf"
teamMembers:
  - name: "Griffin Montalvo"
    linkedinUrl: "https://www.linkedin.com/in/griffin-montalvo-040b85282/"
    githubUrl: "https://github.com/gmontal3"
    photoUrl: "/images/spring2025-team01-griffin.jpeg"
  - name: "Larue Linder"
    linkedinUrl: "https://www.linkedin.com/in/larue-linder/"
    githubUrl: "https://github.com/LarueLinder"
    photoUrl: "/images/spring2025-team01-larue.jpeg"
  - name: "Iason Mihalopoulos"
    linkedinUrl: "https://www.linkedin.com/in/iason-mihalopoulos/"
    githubUrl: "https://github.com/jasonmiha"
    photoUrl: "/images/spring2025-team01-iason.jpeg"
  - name: "Taran Agarwal"
    linkedinUrl: "https://www.linkedin.com/in/agarwaltaran/"
    githubUrl: "https://github.com/taranagarwal"
    photoUrl: "/images/spring2025-team01-taran.jpeg"
---

## Project Overview

Note-AI is an innovative note-taking application that reimagines how students and professionals capture, organize, and review information. By integrating advanced AI features directly into the note-taking workflow, Note-AI transforms unstructured notes into powerful study and productivity tools, making the process of learning and revisiting material more effective and engaging.

## Problem Statement

Traditional note-taking often results in lengthy, unstructured documents that are difficult to navigate and review. This lack of organization can make studying inefficient and overwhelming, as users struggle to find key information or make sense of their own notes. Existing tools rarely offer intelligent support for organizing or understanding content, leaving users to manually manage and review large volumes of information.

## Key Features

Note-AI offers intelligent autocomplete suggestions within the editor, allowing users to generate relevant content in context with simple keyboard shortcuts. The application also features an AI-powered chat that enables interactive Q&A with the content of individual notes, maintaining separate chat histories for each document. For those preparing for exams, Note-AI can generate custom mock tests, including multiple question types and source tracking that highlights relevant sections within the notes. The concept map generator visualizes relationships between ideas, helping users see connections and structure their understanding. Additional AI menu features allow users to improve writing quality, generate summaries, and fix grammar or spelling issues. The "Organize Notes" function restructures dense, unorganized notes into clear sections and bullet points, while a dashboard chat enables global search and conversation across all notes, making it easy to find and reference information.

## Technical Architecture

The frontend is built with React and TypeScript, utilizing the Plate editor for rich text editing and styled with Tailwind CSS. Custom plugins and hooks facilitate seamless AI integration. On the backend, Note-AI leverages Convex for database and backend services, with vector embeddings enabling semantic search and a custom highlighting plugin for source tracking. AI integration is powered by OpenAI's GPT-4o for content generation and analysis, and advanced text embedding models support vector search and chunking pipelines. Data is processed in manageable chunks, with intelligent boundaries and background processing to ensure smooth user experience.

## Implementation Details

When users navigate away from a note, the system processes its content in the background, generating embeddings using OpenAI's text-embedding-3-small model and automatically removing outdated data. The mock test generator produces structured JSON output, complete with questions, answers, and highlighted sources. A custom highlight plugin enables precise text matching for features like search, test generation, and concept mapping, using DOM-based processing and recursive node traversal.

## Limitations

Currently, Note-AI does not support real-time collaborative editing, browser context integration, or speech-to-text capabilities. The "Organize Notes" feature is limited to notes under 3000 words, and some advanced features are still in development.

## Future Development Plans

Planned enhancements include real-time collaboration, folder organization, speech-to-text, image and table uploads, version history, an agent mode for direct AI editing, and AI-generated flashcards. These improvements aim to make Note-AI an even more comprehensive and intelligent note-taking solution.