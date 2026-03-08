import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

export default function PdfCarousel({ pdfs }) {
	const [cur, setCur] = useState(0);
	const [numPages, setNumPages] = useState(null);

	const switchPdf = (i) => {
		setCur(i);
		setNumPages(null);
	};

	return (
		<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
		{/* Tabs */}
		<div className="flex border-b border-neutral-100 px-1">
			{pdfs.map((p, i) => (
			<button
				type='button'
				key={i}
				onClick={() => switchPdf(i)}
				className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
				i === cur ? "text-blue-500 border-blue-500" : "text-neutral-400 border-transparent hover:text-neutral-600"
				}`}
			>
				{p.title}
			</button>
			))}
		</div>

		{/* PDF render */}
		<div className="overflow-y-auto h-[520px] flex flex-col items-center gap-3 py-4 px-4 bg-neutral-100">
			<Document
			file={pdfs[cur].src}
			onLoadSuccess={({ numPages }) => setNumPages(numPages)}
			loading={
				<div className="flex items-center justify-center h-40 text-sm text-neutral-400">
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
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-neutral-100 px-1">
        {pdfs.map((p, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
              i === cur
                ? "text-neutral-900 border-neutral-900"
                : "text-neutral-400 border-transparent hover:text-neutral-600"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>
      {/* Preview */}
      <div className="relative h-[420px] overflow-hidden">
        {pdfs[cur].src ? (
          <iframe src={`${pdfs[cur].src}#toolbar=0`} className="absolute inset-0 w-full h-full border-none" title={pdfs[cur].title} />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <span className="text-4xl">📄</span>
            <p className="text-sm font-semibold text-neutral-600">{pdfs[cur].title}</p>
            <span className="text-xs text-neutral-300">PDF preview will appear here</span>
          </div>
        )}
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-5 py-4 border-t border-neutral-100">
        <button
          onClick={() => setCur(i => Math.max(0, i - 1))}
          disabled={cur === 0}
          className="text-xs font-semibold text-neutral-500 border border-neutral-200 rounded-full px-4 py-1.5 hover:bg-neutral-50 disabled:opacity-30 transition-colors"
        >
          ← Prev
        </button>
        <span className="text-xs text-neutral-300">{cur + 1} / {pdfs.length}</span>
        <button
          onClick={() => setCur(i => Math.min(pdfs.length - 1, i + 1))}
          disabled={cur === pdfs.length - 1}
          className="text-xs font-semibold text-neutral-500 border border-neutral-200 rounded-full px-4 py-1.5 hover:bg-neutral-50 disabled:opacity-30 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}