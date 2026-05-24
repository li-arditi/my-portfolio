export const projects = [
    /**
    {
        slug: "slug",
        title: "Title",
        summary: "Summary",
        thumbnail: import.meta.env.BASE_URL + "projects/project/filename.png",
        showcased: true,
        start: "Sept 2025",
        end : "[May 2026]",
        active: true,
        type: "Master's Program",
        teamsize: "4",
        keywords: ["keywords"],
        objective:
            "Objective",
        methods: [
            {
                title: "MethodTitle",
                body: "MethodBody",
                keywords: ["MethodKeywords"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/project/filename.png", caption: "MethodImage" },
                    
                ]
            },
        ],
        results: [ ## or a string
            { src: import.meta.env.BASE_URL + "projects/project/filename.jpeg", caption: "ResultImages" },
            
        ],
        timeline: [
            {  
                title: "PhotoTitle",
                text: "PhotoText",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/project/filename.jpeg", dim: "wxh"},
                ]
            },
                
        ],
        videoId: "",
        pdfs: [
            { title: "PdfTabTitle", src: import.meta.env.BASE_URL + "projects/traction/documents/ProblemSelectionPresentation.pdf" },
            
        ],
    },
     */
    { // masters project traction
        slug: "masters-project",
        title: "Skeletal Traction for Femoral Shaft Fractures",
        summary: "A hands-on experience developing an orthopedic medical device to improve the inconsistent treatment of femur fractures through the full product lifecycle",
        thumbnail: import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/traction/backgroundImg.jpg",
        heroBgImg: import.meta.env.BASE_URL + "projects/traction/heroBackground.jpg",
        theme: "teal",
        showcased: true,
        favorite: true,
        start: "Sept 2025",
        end: "May 2026",
        active: false,
        type: "Master's Program",
        teamsize: "4",
        teammembers: "Jonathan Lee, Bianca Rodriguez, Braxton Ersoy",
        keywords: ["Medical Device Product Development", "Clinical Observations", "Documentation", "Full Product Lifecycle"],
        objective:
            "Identify technology-related clinical challenges and unmet user needs through <b>clinical observations</b> to <b>design</b>, <b>develop</b>, and <b>document a medical device</b> from concept to commercialization according to <b>medical industry standards</b>.",
        context: { src: import.meta.env.BASE_URL + "projects/traction/context.png", heading: "11.5M femoral shaft fratures globally in 2021", caption: "Femoral shaft fracture displacement and skeletal traction"},
        problem: { src: import.meta.env.BASE_URL + "projects/traction/problem.png", heading: "Variable traction, variable outcomes", caption: "Key limitations of current standard of care"},
        outcome: { src: import.meta.env.BASE_URL + "projects/traction/outcome.png", heading: "A fully self-contained, portable, weight-free skeletal traction device", caption: "Our project results"},
        lessons: [
            {
                title: "Know the difference between what people say, what they want, what theyʼll pay for, and what they actually do.",
                body: "I gained experience in communicating with diverse clinical stakeholders in regulated environments to evaluate real-world product use, identify workflow and usability challenges, and translate clinical feedback into unmet needs.",
                keywords: ["OR Protocols","Communication", "User Needs", "Voice of Customer", "Stakeholder Interviews"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/lesson_01.png", caption: "“If there is any one secret of success, it lies in the ability to get the other person’s point of view and see things from that person’s angle as well as from your own” - Henry Ford" },
                ]
            },
            {
                title: "Framing the right problem is the only way to create the right solution.",
                body: "Through mentoring sessions with dedicated industry mentors, our team was pushed to hone our problem and needs statement. Initial iterations were too broad without a clear desired outecome, but we learned to make concise statements with a clear problem, population, and desired outcome.",
                keywords: ["Problem Statement","Needs Statement", "Value Proposition", "Human Factors",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/lesson_02.png", caption: "A summary of the problem and needs statements, along with user needs." },
                ],
            },
            {
                title: "If you didn't document it, it didn't happen.",
                body: "Without clear documentation on design decisions, the project is dead in the water. Engineering in the medical industry is one of the disciplines where mistakes don't just cost time and money, but they can cost lives.  Even a \"small\" project like this capstone project had some organizational issues that needed to be resolved, so an organized system for documenting early and often is essential.",
                keywords: ["Version Control", "Change Management", "Organization", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/lesson_03.jpg", caption: "" },
                ],
            },
            // {
            //     title: "Medical Industry Regulation",
            //     body: "",
            //     keywords: ["FDA", "Regulatory Pathways",],
            //     images: [
            //         { src: import.meta.env.BASE_URL + "projects/traction/aluminumTube.png", caption: "Overall progression of 3D models" },
            //     ],
            // },
        ],
        
        responsibilities: [
            {
                title: "OR Observations",
                body: "I conducted 50+ hours of OR observations at Boston Medical Center (BMC), recording detailed logs of procedures, opportunities for improvement, and interview notes. The project focus was defined based on these observation logs.",
                keywords: ["OR Observations", "Stakeholder Interviews"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_01.png", caption: "Unfortunately, I can't show images of surgeries, but these are the different types of orthopedic surgeries I observed." },

                ]
            },
            {
                title: "Documentation Sections",
                body: "While all team members contributed to all design decisions and documentation sections, overall accountability for specific sections was divided among members. My sections included the 4 shown to the right. I also assisted with Failure Mode and Effects Analysis (FMEA) and Validation and Verfication (V&V)",
                keywords: ["Problem Statement", "Design Inputs and Outputs", "Requirement Traceability Matrix (RTM)", "FMEA", "V&V",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_02.png", caption: "'Clinical Challenges and User Needs', Device Requirements', 'Engineering Specifications', and 'Design for Manufacturing (DFM)'" },
                ],
            },
            {
                title: "Mockups and Prototyping",
                body: "I love building things with my hands, so I crafted initial mockups and built the physical works-like and is-like prototypes, along with digital 3D models in OnShape to conduct stress analysis.",
                keywords: ["3D Modeling (OnShape)", "3D Printing", "Manual Mill", "Cold Saw", "Finite Element Analysis (FEA)"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_03.png", caption: "Progression of mockups and prototypes" },
                ],
            },
            {
                title: "Winch Design",
                body: "In addition to the overall structure of the device, I designed the custom winch mechanism that the user interacts with to apply a pulling force for skeletal traction. I used 3D printing for rapid prototyping to validate mechanical design and performance aligned with clinical requirements.",
                keywords: ["3D Modeling", "Torque Reduction (Worm Drive)", "Ratchet and Pawl", "Machining",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_04.png", caption: "" },
                ],
            },
            
        ],
        timeline: [
            {
                title: "Operating Room Observations",
                text: "Unfortunately, I can't show images of surgeries, but here is a picture of the prepped sterile table for the internal fixation of the right femur.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline01.png",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/traction/steriletable.jpeg", dim: "2x1"},
                ]
            },
            {
                title: "Mockups",
                text: "My initial mockup using foil, popsicle sticks, straws, and pipe cleaners.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline03.png",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/traction/mockup.jpeg", dim: "4x3"},
                ]
            },
            {
                title: "Initial Works-Like Prototyping",
                text: "The initial works-like prototype made with wood dowels, bolts, rope, a force gauge, and a 3D printed winch mechanism with a ratchet and pawl.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline04.png",
            },
            {
                title: "Custom Winch Design",
                text: "I designed, 3D printed, and tested various winch designs, taking into account ease of use, torque reduction, and safety mechanisms to align with user needs and device requirements.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline05.png",
            },
            {
                title: "Advanced Works-Like Protyping",
                text: "I modeled the device in OnShape to conduct FEA, then built an aluminum prototype using machining equipment including the cold saw and manual mill.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline06.png",
            },
            {
                title: "Is-Like Prototype",
                text: "I modeled the device in OnShape to conduct FEA, then built an aluminum prototype using machining equipment including the cold saw and manual mill.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline07.png",
            },
            {
                title: "Design History File",
                text: "In order to produce an organized, comprehensive design history file, I established version history standards and compiled all materials into a 655-page document with an easy navigation structure.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline08.png",
            },
            

        ],
        videoId: "",
        pdfs: [
            { title: "Initial Proposals", src: import.meta.env.BASE_URL + "projects/traction/documents/2025-11-03_ProblemSelectionPresentation.pdf" },
            { title: "Design Results", src: import.meta.env.BASE_URL + "projects/traction/documents/2025-12-01_DesignResultsPresentation.pdf" },
            { title: "Initial Works-Like", src: import.meta.env.BASE_URL + "projects/traction/documents/2026-02-17_InitialWorksLikeMEng.pdf"  },
            { title: "Advanced Works-Like", src: import.meta.env.BASE_URL + "projects/traction/documents/2026-03-23_AdvancedWorksLikeMEng.pdf"  },
            { title: "Is-Like", src: import.meta.env.BASE_URL + "projects/traction/documents/2026-04-29_Is Like Presentation.pdf"  },
        ],
        sources: [],
    },
    { // pressmate
        slug: "coffee-press",
        title: "The PressMate Coffee Press",
        summary: "A full cycle product realization project to develop a mass production plan for a single-serving metal coffee press",
        thumbnail: import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.jpeg",
        backgroundImg: import.meta.env.BASE_URL + "projects/pressmate/backgroundImg.jpg",
        heroBgImg: import.meta.env.BASE_URL + "projects/pressmate/heroBackground.jpg",
        theme: "coffee",
        showcased: true,
        favorite: true,
        start: "Jan 2026",
        end: "May 2026",
        active: false,
        type: "Product Realization Master's Course",
        teamsize: "4",
        teammembers: "Jos Moresi, Sam Eppley, William Castro",
        keywords: ["Manufacturing", "Mass Production", "Documentation", "Machining"],
        objective:
            "<b>Build</b> and <b>prototype</b> a small production system for a coffee press from <b>concept to mass production</b>, including <b>documentation</b> for all design development phases.",
        context: { src: import.meta.env.BASE_URL + "projects/pressmate/context.png", caption: "Product realization", heading: "Getting a design from the drawing board into the hands of a customer is an essential and challenging process" },
        problem: { src: import.meta.env.BASE_URL + "projects/pressmate/problem.png", caption: "Problem", heading: "Drawbacks of a competitor's single-serving coffee press, the Aeropress"},
        outcome: { src: import.meta.env.BASE_URL + "projects/pressmate/outcome.png", caption: "Our project results", heading: "The PressMate, a steel, all-in-one single-serve coffee press"},
        lessons: [
            
            {
                title: "Teamwork really does make the dream work",
                body:"Working on a team is a life-long learning opportunity. Team work can make or break your project, and this team has been making it. An organized workflow, clear communication, and a desire to meaningfully contribute to the project have been some factors of our success, which I look forward to experiencing in industry as well.",
                keywords: ["Teamwork","Communication", "RASCI",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/lesson_02.png", caption: "The team!" },
                ],
            },
            {
                title: "Machining parts is so fun!",
                body: "I have always loved tinkering and building things. Since I studied neuroscience and computer science during my undergraduate degree, I never had to machine anything. But now BU's machine shop is my second home where I'm having a lot of fun learning all the machines such as the manual and CNC lathe and mills, wire EDM, waterjet, lasercutter, and TIG welding.",
                keywords: ["Machining","Process Control","Standard Operating Procedures"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/lesson_03.png", caption: "" },
                ],
            },
            {
                title: "Think twice, cut once",
                body: "From my industry experience in construction and volunteer work with Habitat for Humanity building houses, I had already learned \"Measure twice, cut once\". However, with a limited budget, extremely tight schedule, and long lead time and machining times, it was essential that process plans were carefully engineered, meticulously recorded, and communicated to the whole team.",
                keywords: ["Manufacturing Schedule","Detail Oriented", "Process Plans", "Standard Operating Procedures (SOPs)", "Communication", "Teamwork"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/lesson_01.png", caption: "Measure thrice, cut once" },
                ]
            },
        ],
        responsibilities: [ //pressmate
            {
                title: "Enterprise Data/Content Management (EDM/ECM) Plan",
                body: "I established folder structure, naming conventions, version control standards, change management, and team expectations. I also created automation scripts using Google Apps Script to streamline document formatting and assignment submission.",
                keywords: ["Elevator Pitches", "Enterprise Data/Content Management", "Schedule", "RASCI"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/responsibility_01.png", caption: "Enterprise data management plan cover page" },
                ],

            },
            {
                title: "Spec Doc and Standard Operating Procedures (SOPs)",
                body: "In addition to the ECM, I was mainly responsible for maintaining the product specifications document and standard operating procedures documents.",
                keywords: ["Product Brief", "Voice of Customer", "Product Specifications", "Regulatory Requirements", "Usage Conditions", "Aesthetics", "SOPs"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/responsibility_03.png", caption: "" },

                ],
            },
            {
                title: "Mockups",
                body: "Since I like visualizing things with physical models, I created simple mockups to test specific functions for feasibility. This included testing for water jetting while pressing and sealing for directly drinking from the cup.",
                keywords: ["Mockups", "Product Concept"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/responsibility_02.png", caption: "The initial mockups to test various functions and design concepts." },

                ],
            },
            {
                title: "Waterjet, Welding, and Wire EDM, Oh My!",
                body: "I love hands-on activities, so I basically lived at BU's machine shop EPIC. It was a lot of fun learning how to use different manufacturing equipment such as the waterjet, TIG welding tools, wire EDM, lathe, and mills.",
                keywords: ["MAchine Shop","Waterjet", "Lathe", "TIG Welding", "Wire EDM"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/responsibility_04.png", caption: "Waterjet, welding, and the wire EDM" },

                ],
            },
            {
                title: "Coozies!",
                body: "Our product is a steel cup with the intention of hold boiling water, so we needed a sleeve to protect the user from the hot surface. In addition to other machining tasks listed above, I created coozies with the sewing machine!",
                keywords: ["Sewing", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/responsibility_05.png", caption: "" },

                ],
            },
            
        ],
        timeline: [
            { // 01 Project launch
                title: "Project Launch",
                text: "Propose a project focus, finalize the approach, refine product concept, and set up the project management infrastructure.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline01.png",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/pressmate/EDM.png", dim: "1x2"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/initialProposal.png", dim: "1x2"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/initialDwg.png", dim: "1x2"},
                ]
            },
            // { // 02 mockups/prototype
            //     title: "Mockups and Prototyping",
            //     text: "Build one (1) prototype with non-production intent processes. Mockups were created to test key functionalities. For example, a concern was the possibility of hot water shooting through the holes of the plunger onto the user when they filtered their coffee.",
            //     image: import.meta.env.BASE_URL + "projects/pressmate/timeline02.png",
            //     layout: "",
            //     images: [
            //         {src: import.meta.env.BASE_URL + "projects/pressmate/timelinemockups.png", dim: "2x1"},
            //     ]
            // },
            { // 03 EVT
                title: "Engineering Validation Testing (EVT)",
                text: "Build one (1) product with production intent and tooling plans. Processes included using the waterjet, wire EDM, manual lathe, CNC mill, and sewing machine",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline03.png",
                layout: "three1",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/pressmate/lathe.jpg", dim: "4x3"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/EVT.jpeg", dim: "4x3"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/EVTcomponents.jpeg", dim: "4x3"},
                ]
            },
            { // 04 EVT result
                title: "EVT Result",
                text: "After a getting over the steep learning curve, high scrap rate, and long hours, this is the EVT prototype and tooling we produced.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline04.png",
            },
            { // 05 DVT 
                title: "Design Validation Testing (DVT)",
                text: "Build three (3) products with all production intent processes and test tooling and fixtures.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline05.png",
                
            },
            { // 06 DVT results
                title: "DVT Results",
                text: "Processes were similar to EVT but now with seasoning for rust resistance, a silicone lip and no lid.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline06.png",
                
            },
            { // 07 PVT
                title: "Production Validation Testing (PVT) Prototype",
                text: "Build ten (10) products with all production intent processes, fixtures, and tools. Processes were the same as DVT but scaled up to increase efficiency and decrease scrap.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline07.png",
                
            },
            { // 08 PVT result
                title: "PVT Results",
                text: "After many unexpected roadblocks and early mornings in the machine shop, we successfully produced our 10 PVT products!",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline08.png",
                
            },
            { // 09 MP
                title: "Mass Production (MP) Plan",
                text: "Produce a mass production plan with forecast, packaging, cost down targets, and production plan for production of 100,000 units/year.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline09.png",
                
            },
            
            
        ],
        videoId: "",
        pdfs: [
            { title: "Initial Proposals", src: import.meta.env.BASE_URL + "projects/pressmate/documents/01ProductPitches.pdf" },
            { title: "Product Proposal", src: import.meta.env.BASE_URL + "projects/pressmate/documents/02ProductProposal.pdf" },
            { title: "Concept Refinement", src: import.meta.env.BASE_URL + "projects/pressmate/documents/03MockupIterations.pdf" },
            { title: "EVT Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/04EVTReport.pdf" },
            { title: "DVT Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/05DVTReport.pdf" },
            { title: "PVT Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/06PVTSummary.pdf" },
            { title: "MP Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/07MPReport.pdf" },
            { title: "Final Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/08FinalReport.pdf" },
        ],
        sources: [],
    },
    { // stangl
        slug: "stangl-lab",
        title: "Software Hardware Integration for Clinical Neurophysiology Research",
        summary: "Integrating data collection hardware with software workflows to align multimodal data with millisecond precision",
        thumbnail: import.meta.env.BASE_URL + "projects/stangl/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/stangl/backgroundImg.png",
        heroBgImg: import.meta.env.BASE_URL + "projects/stangl/heroBackground.jpg",
        theme: "violet", 
        showcased: true,
        favorite: true,
        start: "May 2025",
        end: "Sept 2025",
        active: false,
        type: "Research Assistant",
        teamsize: "2-3",
        teammembers: "Sung Ahn, [Elizabeth Wang]",
        keywords: ["Hardware Software Integration", "EEG", "Motion Capture", "Eye Tracking", "IMUs", "Arduino", "Serial Communication"],
        objective:
            `Improve the current hardware-software integration system of the Stangl Lab at BU to ensure sub-millisecond sychronization precision between the multimodal data.`,
        context: { src: import.meta.env.BASE_URL + "projects/stangl/context.png", caption: "Product realization" },
        problem: { src: import.meta.env.BASE_URL + "projects/stangl/problem.png", caption: "Problem"},
        outcome: { src: import.meta.env.BASE_URL + "projects/stangl/outcome.png", caption: "Our project results"},
        lessons: [
            {
                title: "Even if something *should* behave a certain way, never assume...verify everything",
                body: "As the saying goes: never assume because it makes an 🫏 of u and me. One case this arose was for eye tracking data synchronization, where we assumed sychronization would be the same as the other devices. However, after I conducted verification and validation experiments, I found that the current method was not meeting experimental requirements, so I implemented a new solution.",
                keywords: ["Verification and Validation",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/lesson_01.png", caption: "" },
                ]
            },
            // {
            //     title: "Computers are not instantaneous",
            //     body: "Although computers do a good job at making ",
            //     keywords: ["Problem Statement","Needs Statement", "Value Proposition", "Human Factors",],
            //     images: [
            //         { src: import.meta.env.BASE_URL + "projects/stangl/lesson_02.png", caption: "Lesson 2" },
            //     ],
            // },
            {
                title: "Detailed notes make documentation easy",
                body: "Every day I wrote down what I did, errors I ran into, and how I solved them. Even if it was something I thought I would only do or run into once, I wrote it down (and usually I did run into it again...). This made writing a detailed document of my process very easy while also being thorough that the lab still uses the document as an onboarding and reference document.",
                keywords: ["Note Taking", "Documentation", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/lesson_03.png", caption: "" },
                ],
            },
        ],
        
        responsibilities: [
            {
                title: "Experiment Protocols",
                body: "In order to fully understand the current system, I assisted in conducting spatial navigation and memory research protocols with freely moving human participants, collecting data through a RaspberyPi from systems for motion capture, eye tracking, and brain activity (EEG).",
                keywords: ["Vicon Motion Capture", "Eye Tracking", "RaspberryPi", "Responsive Neurostimulation (RNS)"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/responsibility_01.png", caption: "The RNS device implant and setup with experiment equipment" },

                ],
            },
            {
                title: "Eye Tracking Validation",
                body: "Verify the time delay between the RaspberyPi and Neon glasses has a linear drift less than 10ms, ensuring eye movements can be aligned with other data streams. I found that the current method of synchronizing data was not meeting the requirements, so I implemented an alternative solution.",
                keywords: ["Neon Pupil Labs Glasses", "Time Synchronization"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/responsibility_02.png", caption: "Neon Pupil Labs eye tracking glasses worn by the participant" },

                ],
            },
            {
                title: "Hardware-Software Integration for Data Synchronization",
                body: "Implement an Lab Streaming Layer (LSL) workflow to provide more consistent, easily analyzable data and remove the need to manually align data from the timestamp drift.",
                keywords: ["Python", "C++","LSL", "Sub-millisecond Time Sychronization", "Serial Communication"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/responsibility_03.png", caption: "LSL workflow to synchronize data streams" },
                ],
            },
            {
                title: "Inertial Measurement Unit (IMU) Integration",
                body: "Compare two inertial measurement unit (IMU) systems to report usability and integration with the current system. One of the systems was a custom system created by another BU lab the Boas Lab. I was tasked to assess the system, document how it works, and provide feedback on usability in our workflow.",
                keywords: ["IMU", "GPIO", "UART"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/responsibility_04.png", caption: "An IMU is a sensor that measures an object's angular rate using accelerometers, gyroscopes, and magnetometers." },

                ],
                
            },
        ],
        timeline: [
            {
                title: "Experimental Protocol Assistance",
                text: "In order to understand the experiment protocol workflow and requirements, I assisted in conducting research experiments for spatial navigation and memory tasks with freely-moving human participants.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline_01.png",
            },
            {
                title: "Eye Tracking Time Sychronization",
                text: "Time delays were determined by analyzing the eye tracking recording to find the exact timestamp the LED turned on. This was compared to known timestamps of the LED trigger from the RaspberryPi.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline_02.png",
            },
            {
                title: "Eye Tracking Results",
                text: "The LED-RPi alignment had a 10-20ms delay, however, the environment/scene camera video had a frame rate of 30Hz, contributing to an uncertainty of 33ms. With the LED in the scene camera (left), the timestamp diﬀerence was not linear and too large of a diﬀerence because of the frame rate. The eye camera (right) was used instead becuase of its 200Hz frame rate.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline_03.png",
            },
            {
                title: "Lab Streaming Layer (LSL)",
                text: "I learned and started implementing an LSL workflow. Lab Streaming Layer (LSL) is a widely used system for the unified collection of measurement time series in research experiments. It handles both the networking, time-synchronization, (near-) real-time access as well as optionally the centralized collection, viewing and disk recording of the data.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline_04.png",
            },
            {
                title: "Boas Lab IMU Crash Course",
                text: "The Boas Lab at BU had created custom inertial measurement units (IMUs) that hadn’t been tested yet. I met with creator of the IMUs Professor Eric Hazen for a crash course on the technical details the devices, after which I created a guide for future reference.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline_05.png",
            },
            {
                title: "Documentation",
                text: "I created a 30-page report to document my process, results, lessons learned, and future directions to ensure smooth knowledge transfer to technical and non-technical audiences.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline_06.png",
            },

        ],
        videoId: "",
        pdfs: [
            { title: "Progress Update (Informal)", src: import.meta.env.BASE_URL + "projects/stangl/documents/20250718_LA_WeeklyMtgPresentation.pdf" },

        ],
        sources: [
            {content: "More information on the Stangl Lab can be found here: ", url: "https://www.stangl-lab.com"},
            {content: "Stangl, M., Maoz, S.L. & Suthana, N. Mobile cognition: imaging the human brain in the ‘real world’. Nat Rev Neurosci 24, 347–362 (2023). ", url: "https://doi.org/10.1038/s41583-023-00692-y"},
            {content: "Topalovic et al., 2020, Neuron 108, 322–334 October 28, 2020 a 2020 Elsevier Inc. ", url: "https://doi.org/10.1016/j.neuron.2020.08.021"},

            
        ],

    },
    { // vdcEngineer
        slug: "vdc-engineer",
        title: "Virtual Design and Construction (VDC) Maker Space Interior Fit-Out",
        summary: "A project planning job for the interior fit-out of a MakerSpace lab, including HVAC, plumbing, and electrical systems",
        thumbnail: import.meta.env.BASE_URL + "projects/vdcEngineer/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/vdcEngineer/backgroundImg.png",
        heroBgImg: import.meta.env.BASE_URL + "projects/vdcEngineer/heroBackground.jpg",
        theme: "teal",
        showcased: true,
        start: "Oct 2023",
        end: "Feb 2024",
        active: false,
        type: "Turner Construction",
        teamsize: "5-10",
        keywords: ["Project Management", "HVAC Systems", "Communication", "Detail-oriented", "Cross-functional Teamwork"],
        objective: `Coordinate the virtual construction of mechanical, electrical, and plumbing (MEP) systems to ensure design documents were feasible. 
        
        Experience the coordination process with the intention of developing a web application for future Virtual Design and Construction (VDC) Coordination projects.`,
        context: { src: import.meta.env.BASE_URL + "projects/vdcEngineer/context.png", caption: "Product realization" },
        problem: { src: import.meta.env.BASE_URL + "projects/vdcEngineer/problem.png", caption: "Problem"},
        outcome: { src: import.meta.env.BASE_URL + "projects/vdcEngineer/outcome.png", caption: "Our project results"},
        lessons: [
            {
                title: "Proactive communication is necessary for addressing potential issues before they happen",
                body: "The purpose of my role was to identify virtual problems before they became real-world problems. Proactive instead of reactive efforts were essential to addressing potential issues before they become real issues in the field.",
                keywords: ["Communication", "Problem Solving", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/vdcEngineer/lesson_01.png", caption: "Proactive communication" },
                ]
            },
            {
                title: "Collaborative problem solving with a diverse team allows for creative solutions to complex problems",
                body: "The most productive design reviews where when all the stakeholders were in the room. Not only did it open channels of respectful communication, but it also provided a space for creative solutions to blossom as people with diverse backgrounds and experiences worked together to accomplish the same goal.",
                keywords: ["Collaboration","Problem Solving", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/vdcEngineer/lesson_02.png", caption: "A summary of the problem and needs statements, along with user needs." },
                ],
            },
            {
                title: "There is a balance between what the client wants, what's feasible, and what they are willing to pay for",
                body: "Many times I found myself bending over backwards trying to find a better solution that would satisfy ALL the . The Project Manager would remind me that it's not about what I want, it's about what the client wants (and is willing to pay for). We presented the options and our insight and even if it's not an outcome we fully agree with, it's the client's choice and we will fully support it and make it happen.",
                keywords: ["Constraints", "Time Management", "User Requirements", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/vdcEngineer/lesson_03.png", caption: "" },
                ],
            },
        ],
        responsibilities: [
            {
                title: "Contract and Document Standards",
                body: "Understand contract documents and requirements. Establish project standards for naming conventions, workflows, and software, and communicate them to the team. ",
                keywords: ["Contract Requirements","Project Kick-Off", "Data Management"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/vdcEngineer/projectLaunch.png", caption: "MethodImage" },
                ]
            },
            {
                title: "3D Model Navigation and Clash Detection",
                body: "Conduct daily problem solving sessions to identify and resolve clashes with existing conditions and new scope of work.",
                keywords: ["Problem Solving", "Coodination", "Documentation"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/vdcEngineer/clashDetection.jpg", caption: "MethodImage" },
                ]
            },
            {
                title: "Design Reviews",
                body: "Conduct weekly design reviews with Architects, Engineers, Project Managers, and Clients to address and resolve conflicts with design requirements.",
                keywords: ["Diverse Stakeholders", "Reporting", "Design Requirements"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/vdcEngineer/designReview.jpg", caption: "MethodImage" },
                ]
            },
        ],
        results: `I successfully coordinated the virtual construction of the interior fit-out for the space with high quality and performance, recognized by all stakeholders.
        
        Due to confidentiality restrictions, I can only provide high-level descriptions of my responsibilities.`,
        timeline: [
            {
                title: "Maker Space Interior Fit-Out",
                text: "Unfortunately, I can't show real examples in the results timeline for this project. However, this is one of the spaces I coordinated.",
                image: import.meta.env.BASE_URL + "projects/vdcEngineer/timeline01.png",

            },
            {
                title: "Completed Space",
                text: "This is an image from Cornell Tech's MakerLAB website showing the completed space in use.",
                image: import.meta.env.BASE_URL + "projects/vdcEngineer/timeline02.png",

            },

        ],
        videoId: "",
        pdfs: [],
        sources: [
            "Lessons learned images were created with Google Gemini",
            {content: "Images of the MakerLab space are from Cornell Tech's website: ", url: "https://tech.cornell.edu/research/makerlab/"},
        ]
    },
    { // endoscope
        slug: "endoscope-stabilization",
        title: "Endoscope Stabilization Sleeve",
        summary: "A mock NIH grant application proposal for an endoscope sleeve that provides distal tip stabilization",
        thumbnail: import.meta.env.BASE_URL + "projects/endoscope/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/endoscope/backgroundImg.jpg",
        heroBgImg: import.meta.env.BASE_URL + "projects/endoscope/heroBackground.png",
        theme: "teal",
        showcased: true,
        start: "Jan 2024",
        end: "May 2025",
        active: false,
        type: "Medical Robotics Master's Course",
        teamsize: "5",
        teammembers: "Chae Woo Lim, Riku Ito, Megha Venkatesam, Suzuka Kojima",
        keywords: ["NIH grant materials", "Pneumatic Actuation", "Arduino"],
        objective: `Design and develop a medical robotic device and write a NIH-proposal-style report.`,
        context: { src: import.meta.env.BASE_URL + "projects/endoscope/context.png", caption: "Product realization" },
        problem: { src: import.meta.env.BASE_URL + "projects/endoscope/problem.png", caption: "Problem"},
        outcome: { src: import.meta.env.BASE_URL + "projects/endoscope/outcome.png", caption: "Our project results"},
        lessons: [
            {
                title: "Always have a Plan B, and don't be afraid to pivot",
                body: "The initial proposal was to use Thermoplastic Elastomers (TPE) to create angular bellows for pneumatic actuation. However, repeated attempts failed to produce functioning bellows, so as a last resort heat-weldable fabric pouches were used instead.",
                keywords: [],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/lesson_01.png", caption: "“If there is any one secret of success, it lies in the ability to get the other person’s point of view and see things from that person’s angle as well as from your own” - Henry Ford" },
                ]
            },
            {
                title: "Holding the end of a flexible tube steady is harder than it sounds",
                body: "Although it may not seem hard to hold a flexible tube steady, it gets tiring, both physically and mentally. (And that doesn't include performing a surgery at the same time). It was a good reminder of the importance of trying to experience what the user will experience in order to design a useful product. ",
                keywords: ["User Testing", "Voice of Customer", "NASA Task Load"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/lesson_02.png", caption: "A summary of the problem and needs statements, along with user needs." },
                ],
            },
            // {
            //     title: "So many references",
            //     body: "Documentation is key.",
            //     keywords: ["Requirement Traceability Matrix (RTM)", "Failure Mode and Effects Analysis (FMEA)", "Validation and Verifcation (V&V)", ],
            //     images: [
            //         { src: import.meta.env.BASE_URL + "projects/endoscope/lesson_03.jpg", caption: "" },
            //     ],
            // },
        ],
        responsibilities: [
            {
                title: "Circuit Design and Arduino Code",
                body: "My role was to design, assemble, and test the circuit board by writing the code for the sensor integration and control system.",
                keywords: ["Arduino", "Circuits", "Pressure Sensing","Pneumatic Actuation", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/responsibility_01.png", caption: "MethodImage" },

                ]
            },
            {
                title: "Heat-Weldable Fabric Pouches",
                body: "As a backup plan, I designed, manufactured, and tested pouches with heat-weldable fabric and plastic tubing. Since the initial TPE bellows ended up not working, these other pouches were used instead.",
                keywords: [ ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/responsibility_02.png", caption: "MethodImage" },

                ]
            },
            {
                title: "Validate the Robotic System",
                body: "Another team member and I tested the system with the NASA Task Load Protocol to validate device functionality and usability.",
                keywords: ["NASA Task Load", "Testing", "MATLAB Image Detection"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/responsibility_03.png", caption: "MethodImage" },

                ]
            },
        ],
        timeline: [
            {
                title: "Pre-Proposal",
                text: "Minimally invasive surgery (MIS) provides a minimal risk cancer screening technique, however, undesired force exertion and decreased navigation capabilities and image quality negatively impact patient care. We propose a passive stabilization mechanism that anchors onto the transluminal walls and dampens any motion to increase accuracy in diagnosis.",
                image: import.meta.env.BASE_URL + "projects/endoscope/timeline01.png",

            },
            {
                title: "Prototype Construction",
                text: "In order to divide and conquer, my role was to develop the pneumatic actuation circuit and Arduino software control. Components included air pumps, MPRLS pressure sensors with an I2C breakout board, solenoid valves with MOSFET transistors and diodes, control buttons and LED indicator, and heat-sealed pouches.",
                image: import.meta.env.BASE_URL + "projects/endoscope/timeline02.png",
            },
            {
                title: "Testing",
                text: "Due to time constraints, the full sensor and control system was not implemented for testing. Although contact with the walls was correctly detected, leaks in the system caused pouches to deflate. At the same time, constant power to the pumps resulted in a power supply failure, so inflation was supplied manually with a hand pump for testing.",
                image: import.meta.env.BASE_URL + "projects/endoscope/timeline03.png",
            },
            {
                title: "Data Analysis",
                text: "The position of the scope end was recorded using image detection techniques in MATLAB to quantify the drift in distal tip position over time. The addition of the stabilization mechanism greatly reduced the spread of the position of the tip end.",
                image: import.meta.env.BASE_URL + "projects/endoscope/timeline04.png",
            },
            {
                title: "Final Results",
                text: "A NASA Task Load protocol indicated that the sleeve effectively eliminated cognitive and physical strain and reduced time pressure, performance pressure, and exertion. Increased frustration may be due to the operator manually inflating the pouch motors and thus could be improved with the electro-pneumatic circuit.",
                image: import.meta.env.BASE_URL + "projects/endoscope/timeline05.png",
            },


        ],
        videoId: "",
        pdfs: [
            { title: "Final Presentation", src: import.meta.env.BASE_URL + "projects/endoscope/documents/ME571_FinalPresentation.pdf" },

        ],
        sources: [
            {content: "A. Loeve, P. Breedveld, and J. Dankelman, “Scopes Too Flexible...and Too Stiff,” IEEE Pulse, vol. 1, no. 3, pp. 26–41, Nov. 2010, ", url: "https://doi.org/10.1109/MPUL.2010.939176"},
        ],
    },
    { // softwareEngineer
        slug: "software-engineer",
        title: "Software Engineer (Full-Stack)",
        summary: "Develop full-stack web applications for project management at one of the top global construction management companies Turner Construction.",
        thumbnail: import.meta.env.BASE_URL + "projects/softwareEngineer/01_thumbnail.jpg",
        backgroundImg: import.meta.env.BASE_URL + "projects/softwareEngineer/backgroundImg.jpg",
        heroBgImg: import.meta.env.BASE_URL + "projects/softwareEngineer/heroBackground.png",
        theme: "sky",
        showcased: true,
        start: "Aug 2021",
        end: "June 2024",
        active: false,
        type: "Lead Software Engineer",
        teamsize: "1-5",
        keywords: ["KPI Dashboards", "UI", "Full-Stack", "PHP", "Python", "Javascript", "Unity"],
        objective: `Develop custom web applications for the Virtual Design and Construction (VDC) department to standardize, visualize, and manage company- and project-specific resources.`,
        context: { src: import.meta.env.BASE_URL + "projects/softwareEngineer/context.png", caption: "Software engineer" },
        problem: { src: import.meta.env.BASE_URL + "projects/softwareEngineer/problem.png", caption: "Problem"},
        outcome: { src: import.meta.env.BASE_URL + "projects/softwareEngineer/outcome.png", caption: "Outcome"},
        lessons: [
            {
                title: "Software development cannot happen in a silo",
                body: "I was the first dedicated software developer hired at Turner. Most construction management software is created by developers who have never stepped foot on a jobsite. As a result, there has been a major disconnect between what developers *think* is needed and what is *actually* needed. With my previous engineering intern experience at Turner and my computer science experience, I had the unique background to develop web applications that aligned with the real needs of users.",
                keywords: ["User Needs","Voice of Customer"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/lesson_01.png", caption: "" },
                ]
            },
            {
                title: "Comment your code, you'll thank yourself later. And so will everyone else.",
                body: "Code readability is an art that may be underappreciated until you revisit code written years, months, weeks, or even just days ago. Especially when working with a team, it is essential for code to be organized and well commented in order to allow others and your future self to quickly and easily understand your code.",
                keywords: ["Code Readability","Organization", "Documentation"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/lesson_02.png", caption: "" },
                ]
            },
            {
                title: "Give someone your application, and ask them to try to break it.",
                body: "Watching someone navigate your application is an eye-opening experience. Even if you try to distance yourself from the work and imagine how the user experiences your application, you can never know how a user may interact with your interface without watching them. On many occassions I asked a co-worker to test my work and they would do something that I didn't account for that would break the software, and each time I would learn something new.",
                keywords: ["User Testing",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/lesson_03.png", caption: "" },
                ],
            },
            {
                title: "Advocating for your team goes a long way",
                body: "My supervisor and I proved my work was impactful and innovative, so our team was given the budget to hire additional software developers. I'm a strong advocate for my teammates for any team I'm on, explicitly recognizing their efforts and achievements, and this was no different. Ironically, I only realized my positive impact during my farewell department meeting when my peers voiced their appreciation for my unwavering support and willingness to advocate for them.",
                keywords: ["Team Dynamics", "Leadership", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/lesson_04.png", caption: "" },
                ],
            },
            // {
            //     title: "Under promise, over deliver",
            //     body: "I was the first ",
            //     keywords: ["Time Management", "Managing Expectations", "Schedule", ],
            //     images: [
            //         { src: import.meta.env.BASE_URL + "projects/softwareEngineer/lesson_03.jpg", caption: "" },
            //     ],
            // },
        ],
        responsibilities: [
            
            {
                title: "Interactive 3D Model Risk Management Application",
                body: "I researched the best 3D software development application for the project's purpose, eventually deciding on Unity - a common video game development software. After quickly learning Unity, I developed a web application that could be used for risk management purposes. Unfortunately due to confidentiality reasons, I can't provide more details on the exact purpose of the application.",
                keywords: ["Risk Management", "Unity", "Custom 3D Model Application", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/responsibility_01.png", caption: "MethodImage" },

                ]
            },
            {
                title: "Team Bonding Polls",
                body: "As a fun way to get to know people, I would write polls on my desk's whiteboard and people would walk by to tally their answer. Questions included: Would you rather be a spider or caterpillar (that turns into a butterfly)? or Is a hotdog a sandwich? It became a popular team bonding activity brought up during team meetings, so I created a web page with a weekly poll where results were available at the end of the week.",
                keywords: ["Team Bonding",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/responsibility_02.png", caption: "MethodImage" },
                ]
            },
            {
                title: "Internal Resource Management App",
                body: "I developed several connected web pages for upper management to manage and plan employee project assignments. The app was so successful that two other departments also wanted to use it, and it is still used today.",
                keywords: ["Resource Management", "Staff Assignments", "Project Management" ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/responsibility_03.png", caption: "MethodImage" },
                ]
            },
            {
                title: "Hybrid Work Calendar and Desk Reservation App",
                body: "With the hybrid work calendar, upper management wanted a way to track whether employees were in the office, remote, or on a job site. I created a custom hybrid/remote calendar and integrated a desk assignment feature as people started going into the office more and not having enough available desks. This app was also so successful that two other departments also wanted to use it, and it is still used today.",
                keywords: ["Organization", "Management", "Hybrid Work","Calendar", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/responsibility_04.png", caption: "MethodImage" },

                ]
            },
            {
                title: "Project Job Site Work In Progress Tracking",
                body: "This was one of my larger projects where I created a custom web app for on-site project management using the three.js library. It had been deployed on 5 job sites during my time developing it, and it continues to be used today.",
                keywords: ["Schedule", "Live Data", "Project Health Tracking","three.js library", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/responsibility_05.png", caption: "MethodImage" },

                ]
            },
            {
                title: "Interviewing and Onboarding",
                body: "I quickly gained more responsibilities including interviewing candidates for the team and onboarding interns and new hires.",
                keywords: ["Leadership", "Mentoring" ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/softwareEngineer/responsibility_06.png", caption: "MethodImage" },

                ]
            },
        ],
        timeline: [
            {
                title: "Software Development Tools Research",
                text: "Many of my projects involved navigating in and interacting with a 3D model. Unity and Unreal Engine are two popular video game development tools that were options for achieving project goals. After research on usability, graphics, and hardware requirments I decided to use Unity.",
                image: import.meta.env.BASE_URL + "projects/softwareEngineer/timeline_01.png",
            },
            {
                title: "Custom 3D Environment",
                text: "Although Unity is a powerful development tool, due to information security concerns and need for more control and customization over the application, we eventually ended up using the three.js library to create a custom model viewer.",
                image: import.meta.env.BASE_URL + "projects/softwareEngineer/timeline_02.png",
            },
            {
                title: "Framework and Workflow",
                text: "Initial system setup was done in PHP and MySQL. Eventually, a Node.js framework was implemented, along with GitHub version control and application deployment.",
                image: import.meta.env.BASE_URL + "projects/softwareEngineer/timeline_03.png",
            },

        ],
        videoId: "",
        pdfs: [],
        sources: [
            "Images are from various online sources.",
            {content: "Turner construction is a top global construction management (general contractor) company for commercial buildings. You can find more information and projects Turner has worked on here: ", url: "https://www.turnerconstruction.com/projects"}
        ],
    },
    { // truss
        slug: "truss",
        title: "Acrylic Truss Design",
        summary: "Design a simple truss with given requirements and calculate member loads, critical load, etc.",
        thumbnail: import.meta.env.BASE_URL + "projects/truss/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/truss/backgroundImg.png",
        heroBgImg: import.meta.env.BASE_URL + "projects/truss/heroBackground.jpg",
        theme: "",
        showcased: false,
        start: "Sept 2024",
        end: "Dec 2024",
        active: false,
        type: "Static Mechanics Course Project",
        teamsize: "4",
        keywords: ["MATLAB", "Simulation", "Force Analysis"],
        objective: `Design and build an acrylic truss with specified characteristics.`,
        methods: [
            {
                title: "MATLAB Simulations",
                body: "MethodBody",
                keywords: ["MethodKeywords"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/project/filename.png", caption: "MethodImage" },

                ]
            },
        ],
        results: [
            { src: import.meta.env.BASE_URL + "projects/project/filename.jpeg", caption: "ResultImages" },
        ],
        timeline: [
            {
                title: "PhotoTitle",
                text: "PhotoText",
                image: import.meta.env.BASE_URL + "projects/truss/timeline01.png",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/truss/filename.jpeg", dim: "h-48"},
                ]
            },

        ],
        videoId: "",
        pdfs: [
            { title: "PdfTabTitle", src: import.meta.env.BASE_URL + "projects/traction/documents/ProblemSelectionPresentation.pdf" },

        ],
    },
    { // dysmenorrhea
        slug: "dysmenorrhea",
        title: "Mock Proposal for Dysmenorrhea Research",
        summary: "Summary",
        thumbnail: import.meta.env.BASE_URL + "projects/dysmenorrhea/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/dysmenorrhea/backgroundImg.png",
        heroBgImg: import.meta.env.BASE_URL + "projects/dysmenorrhea/heroBackground.jpg",
        theme: "",
        showcased: false,
        start: "September 2025",
        end: "December 2025",
        active: false,
        type: "Engineering Women's Health Course Project",
        teamsize: "2",
        teammembers: "Jeslyn Baraceros",
        keywords: ["Keywords",],
        objective: `Design an R12 research proposal for a study that addresses an issue that only or disproportionately affects women.`,
        methods: [
            {
                title: "Research Methods",
                body: "MethodBody",
                keywords: ["MethodKeywords"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/project/filename.png", caption: "MethodImage" },

                ]
            },
        ],
        results: "A mock proposal was created and presented to peers",
        timeline: [
            {
                title: "PhotoTitle",
                text: "PhotoText",
                image: import.meta.env.BASE_URL + "projects/dysmenorrhea/timeline01.png",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/dysmenorrhea/filename.jpeg", dim: "h-48"},
                ]
            },

        ],
        videoId: "",
        pdfs: [
            { title: "PdfTabTitle", src: import.meta.env.BASE_URL + "projects/traction/documents/ProblemSelectionPresentation.pdf" },

        ],
    },
    { // template (old)
        slug: "slug",
        title: "Title",
        summary: "Summary",
        thumbnail: import.meta.env.BASE_URL + "projects/project/filename.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/project/backgroundImg.png",
        heroBgImg: import.meta.env.BASE_URL + "projects/project/heroBackground.jpg",
        theme: "",
        showcased: false,
        start: "Sept 2025",
        end: "[May 2026]",
        active: true,
        type: "Master's Program",
        teamsize: "4",
        teammembers: "",
        keywords: ["keywords"],
        objective:
            "Objective",
        methods: [
            {
                title: "MethodTitle",
                body: "MethodBody",
                keywords: ["MethodKeywords"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/project/filename.png", caption: "MethodImage" },

                ]
            },
        ],
        results: [
            { src: import.meta.env.BASE_URL + "projects/project/filename.jpeg", caption: "ResultImages" },

        ],
        timeline: [
            {
                title: "PhotoTitle",
                text: "PhotoText",
                image: import.meta.env.BASE_URL + "projects/project/timeline01.png",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/project/filename.jpeg", dim: "h-48"},
                ]
            },

        ],
        videoId: "",
        pdfs: [
            { title: "PdfTabTitle", src: import.meta.env.BASE_URL + "projects/traction/documents/ProblemSelectionPresentation.pdf" },

        ],
    },



]
