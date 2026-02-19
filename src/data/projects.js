export const projects = [
    {
    slug: "masters-project",
    title: "Skeletal Traction for Femoral Shaft Fractures",
    summary: "A hands-on experience developing an orthopedic medical device from concept to manufacturing",
    thumbnail: import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png",
    // images: [
    //     {
    //         key: "01_thumbnail",
    //         src: import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png",
    //         alt: "Project Thumbnail",
    //         caption: "The final project prototype"
    //     },
    //     {
    //         key: "02_traction",
    //         src: import.meta.env.BASE_URL + "projects/traction/02_traction.png",
    //         alt: "Current traction",
    //         caption: "Current traction"
    //     },
    //     {
    //         key: "02_traction2",
    //         src: import.meta.env.BASE_URL + "projects/traction/02_traction2.png",
    //         alt: "Current traction",
    //         caption: "Current traction"
    //     }
    // ],
    images: [
        import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png",
        import.meta.env.BASE_URL + "projects/traction/02_traction.png",
        import.meta.env.BASE_URL + "projects/traction/02_traction2.png",
    ],
    showcased: true,
    start: "Sept 2025",
    end : "[May 2026]",
    type: "Master's Program",
    teamsize: "4",
    keywords: ["Product Development", "Clinical", "OR observations", "FMEA", "User Needs", "Documentation", "Validation and Verifcation","3D Modeling"],
    context: 
        `Through the Biomedical Engineering Master of Engineering program at Boston University, I am gaining hands-on experience in medical device product design and development. 
        
        The one-year program consists of a semester of operating room (OR) observations at Boston Medical Center (BMC) to identify unmet user needs and translate them into product design requirements and specifications. The second semester (current) will involve designing, building, and testing prototypes, verifying design inputs are met and validating that user needs are met. `,
    goal: [
        {
            type: "text",
            content: 
                `As part of the Orthopedics team, my team and I decided to focus on improving skeletal traction for femoral shaft fractures. 
                
                Skeletal traction is an important damage control procedure used as temporary treatment until definitive treatment can be implemented. The goal is to counteract the shortening effects of muscle contractions by applying a pulling force to bring the femur back to length. The current standard of care includes a specialized traction bed and a system of pulleys and weights to apply the force (example shown below).`
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/traction/02_traction.png",
            alt: "Standard Skeletal Traction Frame",
            caption: "One of the standard skeletal traction setups",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                `However, insufficient traction is common due to improperly hung weights, insufficient countertraction resulting in the patient sliding down the bed, and the need to remove traction for scans because the traction apparatus is secured to the hospital bed.`
        },
    ],
    conclusion: [
        {
            type: "text",
            content: 
                `Our solution is a self-contained, portable, traction frame.`
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/traction/01_thumbnail.png",
            alt: "Project final result",
            caption: "The final prototype for self-contained, portable skeletal traction",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },

    ],
    responsibilities: [
        "Conducted 50+ hours of clinical observations to interview clinicians and identify unmet user needs",
        "Translated user needs into design inputs and outputs, recording them in a Requirements Traceability Matrix (RTM)",
        "Design, model (OnShape), and build prototypes using various electric saws, drill press, and NC Mill",
        "Design, document, and conduct validation and verification protocols",
        "Produce design for manufacturing (DFM) plan and documentation"
    ],
    challenges: [
        {
            problem: "Identifying unmet user needs that are achievable given time and budget restrictions", 
            details: "The MEng program provides the unique opportunity to observe orthopedic surgeries for a semester. However, this only leaves one semester -- 4 months -- to learn about design and development processes and then design, prototype, and test our own medical device",
            solution: "Through over 50 hours of OR observations and medical staff interviews, "
        },
        {
            problem: "Phrasing need statements, design requirements, and design specifications according to medical device standards", 
            details: " ",
            // solution: [
            //     {
            //         type: "text",
            //         content: `I consulted with professors, industry mentors, and clinical mentors in design reviews to reach a clearly defined needs statement. `
            //     },
            //     {
            //         type: "comparison",
            //         item1: [{
            //             type: "text",
            //             content: "A way to stabilize high-impact trauma femur fractures in young patients that doesn’t require direct force on healthy bone."
            //         }],
            //         item2: [{
            //             type: "text",
            //             content: "Orthopedic surgeons need a way to apply skeletal traction to adult patients with femoral shaft fractures that maintains correct femur length throughout treatment despite changes in patient position to prevent femur displacement that can cause further damage."
            //         }]
            //     }
            // ]
            solution: `I consulted with professors, industry mentors, and clinical mentors in design reviews to reach a clearly defined needs statement.
            
            The needs statement started as: A way to stabilize high-impact trauma femur fractures in young patients that doesn’t require direct force on healthy bone.
            
            And it was finalized as: Orthopedic surgeons need a way to apply skeletal traction to adult patients with femoral shaft fractures that maintains correct femur length throughout treatment despite changes in patient position to prevent femur displacement that can cause further damage.`
        },
    ],
    documents: [
        {
            title: "Requirements Traceability Matrix (RTM)",
            document: import.meta.env.BASE_URL + "projects/traction/RTM.pdf"
        }
    ]
    },
    {
    slug: "stangl-lab",
    title: "Software Hardware Integration for Clinical Neurophysiology Research",
    summary: "Integrating data collection hardware with software workflows to align multimodal data with millisecond precision",
    thumbnail: import.meta.env.BASE_URL + "projects/stangl/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/stangl/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        }
    ],
    showcased: true,
    start: "May 2025",
    end : "Sept 2025",
    type: "Research Assistant",
    teamsize: "2-5",
    keywords: ["Hardware Software Integration", "EEG", "Motion Capture", "Eye Tracking", "IMUs", "Arduino"],
    context: 
        `Develop a medical device from user need identification through __`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                `More information about the Stangl Lab can be found at https://www.stangl-lab.com`
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: [
        {
            title: "Offboarding Report",
            document: import.meta.env.BASE_URL + "projects/stangl/offboarding_report.pdf"
        }
    ]
    },
    {
    slug: "coffee-press",
    title: "The PressMate Coffee Press",
    summary: "A full cycle product realization project to develop a mass production plan for a coffee press",
    thumbnail: import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        }
    ],
    showcased: true,
    start: "Jan 2026",
    end : "May 2026",
    type: "Product Realization Master's Course",
    teamsize: "4",
    keywords: ["Manufacturing", "EDM", "EVT", "DVT", "Documentation", "Machining"],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: [
        {
            title: "Enterprise Data Management (EDM) Plan",
            document: import.meta.env.BASE_URL + "projects/pressmate/EDM.pdf"
        }
    ]
    },
    {
    slug: "endoscope-stabilization",
    title: "Endoscope Stabilization Sleeve",
    summary: "A mock NIH grant application proposal for an endoscope sleeve that provides distal tip stabilization",
    thumbnail: import.meta.env.BASE_URL + "projects/endoscope/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/endoscope/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        }
    ],
    showcased: true,
    start: "Jan 2024",
    end : "May 2025",
    type: "Medical Robotics Master's Course",
    teamsize: "4",
    keywords: ["NIH grant materials", "Pneumatic Actuation", "Arduino"],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: [
        {
            title: "Mock NIH Grant Proposal",
            document: import.meta.env.BASE_URL + "projects/endoscope/mock_grant_proposal.pdf"
        }
    ]
    },
    {
    slug: "vdc-engineer",
    title: "Virtual Design and Construction (VDC) Maker Space Interior Fit-Out",
    summary: "A project planning job for the interior fit-out of a MakerSpace lab, including HVAC, plumbing, and electrical systems",
    thumbnail: import.meta.env.BASE_URL + "projects/vdcEngineer/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/vdcEngineer/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
        {
            src: import.meta.env.BASE_URL + "projects/vdcEngineer/02_showcase.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
    ],
    showcased: true,
    start: "Oct 2023",
    end : "February 2024",
    type: "Industry",
    teamsize: "5-10",
    keywords: ["Project Management", "HVAC Systems", "Communication", "Detail-oriented", "Documentation", "Cross-functional Teamwork"],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: `
             cost, schedule, constructability, and design intent.
                `
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: []
    },
    {
    slug: "software-engineer",
    title: "Software Engineer",
    summary: "Develop web applications for project management",
    thumbnail: import.meta.env.BASE_URL + "projects/softwareEngineer/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/softwareEngineer/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
        {
            src: import.meta.env.BASE_URL + "projects/softwareEngineer/02_images.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
    ],
    showcased: false,
    start: "Aug 2021",
    end : "June 2024",
    type: "Lead Software Engineer",
    teamsize: "1-5",
    keywords: ["KPI Dashboards", "UI", "Full-Stack", "PHP", "Python", "Javascript", "Unity"],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: []
    },
    {
    slug: "truss",
    title: "Acrylic Truss Design",
    summary: "Design a simple truss with given requirements and calculate member loads, critical load, etc.",
    thumbnail: import.meta.env.BASE_URL + "projects/truss/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/truss/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
        {
            src: import.meta.env.BASE_URL + "projects/truss/02_showcase.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
    ],
    showcased: false,
    start: "Sept 2024",
    end : "Dec 2024",
    type: "Static Mechanics Course Project",
    teamsize: "4",
    keywords: ["MATLAB", "Simulation", "Force Analysis"],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: [
        {
            title: "Final Report",
            document: import.meta.env.BASE_URL + "projects/truss/final_report.pdf"
        }
    ]
    },
    {
    slug: "dysmenorrhea",
    title: "Mock Proposal for Dysmenorrhea Research",
    summary: "Summary",
    thumbnail: import.meta.env.BASE_URL + "projects/dysmenorrhea/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/dysmenorrhea/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
        {
            src: import.meta.env.BASE_URL + "projects/dysmenorrhea/02_showcase.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
    ],
    showcased: false,
    start: "September 2025",
    end : "December 2025",
    type: "Engineering Women's Health Course Project",
    teamsize: "2",
    keywords: ["Keywords",],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: [
        {
            title: "Title",
            document: import.meta.env.BASE_URL + "projects/[project]]/[doctile].pdf"
        }
    ]
    },
    {
    slug: "slug",
    title: "Title",
    summary: "Summary",
    thumbnail: import.meta.env.BASE_URL + "projects/[project]/01_thumbnail.png",
    images: [
        {
            src: import.meta.env.BASE_URL + "projects/[project]/01_thumbnail.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
        {
            src: import.meta.env.BASE_URL + "projects/[project]/02_showcase.png",
            alt: "Project Thumbnail",
            caption: "The final project prototype"
        },
    ],
    showcased: false,
    start: "month 20yy",
    end : "month 20yy",
    type: "Industry",
    teamsize: "4",
    keywords: ["Keywords",],
    context: 
        `Context`,
    goal: [
        {
            type: "text",
            content: 
                ``
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/[project]/[image].png",
            alt: "Alt",
            caption: "Caption",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                ``
        },
    ],
    conclusion: [

    ],
    responsibilities: [
        "Design",
        "Test",
    ],
    challenges: [
        {
            problem: "", 
            details: "",
            solution: ""
        },
    ],
    documents: [
        {
            title: "Title",
            document: import.meta.env.BASE_URL + "projects/[project]]/[doctile].pdf"
        }
    ]
    },
  
  
  
]
