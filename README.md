# Toy Tale — React Full CRUD Application

Toy Tale is a single-page React application for managing a collection of toys. Users can view all existing toys on page load, create new toys via a toggleable form, like toys to increment their popularity count, and donate (delete) toys from the collection.

## Visuals

![Toy Tale App Screenshot](./public/screenshot.png)

## Features

* **View All Toys (`GET /toys`):** Fetches and displays all toys from the JSON backend on initial page load using `useEffect`.
* **Add a New Toy (`POST /toys`):** Submits a controlled form to create a new toy with `0` initial likes and renders it immediately in the collection.
* **Like a Toy (`PATCH /toys/:id`):** Increments a toy's like count on the backend and updates it in React state while preserving the original card order.
* **Donate a Toy (`DELETE /toys/:id`):** Deletes a toy from the backend and removes its card from the page immediately.

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd <your-repo-folder-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

Run the backend JSON server and React frontend in two separate terminals:

1. **Start the JSON server**
   ```bash
   npm run server
   ```

2. **Start the React development server**
   ```bash
   npm run dev
   ```

3. **Run the automated test suite**
   ```bash
   npm run test
   ```

## Project Architecture

```text
src/
├── components/
│   ├── App.jsx          # Root state hub (fetches toys, handles POST/PATCH/DELETE state updates)
│   ├── Header.jsx       # Toy Tale banner header
│   ├── ToyForm.jsx      # Controlled form for creating new toys (POST)
│   ├── ToyContainer.jsx # Renders the collection of ToyCard components
│   └── ToyCard.jsx      # Individual toy card with Like (PATCH) and Donate (DELETE) actions
└── __tests__/           # Automated Vitest / React Testing Library test suites
```

## Contributing

Pull requests are welcome. Create a feature branch from `main`, verify `npm run test` passes, open a Pull Request, and delete stale branches after merging.

## License

[MIT](https://choosealicense.com)
