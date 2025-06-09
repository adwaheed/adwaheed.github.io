import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'adwaheed1990@gmail.com',
    phone: '+92 317 410 7466',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Adil, I am reaching out to you because...',

    linkedInProfile: 'https://www.linkedin.com/in/adwaheed1990/',
    // upworkProfile: 'https://www.upwork.com/freelancers/adilwaheed',
    githubProfile: 'https://adwaheed.github.io',
    location: 'Lahore, Pakistan',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubProfile },
    { name: 'linkedin', url: GENERAL_INFO.linkedInProfile },
    // { name: 'upwork', url: GENERAL_INFO.upworkProfile },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'React.js',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'HTML/CSS',
            icon: '/logo/html-css.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Zustand',
            icon: '/logo/zustand.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'JWT',
            icon: '/logo/jwt.png',
        },
        {
            name: 'Socket.io',
            icon: '/logo/socketio.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.png',
        },
        {
            name: 'VSCode',
            icon: '/logo/vscode.png',
        },
        {
            name: 'Cursor AI',
            icon: '/logo/cursor.png',
        },
    ],
    apis: [
        {
            name: 'REST APIs',
            icon: '/logo/rest.png',
        },
        {
            name: 'Third-party APIs',
            icon: '/logo/api.png',
        },
        {
            name: 'Chat GPT APIs',
            icon: '/logo/openai.png',
        },
    ],
};

// Map of projects that have videos
const projectsWithVideos = {
    'tribl': ['/projects/tribl/videos/1.mov']
};

// Map of project image info with actual counts and extensions
const projectImageInfo = {
    'tribl': {
        count: 0,
        extension: 'png'
    },
    'azz-ai': {
        count: 1,
        extension: 'png'
    },
    'azz-appointments': {
        count: 6,
        extension: 'png'
    },
    '92-limo': {
        count: 10,
        extension: 'png'
    },
    'one-store': {
        count: 3, 
        extension: 'png'
    },
    'expenser-app': {
        count: 1,
        extension: 'png'
    },
    'publiccompare': {
        count: 6, 
        extension: 'png'
    },
    'dowell-classification': {
        count: 1,
        extension: 'png'
    },
    'dowell-email': {
        count: 1,
        extension: 'png'
    },
    'sky-iptv': {
        count: 4,
        extension: 'png'
    },
    'calculator': {
        count: 1,
        extension: 'png'
    },
    'drum-kit': {
        count: 1,
        extension: 'png'
    }
};

// Helper function to get project media
const getProjectMedia = (slug: string) => {
    const projectInfo = projectImageInfo[slug as keyof typeof projectImageInfo] || {
        count: 0,
        extension: 'png'
    };
    
    const hasVideos = projectsWithVideos[slug as keyof typeof projectsWithVideos];
    
    // Generate image paths based on the count
    const images = [];
    
    // All extensions are now consistently .png
    if (projectInfo.count > 0) {
        for (let i = 1; i <= projectInfo.count; i++) {
            images.push(`/projects/${slug}/images/${i}.png`);
        }
    } else {
        // Try to add a default image for thumbnail
        images.push(`/projects/${slug}/images/1.png`);
    }
    
    // Default thumbnail is first image
    const thumbnail = images[0];
    
    return {
        videos: hasVideos || [],
        thumbnail: thumbnail,
        images: images
    };
};

