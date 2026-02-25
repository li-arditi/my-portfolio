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
                    objective: [
                        {
                            type: "text",
                            content: 
                                ``
                        },
                    ],
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
                
                Skeletal traction is an important damage control procedure used as temporary treatment until definitive treatment can be implemented. The goal is to counteract the shortening effects of muscle contractions by applying a pulling force to bring the fractured bone (in this case the femur) back to length. The current standard of care includes a specialized traction bed and a system of pulleys and weights to apply the force (example shown below).`
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/traction/03_currentTraction.png",
            alt: "Standard Skeletal Traction Frame",
            caption: "One of the standard skeletal traction setups for femur fractures",
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
                `(In progress) Our solution is a self-contained, portable, traction frame.`
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/traction/02_initialWorksLike.jpeg",
            alt: "Project final result",
            caption: "The current prototype for self-contained, portable skeletal traction",
            aspect: "16/9"
        },
        {
            type: "text",
            content: 
                `Throughout the product lifecyle, a binder with the following sections are being created to document the design process:`
        },
        {
            type: "list",
            name: "bindersections",
            content: 
                [
                    "Clinical Challenges and User Needs",
                    "Device Requirements",
                    "Human Factors Analysis",
                    "Engineering Specifications",
                    "Design Strategy Development",
                    "Design Realization",
                    "Verification Testing",
                    "Validation Testing",
                    "Design for Manufacturing",
                    "Hazards and Harms",
                    "Failure Modes and Effects Analysis (FMEA)",
                    "Regulatory Pathway and Plan",
                    "IP and Competitive Analysis",
                    "Commercialization Strategies",
                    "Business Model Canvas Design",
                ]
        },

    ],
    components: [
        {
            title: "Discovery:",
            subtitle: "Unmet user needs, stakeholder analysis, and value proposition",
            objective: [
                {
                    type: "text",
                    content: 
                        `Identify technology-related clinical challenges and unmet user needs to select a project focus and clearly defined user needs, supported by stakeholder analysis and a value proposition.`
                },
            ],
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r  border-neutral-200",
                    title: "Clinical Observations and Voice of Customer (VOC)",
                    content: 
                        `Conduct clinical observations at Boston Medical Center (BMC) with the support of a clinical advisor to understand voice of customer (VOC). Observe interactions, technology use, and workflows, identifying potential problems or opportunities for improvement that can be translated into unmet user needs. `
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Stakeholder Analysis",
                    content: 
                        `Understand the process and identify categories of stakeholders and their interests including the initiator, influencer, gatekeeper, decider, purchaser, user, and saboteur. `
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Value Proposition and Customer Segmentation",
                    content: 
                        `Create a Value Proposition Canvas to map the customers' jobs, pains, and gains to our product. Identify who the customer is and what they need to accomplish to construct a value proposition that demonstrates what our product can offer and how it is better (or different!)`
                },

            ],
            results: [
                {
                    type: "text",
                    content: 
                        `I conducted 50+ hours of clinical observations throughout a semester, working directly with surgeons, nurses, residents, and device representatives, while demonstrating comfort with operating room (OR) protocols and confidence in talking to surgeons. 
                        
                        I observed a range of surgeries shown below.
                        `
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/surgeries.png",
                    alt: "Summary of observed surgeries",
                    caption: "The range of observed surgeries",
                    aspect: "auto",
                    className: "w-2xl"
                },
                {
                    type: "text",
                    content: 
                        `Unfortunately, I can't show images of surgeries, but here is a picture of the prepped sterile table for the internal fixation of the right femur.
                        `
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/steriletable.jpeg",
                    alt: "Sterile table",
                    caption: "The prepped sterile table for an internal fixation of a femur fracture.",
                    aspect: "auto",
                    className: "w-xl"
                },
                {
                    type: "text",
                    content: 
                        `Storyboards were also used to identify important moments throughout a procedure.
                        `
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/storyboard.jpeg",
                    alt: "Storyboard example",
                    caption: "An example of one of my storyboards for trigger finger release surgeries.",
                    aspect: "auto",
                    className: "w-xl"
                },
                {
                    type: "text",
                    content: 
                        `My interactions with diverse clinical teams enabled me to evaluate real-world product use, identify workflow and usability challenges, and translate clinical feedback into into clear design inputs and product requirements while aligning with medical device standards.
                        
                        My team and I also consulted with dedicated industry mentors, who offered insight and challenged us as they would in industry settings.
                        
                        With a combined total of 200 observation hours by the team, the problem and needs statement, along with clinical needs and device requirements for a minimum viable product are outlined below:
                        `
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/discoveryResults.jpg",
                    alt: "Problem and needs statement; clinical requirements",
                    caption: "",
                    aspect: "auto",
                    className: "w-2xl"
                },
                {
                    type: "text",
                    content: 
                        `Formal binder documents are in progress.
                        `
                },
            ],
            documents: [
                {
                    type: "pdf",
                    title: "Initial Observations Presentation",
                    filepath: import.meta.env.BASE_URL + "public/projects/traction/documents/Final  Problems Presentation-2.pdf"
                },

            ]

        },
        {
            title: "Design:",
            subtitle: "Design Strategy Development",
            objective: [
                {
                    type: "text",
                    content: 
                        `Propose an optimized solution strategy by exploring and comparing alternative design strategies in the context of Competitive Analysis, IP strategies, preliminary market trends, and economic variables.`
                },
            ],
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Ideation",
                    content: 
                        `Conduct design alternative techniques to transition from identifying problems into exploring solutions for users.`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Design Inputs (Device Requirements)",
                    content: 
                        `Conduct research and consult physicians to identify design inputs, including form, fit, and function. Clearly define what the solution needs to achieve and how well it needs to be done i.e. what is an objective measurable requirement to meet the clinical requirement.`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Design Outputs (Device Specifications)",
                    content: 
                        `Based on the design inputs, identify how the design input will be achieved, aligning with 21 CFR 820.30(d) Design Output Controls. Ensure that every output traces to an input, which traces to a need.`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Human Factors Analysis",
                    content: 
                        `Usability and human factors (HF) analysis was conducted to consider device users, use environments, and user interfaces according to FDA regulations`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r  border-neutral-200",
                    title: "Market Research",
                    content: 
                        `Conduct market research to estimate market size by identifying customer segments, Total Addressable Market (TAM), Servicable Available Market (SAM), and Share of Market/Serviceable and Obtainable Market (SOM)`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r  border-neutral-200",
                    title: "Agile Workflow",
                    content: 
                        `Establish a project timeline, identifying Agile sprints for iterative design.`
                },
                

            ],
            results: [
                {
                    type: "text",
                    content: 
                        `Results from this design process were summarized in the following presentation.`
                },
                {
                    type: "iframe",
                    name: "DesignResultsPresentation",
                    filepath: import.meta.env.BASE_URL + "public/projects/traction/documents/DesignResultsPresentation.pdf",
                    
                },
                
                // {
                //     type: "text",
                //     content: 
                //         `Device inputs and outputs were determined by research and consultation with physicians. A Requirement Traceability Matrix (RTM) was created to`
                // },
                // {
                //     type: "list",
                //     name: "rtm",
                //     content: 
                //         [
                //             "Translate what the customer needs into what the product must do",
                //             "Document that product meets User needs and Design inputs",
                //             "Links design requirements to the testing methods that will be used to confirm that the product meets those requirements",
                //             "Identify the most critical features of a design required for it to function",
                //         ]
                // },
                // {
                //     type: "text",
                //     content: 
                //         `In order to ensure device safety, effectiveness, and usability according to FDA regulations, we conducted a user analysis to identify different user groups, their needs, and potential use errors, along with a risk management plan to address these factors.
                        
                //         The user interface of the device was designed to consider displays, controls, and labeling, evaluating the design using usability principles.
                        
                //         A usability test plan will be developed and conducted for human factors validation and usability testing. This includes test objective, participant criteria, test scenarios, and data collection methods. 

                //         Turn an unmet need into an addressable market by identifying a patient and procedure and serve a niche customer and need well first; consider who the user and buyer is, what do they gain, and what is the growth potential. 
                        
                //         Formal documents are in progress.`
                // },
            ],
            documents: [
                
            ] 
        },
        {
            title: "Development:",
            subtitle: "Design Realization",
            objective: [
                {
                    type: "text",
                    content: 
                        `Build working prototypes of key components of the engineering solution, incorporate Design for Manufacturing considerations, and develop risk mitigation strategies. Validation testing will be used to evaluate design feasibility.`
                },
            ],
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r  border-neutral-200",
                    title: "Prototyping",
                    content: 
                        `Conduct rapid prototyping sessions, 3D modeling, and machining processes to create Looks-Like, Works-Like and Is-Like prototypes.`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r  border-neutral-200",
                    title: "Validation, Verification, and Testing",
                    content: 
                        `In Progress`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Failure Modes and Effects Analysis (FMEA)",
                    content: 
                        `In Progress`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Quality Management Systems (QMS)",
                    content: 
                        `In Progress`
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Design for Manufacturing (DFM)",
                    content: 
                        `In Progress`
                },
                

                
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `Here's one of my first mockups!`
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/mockup.png",
                    alt: "Initial mockup",
                    caption: "My initial mockup using foil, popsicle sticks, straws, and pipe cleaners",
                    aspect: "auto",
                    className: "w-2xl"
                },
                {
                    type: "header",
                    content: "Physical Prototypes (In Progress)"
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/prototypes.png",
                    alt: "Progression of prototypes",
                    caption: "Overall progression of prototypes",
                    aspect: "auto",
                    className: "w-2xl"
                },
                {
                    type: "header",
                    content: "3D Models (In Progress)"
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/traction/models.png",
                    alt: "Progression of prototypes",
                    caption: "Overall progression of 3D models",
                    aspect: "auto",
                    className: "w-2xl"
                },
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Business Model Canvas",
                    content: 
                        `V&V, FMEA, QMS, DFM all in progress`
                },
                
            ],
            documents: [
                
            ],
        },
        {
            title: "Deployment:",
            subtitle: "Business model, regulatory strategy, and IP feasibility",
            objective: [
                {
                    type: "text",
                    content: 
                        `Create a full business model canvas for the device and evaluate reimbursement and intellectual property feasibility. The business model analysis will also include manufacturing and E2E supply chain with packaging, labeling, and sterilization considerations.`
                },
            ],
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r border-neutral-200",
                    title: "Business Model Canvas",
                    content: 
                        `In Progress`
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `Deployment phase to follow Development phase`
                },

            ],
            documents: [
                
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
    keywords: ["Manufacturing", "ECM", "EVT", "DVT", "PVT", "Mass Production", "Documentation", "Machining"],
    context: 
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
            objective: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r",
                    title: "Brainstorming Session",
                    content: 
                        `Generate ideas for projects, propose three (3) ideas with elevator pitches, and downselect to a final project focus. Elevator pitches must include a description of the product, rough sketch and dimensions, possible manufacturing strategy and materials, list of key risks.`
                },
            ],
            methods: [
                {
                    type: "bullet",
                    style: "",
                    border: "border-r  border-neutral-200",
                    title: "Brainstorming Session",
                    content: 
                        `Each team member contributed at least 3 project ideas. As a team, the top 3 ideas were selected based on interest and feasibility.`
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `The coffee press idea was decided by a class vote, after which a formal project proposal and project rationale was documented.
                        
                        The elevator pitches, project proposal, and project rationale will be uploaded soon.`
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
            objective: [
                {
                    type: "text",
                    content: 
                        `Finalize approach, refine product concept, and set up the project management infrastructure.`
                },
            ],
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
                        `My main responsibility was to draft the Enterprise Content Management (ECM) Plan. The plan establishes folder structure, naming conventions, version control standards, change management, and team expectations. I also created automation scripts using Google Apps Script to streamline document formatting and assignment submission.
                        
                        Initial drafts of DOC01 - DOC06 were also created, which I also contributed to in order to ensure alignment with the ECM plan.
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
            objective: [
                {
                    type: "text",
                    content: 
                        `Build one (1) prototype with non-production intent processes.`
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        `Build one (1) product with production intent and tooling plans.`
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        `Build three (3) products with all production intent processes and test tooling and fixtures.`
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        `Build ten (10) product will all production intent processes, fixtures, and tools.`
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        `Produce a mass production plan with forecast, packaging, cost down targets, and production plan.`
                },
            ],
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
                "projects/stangl/rns.png"
            ],
    showcased: true,
    start: "May 2025",
    end : "Sept 2025",
    active: false,
    type: "Research Assistant",
    teamsize: "2-5",
    keywords: ["Hardware Software Integration", "EEG", "Motion Capture", "Eye Tracking", "IMUs", "Arduino"],
    context: 
        `The Stangl Lab conducts human clinical studies for studying the neural basis of human cognition and behavior using multimodal neuroimaging techniques. 

        The ability to record a person’s brain activity in real-world situations is relatively new, so there are no ready-made systems available to record experimental data. Therefore, the Stangl Lab developed a custom mobile platform that allows for data synchronization between a computer running the experimental protocol and sensors the participant is wearing. 

        My role was to improve the current hardware-software integration system to ensure sub-millisecond sychronization precision between the multimodal data. In order to fully understand the system, I was also involved in conducting experiment protocols with the team.
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
    conclusion: [
        {
            type: "text",
            content: 
                `I was able to quickly learn the experiment protocols and underlying code to start integrating a Lab Streaming Layer (LSL) workflow to the existing system. I also created a 30-page report to document my process, results, lessons learned, and future directions to ensure smooth knowledge transfer to technical and non-technical audiences. 
                
                The table of contents of the report is provided below for reference. A high level summary and snippets from the report are outlined in the Components section below.`
        },
        {
            type: "image",
            src: import.meta.env.BASE_URL + "projects/stangl/documents/TOC.png",
            alt: "Table of Contents for Project Documentation",
            caption: "Table of Contents for Project Documentation",
            aspect: "16/9",
            className: "w-5xl"

        },
        
    ],
    components: [
        {
            title: "Eye Tracking Validation",
            objective: [
                {
                    type: "text",
                    content: 
                        `Verify the time delay between the RaspberyPi and Neon glasses has a linear drift less than 10ms.`
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/connectionVerification.png",
                    alt: "Connection verifications",
                    caption: "Most connections were verified by another team member to have a linear drift that was within an acceptable time delay. The timestamp difference for the RaspberryPi-to-Neon connection was not yet verified.",
                    aspect: "16/9",
                    className: "w-sm"
                },
            ],
            methods: [
                {
                    type: "header",
                    content: "Understanding Time Delays"
                },
                {
                    type: "text",
                    className: "pl-5 pt-3",
                    content: 
                        `The internal clocks of diﬀerent devices are not perfectly accurate and therefore the timestamps from each device is not perfectly aligned with one another. Over time, the diﬀerence in the internal clocks and the timestamps accumulates, resulting in a “drift”.
                        
                        Therefore, we care about the gaps between the marks and making sure that is consistent between data from diﬀerent devices (i.e. the diﬀerence in timestamp drift is linear so it’s easy to use linear regression)`
                },
                {
                    type: "header",
                    content: "Neon Pupil Glasses"
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/neonglasses.png",
                    alt: "Neon glasses",
                    caption: "Overview of the Neon glasses setup",
                    aspect: "16/9",
                    className: "w-md"
                },
                {
                    type: "header",
                    content: "Excel Data Analysis"
                },
                {
                    type: "text",
                    className: "pl-5 pt-3",
                    content: 
                        `Time delays were determined by analyzing the eye tracking recording to find the exact timestamp the LED turned on. This was compared to known timestamps of the LED trigger from the RaspberryPi.`
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `The LED-RPi alignment was determined to have 10-20ms delay. However there was an uncertainty of 33ms (30Hz), as the scene environment camera of the Pupil Neon eye tracking video has a frame rate of 30Hz. Since eye movements are much faster than that, in order to capture eye movements the eye cameras need to be used instead since they have a frame rate of 200 Hz.`
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/LEDresults.png",
                    alt: "LED results",
                    caption: "Results from timestamp drift analysis. With the LED in the scene camera (left), the timestamp diﬀerence was not linear and too large of a diﬀerence because of the frame rate. The eye camera (right) was used instead.",
                    aspect: "16/9",
                    className: "w-2xl"
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
            title: "Data Synchronization",
            objective: [
                {
                    type: "text",
                    content: 
                        `The current system is sufficient in that it records and saves the necessary data from the experiment. However, data analysis and alignment involves tedious manual alignment (mainly because of the timestamp drift). 
                        
                        The team wants to implement a system that automatically handles time delays/drift and overall data collection. `
                },
            ],
            methods: [
                {
                    type: "header",
                    content: "Lab Streaming Layer (LSL)"
                },
                {
                    type: "text",
                    className: "pl-5 pt-3",
                    content: 
                        `Lab Streaming Layer (LSL) is a widely used system for the unified collection of measurement time series in research experiments. It handles both the networking, time-synchronization, (near-) real-time access as well as optionally the centralized collection, viewing and disk recording of the data.`
                },
            ],
            results: [
                {
                    type: "text",
                    content: 
                        ``
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/lsl.png",
                    alt: "LSL implementation",
                    caption: "Schematic of implemented LSL workflow",
                    aspect: "16/9",
                    className: "w-2xl"
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
            title: "Inertial Measurement Unit (IMU) Integration",
            objective: [
                {
                    type: "text",
                    content: 
                        `The Vicon motion cameras can track the participant’s location within the experiment room. However, limitations with the system and the fact that the system should eventually be mobile (i.e. run experiments outside of the MoCap room) call for a way to have motion tracking without the cameras.`
                },
            ],
            methods: [
                {
                    type: "header",
                    content: "Boas Lab IMU Crash Course"
                },
                {
                    type: "text",
                    className: "pl-5 pt-3",
                    content: 
                        `The Boas Lab at BU had created custom inertial measurement units (IMUs) that hadn’t been tested yet. I met with creator of the IMUs Professor Eric Hazen for a crash course on the technical details the devices.`
                },
                
            ],
            results: [
                {
                    type: "text",
                    content: 
                        `After the crash course with Prof. Hazen, I created a guide for future reference. Below are some summaries of the IMU components.`
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/imuAdaptorCard.png",
                    alt: "IMU Adaptor Card",
                    caption: "",
                    aspect: "16/9",
                    className: "w-2xl"
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/imuSplitter.png",
                    alt: "IMU splitter",
                    caption: "",
                    aspect: "16/9",
                    className: "w-2xl"
                },
                {
                    type: "image",
                    src: import.meta.env.BASE_URL + "projects/stangl/imuCube.png",
                    alt: "IMU module",
                    caption: "",
                    aspect: "16/9",
                    className: "w-2xl"
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
            objective: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
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
            objective: [
                {
                    type: "text",
                    content: 
                        ``
                },
            ],
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
