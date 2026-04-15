import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ background: "#080B14", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <div style={{ background: "#0D1220", border: "1px solid #1E2A3A", borderRadius: "1rem", padding: "2rem", maxWidth: "500px", color: "#E2E8F0" }}>
            <h2 style={{ color: "#EF4444", marginBottom: "1rem", fontSize: "1.1rem" }}>Something went wrong</h2>
            <pre style={{ fontSize: "0.75rem", color: "#94A3B8", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
              {this.state.error?.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
