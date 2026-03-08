import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
// if (!URL.parse) {
//   URL.parse = (url, base) => {
//     try { return new URL(url, base) } catch { return null }
//   }
// }
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
)