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


        <section>
            <h2 className="text-2xl font-semibold mb-4">Interests:</h2>
            <div className="text-neutral-600 flex gap-4">
                <ul className="list-disc list-inside space-y-1">
                    <li>Puzzles - I could spend hours on literally any type of puzzle. I love crosswords (and all the other NYT and LinkedIn mini games), jigsaw puzzle, riddles, sudoku ... the list goes on.</li>
                    <li>Dogs - Although I don't have any pets of my own, I love animals, especially dogs. My twin sister has a Samoyed who is the the sweetest, fluffiest cloud. I was able to get my  </li>
                </ul>
                  
            </div>
            As an Asian woman and member of the LGBTQ+ community, I bring a
personal perspective and commitment to addressing barriers that disproportionately affect women. My
Engineering Women’s Health course exposed me to real-world engineering challenges and solutions in
this space, further motivating me to apply engineering techniques and procedures to women’s health.
        </section>
        <section>
            <h2 className="text-2xl font-semibold mb-4">My Motivations and Goals:</h2>
            <div className="text-neutral-600 flex gap-4">
                <ul className="list-disc list-inside space-y-1">
                    <li>As an Asian woman and member of the LGBTQ+ community, I bring a personal perspective and commitment to addressing barriers that disproportionately affect women. My Engineering Women’s Health course exposed me to real-world engineering challenges and solutions in this space, further motivating me to apply engineering techniques and procedures to women’s health.</li>
                    <li>  </li>
                </ul>
                  
            </div>
            
        </section>
      
    </article>
  )
}
