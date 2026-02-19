import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import aboutMeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"
import jigsawPuzzleImg from "../assets/personal/jigsawPuzzle.jpeg"
import astridImg from "../assets/personal/astrid.jpeg"
import oberonImg from "../assets/personal/oberon.jpeg"
import sumi1Img from "../assets/personal/sumi1.jpeg"
import sumi2Img from "../assets/personal/sumi2.jpeg"

export default function AboutMe() {
    // scroll to top when the project is opened
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures it runs only once on mount

    return (
    <article className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold">About Me</h1>

        <img
            src={aboutMeImg}
            alt="About Me Image"
            className="rounded-full my-10 w-xs mx-auto"
        />

        <p className="text-neutral-600 mb-6"> Hello! I'm glad to see you came to learn more about me! 
            
        </p>


        <section>
            <h2 className="text-2xl font-semibold mb-4">Interests:</h2>
            <div className="text-neutral-600 flex gap-4">
                <ul className="list-disc list-inside space-y-1">
                    <li>Puzzles - I could spend hours on literally any type of puzzle. I love crosswords (and all the other NYT and LinkedIn mini games), jigsaw puzzle, riddles, sudoku ... the list goes on. The largest jigsaw puzzle I completed was a 5,000 piece puzzle of the ceiling of the Sistine Chapel. Here's the completed puzzle!
                        <div>
                            <img src={jigsawPuzzleImg} className="w-sm mx-auto"/>
                        </div>
                        
                    </li>
                    <li>Dogs - Although I don't have any pets of my own, I love animals, especially dogs. My twin sister has a Samoyed who is the the sweetest, fluffiest cloud. I was able to get my fix of dogs through volunteering at a shelter in college and after college when I was working in NYC 
                        <div className="flex flex-inline">
                            <img src={astridImg} className="w-sm"/>
                            <img src={oberonImg} className="w-sm"/>
                        </div>

                        I do like cats too and have fostered a few in college.
                        <div className="flex flex-inline">
                            <img src={sumi1Img} className="w-sm"/>
                            <img src={sumi2Img} className="w-sm"/>
                        </div>
                    </li>
                     <li>Tennis - I grew up playing tennis and enjoyed playing varsity tennis doubles for my high school. I didn't play throughout college, but I have been trying to find courts and play more often in Boston. 
                        
                    </li>
                </ul>
                  
            </div>
            {/* As an Asian woman and member of the LGBTQ+ community, I bring a
personal perspective and commitment to addressing barriers that disproportionately affect women. My
Engineering Women’s Health course exposed me to real-world engineering challenges and solutions in
this space, further motivating me to apply engineering techniques and procedures to women’s health. */}
        </section>
        <section>
            <h2 className="text-2xl font-semibold mb-4">My Motivations and Goals:</h2>
            <div className="text-neutral-600 flex gap-4">
                <ul className="list-disc list-inside space-y-1">
                    {/* <li>As an Asian woman and member of the LGBTQ+ community, I bring a personal perspective and commitment to addressing barriers that disproportionately affect women. My Engineering Women’s Health course exposed me to real-world engineering challenges and solutions in this space, further motivating me to apply engineering techniques and procedures to women’s health.</li>
                    <li>  </li> */}
                </ul>
                  
            </div>
            
        </section>
      
    </article>
  )
}
