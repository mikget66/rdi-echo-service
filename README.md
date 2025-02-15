# RDI Echo Service

The **RDI Echo Service** is a React-based web application that allows users to upload or record Arabic audio, convert it to text, and generate an electronic voice output with the last word repeated three times (echo effect). This project leverages RDI's state-of-the-art services, **Kateb** (speech-to-text) and **Natiq** (text-to-speech), to deliver a seamless and interactive experience.

---

## Features

- **Upload or Record Audio**:
  - Users can upload an Arabic audio file or record audio directly from their microphone.
  - Recording controls include start, stop, and playback of the recorded audio.

- **Echo Effect**:
  - The service converts the audio to text, repeats the last word three times, and generates an electronic voice output with the echo effect.

- **User-Friendly Interface**:
  - Three pages: **Home**, **About**, and **Echo**.
  - Sticky social media bar with LinkedIn and GitHub icons.
  - Loading states and error handling for a smooth user experience.

- **Responsive Design**:
  - Clean and intuitive UI with a consistent layout across all pages.

---

## Technologies Used

- **Frontend**:
  - React.js
  - React Router for navigation
  - React Icons for social media icons
  - MediaRecorder API for audio recording

- **APIs**:
  - **Kateb**: Converts Arabic audio to text.
  - **Natiq**: Converts text to electronic voice audio.

- **Styling**:
  - CSS for styling and layout.

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mikget66/rdi-echo-service.git
   cd rdi-echo-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```
src/
├── components/
│   ├── Layout.js       # Layout wrapper for all pages
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   └── SocialsBar.js   # Sticky social media bar
├── pages/
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   └── Echo.js         # Echo page (core functionality)
├── App.js              # Main app component with routing
├── index.js            # Entry point
└── index.css           # Global styles
```

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

---

## Deployment

To deploy this project, follow the steps in the [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- **Michael Anwer**
  - LinkedIn: [michael-anwer-071489283](https://www.linkedin.com/in/michael-anwer-071489283/)
  - GitHub: [mikget66](https://github.com/mikget66)

---

## Acknowledgments

- Thanks to RDI for providing the **Kateb** and **Natiq** APIs.
- Built with [Create React App](https://github.com/facebook/create-react-app).

---
## Live Demo

-You can view the live demo of the project here: [Live Demo Link](https://rdi-echo-service.vercel.app/)

---

Enjoy using the RDI Echo Service! 🚀
