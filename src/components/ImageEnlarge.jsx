import { useState } from 'react';

export default function ImageEnlarge({ src, alt, className="" }) {
	const [isEnlarged, setIsEnlarged] = useState(false);
	return (
		<div >
			{/* Image */}
			<img
				src={src}
				alt={alt}
				onClick={() => setIsEnlarged(true)}
				className={`${className?className:"w-full object-contain max-h-100 "} cursor-zoom-in`}
			/>

			{/* Overlap/modal for when image is clicked */}
			{isEnlarged && (
			<div 
				className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4 mt-16  cursor-pointer"
				onClick={() => setIsEnlarged(false)}
			>
				<span className='text-neutral-200'>Click anywhere to close</span>
				<img 
					src={src}
					alt={alt}
					className="max-h-full max-w-full rounded shadow-2xl transition-all"
				/>
			</div>
			)}
			
		</div>
	);
}