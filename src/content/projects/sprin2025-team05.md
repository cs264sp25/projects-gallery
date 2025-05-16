---
title: "Calendula"
description: "An AI-powered calendar application designed to simplify scheduling and time management by leveraging Google Calendar integration and intelligent AI assistance."
year: "2025"
githubUrl: "https://github.com/cs264sp25-homework/team-05"
slidesUrl: "/slides/spring2025-team05.pdf"
teamMembers:
  - name: "Samuel Muzac"
    linkedinUrl: "https://www.linkedin.com/in/samuel-muzac-b83444228/"
    githubUrl: "https://github.com/Samuel-Muzac"
    photoUrl: "/images/spring2025-team05-samuel.jpeg"
  - name: "Ahmed Hashi"
    linkedinUrl: "https://www.linkedin.com/in/ahmed-hashi-51ab88218/"
    githubUrl: "https://github.com/ahashi1263"
    photoUrl: "/images/spring2025-team05-ahmed.jpeg"
  - name: "Bryan Santana"
    linkedinUrl: "https://www.linkedin.com/in/bryan-santana-33a0a01bb/"
    githubUrl: "https://github.com/BryanSantana"
    photoUrl: "/images/spring2025-team05-bryan.jpeg"
  - name: "Enoch Appiah"
    linkedinUrl: "https://www.linkedin.com/in/enoch-appiah-282361219/"
    githubUrl: "https://github.com/enochappiah"
    photoUrl: "/images/spring2025-team05-enoch.jpeg"
  - name: "Alexis Barbour"
    githubUrl: "https://github.com/Glitch-kun"
---

## Project Overview

Calendula is an AI-powered calendar application that simplifies scheduling and time management by integrating seamlessly with Google Calendar and providing intelligent assistance. Designed for both personal and professional use, Calendula helps users plan events, coordinate meetings, and manage tasks more efficiently through a combination of intuitive design and advanced AI features.

## Problem Statement

Managing schedules and coordinating events can be challenging, especially when balancing multiple commitments. Traditional calendar tools often lack intelligent support for resolving conflicts, prioritizing tasks, or providing personalized scheduling advice. As a result, users may struggle with inefficient planning, missed opportunities, and time-consuming coordination efforts.

## Key Features

Calendula offers secure Google account sign-in and two-way calendar synchronization, making it easy to manage and replicate events across devices. The AI-powered assistant enables natural language scheduling, intelligent event creation and modification, and personalized advice for resolving conflicts and optimizing time management. Group scheduling features allow users to create and manage team calendars, find optimal meeting times, and analyze availability, while advanced AI capabilities support task prioritization and deadline analysis across multiple models, including OpenAI, Ollama, and Gemini.

## Technical Architecture

The frontend is built with Vite and React.js, styled with TailwindCSS and Shadcn UI for a modern user experience. The backend leverages Convex for database and backend services, integrates with the Google Calendar API for event management, and uses the OpenAI API (with optional Ollama support) for AI-driven features. This architecture ensures secure, scalable, and responsive performance across all devices.

## Implementation Details

Calendula's development followed a structured roadmap, beginning with project setup, Google Sign-In, and calendar API integration. The database schema and UI components were designed for flexibility and ease of use, while the AI chatbot was implemented to provide basic scheduling support. Subsequent development focused on group scheduling, multi-model AI integration, event tagging, analytics, and performance optimization, culminating in a robust and user-friendly application.

## Limitations

Currently, Calendula's AI model support is limited, and the application is primarily focused on Google Calendar integration. Some advanced scheduling capabilities and analytics are still under development, and performance may be constrained in certain scenarios.

## Future Development Plans

Future enhancements will include expanded calendar service integrations, more sophisticated AI scheduling features, improved conflict resolution, and additional analytics. The team also plans to support more AI models and further optimize performance and user experience, making Calendula an even more powerful tool for managing time and events.
