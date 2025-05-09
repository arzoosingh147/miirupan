import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { PostProvider } from "./context/PostContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostProvider>
    <AuthProvider>
    <App />
  </AuthProvider>
    </PostProvider>
  </React.StrictMode>
);
