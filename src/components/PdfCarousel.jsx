import { useState, useEffect } from 'react';

import { Document, Page } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { pdfjs } from 'react-pdf';

// Add this at the very top of your entry file
if (typeof URL.parse === 'undefined') {
  const originalURL = globalThis.URL;
  globalThis.URL = class URL extends originalURL {
    constructor(url, base) {
      let finalUrl = url;
      if (typeof url === 'string' && url.startsWith('blob:')) {
        finalUrl = url;
      }
      super(finalUrl, base);
    }
    static parse(url, base) {
      try {
        return new URL(url, base);
      } catch {
        return null;
      }
    }
  };
}
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


export default function PdfCarousel({ pdfs }) {
	const [cur, setCur] = useState(0);
	const [numPages, setNumPages] = useState(null);

	const switchPdf = (i) => {
		setCur(i);
		setNumPages(null);
	};

  // handle scrolling
	const [scrollable, setScrollable] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
		entries => {
			
			entries.forEach(e => {
				console.log(e.target.id, e.isIntersecting);
				e.isIntersecting && setScrollable(true)
				!e.isIntersecting && setScrollable(false)

			})
			

		},
		{ 
			threshold: 0, rootMargin: "0px 0px -80% 0px"}
		);

		const el = document.getElementById("presentations-section");
		console.log(el); // should not be null
		if (el) observer.observe(el);

		return () => observer.disconnect();
	}, []);

	return (
		<div id="pdf-viewer" className="bg-white rounded-2xl shadow-sm overflow-hidden">
		{/* Tabs */}
		<div className="flex border-b border-neutral-100 px-1">
			{pdfs.map((p, i) => (
			<button
				type='button'
				key={i}
				onClick={() => switchPdf(i)}
				className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors cursor-pointer ${
				i === cur ? "text-blue-500 border-blue-500" : "text-neutral-400 border-transparent hover:text-neutral-600"
				}`}
			>
				{p.title}
			</button>
			))}
		</div>

		{/* PDF render */}
		<div className={`overflow-y-auto h-[520px] flex flex-col items-center gap-3 py-4 px-4 bg-neutral-100 ${scrollable ? "": "pointer-events-none"}`} >
			<Document
			file={pdfs[cur].src}
			onLoadSuccess={({ numPages }) => setNumPages(numPages)}
			loading={
				<div className={`flex items-center justify-center h-40 text-sm text-neutral-400 `}>
				Loading PDF...
				</div>
			}
			>
			{numPages && Array.from({ length: numPages }, (_, i) => (
				<Page
				key={i}
				pageNumber={i + 1}
				width={640}
				className="shadow-md rounded border border-t-1"
				loading=""
				/>
			))}
			</Document>
		</div>

		
		</div>
	);

}