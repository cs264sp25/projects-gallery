---
title: "JobSync"
description: "Leverage AI to enhance every step of the job application journey, from resume creation to interview preparation, making the process more efficient and effective for job seekers."
year: "2025"
githubUrl: "https://github.com/cs264sp25-homework/team-02"
slidesUrl: "/slides/spring2025-team02.pdf"
teamMembers:
  - name: "Jonathan He"
    linkedinUrl: "https://www.linkedin.com/in/jonathanjhe/"
    githubUrl: "https://github.com/D3Rkness"
    photoUrl: "/images/spring2025-team02-jonathan.jpeg"
  - name: "Miseok Kim"
    linkedinUrl: "https://www.linkedin.com/in/miseok-k-aa4202195/"
    githubUrl: "https://github.com/byuljapcho"
    photoUrl: "/images/spring2025-team02-miseok.jpeg"
  - name: "Jacky Wang"
    linkedinUrl: "https://www.linkedin.com/in/jiaqi-jacky-wang/"
    githubUrl: "https://github.com/jiaqiwang18"
    photoUrl: "/images/spring2025-team02-jacky.jpeg"
  - name: "Sahil Patel"
    linkedinUrl: "https://www.linkedin.com/in/sahil-patel-292a7023b/"
    githubUrl: "https://github.com/SahilPatel1300"
    photoUrl: "/images/spring2025-team02-sahil.jpeg"
---

## Project Overview

JobSync is an AI-powered assistant designed to streamline every aspect of the job application process. By providing intelligent support for resume creation, application responses, and interview preparation, JobSync empowers job seekers to navigate the complexities of job hunting with greater efficiency and confidence. The platform leverages advanced AI to deliver personalized insights and content tailored to each user's unique profile and career goals.

## Problem Statement

The job application journey is often overwhelming, requiring applicants to tailor resumes, craft compelling answers to application questions, and prepare for interviews—all while trying to assess their fit for various roles. This process is time-consuming and can be discouraging, especially when users lack guidance or feedback. Many existing tools offer only generic support, failing to address the need for personalized, context-aware assistance throughout the application lifecycle.

## Key Features

JobSync automatically parses uploaded PDF resumes, extracting detailed information and converting it into structured user profiles. The platform generates tailored responses to application questions, offering options to polish, optimize, or adjust the tone of answers based on the user's background. With its job fit analysis, JobSync provides personalized feedback on how well a user's profile matches a given job description, highlighting strengths and suggesting areas for improvement. The resume generation feature creates customized, professionally formatted resumes using LaTeX templates, while the interview preparation module generates likely questions and sample answers, helping users practice and improve their responses. An integrated AI chat assistant offers conversational support, guiding users through each step of the application process and providing strategic advice.

## Technical Architecture

The frontend is built with React and Vite, featuring animated UI components for an intuitive user experience. Styling is handled with Tailwind CSS and Shadcn UI. On the backend, JobSync uses Convex for database and backend services, with real-time communication enabled by WebSocket APIs. File storage supports resume and document uploads, and the OpenAI API powers content generation. Additional integration services include OCR capabilities with Tesseract for image processing and a custom LaTeX compiler for PDF generation, all secured with API key authentication. The platform is deployed via GitHub Pages.

## Implementation Details

JobSync's resume parsing system allows users to upload PDFs, which are then processed to extract text and convert it into structured profile data, validated with Zod schemas. The AI implementation relies on carefully engineered prompts to generate structured, context-aware output in JSON format, with robust error handling. The resume generation workflow fetches user and job details, generates tailored content, applies it to a LaTeX template, and compiles the result to PDF for download and review.

## Limitations

JobSync currently depends heavily on OpenAI APIs, and the quality of AI-generated answers may vary based on the information provided. The system's knowledge is limited to the user's uploaded profile and resumes, and may occasionally produce less reliable or hallucinated responses when context is lacking.

## Future Development Plans

Future plans include open-sourcing JobSync for the JHU community, integrating with related projects, adding advanced features, and developing a Chrome extension for application autofill. These enhancements aim to make JobSync an even more powerful and accessible tool for job seekers.
