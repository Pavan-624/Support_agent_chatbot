
# CDP Support Agent Chatbot
A modern, AI-powered chatbot designed to provide instant support and answers for multiple Customer Data Platforms (CDPs) including Segment, mParticle, Lytics, and Zeotap.

![CDP Support Agent Screenshot](https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600)
## Features

- 🤖 Real-time chat interface with AI-powered responses
- 📚 Support for multiple CDP platforms:
  - Segment
  - mParticle
  - Lytics
  - Zeotap
- 🔍 Natural Language Processing for understanding user queries
- 💡 Intelligent response generation based on official documentation
- 🎯 Topic extraction and context awareness
- 🎨 Modern, responsive UI with Tailwind CSS
## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **NLP Processing**: Compromise.js
- **Build Tool**: Vite
- **Deployment**: Netlify

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cdp-support-agent
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`
## Project Structure

```
src/
├── components/          # React components
│   ├── ChatInput.tsx   # Message input component
│   └── ChatMessage.tsx # Message display component
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   └── nlp.ts         # NLP processing logic
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Building and Deployment

To build the project for production:

```bash
npm run build
```
The project is automatically deployed to Netlify at: [https://incomparable-cactus-1dc058.netlify.app](https://incomparable-cactus-1dc058.netlify.app)
## Documentation Sources

The chatbot processes and provides information from the following official documentation sources:

- [Segment Documentation](https://segment.com/docs/?ref=nav)
- [mParticle Documentation](https://docs.mparticle.com/)
- [Lytics Documentation](https://docs.lytics.com/)
- [Zeotap Documentation](https://docs.zeotap.com/home/en-us/)
## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons provided by [Lucide React](https://lucide.dev/)
- NLP processing powered by [Compromise](https://github.com/spencermountain/compromise)
## Screenshots

![Screenshot]![Screenshot 2025-01-14 152216](https://github.com/user-attachments/assets/3c8ec5b8-0315-4d3d-8ad9-1cfa1e0cddca)





## Future Enhancements

- Currently this is under development, due to time constraint I am submitting upto here itself.
- The data from the websites need to be extracted and need to be processed and then trained as to answer the question asked by the user.