import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import aboutMeImg from "../assets/personal/LiArditiHeadshotSquare.jpeg"
import jigsawPuzzleImg from "../assets/personal/jigsawPuzzle.jpeg"
import astridImg from "../assets/personal/astrid.jpeg"
import oberonImg from "../assets/personal/oberon.jpeg"
import sumi1Img from "../assets/personal/sumi1.jpeg"
import sumi2Img from "../assets/personal/sumi2.jpeg"
import tennisImg from "../assets/personal/tennis.png"

export default function AboutMe() {
    // scroll to top when the project is opened
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // Empty dependency array ensures it runs only once on mount

    return (
    <article className="bg-neutral-50 ">
        <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold">About Me</h1>

        <img
            src={aboutMeImg}
            alt="About Me Image"
            className="rounded-full my-10 w-xs mx-auto"
        />

        <p className="text-neutral-600 mb-15 whitespace-pre-line"> 
            Hello! I'm glad you came to learn more about me! 
            <br></br><br></br>
            I'm a Biomedical Engineering Master's student with 3 years of industry experience as a software developer in a quality driven environment. I love puzzles and problem solving and look forward to using my skills to help others.
            <br></br><br></br>
            I value supportive, collaborative work environments and I believe part of fostering one is getting to know your team as people. Below I've listed some of my interests to learn more about me on a personal level.
        </p>


        <section>
            <h2 className="text-xl font-semibold mb-4">Personal interests:</h2>

            {/* Puzzles */}
            <h4 className="font-semibold mb-4">Puzzles</h4>
            <div className="text-neutral-600 flex gap-4 pl-4 mb-5">
                <p>
                    I could spend hours on any type of puzzle. I love crosswords (and all the other NYT and LinkedIn mini games), jigsaw puzzles, riddles, sudoku ... the list goes on. The largest jigsaw puzzle I completed was a 5,000 piece puzzle of the ceiling of the Sistine Chapel. Here's the completed puzzle!
                </p>
                <img src={jigsawPuzzleImg} className="object-scale-down w-xs rounded-xl"/>
            </div>

            {/* Dogs */}
            <h5 className="font-semibold mb-4">Dogs</h5>
            <div className="text-neutral-600 flex gap-4 pl-4 mb-5">
                <p>
                    Although I don't have any pets of my own, I love animals, especially dogs. My twin sister has a Samoyed who is the the sweetest, fluffiest cloud (left). I was able to get my fix of dogs through volunteering at an animal shelter in college (right) and after college when I was working in NYC.
                </p>
                <div className="flex gap-2 w-700 items-center">
                    <div><img src={astridImg} className="object-fit rounded-xl"/></div>
                    <div><img src={oberonImg} className="object-scale-down rounded-xl"/></div>
                    
                </div>

            </div>

            {/* Tennis */}
            <h5 className="font-semibold mb-4">Tennis</h5>
            <div className="text-neutral-600 flex gap-4 pl-4">
                <p>
                    I grew up playing tennis and enjoyed playing varsity doubles for my high school. I didn't play throughout college, but I have been trying to find courts and play more often in Boston.
                </p>
                <img src={tennisImg} className="w-sm rounded-xl"/>
            </div>

               
            
        </section>
        
        </div>
    </article>
  )
}
