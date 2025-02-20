# Interactive Quiz Platform

## Overview

This is an interactive quiz platform where users can attempt quizzes, receive instant feedback, and track their progress over time. The app features:

- **Quiz Creation & Management**: A list of questions is displayed in a quiz format, supporting multiple attempts and showing an attempt history.
- **User Interaction**: Users select answers and get instant feedback. Each quiz is timer-based, giving 30 seconds per question.
- **Progress Tracking**: A scoreboard is presented at the end of each quiz.
- **Bonus Feature**: Quiz history is saved using IndexedDB for offline tracking.

## Features

- **Dynamic Quiz Rendering**: Quizzes are generated from a structured JSON format (converted from `sample_quiz.pdf`).
- **Multiple Attempts**: Users can retry quizzes and review their attempt history.
- **Instant Feedback**: Answers are validated immediately, with feedback provided right away.
- **Timer-based Questions**: Each question must be answered within 30 seconds.
- **Progress Tracking**: Final scores are displayed in a scoreboard, and attempt history is maintained.
- **Offline Storage**: Quiz attempts are stored locally using IndexedDB.
- **Deployment**: The app is deployed on Vercel/Netlify for easy access.

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ahsan-xeeshan/Interactive-Quiz-Platform.git
   cd interactive-quiz-platform
   ```
