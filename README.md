**Overview**
A responsive web application that fetches and displays random user data from the Random User Generator API. The application features:

User listing with pagination

Search functionality

Error handling and loading states

Clean, professional UI with responsive design

**Features**
**User Management:**

Fetch and display 50 random users

View detailed user information

Search users by name or email

**State Management:**

MobX for centralized state management

Observable state properties

Actions for state modifications

**UI Components:**

Responsive card layout

Pagination controls

Search functionality

Loading indicators

Error messages with retry option

**Technical Features:**

Axios for API requests

CSS Modules for component styling

React Icons for professional UI elements

Modern React hooks

**Project Structure**

src/
├── components/          # Reusable UI components
│   ├── ErrorMessage/    # Error display component
│   ├── Header/          # Application header
│   ├── LoadingSpinner/  # Loading indicator
│   ├── Pagination/      # Pagination controls
│   ├── SearchBox/       # Search input component
│   ├── UserCard/        # Individual user card
│   └── UserList/        # User list container
├── pages/               # Page components
│   └── HomePage/        # Main application page
├── stores/              # MobX stores
│   └── userStore.js     # User data store
├── styles/              # Global styles
│   ├── global.css       # Global CSS rules
│   └── variables.css    # CSS variables
├── utils/               # Utility functions
│   └── api.js           # API service
├── App.jsx              # Main application component
└── index.js             # Application entry point

**Technologies Used**
**Frontend:**

React 18 (Functional Components)

MobX (State Management)

Axios (HTTP Client)

React Icons (Icon Library)

**Styling:**

CSS Modules (Component-scoped styles)

Responsive Design (Mobile-first approach)

**Build Tool:**

Create React App (Project scaffolding)

Installation
Clone the repository:

bash
git clone https://github.com/NeeleshTiwari021/UserDirectory-Pro.git
cd UserDirectory-Pro
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
Open http://localhost:3000 in your browser.