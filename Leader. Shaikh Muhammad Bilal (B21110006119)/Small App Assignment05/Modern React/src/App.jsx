import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState("");
  const [range, setRange] = useState("");
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number);
    const rng = parseInt(range);

    if (isNaN(num) || isNaN(rng) || num <= 0 || rng <= 0) {
      setTable(["Please enter valid positive numbers for both fields."]);
      return;
    }

    const generatedTable = [];
    for (let i = 1; i <= rng; i++) {
      generatedTable.push(`${num} x ${i} = ${num * i}`);
    }
    setTable(generatedTable);
  };

  return (
    <div style={styles.container}>
      <div style={{height:"100px"}}>
      <header style={styles.header}>Mathematics Table Generator</header>

      </div>

      <div style={styles.formContainer}>
        <h2>Generate Multiplication Table</h2>

        <label style={styles.label} htmlFor="number">
          Enter a Number:
        </label>
        <input
          type="number"
          id="number"
          style={styles.input}
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <label style={styles.label} htmlFor="range">
          Enter Range:
        </label>
        <input
          type="number"
          id="range"
          style={styles.input}
          placeholder="Enter the range (e.g., 10)"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />

        <button style={styles.button} onClick={generateTable}>
          Generate Table
        </button>

        <div style={styles.tableContainer}>
          {table.length > 0 &&
            (typeof table[0] === "string" && table[0].startsWith("Please") ? (
              <p style={{ color: "red" }}>{table[0]}</p>
            ) : (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Multiplication Table for {number}</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((row, index) => (
                    <tr key={index}>
                      <td style={styles.td}>{row}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f4f4f9",
    color: "#333",
    // minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#6200ea",
    color: "white",
    padding: "1rem 1rem",
    fontSize: "1.5rem",
    textAlign:"start",
  },
  formContainer: {
    margin: "2rem auto",
    padding: "1rem",
    width: "90%",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  label: {
    display: "block",
    margin: "0.5rem 0",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  button: {
    marginTop: "1rem",
    padding: "0.8rem 1.5rem",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#6200ea",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  tableContainer: {
    marginTop: "2rem",
  },
  table: {
    margin: "2rem auto",
    width: "100%",
    // maxWidth: "500px",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#6200ea",
    color: "white",
    padding: "0.8rem",
  },
  td: {
    padding: "0.8rem",
    border: "1px solid #ddd",
  },
  footer: {
    fontSize: "0.9rem",
    color: "#666",
    padding: "1rem 0",
  },
};

export default App;
