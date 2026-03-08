import { useParams } from "react-router-dom"
import aboutMeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"

export default function Contact() {
  return (
    <article className="bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 py-20 text-neutral-600">
        <h1 className="text-4xl text-neutral-900 font-bold">Contact Me!</h1>

        <img
            src={aboutMeImg}
            alt="About Me Image"
            className="rounded-full my-10 w-xs mx-auto"
        />

        <p className="flex justify-center mb-6"> Please feel free to reach out to me at liarditi@gmail.com</p>

        <div className="flex gap-1 justify-center mb-6">
            You can also find me on LinkedIn at 
            <a href="https://www.linkedin.com/in/li-arditi/"
                target="_blank"
                className="hover:curser-pointer hover:text-blue-600"> https://www.linkedin.com/in/li-arditi/</a>
        </div>
        <p className="flex justify-center "> I look forward to hearing from you!</p>

        
        </div>
    </article>
  )
}
