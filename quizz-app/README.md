# Quiz App

Welcome to the Quiz App! This application allows you to take quizzes and test your knowledge on various topics.

Live link - https://upraised-quiz-app-3j4u.vercel.app/

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Running Locally](#running-locally)
  - [Docker](#docker)
- [Usage](#usage)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) installed (v18 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [Docker](https://www.docker.com/) installed (if using Docker)

## Getting Started

### Running Locally

To run the Quiz App locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd quiz-app
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Build the Next.js application:
   ```bash
   npm run build
   ```
4. Start the Next.js development server:
   ```bash
   npm run dev
   ```

Open your web browser and access the app at http://localhost:3000.

## Docker
Alternatively, you can run the Quiz App using Docker. A Dockerfile is provided for easy containerization.

1. Build the Docker image:
   ```bash
   docker build -t my-nextjs-app .
   ```
2. Run the Docker container:
   ```bash
   docker run -d -p 3000:3000 --name my-nextjs-container my-nextjs-app
   ```

## Usage
   - Start by clicking on the "Start" button to begin a quiz.
   - Answer the questions as they appear.
   - After completing the last question, the app will provide you with a score report.
   - Click "Start Again" to take another quiz.