export const PROJECTS: IProject[] = [
    {
        title: 'Tribl.app',
        slug: 'tribl',
        liveUrl: 'https://tribl.app',
        year: 2023,
        description: `
      A creator-first social platform where creativity meets community and passion fuels engagement. As a Full Stack MERN Developer (mainly frontend and backend API development), I contributed to building a scalable, production-ready MVP and implemented AI-powered content validation using OpenAI. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>👥 User Management: Secure authentication and profile management</li>
        <li>🤖 AI Integration: LLM-based content validation using OpenAI</li>
        <li>📱 Responsive Design: Pixel-perfect custom UI from Figma designs</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed modular API flows in Node.js</li>
        <li>Built responsive frontend with Next.js and TypeScript based on Figma designs</li>
        <li>Integrated OpenAI to enhance content validation workflows</li>
      </ul>
      `,
        role: `
      Full Stack Developer<br/>
      Responsibilities included:
      <ul>
        <li>✅ Backend: Developed modular API flows in Node.js</li>
        <li>🎨 Frontend: Created responsive, pixel-perfect UI using Next.js and TypeScript</li>
        <li>🤖 AI Integration: Implemented OpenAI-based content validation</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Node.js',
            'TypeScript',
            'OpenAI',
            'Tailwind CSS',
        ],
        ...getProjectMedia('tribl'),
    },
    {
        title: 'Azz AI - Chrome Extension',
        slug: 'azz-ai',
        liveUrl: 'https://chromewebstore.google.com/detail/azz-ai/mgcafekbmfbamkacdoehfpieihdbcdkm',
        year: 2023,
        description: `
      Developed a Chrome Extension for Azz Medical Associates in collaboration with Prime Health Services. Built with React.js, the extension integrates TalkeHR and a third-party AI service to enhance employee productivity and streamline workflows. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔄 Seamless integration with TalkeHR and AI service</li>
        <li>📈 Boosts employee efficiency and productivity</li>
        <li>💻 User-friendly interface built with React.js</li>
        <li>⚡ Smooth performance within the Chrome browser environment</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed the extension frontend using React.js</li>
        <li>Integrated third-party AI and HR services via APIs</li>
        <li>Ensured compatibility and smooth operation within Chrome</li>
        <li>Focused on delivering a productive and intuitive user experience</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Designed and developed the React.js-based Chrome Extension</li>
        <li>🔌 Integrated TalkeHR and AI services for enhanced functionality</li>
        <li>⚡ Optimized extension performance and usability</li>
        <li>👥 Collaborated with stakeholders to meet business requirements</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Chrome Extension APIs',
            'JavaScript',
            'CSS3',
        ],
        ...getProjectMedia('azz-ai'),
    },
    {
        title: 'Azz Appointments',
        slug: 'azz-appointments',
        liveUrl: 'https://azzappointments.com/',
        year: 2022,
        description: `
      Developed an appointment booking web application using Next.js and Redux for Azz Medical Associates in partnership with Prime Health Services. The app streamlines scheduling by integrating with TalkeHR, enabling management of multiple providers and real-time availability retrieval. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📅 Efficient appointment booking system</li>
        <li>👨‍⚕️ Integration with TalkeHR for provider management and availability</li>
        <li>🔄 Real-time schedule updates and conflict management</li>
        <li>📱 Responsive and user-friendly interface</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built frontend with Next.js and Redux for state management</li>
        <li>Integrated TalkeHR APIs for real-time provider availability</li>
        <li>Designed responsive UI for desktop and mobile devices</li>
        <li>Focused on scalability and ease of use</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Developed the appointment booking frontend with Next.js and Redux</li>
        <li>🔌 Integrated TalkeHR APIs to manage providers and availability</li>
        <li>📱 Ensured responsive design and seamless user experience</li>
        <li>👥 Collaborated with backend and stakeholders for smooth delivery</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'React.js',
            'Redux',
            'JavaScript',
            'CSS3',
        ],
        ...getProjectMedia('azz-appointments'),
    },
    {
        title: '92 Limo',
        slug: '92-limo',
        liveUrl: 'https://92limo.com/',
        year: 2022,
        description: `
      A cab booking web application built with React. The platform enables users to easily search, book, and manage rides. It leverages React Router DOM for seamless client-side navigation and integrates a third-party SDK to handle the booking and payment flow. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🚗 User-friendly cab booking interface</li>
        <li>🔍 Real-time ride search and availability</li>
        <li>🔄 Seamless navigation with React Router DOM</li>
        <li>💳 Booking and payment flow powered by third-party SDK</li>
        <li>📱 Responsive and mobile-friendly UI</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented smooth client-side routing with React Router DOM</li>
        <li>Integrated external SDK for ride booking and payment workflows</li>
        <li>Built responsive UI with React and modern CSS</li>
        <li>Focused on performance optimization and user experience</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Developed core booking flows and integrated third-party SDK</li>
        <li>🔄 Implemented navigation and state management with React Router DOM</li>
        <li>📱 Built responsive, user-friendly UI for both desktop and mobile devices</li>
        <li>⚡ Ensured cross-browser compatibility and optimized performance</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'React Router DOM',
            'HTML5',
            'CSS3',
        ],
        ...getProjectMedia('92-limo'),
    },
    {
        title: 'Ecommerce Store - ONE Store',
        slug: 'one-store',
        liveUrl: 'https://nextjs13-ecommerce-deploy.vercel.app/',
        year: 2021,
        description: `
      An e-commerce web application built with Next.js, Tailwind CSS, and Redux Toolkit. The store dynamically displays products using the Fake Store API, providing users with a seamless shopping experience across devices. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>📦 Dynamic product listing using Fake Store API</li>
        <li>🔍 Product detail pages with responsive design</li>
        <li>🛒 Shopping cart functionality with state management via Redux Toolkit</li>
        <li>⚡ Fast, optimized navigation with Next.js</li>
        <li>📱 Mobile-friendly and accessible UI with Tailwind CSS</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built dynamic product pages with server-side rendering and API integration</li>
        <li>Implemented global state management with Redux Toolkit</li>
        <li>Designed responsive, modern UI with Tailwind CSS</li>
        <li>Optimized for performance and SEO using Next.js best practices</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Developed the entire frontend using Next.js and Tailwind CSS</li>
        <li>🔌 Integrated Fake Store API for dynamic product data</li>
        <li>🛒 Implemented cart functionality and global state management with Redux Toolkit</li>
        <li>📱 Ensured responsive design and cross-browser compatibility</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Redux Toolkit',
            'Tailwind CSS',
            'JavaScript',
        ],
        ...getProjectMedia('one-store'),
    },
    {
        title: 'Expenser App',
        slug: 'expenser-app',
        liveUrl: 'https://nextjs13-expenser-app.vercel.app/',
        year: 2021,
        description: `
      An expense tracking web application built with Next.js and Firebase Firestore. The app allows users to manage their personal finances by adding, viewing, and deleting expenses in real time, with persistent cloud-based data storage. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>💰 Add, view, and delete expense items</li>
        <li>🔄 Real-time updates with Firebase Firestore</li>
        <li>☁️ Persistent cloud storage of user data</li>
        <li>📱 Responsive design for desktop and mobile devices</li>
        <li>💻 Simple and intuitive user interface</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Integrated Firebase Firestore for real-time data storage and retrieval</li>
        <li>Implemented responsive UI with Next.js and modern CSS</li>
        <li>Developed CRUD functionalities for managing expense data</li>
        <li>Focused on delivering fast performance and an intuitive user experience</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Developed the full application with Next.js and Firebase Firestore</li>
        <li>🔄 Implemented real-time data handling and storage with Firestore</li>
        <li>📱 Built responsive and accessible UI for various screen sizes</li>
        <li>⚡ Ensured seamless user interactions for adding, reading, and deleting expense items</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Firebase Firestore',
            'JavaScript',
            'CSS3',
        ],
        ...getProjectMedia('expenser-app'),
    },
    {
        title: 'PublicCompare - HomePage',
        slug: 'publiccompare',
        liveUrl: 'http://publiccompare.com/',
        year: 2021,
        description: `
      Developed the homepage for the PublicCompare website using React.js, HTML, CSS, and Tailwind CSS. The page features a responsive design and integrates multiple APIs to deliver dynamic content and enhance user interaction. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🎨 Responsive and modern homepage design</li>
        <li>🔄 Dynamic content rendering through integrated APIs</li>
        <li>💻 Clean and accessible UI built with React and Tailwind CSS</li>
        <li>⚡ Optimized performance for desktop and mobile devices</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built responsive layout with Tailwind CSS and HTML</li>
        <li>Implemented dynamic data display using React.js and API integrations</li>
        <li>Focused on delivering fast page load times and smooth user experience</li>
        <li>Ensured cross-browser compatibility and mobile optimization</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Developed the homepage using React.js and Tailwind CSS</li>
        <li>🔌 Integrated multiple APIs to enable dynamic content</li>
        <li>📱 Built responsive UI ensuring consistent performance across devices</li>
        <li>⚡ Optimized the page for accessibility and performance</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
            'API Integration'
        ],
        ...getProjectMedia('publiccompare'),
    },
    {
        title: 'Dowell Classification API',
        slug: 'dowell-classification',
        liveUrl: 'https://ll08-mathematicalmodelling-dowell.github.io/100033-dowellclassification-frontend-v2/',
        year: 2021,
        description: `
      Developed the frontend interface for Dowell's Email Classification API, primarily designed for testing and demonstration purposes. Built with React.js, HTML, CSS, and Tailwind CSS, the application uses Axios to facilitate API communication and display classification results dynamically. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🧪 User-friendly interface to test Email Classification API</li>
        <li>🔄 Real-time API communication using Axios</li>
        <li>💻 Clean and responsive UI built with React.js and Tailwind CSS</li>
        <li>📊 Supports dynamic display of classification results</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built responsive and accessible UI with React.js, Tailwind CSS, HTML, and CSS</li>
        <li>Integrated Axios for efficient API request/response handling</li>
        <li>Focused on ease of use for testing API endpoints</li>
        <li>Optimized interface for performance and usability</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Designed and developed the frontend for Dowell Classification API</li>
        <li>🔌 Integrated API calls using Axios for real-time classification testing</li>
        <li>💻 Built a responsive and intuitive UI with React.js and Tailwind CSS</li>
        <li>⚡ Ensured a smooth user experience across different devices and browsers</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
            'Axios'
        ],
        ...getProjectMedia('dowell-classification'),
    },
    {
        title: 'Dowell Email API Testing',
        slug: 'dowell-email',
        liveUrl: 'https://frontend-dowell-email-api.netlify.app/',
        year: 2021,
        description: `
      Developed the frontend interface for Dowell's Email API, focused on enabling efficient testing and validation of API responses. The application is built with React.js, HTML, CSS, and Tailwind CSS, with Axios used to handle API requests and responses dynamically. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🧪 Interactive frontend for testing the Email API</li>
        <li>🔄 Real-time API communication using Axios</li>
        <li>💻 Responsive, clean UI built with React.js and Tailwind CSS</li>
        <li>📊 Dynamic display of API responses for validation and testing</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built responsive UI using React.js, Tailwind CSS, HTML, and CSS</li>
        <li>Integrated Axios to handle API requests and display responses dynamically</li>
        <li>Designed the interface for easy and efficient API testing</li>
        <li>Ensured cross-browser compatibility and responsive performance</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Designed and developed the frontend for Dowell's Email API testing</li>
        <li>🔌 Integrated Axios for real-time API request/response handling</li>
        <li>💻 Created a responsive and user-friendly UI using React.js and Tailwind CSS</li>
        <li>⚡ Focused on delivering an intuitive experience for API testers and developers</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
            'Axios'
        ],
        ...getProjectMedia('dowell-email'),
    },
    {
        title: 'SKY IPTV',
        slug: 'sky-iptv',
        liveUrl: 'https://sky-iptv.netlify.app/',
        year: 2021,
        description: `
      Developed the full website for SKY IPTV, including hosting setup and domain procurement. The site features dynamic content powered by several API integrations and is built using HTML, CSS, Bootstrap, and JavaScript. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🌐 Complete website development and deployment</li>
        <li>📱 Responsive design with Bootstrap</li>
        <li>🔄 Dynamic content integration via multiple APIs</li>
        <li>🌍 Hosting and domain management</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built responsive UI using HTML, CSS, and Bootstrap</li>
        <li>Integrated various APIs to deliver dynamic content</li>
        <li>Managed website deployment, hosting, and domain setup</li>
        <li>Ensured cross-browser compatibility and mobile responsiveness</li>
      </ul>
      `,
        role: `
      Full Stack Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Designed and developed the entire website for SKY IPTV</li>
        <li>🔌 Integrated multiple APIs to enhance functionality</li>
        <li>🌐 Handled hosting setup and domain registration</li>
        <li>📱 Built responsive UI and optimized site performance</li>
      </ul>
      `,
        techStack: [
            'HTML5',
            'CSS3',
            'Bootstrap',
            'JavaScript',
            'API Integration'
        ],
        ...getProjectMedia('sky-iptv'),
    },
    {
        title: 'Calculator App',
        slug: 'calculator',
        liveUrl: 'https://adwaheed1990-simple-calculator.netlify.app/',
        year: 2021,
        description: `
      Developed a simple calculator application using React.js, providing essential arithmetic operations including addition, subtraction, multiplication, and division. The app offers a clean and intuitive interface for quick and easy calculations. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🧮 Basic arithmetic operations: add, subtract, multiply, divide</li>
        <li>💻 User-friendly and minimalistic interface</li>
        <li>📱 Responsive design for desktop and mobile devices</li>
        <li>⚡ Fast and reliable performance</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built with React.js for interactive UI</li>
        <li>Implemented clean state management for calculation logic</li>
        <li>Ensured responsive design and accessibility</li>
        <li>Focused on simplicity and usability</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Developed the entire app using React.js</li>
        <li>💻 Designed a clean and responsive UI</li>
        <li>🧮 Implemented arithmetic logic and state management</li>
        <li>⚡ Tested and optimized for performance and usability</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'JavaScript',
            'CSS3',
            'HTML5'
        ],
        ...getProjectMedia('calculator'),
    },
    {
        title: 'Drum Kit App',
        slug: 'drum-kit',
        liveUrl: 'https://adilwaheed1990-drum-kit.netlify.app/',
        year: 2021,
        description: `
      Created an interactive Drum Kit web app that allows users to play drum sounds by clicking buttons or pressing keyboard keys. Built with HTML, CSS, and JavaScript, the app provides an engaging and responsive user experience. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🥁 Play drum sounds via mouse clicks or keyboard key presses</li>
        <li>💻 Interactive and responsive design</li>
        <li>👌 Simple and intuitive user interface</li>
        <li>⚡ Fast audio playback for real-time interaction</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Developed with vanilla JavaScript for audio control and event handling</li>
        <li>Styled using CSS for a clean and responsive layout</li>
        <li>Ensured smooth and immediate response to user input</li>
        <li>Compatible across modern browsers</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      Responsibilities included:
      <ul>
        <li>🎨 Built the interactive Drum Kit using HTML, CSS, and JavaScript</li>
        <li>🔄 Implemented event listeners for both clicks and key presses</li>
        <li>💻 Designed a responsive and accessible UI</li>
        <li>⚡ Tested for performance and cross-browser compatibility</li>
      </ul>
      `,
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript'
        ],
        ...getProjectMedia('drum-kit'),
    },
];

