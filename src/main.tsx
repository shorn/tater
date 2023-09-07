import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from "App.tsx";
import React from 'react';
import { AnyRoute } from "@tanstack/react-router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


