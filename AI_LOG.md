# AI_LOG.md

## Project Title
**HUMAN.exe — Catch the Glitch**

### 1. Project Overview
HUMAN.exe — Catch the Glitch is a playful, CAPTCHA-inspired mini-game designed to make human-verification interactions more engaging. Players observe six animated digital creatures and identify the one behaving differently from the others within a limited time.

The game combines visual observation, animated character behaviour, interactive sound effects, and timed challenges to create an entertaining browser-based experience.

### 2. Core Gameplay
The game features three challenge types:

- **Double Blink:** Identify the creature that blinks twice while the others blink once.
- **Reverse Movement:** Identify the creature that moves in the opposite direction.
- **Expression Glitch:** Identify the creature displaying a different facial expression.

Each round presents six selectable creatures, with exactly one intended correct answer. Players receive immediate feedback after selecting a creature.

### 3. Role of AI Assistance
AI-assisted tools were used to support the development process in the following areas:

- Refining UI design requirements and interaction flows.
- Developing prompts for the visual design and prototype.
- Planning React component structure and gameplay logic.
- Formulating requirements for animations, sound effects, and background music.
- Identifying potential issues involving beat synchronisation, timer accuracy, event handling, and audio lifecycle management.
- Preparing implementation requirements and debugging guidance.

AI-generated suggestions require review and testing before integration into the final application.

### 4. Technology Stack
The intended technology stack includes:

- **React:** Component-based user interface.
- **JavaScript:** Game logic, event handling, and state management.
- **CSS:** Responsive layouts, animations, and visual styling.
- **Web Audio API:** Background music and interactive sound effects.
- **Browser Timing APIs:** Countdown management and input timing.

The final technology list should reflect the technologies actually used in the submitted implementation.

### 5. Audio and Interaction Design
The game incorporates a cheerful, playful visual experience supported by background music and sound effects.

Planned audio interactions include:
- Continuous background music during active gameplay.
- Short sound effects for creature selection and game outcomes.
- A countdown cue during the final five seconds.
- Functional mute and restart controls.

The audio system should avoid duplicate playback, timing drift, and unnecessary interruptions.

### 6. Testing and Validation
The following aspects require testing:

- Random selection of challenge types and target creatures.
- Correct identification of the unusual behaviour.
- Countdown and timeout handling.
- Correct and incorrect answer feedback.
- Score and streak updates.
- Audio playback, muting, and restart behaviour.
- Keyboard, mouse, and touch interactions.
- Responsive layout and accessibility.

Only tests that have actually been executed should be recorded as completed.

### 7. Limitations
HUMAN.exe is a CAPTCHA-inspired game prototype, not a validated security system. Identifying unusual visual behaviour or analysing interaction timing does not reliably distinguish humans from automated systems.

The application should be presented as an experimental interactive challenge rather than a production-grade security solution.

### 8. AI Usage Statement
AI-assisted development supported design refinement, implementation planning, technical problem-solving, and documentation. The project team remains responsible for reviewing generated suggestions, validating the implementation, and ensuring that the final application functions as intended.

### 9. Project Status
**Status:** Development and testing in progress.

The project should be marked complete once all intended gameplay features, animations, audio interactions, and result states have been implemented and tested.
