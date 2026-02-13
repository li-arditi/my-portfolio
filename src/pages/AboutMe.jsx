import { useParams } from "react-router-dom"
import aboutMeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"

export default function AboutMe() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">About Me</h1>

      <img
        src={aboutMeImg}
        alt="About Me Image"
        className="rounded-full my-10 w-xs"
      />

      <p className="text-neutral-600 mb-6"> Hello! I'm glad to see you came to learn more about me! 
        I've created two versions of this About Me page: the first (default) is more professional and the second
        is more fun and casual to help give a better sense of my personality.
        
      </p>



      <div className="flex gap-4">
      Some things I love:
      Puzzles - I could spend hours on literally any type of puzzle. I love crosswords (and all the other NYT and LinkedIn mini games),
      jigsaw puzzle, riddles, sudoku ... the list goes on.  
      </div>
    </article>
  )
}
