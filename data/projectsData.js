const projectsData = [
  {
    title: 'Script Forms LTD',
    status: 'Active',
    description: `Script Forms is a social impact platform I founded to 
    simplify access to social welfare services for migrants in Ireland, 
    using automation and translating the social welfare system in 4 different 
    languages — Polish, Romanian, Russian, and Ukrainian.
    
    <br/><br/> 🎯 This app has supported over 15,000 users and 
    earned recognition through the $100,000 O’Shaughnessy Ventures Fellowship.`,
    imgSrc: '',
    href: 'https://www.scriptforms.ie/',
    github: '',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AWS'],
  },
  {
    title: 'MindMetrics – Ryff Wellbeing Scorer',
    status: 'In Progress',
    description: `MindMetrics is a Python-based tool I built for administering and scoring Carol Ryff’s Psychological Wellbeing Scale (42-item and 18-item versions).
    <br/><br/>🧠 The CLI tool supports Likert-scale input, automatic reverse scoring, and subscale computation across six dimensions of wellbeing. Designed for researchers, educators, and individuals, it outputs detailed .csv files for analysis and includes input validation, metadata handling, and optional CLI flags for version control.`,
    imgSrc: '', // Optional illustration or CLI screenshot
    href: '', // Add GitHub repo or project site if hosted
    github: 'https://github.com/hrisoved/ryff-wellbeing-scorer',
    tech: ['Python', 'pandas', 'CLI Interface', 'Reverse Scoring Logic', 'Subscale Analysis'],
  },
  {
    title: 'EireWays',
    status: 'Completed',
    description: `This is a full-stack recreation and navigation platform built for users across Ireland to explore local walking and cycling trails, check weather forecasts, and get personalised directions to routes based on live data.
    <br/><br/>🌦️ The app integrates GPS location, map routing, weather forecasting (via Met Éireann), and user preferences to display nearby trails with dynamic weather milestones, and allows users to compare conditions across locations — ideal for groups planning shared outdoor activities.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/cduggan1/group-design-project-10.git',
    tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'Leaflet', 'OpenWeatherMap API'],
  },
  {
    title: 'Student Housing ChatBot @Genesys CX',
    status: 'Completed',
    description: `As part of a collaborative 10-person team, I helped design and implement a Java-based system to improve student access to housing listings in Ireland and across designated Erasmus countries for Trinity College Dublin students. 
    <br/><br/>🏡 The platform supports web scraping of rental sites (e.g., Daft.ie), advanced property filtering, and database querying through a robust custom-built API. It enables users to search based on lease length, BER ratings, facilities, proximity to Trinity College Dublin, and more.
    <br/><br/>🏆 This project was awarded 1st place in the 2023 Trinity Industry Projects Showcase, selected out of 33 competing teams.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/cduggan1/group8-sep',
    tech: ['Genesys Cloud CX', 'Java', 'Spring Boot', 'REST API', 'Web Scraping', 'SQL', 'JSON'],
  },
  {
    title: 'Web-Based Pac-Man Game  @Qualcomm ',
    status: 'Completed',
    description: `As part of a project with Qualcomm, our team developed a browser-based Pac-Man game using WebGPU and custom JavaScript logic.
    <br/><br/>🕹️ The game features multi-level navigation, keyboard controls, lives-based mechanics, scoring, and dynamic level transitions. Built with a focus on performance and accessibility, the project also includes testing hooks and console verification for gameplay events.
    <br/><br/>🏆This project was showcased as a finalist in the 2024 Trinity Industry Projects Showcase.`,
    imgSrc: '',
    href: '',
    github: 'https://github.com/smithers03/Group-15',
    tech: ['JavaScript', 'HTML5', 'WebGPU', 'Game Development', 'Qualcomm'],
  },
  //   {
  //     title: 'Xenith Space Shooter',
  //     description: `A Knock-off of a retro space shooter game that I made with Pygame. Xenith is a knock-off of a popular game called Space Shooters that I made for my Girlfriend on our 1st Anniversary using Pygame.`,
  //     imgSrc: '',
  //     href: '',
  //     github: 'https://github.com/pycoder2000/Xenith-Space_Shooter',
  //     tech1: 'Pygame',
  //     tech2: 'Python',
  //     tech3: 'Tkinter',
  //   },
  //   {
  //     title: 'Django Chat App',
  //     description: `A small real time chat application built using Django. It also uses Channels and Vanilla Javascript with Web Sockets.`,
  //     imgSrc: '',
  //     href: '',
  //     github: 'https://github.com/pycoder2000/djangochat',
  //     tech1: 'Django',
  //     tech2: 'Vanilla Javascript',
  //     tech3: 'Web Sockets',
  //   },
  //   {
  //     title: 'CLI Quiz',
  //     description: `"Who wants to be a Millionaire? (JavaScript Edition)" Terminal Game that I made to practice my JavaScript skills.`,
  //     imgSrc: '',
  //     href: 'https://libraries.io/npm/cliquiz-millionaire',
  //     github: 'https://github.com/pycoder2000/CLI-Quiz',
  //     tech1: 'Node',
  //     tech2: 'Javascript',
  //     tech3: 'HTML',
  //   },
  //   {
  //     title: 'To-Do List',
  //     description: `Clean and simple to-do list application made with Django framework, with features like : easy add tasks, delete and edit tasks, reorder tasks, login and register, mark tasks as completed with Clean UI.`,
  //     imgSrc: '',
  //     href: '',
  //     github: 'https://github.com/pycoder2000/Todo-List',
  //     tech1: 'Django',
  //     tech2: 'HTML',
  //     tech3: 'SQL',
  //   },
  //   {
  //     title: 'Predicting number of Shares',
  //     description: `Predicting the number of shares based on how popular the article is.`,
  //     imgSrc: '',
  //     href: '',
  //     github: 'https://github.com/pycoder2000/Predicting-Number-of-Shares',
  //     tech1: 'Scipy',
  //     tech2: 'Machine Learning',
  //     tech3: 'Linear Regression',
  //   },
]

export default projectsData