export const EXPERIENCES = [
    {
        company: 'Devopsifi',
        position: 'Full-Stack MERN Developer - Remote',
        duration: '09/2023 - Present',
        description:
            'Developed and maintained dynamic web applications utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript. Transformed Figma UI/UX designs into responsive interfaces and engineered secure RESTful APIs with JWT authentication.',
    },
    {
        company: 'Prime Health Services Pakistan',
        position: 'Frontend Developer (React.js & Next.js)',
        duration: '07/2022 - 08/2023',
        description:
            'Developed a Chrome Extension using React.js for Azz Medical Associates. Built a responsive Appointment Booking Web Application using Next.js, integrating with TalkeHR and external APIs.',
    },
    {
        company: 'Dowell Research UK Limited',
        position: 'Frontend Developer (React.js & Next.js) - Remote',
        duration: '11/2021 - 06/2022',
        description:
            'Developed dynamic user interfaces using React.js and Next.js. Integrated multiple third-party and internal APIs using Axios and styled responsive UI components with Tailwind CSS.',
    },
    {
        company: 'Freelancing',
        position: 'Frontend Developer',
        duration: '04/2021 - 10/2021',
        description:
            'Designed and developed custom, responsive user interfaces for multiple clients using React.js, JavaScript, and Next.js. Integrated RESTful APIs and Firebase services for real-time data handling and authentication.',
    },
];

export const EDUCATION = {
    university: 'University of the Punjab',
    degree: 'Bachelor of Arts',
    duration: '2013-2015',
};

export const SKILLS_SUMMARY = {
    title: "Full-Stack JavaScript Developer specializing in MERN Stack",
    description: "With over 4 years of professional experience, I excel at transforming Figma designs into responsive, intuitive user interfaces, fixing bugs, building new modules, and enhancing overall user experience. I deliver scalable, high-performance web applications while collaborating closely with design teams."
};
