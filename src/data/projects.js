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
            background: [
                {
                    type: "text",
                    content: 
                        `background content`
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
                    subtitle: "",
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
        import.meta.env.BASE_URL + "projects/traction/02_initialWorksLike.jpeg",
        import.meta.env.BASE_URL + "projects/traction/03_currentTraction.jpeg",
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
    background: [
        {
            type: "text",
            content: 
                `As part of the Orthopedics team, my team and I decided to focus on improving skeletal traction for femoral shaft fractures. 
                
                Skeletal traction is an important damage control procedure used as temporary treatment until definitive treatment can be implemented. The goal is to counteract the shortening effects of muscle contractions by applying a pulling force to bring the femur back to length. The current standard of care includes a specialized traction bed and a system of pulleys and weights to apply the force (example shown below).`
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/traction/03_currentTraction.png",
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
            title: "DISCOVERY:",
            subtitle: "Unmet user needs, stakeholder analysis, and value proposition",
            objective: "Identify technology-related clinical challenges and unmet user needs to select a project focus and clearly defined user needs, supported by stakeholder analysis and a value proposition.",
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Clinical Observations",
                    content: 
                        `Conduct clinical observations at Boston Medical Center (BMC) with the support of a clinical advisor. Observe interactions, technology use, and workflows, identifying potential problems or opportunities for improvement that can be translated into unmet user needs.`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Stakeholder Analysis",
                    content: 
                        `Understand the process and identify categories of stakeholders and their interests including the initiator, influencer, gatekeeper, decider, purchaser, user, and saboteur. `
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Voice of Customer (VOC)",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Value Proposition and Customer Segmentation",
                    content: 
                        `Create a Value Proposition Canvas to map the customers' jobs, pains, and gains to our product. Identify who the customer is and what they need to accomplish to construct a value proposition that demonstrates what our product can offer and how it is better (or different!)`
                },
                


            ],
            results: [
                {
                    type: "text",
                    content: 
                        `I conducted 50+ hours of clinical observations throughout a semester, demonstrating comfort with operating room (OR) protocols and confidence in talking to surgeons.  
                        
                        Direct observation was critical because as Hentry Ford said,`
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
                        `However, challenges arose because as it relates to medical device development, `
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
                        `With this in mind, I recorded detailed notes and conducted interviews with diverse medical stakeholders (surgeons, nurses, residents, and device representatives) to understand the Voice of Costumer, identifying pain points and root causes. My team and I also consulted with dedicated industry mentors, who offered insight and challenged us as they would in industry settings.
                        
                        With a combined total of 200 observation hours by the team, the problem and needs statement, along with clinical needs and device requirements for a minimum viable product are outlined below:
                        `
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/discoveryResults.png",
                    alt: "Problem and needs statement; clinical requirements",
                    caption: "",
                    aspect: "16/9"
                },
                {
                    type: "text",
                    content: 
                        `Stakeholder analysis and value proposition are linked below in Relevant Documents.
                        `
                },
            ],
            documents: [
                {
                    title: "Stakeholder Analysis",
                    document: import.meta.env.BASE_URL + "projects/traction/RTM.pdf"
                },

            ]

        },
        {
            title: "DESIGN:",
            subtitle: "Design Strategy Development",
            objective: "Propose an optimized solution strategy by exploring and comparing alternative design strategies in the context of Competitive Analysis, IP strategies, preliminary market trends, and economic variables.",
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Idea Generation",
                    content: 
                        `Mophological Analysis and SCAMPER design alternatives techniques were conducted to transition from identifying problems into exploring solutions for users.`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Design Requirements",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Human Factors Analysis",
                    content: 
                        `Usability and human factors (HF) analysis was conducted to consider device users, use environments, and user interfaces according to FDA regulations`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Market Research",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Agile Workflow",
                    content: 
                        ``
                },
                

            ],
            results: [
                {
                    type: "text",
                    content: 
                        `In order to ensure device safety, effectiveness, and usability according to FDA regulations, we conducted a user analysis to identify different user groups, their needs, and potential use errors, along with a risk management plan to address these factors.
                        
                        The user interface of the device was designed to consider displays, controls, and labeling, evaluating the design using usability principles.
                        
                        A usability test plan will be developed and conducted for human factors validation and usability testing. This includes test objective, participant criteria, test scenarios, and data collection methods. 
                        
                        Related documents can be found below.`
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
            title: "DEVELOPMENT:",
            subtitle: "Engineering Specifications and Design Realization",
            objective: "Establish engineering specifications, build working prototypes of key components of the engineering solution, incorporate Design for Manufacturing considerations, and develop risk mitigation strategies. Validation testing will be used to evaluate design feasibility.",
            methods: [
                {
                    type: "text",
                    title: "Engineering Requirements",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Prototyping",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Validation, Verification, and Testing",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Failure Modes and Effects Analysis (FMEA)",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Quality Management Systems (QMS)",
                    content: 
                        ``
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Design for Manufacturing (DFM)",
                    content: 
                        ``
                },
                

                
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `In progress`
                },
                {
                    type: "header",
                    content: "Works-Like Prototype"
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
            title: "DEPLOYMENT:",
            subtitle: "Business model, regulatory strategy, and IP feasibility",
            objective: "Create a full business model canvas for the device and evaluate reimbursement and intellectual property feasibility. The business model analysis will also include manufacturing and E2E supply chain with packaging, labeling, and sterilization considerations.",
            methods: [
                {
                    type: "text",
                    content: 
                        `In progress`
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `In progress`
                },
                {
                    type: "header",
                    content: "Is-Like Prototype"
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
    summary: "A full cycle product realization project to develop a mass production plan for a single-serving metal coffee press",
    thumbnail: import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
    images: [
        import.meta.env.BASE_URL + "projects/pressmate/01_thumbnail.png",
    ],
    showcased: true,
    start: "Jan 2026",
    end : "[May 2026]",
    active: true,
    type: "Product Realization Master's Course",
    teamsize: "4",
    keywords: ["Manufacturing", "EDM", "EVT", "DVT", "Documentation", "Machining"],
    context: 
        `The Product Realization Master's course at BU (ME537) focuses on the essential and challenging process of getting a design from the drawing board into the hands of the customer. 
        
        A semester long project to build and prototype a small production system includes hands-on experience, covering topics such as Design for Manufacturing, validation testing, cash flow modeling, in-house vs outsourcing, setting up a factory, selecting supplier partners, distribution, and ongoing product support.
        
        By the end of the semester, each team will have documented, efficient and consistent production of the final 10 units and a mass production plan.
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

                For you non-coffee drinking comrades, coffee is "brewed" by combining ground coffee beans and hot water. After the grounds have been given time to releasing their flavor, they are filtered out creating the revered cup of coffee. The flavor and quality of the cup of coffee can vary based on bean quality, grind size, brewing method, and steep time. The PressMate coffee press uses a "French-press" brewing method, where hot water and grinds are combined, steeped, then separated using a filter that is pressed through the mixture.
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
            caption: "The final prototype for our single-serve coffee press -- PressMate",
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
                    "DOC03 - Enterprise Data Management (EDM)",
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
                    "DOC015 - Schedule of Parts (SOP)",
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
    components: [
        {
            title: "Project Proposal",
            objective: "Generate ideas for projects, propose three (3) ideas with elevator pitches, and downselect to a final project focus. Elevator pitches must include a description of the product, rough sketch and dimensions, possible manufacturing strategy and materials, list of key risks.",
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
                        `The coffee press idea was decided by a class vote, after which a formal project proposal and project rationale was documented.
                        
                        The elevator pitches, project proposal, and project rationale can be found below in Relevant Documents.`
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
            title: "Project Launch and Concept Refinement",
            objective: "Finalize approach, refine product concept, and set up the project management infrastructure. ",
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
                        `Documents DOC01 - DOC06 were created (see below).
                        
                        `
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
            title: "Prototyping",
            objective: "Build one (1) prototype with non-production intent processes.",
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
            objective: "Build one (1) product with production intent and tooling plans.",
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
            objective: "Build three (3) products with all production intent processes and test tooling and fixtures.",
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
            objective: "Build ten (10) product will all production intent processes, fixtures, and tools. ",
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
            objective: "Produce a mass production plan with forecast, packaging, cost down targets, and production plan.",
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
    background: [
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
     { // vdcEngineer
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
    background: [
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
    background: [
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
    { // softwareEngineer
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
    background: [
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
    background: [
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
    background: [
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
    background: [
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
