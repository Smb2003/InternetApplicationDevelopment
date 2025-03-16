# Mathematics Table Generator (React + Redux)

## Overview
This is a simple **Mathematics Table Generator** built using **React** and **Redux Toolkit**. The application allows users to input a number and a range, and then generates the multiplication table dynamically using Redux state management.

## Features
- Accepts a number and range as user input.
- Generates and displays the multiplication table.
- Uses **Redux Toolkit** to manage state.
- Styled with inline CSS.
- Error handling for invalid input values.

## Folder Structure
```
withRedux/
├── public/
│   ├── vite.svg
├── src/
│   ├── Store/
│   │   ├── Slice/
│   │   │   ├── genTable.jsx
│   │   ├── store.jsx
│   ├── assests/
│   │   ├── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
├── README.md
```

## Installation

### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Steps to Install
1. Clone the repository

2. Navigate to the project directory:
   ```sh
   cd withRedux
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Running the Application
To start the application, run:
```sh
npm run dev
```
This will start the development server. Open [http://localhost:5173](http://localhost:5173) in your browser.

### How to Use
1. Enter a number in the input field.
2. Enter a range (how many multiples to generate).
3. Click on **Generate Table**.
4. The multiplication table will be displayed.
5. If invalid input is entered, an error message is displayed.

## Technologies Used
- **React** (Functional Components, Hooks)
- **Redux Toolkit** (State Management)
- **Vite** (Bundler)
- **CSS** (Inline Styling)

## Example Usage
If a user enters `5` as the number and `10` as the range, the output will be:
```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

## License
This project is open-source and available under the **MIT License**.
