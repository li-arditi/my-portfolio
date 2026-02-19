import { useParams } from "react-router-dom"
import aboutMeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"

export default function Contact() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold">Contact Me!</h1>

        <img
            src={aboutMeImg}
            alt="About Me Image"
            className="rounded-full my-10 w-xs"
        />

        <p className="text-neutral-600 mb-6"> Please feel free to reach out to me at liarditi@gmail.com
            I look forward to hearing from you!
            
        </p>

        <div>
            
        </div>


        
      
    </article>
  )
}
