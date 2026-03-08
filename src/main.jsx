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

// import { pdfjs } from 'react-pdf'
// Add this at the very top of your entry file
// if (typeof URL.parse === 'undefined') {
//   const originalURL = globalThis.URL;
//   globalThis.URL = class URL extends originalURL {
//     constructor(url, base) {
//       let finalUrl = url;
//       if (typeof url === 'string' && url.startsWith('blob:')) {
//         finalUrl = url;
//       }
//       super(finalUrl, base);
//     }
//     static parse(url, base) {
//       try {
//         return new URL(url, base);
//       } catch {
//         return null;
//       }
//     }
//   };
// }
// console.log(pdfjs.version)
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`
// pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
)