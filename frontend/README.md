# Full-Featured Fitness E-Commerce Portal

A modern, highly responsive frontend e-commerce application built using **React** and styled with optimized, custom fluid **CSS layouts**. This project serves as an entry-level portfolio piece demonstrating state management, responsive grid/flexbox controls, and client-side route protection.

## Key Features

- **Persistent Shopping Cart:** Built an increment/decrement state engine where cart memory survives browser refreshes using structural synchronization with `localStorage`.
- **Client-Side Route Guarding:** Implemented a custom protected route structure that checks active login credentials against mock registration keys before unlocking product access.
- **Modern Form Validation:** Leveraged `React Hook Form` to manage field states, handle input constraints, and process dynamic runtime error messages smoothly.
- **Locked-Viewport Layout:** Optimized layout containers using CSS math variables (`calc(100vh - 59px)`) to keep scrolling enclosed inside elements and prevent global page shifting.

## Built With

- **Frontend Framework:** React (Vite)
- **Routing:** React Router DOM v6
- **Form Utility:** React Hook Form
- **Styling:** Custom Vanilla CSS3 (Flexbox, Grid)
