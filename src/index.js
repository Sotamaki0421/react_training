import { App } from "./App";
import "./index.css";
import ReactDOM from "react-dom";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
