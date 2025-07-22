// import React from "react"; ← ini bisa dihapus
import { createRoot } from "react-dom/client";
import NotesApp from "./component/NotesApp";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
