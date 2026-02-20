export const projects = [
    /** Data Object Structure
        {
            slug: "masters-project",
            title: "Title",
            summary: "Project summary",
            thumbnail: import.meta.env.BASE_URL + "projects/[project]/[filename]",
            images: [
                import.meta.env.BASE_URL + "projects/[project]/[filename]",
                import.meta.env.BASE_URL + "projects/[project]/[filename]",
            ],
            showcased: false,
            start: "Sept 2025",
            end : "[May 2026]",
            active: false,
            type: "Master's Program",
            teamsize: "4",
            keywords: ["Product Development", ...],
            context: 
                `Context content `,
            goal: [
                {
                    type: "text",
                    content: 
                        `Goal content`
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/[project]/[filename]",
                    alt: "Alt text",
                    caption: "Caption",
                    aspect: "16/9"
                },
            ],
            conclusion: [ // summary of conclusion/solution/results
                {
                    type: "text",
                    content: 
                        ``
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/[project]/[filename]",
                    alt: "Alt text",
                    caption: "Caption",
                    aspect: "16/9"
                },
            ],
            components: [
                {
                    title: "Method title",
                    objective: "",
                    methods: [
                        {
                            type: "text",
                            content: 
                                ``
                        },
                    ],
                    results: [
                        {
                            type: "text",
                            content: 
                                ``
                        },
                    ],
                    documents: [
                        {
                            title: "DocTitle",
                            document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                        },
                    ],
                },
                ...
            ],
            
        }
    */
    { // traction
    slug: "masters-project",
    title: "Skeletal Traction for Femoral Shaft Fractures",
    summary: "A hands-on experience developing an orthopedic medical device through the full product lifecycle",
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
    active: true,
    type: "Master's Program",
    teamsize: "4",
    keywords: ["Product Development", "OR/Clinical observations", "User Needs", "Documentation", "RTM", "Value Proposition", "Human Factors Analysis", "FMEA", "Prototyping", "Testing", "Validation and Verifcation","3D Modeling", "Design for Manufacturing","FDA and Regulatory Pathway"],
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
    components: [
        {
            title: "Discovery: Problem identification and design requirements",
            objective: "The goal of the discovery phase was to identify technology-related clinical challenges and unmet user needs, leading to the selection of a clearly defined project focus and user needs.",
            methods: [
                {
                    type: "text",
                    content: 
                        `I conducted 50+ hours of clinical observations throughout a semester, documenting workflow, technology use, and potential problems or opportunities for improvement. Direct observation was critical because as Hentry Ford said,`
                },
                {
                    type: "quote",
                    by: "Henry Ford",
                    includeBy: false,
                    content: 
                        `If I asked my customers what they wanted, they would have said a faster horse.`
                },
                {
                    type: "text",
                    content: 
                        `Similarly, as it relates to medical device development, `
                },
                {
                    type: "quote",
                    by: "Thomas Fogarty, MD; Founder, Fogarty Institute for Innovation",
                    includeBy: true,
                    content: 
                        `When you talk to physicians youʼve got to learn the difference between what they say, what they want, what theyʼll pay for, and what they actually do.`
                },
                {
                    type: "text",
                    content: 
                        `With this in mind, I conducted interviews with clinical staff to understand the Voice of Costumer, identifying pain points and root causes. My team and I also consulted with dedicated industry mentors, who offered insight and challenged us as they would in industry settings.`
                },


            ],
            results: [
                {
                    type: "text",
                    content: 
                        `With a combined total of 200 observation hours by the team, we identified an unmet need for skeletal traction. The problem and needs statement, along with clinical needs and device requirements for a minimum viable product are outlined below:
                        `
                },
            ],
            documents: [
                {
                    title: "User Needs",
                    document: import.meta.env.BASE_URL + "projects/traction/RTM.pdf"
                },

            ]

        },
        {
            title: "Design: Solution strategy",
            objective: "The goal of the design phase was to propose an optimized solution strategy by exploring and comparing alternative design strategies in the context of Competitive Analysis, IP strategies, preliminary market trends, and economic variables.",
            methods: [
                {
                    type: "bullet",
                    title: "Human Factors Analysis",
                    content: 
                        `Human Factors Analysis`
                },
                {
                    type: "bullet",
                    title: "Value Proposition",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    title: "Design Strategy Development",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    title: "Market Research",
                    content: 
                        ``
                },

            ],
            results: [
                {
                    type: "text",
                    content: 
                        `Translated user needs into design inputs and outputs, recording them in a Requirements Traceability Matrix (RTM)`
                },
            ],
            documents: [
                {
                    title: "Requirements Traceability Matrix (RTM)",
                    document: import.meta.env.BASE_URL + "projects/traction/RTM.pdf"
                },
            ] 
        },
        {
            title: "Development: Specifications and Design Realization",
            objective: "",
            methods: [
                {
                    type: "bullet",
                    title: "Requirements Traceability Matrix (RTM)",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    title: "Prototyping",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    title: "Verification and Validation Testing",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    title: "Failure Modes and Effects Analysis (FMEA)",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    title: "Design for Manufacturing (DFM)",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
        {
            title: "Deployment: Business model and IP feasibility",
            objective: "The goal of the deployment phase is to develop a full business model canvas for our device. The business model analysis will also include evaluating reimbursement and intellectual property feasibility, packaging, labeling, and sterilization considerations.",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ],
    },
    { // pressmate
    slug: "coffee-press",
    title: "The PressMate Coffee Press",
    summary: "A full cycle product realization project to develop a mass production plan for a coffee press",
    thumbnail: import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
    ],
    showcased: true,
    start: "Jan 2026",
    end : "May 2026",
    active: false,
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
    components: [
        {
            title: "Project Proposal",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
        {
            title: "Concept",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
        {
            title: "Engineering Validation Testing",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
        {
            title: "Design Validation Testing",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
        {
            title: "Production Validation Testing",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
        {
            title: "Mass Production",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    { // stangl
    slug: "stangl-lab",
    title: "Software Hardware Integration for Clinical Neurophysiology Research",
    summary: "Integrating data collection hardware with software workflows to align multimodal data with millisecond precision",
    thumbnail: import.meta.env.BASE_URL + "projects/stangl/01_thumbnail.png",
    images: [
                import.meta.env.BASE_URL + "projects/stangl/01_thumbnail.png",
            ],
    showcased: true,
    start: "May 2025",
    end : "Sept 2025",
    active: false,
    type: "Research Assistant",
    teamsize: "2-5",
    keywords: ["Hardware Software Integration", "EEG", "Motion Capture", "Eye Tracking", "IMUs", "Arduino"],
    context: 
        `The Stangl Lab conducts human clinical studies for studying the neural basis of human cognition and behavior, using multimodal neuroimaging techniques. 
        
        More details can be found at {<a href="https://www.linkedin.com/in/li-arditi/">https://www.linkedin.com/in/li-arditi/</a>}`,
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
    components: [
        {
            title: "Unity",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    { // endoscope
    slug: "endoscope-stabilization",
    title: "Endoscope Stabilization Sleeve",
    summary: "A mock NIH grant application proposal for an endoscope sleeve that provides distal tip stabilization",
    thumbnail: import.meta.env.BASE_URL + "projects/endoscope/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/endoscope/01_thumbnail.png",
    ],
    showcased: true,
    start: "Jan 2024",
    end : "May 2025",
    active: false,
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
    components: [
        {
            title: "Pneumatic Actuation",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    {
    slug: "vdc-engineer",
    title: "Virtual Design and Construction (VDC) Maker Space Interior Fit-Out",
    summary: "A project planning job for the interior fit-out of a MakerSpace lab, including HVAC, plumbing, and electrical systems",
    thumbnail: import.meta.env.BASE_URL + "projects/vdcEngineer/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/vdcEngineer/01_thumbnail.png",
        import.meta.env.BASE_URL + "projects/vdcEngineer/02_showcase.png",
    ],
    showcased: true,
    start: "Oct 2023",
    end : "February 2024",
    active: false,
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
    components: [
        {
            title: "Contract and Document Standards",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    {
    slug: "software-engineer",
    title: "Software Engineer",
    summary: "Develop web applications for project management",
    thumbnail: import.meta.env.BASE_URL + "projects/softwareEngineer/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/softwareEngineer/01_thumbnail.png",
        import.meta.env.BASE_URL + "projects/softwareEngineer/02_images.png",
    ],
    showcased: false,
    start: "Aug 2021",
    end : "June 2024",
    active: false,
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
    components: [
        {
            title: "Full-Stack Software Developent",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    {
    slug: "truss",
    title: "Acrylic Truss Design",
    summary: "Design a simple truss with given requirements and calculate member loads, critical load, etc.",
    thumbnail: import.meta.env.BASE_URL + "projects/truss/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/truss/01_thumbnail.png",
        import.meta.env.BASE_URL + "projects/truss/02_showcase.png",
    ],
    showcased: false,
    start: "Sept 2024",
    end : "Dec 2024",
    active: false,
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
    components: [
        {
            title: "MATLAB Simulations",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    {
    slug: "dysmenorrhea",
    title: "Mock Proposal for Dysmenorrhea Research",
    summary: "Summary",
    thumbnail: import.meta.env.BASE_URL + "projects/dysmenorrhea/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/dysmenorrhea/01_thumbnail.png",
        import.meta.env.BASE_URL + "projects/dysmenorrhea/02_showcase.png",
    ],
    showcased: false,
    start: "September 2025",
    end : "December 2025",
    active: false,
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
    components: [
        {
            title: "Research Methods",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
    {
    slug: "slug",
    title: "Title",
    summary: "Summary",
    thumbnail: import.meta.env.BASE_URL + "projects/[project]/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/[project]/01_thumbnail.png",
        import.meta.env.BASE_URL + "projects/[project]/02_showcase.png",
    ],
    showcased: false,
    start: "month 20yy",
    end : "month 20yy",
    active: false,
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
    components: [
        {
            title: "Component Title",
            objective: "",
            methods: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
            documents: [
                {
                    title: "DocTitle",
                    document: import.meta.env.BASE_URL + "projects/[project]/[filename]"
                },
            ],
        },
    ]
    },
  
  
  
]
