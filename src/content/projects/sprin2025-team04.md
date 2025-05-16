---
title: "CodeCoach"
description: "An all in one github application that helps you become a better developer through automatic AI code reviews"
year: "2025"
githubUrl: "https://github.com/cs264sp25-homework/team-04"
slidesUrl: "/slides/spring2025-team04.pdf"
teamMembers:
  - name: "Katherine Forbes"
    linkedinUrl: "https://www.linkedin.com/in/forbeskat/"
    githubUrl: "https://github.com/forbeskat"
    photoUrl: "/images/spring2025-team04-katherine.jpeg"
  - name: "Ethan Lee"
    linkedinUrl: "https://www.linkedin.com/in/ethanlee0000/"
    githubUrl: "https://github.com/astrohyo"
    photoUrl: "/images/spring2025-team04-ethan.jpeg"
  - name: "Sambhav Chordia"
    linkedinUrl: "https://www.linkedin.com/in/sambhav-chordia/"
    githubUrl: "https://github.com/sam-chordia"
    photoUrl: "/images/spring2025-team04-sambhav.jpeg"
  - name: "Tanisha Tarin"
    linkedinUrl: "https://www.linkedin.com/in/tanisha-tarin/"
    githubUrl: "https://github.com/tanishatarin"
    photoUrl: "/images/spring2025-team04-tanisha.jpeg"
---

## Project Overview

CodeCoach is an AI-powered GitHub bot designed to enhance code quality and provide intelligent feedback throughout the software development process. By automating code reviews and detecting potential issues, CodeCoach helps developers improve their coding practices and maintain high standards, ultimately aiming to make software safer and more reliable.

## Problem Statement

Software development is inherently risky, with critical errors sometimes leading to disastrous consequences. High-profile incidents, such as the Knight Capital loss and the Boeing crash, highlight the importance of robust code review processes. However, manual code reviews are time-consuming and often inconsistent, leaving room for mistakes and missed opportunities for improvement. There is a need for an intelligent, automated solution that can provide consistent, actionable feedback and help developers avoid common pitfalls.

## Key Features

CodeCoach delivers AI-powered code analysis, offering feedback on code style, detecting common coding smells, and providing actionable insights directly on pull requests. The bot integrates seamlessly with GitHub, handling webhooks and generating context-aware comments to guide developers. In addition to code review, CodeCoach offers interactive chatbot responses and visualizes key metrics, such as code quality scores, commit analysis, and knowledge graphs, helping teams track trends and improvements over time.

## Technical Architecture

The frontend is a React-based web client styled with TailwindCSS, while the backend consists of a GitHub App/Bot running in an Express.js container. CodeCoach leverages OpenAI's GPT-4 and Gemini-2.0-flash for AI analysis, with Convex and Neo4j providing database and knowledge graph support. The system is deployed using GitHub Actions, ensuring continuous integration and delivery. Specialized AI agents handle tasks such as naming convention checks, duplicate code detection, large function identification, and complexity analysis, making the review process comprehensive and efficient.

## Implementation Details

CodeCoach is designed to sit between developers and production, automatically reviewing code changes and providing summarized feedback. The bot processes GitHub events, analyzes code using AI agents, and generates comments and visualizations to help developers understand and address issues. The knowledge graph component enables deeper analysis and trend tracking, while the interactive chatbot offers additional support and guidance.

## Limitations

Currently, CodeCoach is not yet deployed and is limited to detecting six types of code smells. Some features, such as mergability reporting and AST analysis, are restricted to JavaScript, and the frontend chatbot is static. Repository analysis is limited to 30 files, and AI agents do not yet fully utilize the knowledge graph.

## Future Development Plans

Future plans include improving the software architecture, expanding code smell detection, enhancing knowledge graph utilization, and deploying the system for broader use. Additional goals include more comprehensive repository analysis and the development of advanced features to further support developers in writing high-quality code.
