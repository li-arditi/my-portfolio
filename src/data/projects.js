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
    {
        slug: "masters-project",
        title: "Skeletal Traction for Femoral Shaft Fractures",
        summary: "A hands-on experience developing an orthopedic medical device through the full product lifecycle",
        thumbnail: import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/traction/backgroundImg.jpg",
        heroBgImg: import.meta.env.BASE_URL + "projects/traction/heroBackground.jpg",
        theme: "teal",
        showcased: true,
        start: "Sept 2025",
        end: "[May 2026]",
        active: true,
        type: "Master's Program",
        teamsize: "4",
        teammembers: "Jonathan Lee, Bianca Rodriguez, Braxton Ersoy",
        keywords: ["Medical Device Product Development", "Clinical Observations", "Documentation", "Full Product Lifecycle"],
        objective:
            "Identify technology-related clinical challenges and unmet user needs through clinical observations to design, develop, and document a medical device from concept to commercialization according to medical industry standards.",
        context: { src: import.meta.env.BASE_URL + "projects/traction/context.png", caption: "Femoral shaft fracture displacement and skeletal traction" },
        problem: { src: import.meta.env.BASE_URL + "projects/traction/problem.png", caption: "Key limitations of current standard of care"},
        outcome: { src: import.meta.env.BASE_URL + "projects/traction/outcome.png", caption: "Our project results"},
        lessons: [
            {
                title: "The difference between what people say, what they want, what theyʼll pay for, and what they actually do",
                body: "I gained experience in communicating with diverse clinical stakeholders in regulated environments to evaluate real-world product use, identify workflow and usability challenges, and translate clinical feedback into unmet needs.",
                keywords: ["OR Protocols","Communication", "User Needs", "Voice of Customer", "Stakeholder Interviews"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/lesson_01.png", caption: "“If there is any one secret of success, it lies in the ability to get the other person’s point of view and see things from that person’s angle as well as from your own” - Henry Ford" },
                ]
            },
            {
                title: "Framing the right problem is the only way to create the right solution",
                body: "Through mentoring sessions with dedicated industry mentors, our team was pushed to hone our problem and needs statement. ",
                keywords: ["Problem Statement","Needs Statement", "Value Proposition", "Human Factors",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/statements.png", caption: "A summary of the problem and needs statements, along with user needs." },
                ],
            },
            {
                title: "If you didn't document it, it didn't happen",
                body: "Documentation is key.",
                keywords: ["Requirement Traceability Matrix (RTM)", "Failure Mode and Effects Analysis (FMEA)", "Validation and Verifcation (V&V)", ],
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
        methods: [
            {
                title: "Operating Room (OR) Observations",
                body: "Identify technology-related clinical challenges and unmet user needs through clinical observations at Boston Medical Center (BMC) to understand the Voice of Customer (VOC) and select a project focus.",
                keywords: ["OR Protocols", "User Needs", "Voice of Customer", "Stakeholder Interviews"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/surgeries.png", caption: "The different types of orthopedic surgeries I observed." },

                ]
            },
            {
                title: "Problem Definition & Design Rationalization",
                body: "Create problem and needs statements with clearly defined user needs and device requirements. Support these statements by conducting storyboarding sessions, stakeholder analysis, human factors analysis, and value proposition",
                keywords: ["Storyboards", "Stakeholder Analysis", "Human Factors Analysis", "Value Proposition", "RTM"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/statements.png", caption: "A summary of the problem and needs statements, along with user needs." },


                ],
            },
            {
                title: "Prototyping and Testing (In Progress)",
                body: "Create Works-Like and Is-Like prototypes and assess them based on verification and validation protocols. This included mockup sessions, 3D modeling, machining processes, verification and validation testing, and failure modes and effects analysis (FMEA).",
                keywords: ["Prototyping", "3D Modeling", "Machining", "Validation and Verifcation", "FMEA",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png", caption: "" },

                ],
            },
            {
                title: "Manufacturing and Commercialization (In Progress)",
                body: "This phase is still in progress, but it will include developing the Design for Manufacturing (DFM) plan, Quality Management Systems (QMS), and a business model canvas.",
                keywords: ["DFM", "QMS", "Business Model", "Packaging", "FDA and Regulatory Pathway",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/aluminumTube.png", caption: "Overall progression of 3D models" },
                ],
            },
        ],
        responsibilities: [
            {
                title: "OR Observations",
                body: "I conducted 50+ hourse of OR observations at Boston Medical Center (BMC), recording detailed logs of procedures, opportunities for improvement, and interview notes.",
                keywords: ["OR Observations", "Stakeholder Interviews"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_01.png", caption: "Unfortunately, I can't show images of surgeries, but these are the different types of orthopedic surgeries I observed." },

                ]
            },
            {
                title: "Documentation Sections",
                body: "While all team members contributed to all design decisions and documentation sections, overall accountability for specific sections was divided among members. My sections included the 4 shown to the right.",
                keywords: ["Problem Statement", "Design Inputs and Outputs", "RTM", "DFM"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_02.png", caption: "'Clinical Challenges and User Needs', Device Requirements', 'Engineering Specifications', and 'Design for Manufacturing (DFM)'" },
                ],
            },
            {
                title: "Mockups and Prototyping",
                body: "I love building things with my hands, so I created the initial mockups and physical works-like and is-like prototypes, along with digital 3D models in OnShape.",
                keywords: ["3D Modeling", "3D Printing", "Manual Mill", "Cold Saw", "Finite Element Analysis (FEA)"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/responsibility_03.png", caption: "Progression of mockups and prototypes" },
                ],
            },
            {
                title: "Winch Design",
                body: "In addition to the overall structure of the device, I designed the custom winch mechanism that the user interacts with to apply a pulling force for skeletal traction while aligning with clinical requirements.",
                keywords: ["3D Modeling", "Torque Reduction (Worm Drive)", "Ratchet and Pawl", "Machining",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/winch.png", caption: "" },

                ],
            },
            
        ],
        results: [
            { src: import.meta.env.BASE_URL + "projects/traction/02_initialWorksLike.jpeg", caption: "The current initial works-like prototype" },

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
                title: "Storyboards",
                text: "An example of one of my storyboards for trigger finger release surgeries.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline02.png",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/traction/storyboard.jpeg", dim: "1x1"},
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
                title: "Advanced Works-Like/Is-Like Prototyping",
                text: "After team design reviews, I modeled the device in OnShape to conduct FEA, then built an aluminum prototype using machining equipment including the cold saw and manual mill.",
                image: import.meta.env.BASE_URL + "projects/traction/timeline06.jpeg",
            },

        ],
        videoId: "",
        pdfs: [
            { title: "Initial Proposals", src: import.meta.env.BASE_URL + "projects/traction/documents/ProblemSelectionPresentation.pdf" },
            { title: "Design Results", src: import.meta.env.BASE_URL + "projects/traction/documents/DesignResultsPresentation.pdf" },
            { title: "Initial Works-Like", src: import.meta.env.BASE_URL + "projects/traction/documents/InitialWorksLikeMEng.pdf"  },
            { title: "Advanced Works-Like", src: import.meta.env.BASE_URL + "projects/traction/documents/AdvancedWorksLikeMEng.pdf"  },
        ],
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
        start: "Jan 2026",
        end: "[May 2026]",
        active: true,
        type: "Product Realization Master's Course",
        teamsize: "4",
        teammembers: "Jos Moresi, Sam Eppley, William Castro",
        keywords: ["Manufacturing", "Mass Production", "Documentation", "Machining"],
        objective:
            "Build and prototype a small production system for a coffee press from concept to mass production plan, including documentation for all design development phases.",
        context: { src: import.meta.env.BASE_URL + "projects/pressmate/context.png", caption: "Product realization" },
        problem: { src: import.meta.env.BASE_URL + "projects/pressmate/problem.png", caption: "Problem"},
        outcome: { src: import.meta.env.BASE_URL + "projects/pressmate/outcome.png", caption: "Our project results"},
        lessons: [
            {
                title: "Measure thrice, cut once",
                body: "From my industry experience in construction and volunteer work with Habitat for Humanity building houses, I had already learned \"Measure twice, cut once\". However, with a limited budget, extremely tight schedule, and long lead time and machining times, it was essential that process plans were meticulously recorded, communicated to the whole team, and followed exactly.",
                keywords: ["Manufacturing Schedule","Detail Oriented", "Process Plans", "Standard Operating Procedures (SOPs)", "Communication", "Teamwork"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/lesson_01.png", caption: "“If there is any one secret of success, it lies in the ability to get the other person’s point of view and see things from that person’s angle as well as from your own” - Henry Ford" },
                ]
            },
            {
                title: "Framing the right problem is the only way to create the right solution",
                body: "Through mentoring sessions with dedicated industry mentors, our team was pushed to hone our problem and needs statement. ",
                keywords: ["Problem Statement","Needs Statement", "Value Proposition", "Human Factors",],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/statements.png", caption: "A summary of the problem and needs statements, along with user needs." },
                ],
            },
            {
                title: "If you didn't document it, it didn't happen",
                body: "Documentation is key.",
                keywords: ["Requirement Traceability Matrix (RTM)", "Failure Mode and Effects Analysis (FMEA)", "Validation and Verifcation (V&V)", ],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/traction/lesson_03.jpg", caption: "" },
                ],
            },
        ],
        context2:
            `The Product Realization Master's course at BU (ME537) focuses on the essential and challenging process of getting a design from the drawing board into the hands of the customer. 
            
            A semester long project to build and prototype a small production system includes hands-on experience covering topics such as Design for Manufacturing, validation testing, cash flow modeling, in-house vs outsourcing, setting up a factory, selecting supplier partners, distribution, and ongoing product support.
            
            By the end of the semester, each team will have documented, efficient and consistent production of the final 10 units and a mass production plan for 100,000 units/year.
            `,
        background: [
            {
                type: "header",
                content: "Project Requirements"
            },
            {
                type: "text",
                content:
                    `The product must meet the following project requirements:
                    `
            },
            {
                type: "list",
                name: "requirements",
                content:
                    [
                        "Consist of three (3) or more parts made from two (2) or more manufacturing processes",
                        "Require dimensional fit between parts",
                        "Require tool and/or fixture to make or assemble (ex. mold, machining tool, etc.)",
                        "Be small enough to keep parts for 10+ units in 1 x 1.5 x 2 ft container",
                        "<$10 per unit to product all mockups, models, and prototypes",
                        "Use at most one (1) purchased part",
                        "Cannot use additive manufacturing for final parts (patterns/fixtures ok)"
                    ]
            },
            {
                type: "header",
                content: "Coffee Presses"
            },
            {
                type: "text",
                content:
                    `I personally don't drink coffee, however, in order to design a coffee press I needed to do some research about brewing coffee and what makes a good cup of coffee.

                    For you non-coffee drinking comrades, coffee is "brewed" by combining ground coffee beans and hot water. After the grounds have been given time to release their flavor, they are filtered out creating the revered cup of coffee. The flavor and quality of the cup of coffee can vary based on bean quality, grind size, brewing method, and steep time. The PressMate coffee press uses a "French-press" brewing method, where hot water and grinds are combined, steeped, then separated using a filter that is pressed through the mixture.
                    `
            },
            {
                type: "image",
                src: import.meta.env.BASE_URL + "projects/pressmate/frenchpress.png",
                alt: "Steps for the French Press",
                caption: "Steps for brewing coffee with the French Press method. Source: https://voltagecoffee.com/how-to-french-press/",
                aspect: "16/9"
            },

        ],
        conclusion: [
            {
                type: "text",
                content:
                    `My team "Bob the Builders" present The PressMate.  `
            },
            {
                type: "image",
                src: import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
                alt: "Project final result",
                caption: "The current model for our single-serve coffee press -- PressMate",
                aspect: "16/9"
            },
            {
                type: "header",
                content: "Documents"
            },
            {
                type: "text",
                content:
                    `Throughout the life of the project, the following documents will be created:
                    `
            },
            {
                type: "list",
                name: "documents",
                content:
                    [
                        "DOC01 - Project Requirements",
                        "DOC02 - CAD Drawings",
                        "DOC03 - Enterprise Content Management (ECM)",
                        "DOC04 - Schedule",
                        "DOC05 - RASCI",
                        "DOC06 - Risk Management",
                        "DOC07 - Specifications Document",
                        "DOC08 - Bill of Materials (BOM)",
                        "DOC09 - Cost Model",
                        "DOC010 - Tooling",
                        "DOC011 - Quality Test Plan (QTP)",
                        "DOC012 - Design Failure Modes and Effects Analysis (DFMEA)",
                        "DOC013 - Process Plan",
                        "DOC014 - Control Plan",
                        "DOC015 - Standard Operating Procedures (SOP)",
                        "DOC016 - Packaging",
                        "DOC017 - Flexism",
                        "DOC018 - Cashflow",
                        "DOC019 - Apriori",
                    ]
            },
            {
                type: "text",
                content:
                    `Note on document ownership: All team members remained informed about each document. The Project Manager (PM) for each assignment rotated and therefore the name of the Document Approver rotated (and may not be mine). I will highlight my major contributions below but can speak to all aspects of the project.`
            },

        ],
        methods: [ //pressmate
            {
                title: "Project Proposal and Launch",
                body: "Propose a project focus, finalize the approach, refine product concept, and set up the project management infrastructure.",
                keywords: ["Elevator Pitches", "Enterprise Data/Content Management", "Schedule", "RASCI"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/productIdeas.png", caption: "The initial proposed ideas" },

                ],

            },
            {
                title: "Mockups and Prototyping",
                body: "Build one (1) prototype with non-production intent processes.",
                keywords: ["Mockups", "Product Concept"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/mockups.png", caption: "The initial mockups to test various functions and design concepts." },

                ],
            },
            {
                title: "Engineering Validation Testing (EVT)",
                body: "Build one (1) product with production intent and tooling plans.",
                keywords: ["Waterjet", "Lathe", "TIG Welding", "Wire EDM", "Sewing", "BOM", "Spec Document", "Quality Test Plan"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/EVTcomponents.jpeg", caption: "The final EVT prototype." },

                ],

            },
            {
                title: "Design Validation Testing (DVT)",
                body: "Build three (3) products with all production intent processes and test tooling and fixtures.",
                keywords: ["Process Plan", "Control Plan", "SOPs","Packaging"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/pressmate/DVTmethods.jpeg", caption: "" },

                ],
            },
            {
                title: "Production Validation Testing (PVT)",
                body: "Build ten (10) product will all production intent processes, fixtures, and tools.",
                keywords: [""],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/InProgress.png", caption: "" },

                ],
            },
            {
                title: "Mass Production (MP)",
                body: "Produce a mass production plan with forecast, packaging, cost down targets, and production plan for production of 100,000 units/year.",
                keywords: ["Mass Production"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/InProgress.png", caption: "" },

                ],
            },
        ],
        results: [
            { src: import.meta.env.BASE_URL + "projects/pressmate/DVT.jpeg", caption: "The current DVT prototype" },
            // { src: import.meta.env.BASE_URL + "projects/pressmate/DVTcomponents.jpeg", caption: "The current components of the DVT prototype" },
        ],
        timeline: [
            {
                title: "Project Launch",
                text: "I established folder structure, naming conventions, version control standards, change management, and team expectations. I also created automation scripts using Google Apps Script to streamline document formatting and assignment submission.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline01.png",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/pressmate/EDM.png", dim: "1x2"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/initialProposal.png", dim: "1x2"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/initialDwg.png", dim: "1x2"},
                ]
            },
            {
                title: "Mockups",
                text: "Mockups were created to test key functionalities. For example, a concern was the possibility of hot water shooting through the holes of the plunger onto the user when they filtered their coffee.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline02.png",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/pressmate/timelinemockups.png", dim: "2x1"},
                ]
            },
            {
                title: "Machining for EVT Prototype",
                text: "Processes included using the waterjet, wire EDM, manual lathe, CNC mill, and sewing machine",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline03.png",
                layout: "three1",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/pressmate/lathe.jpg", dim: "4x3"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/EVT.jpeg", dim: "4x3"},
                    {src: import.meta.env.BASE_URL + "projects/pressmate/EVTcomponents.jpeg", dim: "4x3"},
                ]
            },
            {
                title: "EVT Prototype",
                text: "After long hours machining our product, this is the EVT prototype and tooling we were able to produce.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline04.png",
            },
            {
                title: "Manufacturing for DVT Prototype",
                text: "My main responsibilities included cutting steel tube stock to length with the Wire EDM, creating the protective sleeves (coozies), assisting with TIG welding, and adding the silicone lip to the plunger.",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline03.png",
                
            },
            {
                title: "DVT Prototypes",
                text: "The DVT prototypes",
                image: import.meta.env.BASE_URL + "projects/pressmate/timeline04.png",
                
            },
            
        ],
        videoId: "",
        pdfs: [
            { title: "Initial Proposals", src: import.meta.env.BASE_URL + "projects/pressmate/documents/01ProductPitches.pdf" },
            { title: "Product Proposal", src: import.meta.env.BASE_URL + "projects/pressmate/documents/02ProductProposal.pdf" },
            { title: "Concept Refinement", src: import.meta.env.BASE_URL + "projects/pressmate/documents/03MockupIterations.pdf" },
            { title: "EVT Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/04EVTReport.pdf" },
            { title: "DVT Report", src: import.meta.env.BASE_URL + "projects/pressmate/documents/05DVTReport.pdf" },
        ],
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
        start: "May 2025",
        end: "Sept 2025",
        active: false,
        type: "Research Assistant",
        teamsize: "2-3",
        teammembers: "Sung Ahn, [Elizabeth Wang]",
        keywords: ["Hardware Software Integration", "EEG", "Motion Capture", "Eye Tracking", "IMUs", "Arduino"],
        objective:
            `Improve the current hardware-software integration system of the Stangl Lab at BU to ensure sub-millisecond sychronization precision between the multimodal data.`,
        context:
            `The Stangl Lab conducts human clinical studies for studying the neural basis of human cognition and behavior using multimodal neuroimaging techniques. 

            The ability to record a person’s brain activity in real-world situations is relatively new, so there are no ready-made systems available to record experimental data. Therefore, the Stangl Lab developed a custom mobile platform that allows for data synchronization between a computer running the experimental protocol and sensors the participant is wearing. 

            In order to fully understand the system, I was also involved in conducting experiment protocols with the team.
            `,
        background: [
            {
                type: "header",
                content: "Research Goals"
            },
            {
                type: "text",
                content:
                    `The Stangl Lab conducts human clinical studies for studying the neural basis of human cognition and behavior using multimodal neuroimaging techniques. 

                    Studying freely moving participants in complex scenarios and real-world settings requires multi-dimensional recordings of numerous variables, in order to be able to include these variables in the study design and analyze their impact on human cognition and behavior.

                    The Stangl Lab works with a rare group of individuals who have so-called "closed-loop" neuromodulation devices permanently implanted in their brain, which can record and stimulate brain activity through electrodes implanted in deep brain regions. These signals, along with motion tracking systems based on infrared cameras or inertial measurement units, audio and video recordings, and mobile eye-tracking system are used during freely-moving spatial navigation and memory tasks. 
                    
                    More information about the Stangl Lab can be found at 
                    `
            },
            {
                type: "url",
                url: "https://www.stangl-lab.com",
                urlText: null
            },
            {
                type: "header",
                content: "System Overview"
            },
            {
                type: "text",
                content:
                    `The system consists of many components that must communicate with each other in real time. Components include:
                    `
            },
            {
                type: "list",
                name: "stanglcomponents",
                content:
                    [
                        "Unity computer - the experimental protocol controller",
                        "Responsive Neurostimulation (RNS) System - the brain implant and data collection accessories",
                        "Vicon Optical Motion Capture (MoCap) - the motion capture camera system",
                        "Neon Pupil Glasses - the eye tracking system",
                        "Arduino Uno - a microcontroller for the MoCap connection",
                        "Raspbery Pi 4B - a portable microprocessor",
                        "Functional Near-Infrared Spectroscopy (FNIRS) System - a way to measure brain activity through tracking blood hemodynamics of the cerebral cortex"
                    ]
            },
            {
                type: "text",
                content:
                    `Since computer timestamps and device communication have unavoidable delays, data synchronization is done through sending an electrical pulse, magnetic pulse, or serial communication (message) to each of the devices at specific intervals, or important moments during the experiment. These pulses are recorded within the each sensors’ data to allow for alignment of data during analysis. A schematic of the connections is shown below.
                    `
            },

        ],
        methods: [
            {
                title: "Experiment Protocols",
                body: "Conduct spatial navigation and memory research protocols with freely moving human participants, collecting data through a RaspberyPi from systems for motion capture, eye tracking, and brain activity (EEG).",
                keywords: ["Vicon Motion Capture", "Eye Tracking", "RaspberryPi", "Responsive Neurostimulation (RNS)"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/experiment.png", caption: "The RNS device implant and setup with experiment equipment" },

                ],
            },
            {
                title: "Eye Tracking Validation",
                body: "Verify the time delay between the RaspberyPi and Neon glasses has a linear drift less than 10ms, ensuring eye movements can be aligned with other data streams.",
                keywords: ["Neon Pupil Labs Glasses", "Time Synchronization"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/neonglasses.png", caption: "Neon Pupil Labs eye tracking glasses worn by the participant" },

                ],
            },
            {
                title: "Data Synchronization",
                body: "Implement an Lab Streaming Layer (LSL) workflow to provide more consistent, easily analyzable data and remove the need to manually align data from the timestamp drift.",
                keywords: ["Python", "C++","LSL", "Sub-millisecond Time Sychronization", "Serial Communication"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/lsl.png", caption: "LSL workflow to synchronize data streams" },
                ],
            },
            {
                title: "Inertial Measurement Unit (IMU) Integration",
                body: "Compare two inertial measurement unit (IMU) systems to report usability and integration with the current system. Implement the Boas Lab IMUs into the lab system.",
                keywords: ["IMU", "GPIO", "UART"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/stangl/imu.png", caption: "An IMU is a sensor that measures an object's angular rate using accelerometers, gyroscopes, and magnetometers." },

                ],
                
            },
        ],
        results: `I was able to quickly learn the experiment protocols and underlying code to start integrating a Lab Streaming Layer (LSL) workflow to the existing system. 
        
        I also created a 30-page report to document my process, results, lessons learned, and future directions to ensure smooth knowledge transfer to technical and non-technical audiences. `,
        timeline: [
            {
                title: "Experimental Protocol Assistance",
                text: "In order to understand the experiment protocol workflow and requirements, I assisted in conducting research experiments for spatial navigation and memory tasks with freely-moving human participants.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline01.png",
            },
            {
                title: "Eye Tracking Time Sychronization",
                text: "Time delays were determined by analyzing the eye tracking recording to find the exact timestamp the LED turned on. This was compared to known timestamps of the LED trigger from the RaspberryPi.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline02.png",
            },
            {
                title: "Eye Tracking Results",
                text: "The LED-RPi alignment had a 10-20ms delay, however, the environment/scene camera video had a frame rate of 30Hz, contributing to an uncertainty of 33ms. With the LED in the scene camera (left), the timestamp diﬀerence was not linear and too large of a diﬀerence because of the frame rate. The eye camera (right) was used instead becuase of its 200Hz frame rate.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline03.png",
            },
            {
                title: "Lab Streaming Layer (LSL)",
                text: "I learned and started implementing an LSL workflow. Lab Streaming Layer (LSL) is a widely used system for the unified collection of measurement time series in research experiments. It handles both the networking, time-synchronization, (near-) real-time access as well as optionally the centralized collection, viewing and disk recording of the data.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline04.png",
            },
            {
                title: "Boas Lab IMU Crash Course",
                text: "The Boas Lab at BU had created custom inertial measurement units (IMUs) that hadn’t been tested yet. I met with creator of the IMUs Professor Eric Hazen for a crash course on the technical details the devices, after which I created a guide for future reference.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline05.png",
            },
            {
                title: "Documentation",
                text: "I created a 30-page report to document my process, results, lessons learned, and future directions to ensure smooth knowledge transfer to technical and non-technical audiences.",
                image: import.meta.env.BASE_URL + "projects/stangl/timeline06.png",
            },

        ],
        videoId: "",
        pdfs: [
            { title: "Progress Update (Informal)", src: import.meta.env.BASE_URL + "projects/stangl/documents/20250718_LA_WeeklyMtgPresentation.pdf" },

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
        objective: `Coordinate the virtual construction of mechanical systems to ensure design documents were feasible i.e. identify virtual problems before they became real-world problems. 
        
        Experience the process with the intention of developing a web application for future Virtual Design and Construction (VDC) Coordination projects.`,
        methods: [
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
        methods: [
            {
                title: "Problem Identification",
                body: "Identify a medical challenge that can be solved by building a robotic platform",
                keywords: ["Significance", "Innovation", "Endoscope Stabilization"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/colonoscopy.jpg", caption: "MethodImage" },

                ]
            },
            {
                title: "Build a Robotic System",
                body: "Build a full robotic system using actuation and sensing components, robotic mechanisms, and control and software components",
                keywords: ["Arduino", "Pneumatic Actuation", "Pressure Sensing"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/roboticsystem.png", caption: "MethodImage" },

                ]
            },
            {
                title: "Validate the Robotic System",
                body: "Perform testing with the NASA Task Load Protocol to support device functionality and usability.",
                keywords: ["NASA Task Load", "Testing", "MATLAB Image Detection"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/endoscope/TLX.png", caption: "MethodImage" },

                ]
            },
        ],
        results: [
            { src: import.meta.env.BASE_URL + "projects/endoscope/result.png", caption: "The final device prototype, which was accompanied by an NIH-style project proposal outlining significance, innovation, and approach." },

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
    },
    { // softwareEngineer
        slug: "software-engineer",
        title: "Software Engineer",
        summary: "Develop web applications for project management",
        thumbnail: import.meta.env.BASE_URL + "projects/softwareEngineer/01_thumbnail.png",
        backgroundImg: import.meta.env.BASE_URL + "projects/softwareEngineer/backgroundImg.png",
        heroBgImg: import.meta.env.BASE_URL + "projects/softwareEngineer/heroBackground.jpg",
        theme: "",
        showcased: false,
        start: "Aug 2021",
        end: "June 2024",
        active: false,
        type: "Lead Software Engineer",
        teamsize: "1-5",
        keywords: ["KPI Dashboards", "UI", "Full-Stack", "PHP", "Python", "Javascript", "Unity"],
        objective: `Develop custom web applications for my team to help them better visualize and manage company and project specific resources.`,
        methods: [
            {
                title: "Full-Stack Software Developent",
                body: "MethodBody",
                keywords: ["MethodKeywords"],
                images: [
                    { src: import.meta.env.BASE_URL + "projects/project/filename.png", caption: "MethodImage" },

                ]
            },
        ],
        results: `Throughout my 3 years I developed various web applications that have been deployed to numerous departments and project job sites and are still used today.`,
        timeline: [
            {
                title: "PhotoTitle",
                text: "PhotoText",
                image: import.meta.env.BASE_URL + "projects/softwareEngineer/timeline01.png",
                layout: "",
                images: [
                    {src: import.meta.env.BASE_URL + "projects/softwareEngineer/filename.jpeg", dim: "h-48"},
                ]
            },

        ],
        videoId: "",
        pdfs: [
            { title: "PdfTabTitle", src: import.meta.env.BASE_URL + "projects/traction/documents/ProblemSelectionPresentation.pdf" },

        ],
    },
    {
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
    {
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
    {
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
