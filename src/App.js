import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={styles.container}>
      <h1>🚀 CI/CD with GitHub Actions</h1>
      <p>This React app is built and deployed automatically!</p>

      <div style={styles.counterBox}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment
        </button>
        <button onClick={() => setCount(0)} style={styles.resetButton}>
          Reset
        </button>
      </div>

      <footer style={styles.footer}>
        <small>Built & Deployed via GitHub Actions ✨</small>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  counterBox: {
    marginTop: "30px",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  resetButton: {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  footer: {
    marginTop: "50px",
    color: "#555",
  },
};

export default App;
