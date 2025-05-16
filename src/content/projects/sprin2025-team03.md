---
title: "TabAssist"
description: "Help users navigate and leverage the content in their browser tabs through AI-powered analysis, enabling them to derive more value from online research and information without constant context switching."
year: "2025"
githubUrl: "https://github.com/cs264sp25-homework/team-03"
slidesUrl: "/slides/spring2025-team03.pdf"
teamMembers:
  - name: "Ashley Liu"
    linkedinUrl: "https://www.linkedin.com/in/ashley-liu-048969141/"
    githubUrl: "https://github.com/ashley-yuanyuan"
    photoUrl: "/images/spring2025-team03-ashley.jpeg"
  - name: "Henry Deutsch"
    linkedinUrl: "https://www.linkedin.com/in/henry-deutsch/"
    githubUrl: "https://github.com/henry-md"
    photoUrl: "/images/spring2025-team03-henry.jpeg"
  - name: "Jacob Choi"
    linkedinUrl: "https://www.linkedin.com/in/euihyun-choi/"
    githubUrl: "https://github.com/Gosheni"
    photoUrl: "/images/spring2025-team03-jacob.jpeg"
---

## Project Overview

TabAssist is a context-aware AI Chrome extension that enhances how users interact with their browser tabs. By analyzing the content of active tabs, TabAssist provides a conversational interface that synthesizes information, answers questions, and connects insights across multiple sources. This approach streamlines research and information management, helping users derive more value from their online activities without the burden of constant context switching.

## Problem Statement

Modern web browsing often involves juggling numerous tabs, each containing relevant information for research or work. This fragmentation makes it difficult to transfer context between tabs and AI assistants, leading to inefficiency and lost insights. Information remains siloed, and users struggle to extract cohesive knowledge from scattered sources, making online research cumbersome and less productive.

## Key Features

TabAssist enables anonymous sign-in via session ID, providing a seamless and persistent user experience without requiring account creation. Users can extract and clean text from selected tabs, with intelligent content processing and metadata extraction for optimal AI input. The extension allows for the organization of tabs into groups, each with its own chat interface and contextual AI responses, making it easy to manage different tasks or projects. Group-specific AI messaging synthesizes information from multiple tabs, delivering context-aware answers and enabling users to query across sources simultaneously. These features work together to break down information silos and enhance productivity.

## Technical Architecture

TabAssist is built as a Chrome Extension using Manifest V3, with a React-based frontend for UI components. The system employs multiple runtime environments, including content scripts for DOM access, background scripts for persistent tasks, and a main React app for user interaction. Backend services are powered by Convex, with OpenAI API integration for AI features and WebSocket support for real-time communication. Data processing leverages native DOM APIs and optimized content extraction pipelines, ensuring fast and reliable performance.

## Implementation Details

The extension's text extraction process spans multiple contexts, from the React UI to background and content scripts. Content is extracted and cleaned for readability, with metadata captured for enhanced AI processing. Performance is optimized through DOM cloning and structured data handling. AI integration enables context-aware conversations based on tab content, allowing for cross-tab knowledge synthesis and tailored responses specific to each tab group.

## Limitations

TabAssist currently works primarily with HTML content and may have limitations with dynamic websites, single-page applications, or JavaScript-loaded content. It does not support extraction or processing of non-text media such as images, videos, or audio, and lacks analytics about tab usage patterns.

## Future Development Plans

Planned enhancements include more advanced AI integration with retrieval-augmented generation (RAG), cross-tab knowledge synthesis, and quick overview summaries. Future versions aim to integrate with external services like Notion and calendars, provide browser history analysis, and offer improved user experience features such as error handling, analytics dashboards, and offline synchronization.