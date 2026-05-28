# Registro de Participaciones — Tecnologías Programables

A highly optimized, Vanilla JavaScript web application designed to track, manage, and gamify student participation through a modular, offline-first architecture.

## 🚀 Key Features

*   **Vanilla Web Components:** Zero framework overhead. The UI is built using highly encapsulated, native HTML Custom Elements (`<brand-header>`, `<students-card>`, etc.).
*   **Offline-First Architecture:** Engineered to be robust and functional even in environments with unstable network connectivity.
*   **Automated Brand Pipeline:** Features a bespoke Node.js build engine that parses OpenType fonts and generates mathematically perfect SVG brand assets (Logos, Symbols, Favicons) on the fly.
*   **Excel Integration:** Seamlessly import class rosters and export participation reports using native Excel processing controllers.
*   **Leaderboard Gamification:** Includes a real-time podium system to encourage healthy student engagement.

## 📁 Repository Structure

```text
.
├── docs/               # Comprehensive architecture, setup, and brand documentation
├── ui/                 # Frontend Layer (Web Components, CSS, Icons, Templates)
├── index.html          # Main Application View (Roster & Grading)
├── leaderboard.html    # Gamification View (Podium)
└── *.js (Root)         # Core Domain Models & Data Controllers (Estudiante, Excel, etc.)
```

## 📚 Documentation

This project enforces strict architectural boundaries. Before contributing, please review the relevant documentation located in the `docs/` directory:

**Developer Guides**
*   [Web Components Architecture](docs/developer/WEB_COMPONENTS.md)
*   [Rendering Pipeline](docs/developer/RENDERING_PIPELINE.md)
*   [Automated Logo Build Pipeline](docs/developer/LOGO_PIPELINE.md)
*   [Atomic Icons Specification](docs/developer/ATOMIC_ICONS.md)

**System Setup**
*   [Offline-First Strategy](docs/setup/OFFLINE_FIRST.md)
*   [System Requirements](docs/setup/SYSTEM_REQUIREMENTS.md)

**Brand Guidelines**
*   [Brand Rules](docs/brand/BRAND_RULES.md)
*   [Color System](docs/brand/COLOR_SYSTEM.md)
*   [Typography](docs/brand/TYPOGRAPHY.md)

## 🛠️ Development Setup

1.  **Serve the App:** You do not need a complex build step for the UI. Simply serve the root directory using any static file server:
    ```bash
    npx http-server -p 8000
    ```
2.  **Access the App:** Open `http://localhost:8000` in your browser.
3.  **Rebuild Logo Assets:** If you modify the brand rules, you must manually rebuild the scalable vector graphics. Navigate to the builder directory and execute the engine:
    ```bash
    cd ui/assets/icons/logo/builder
    node --experimental-vm-modules generate.js
    ```
