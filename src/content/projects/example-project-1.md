---
title: "AI-Powered Recipe Generator"
description: "An application that generates custom recipes based on ingredients you have at home, dietary restrictions, and flavor preferences."
semester: "Spring 2023"
tags: ["GPT-4", "Web App", "Natural Language Processing", "React"]
githubUrl: "https://github.com/example/recipe-generator"
teamMembers:
  - name: "Jane Smith"
    email: "jsmith42@jhu.edu"
    githubUrl: "https://github.com/janesmith"
  - name: "John Doe"
    email: "jdoe10@jhu.edu"
    githubUrl: "https://github.com/johndoe"
  - name: "Alice Johnson"
    email: "ajohnson@jhu.edu"
    githubUrl: "https://github.com/alicejohnson"
  - name: "Bob Brown"
    email: "bbrown@jhu.edu"
    githubUrl: "https://github.com/bobbrown"
demoUrl: "https://recipe-generator-demo.vercel.app"
imageUrl: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg"
publishedDate: 2023-05-15
---

## Project Overview

The AI-Powered Recipe Generator is an innovative web application that helps users create delicious meals using ingredients they already have at home. By leveraging GPT-4's natural language processing capabilities, our application generates customized recipes tailored to individual preferences, dietary restrictions, and available ingredients.

## Key Features

- **Ingredient-Based Recipe Generation**: Enter the ingredients you have, and the app will suggest recipes you can make.
- **Dietary Restriction Filters**: Filter recipes based on dietary needs (vegan, gluten-free, keto, etc.).
- **Flavor Preference Learning**: The AI learns your taste preferences over time and suggests recipes you're likely to enjoy.
- **Interactive Cooking Instructions**: Step-by-step cooking instructions with timing elements and visual guides.
- **Nutritional Information**: Detailed breakdown of calories, macronutrients, and micronutrients for each recipe.

## Technical Implementation

Our application uses React for the frontend interface and connects to OpenAI's GPT-4 API for recipe generation. We implemented a custom prompt engineering technique to ensure the AI generates recipes that are both feasible with the given ingredients and appealing to the user.

The system maintains user preferences in local storage to personalize recipe suggestions without requiring account creation. For users who do create accounts, we store their history and preferences in a Firebase database.

## Challenges and Learning

One of the biggest challenges we faced was ensuring the AI generated recipes that were actually possible with the provided ingredients. We solved this by developing a two-stage generation process: first checking ingredient compatibility, then generating the complete recipe only when the combination was viable.

We also learned a lot about prompt engineering and how different instruction formats can dramatically change the quality of AI-generated content.

## Future Improvements

Given more time, we would like to implement:

- Recipe sharing capabilities
- Community features for rating and reviewing recipes
- Image generation of the finished dish using DALL-E
- Mobile app version with offline recipe storage
- Integration with grocery delivery services

## Try It Out

You can test our application at [our demo site](https://recipe-generator-demo.vercel.app) or check out the code on [GitHub](https://github.com/example/recipe-generator).