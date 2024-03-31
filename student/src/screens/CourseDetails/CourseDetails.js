const courseData = [
    {
        id: 1,
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '8 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ],
    },
    {
        id: 2,
        name: 'Web Development Bootcamp',
        instructor: 'Jane Smith',
        description: 'A comprehensive bootcamp covering HTML, CSS, and JavaScript.',
        enrollmentStatus: 'Closed',
        thumbnail: 'web_dev_bootcamp.jpg',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic computer skills'],
        syllabus: [
            {
                week: 1,
                topic: 'HTML Fundamentals',
                content: 'Introduction to HTML tags and elements.'
            },
            {
                week: 2,
                topic: 'CSS Styling',
                content: 'Styling HTML elements using CSS properties.'
            },
        ],
        students: [
            {
                id: 201,
                name: 'Charlie Brown',
                email: 'charlie@example.com',
            },
            {
                id: 202,
                name: 'Daisy Miller',
                email: 'daisy@example.com',
            },
        ],
    },
    {
        id: 3,
        name: 'Python Programming',
        instructor: 'Michael Johnson',
        description: 'Learn Python programming language from scratch.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'python_programming.jpg',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['No prerequisites'],
        syllabus: [
            {
                week: 1,
                topic: 'Python Basics',
                content: 'Introduction to Python syntax and data types.'
            },
            {
                week: 2,
                topic: 'Control Flow Statements',
                content: 'Learn about if statements, loops, and conditional expressions.'
            },
        ],
        students: [
            {
                id: 301,
                name: 'Emma Watson',
                email: 'emma@example.com',
            },
            {
                id: 302,
                name: 'Finn Carter',
                email: 'finn@example.com',
            },
        ],
    },
    {
        id: 4,
        name: 'Data Science Fundamentals',
        instructor: 'Emily White',
        description: 'Introduction to data science concepts and techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'data_science_fundamentals.jpg',
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python knowledge', 'Familiarity with statistics'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: 'Overview of data science, its applications, and tools.'
            },
            {
                week: 2,
                topic: 'Data Wrangling',
                content: 'Cleaning, transforming, and preparing data for analysis.'
            },
        ],
        students: [
            {
                id: 401,
                name: 'Grace Johnson',
                email: 'grace@example.com',
            },
            {
                id: 402,
                name: 'Harry Brown',
                email: 'harry@example.com',
            },
        ],
    },
    {
        id: 5,
        name: 'React.js Essentials',
        instructor: 'Oliver Taylor',
        description: 'Master the fundamentals of React.js library for building web applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'react_js_essentials.jpg',
        duration: '6 weeks',
        schedule: 'Fridays and Saturdays, 10:00 AM - 12:00 PM',
        location: 'Online',
        prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React.js',
                content: 'Overview of React.js library and its key features.'
            },
            {
                week: 2,
                topic: 'Components and Props',
                content: 'Understanding React components and props.'
            },
        ],
        students: [
            {
                id: 501,
                name: 'Isabella Clark',
                email: 'isabella@example.com',
            },
            {
                id: 502,
                name: 'Jack Wilson',
                email: 'jack@example.com',
            },
        ],
    },
    {
        id: 6,
        name: 'JavaScript Advanced Concepts',
        instructor: 'David Lee',
        description: 'Deep dive into advanced JavaScript topics and techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'javascript_advanced.jpg',
        duration: '8 weeks',
        schedule: 'Saturdays and Sundays, 2:00 PM - 4:00 PM',
        location: 'Online',
        prerequisites: ['Solid understanding of JavaScript basics'],
        syllabus: [
            {
                week: 1,
                topic: 'Closures and Scope',
                content: 'Understanding closures, lexical scope, and function scope.'
            },
            {
                week: 2,
                topic: 'Asynchronous JavaScript',
                content: 'Working with asynchronous JavaScript using callbacks, promises, and async/await.'
            },
        ],
        students: [
            {
                id: 601,
                name: 'Katherine Moore',
                email: 'katherine@example.com',
            },
            {
                id: 602,
                name: 'Liam Hall',
                email: 'liam@example.com',
            },
        ],
    },
    {
        id: 7,
        name: 'Angular Framework Fundamentals',
        instructor: 'Sophia Adams',
        description: 'Get started with Angular framework for building modern web applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'angular_framework.jpg',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 8:00 PM - 10:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of HTML, CSS, and JavaScript'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Angular',
                content: 'Overview of Angular framework and its architecture.'
            },
            {
                week: 2,
                topic: 'Components and Directives',
                content: 'Understanding Angular components and directives.'
            },
        ],
        students: [
            {
                id: 701,
                name: 'Mia Walker',
                email: 'mia@example.com',
            },
            {
                id: 702,
                name: 'Noah Young',
                email: 'noah@example.com',
            },
        ],
    },
    {
        id: 8,
        name: 'Java Programming',
        instructor: 'Ethan Wilson',
        description: 'Learn Java programming language and its key concepts.',
        enrollmentStatus: 'Open',
        thumbnail: 'java_programming.jpg',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 8:00 PM - 10:00 PM',
        location: 'Online',
        prerequisites: ['No prerequisites'],
        syllabus: [
            {
                week: 1,
                topic: 'Java Basics',
                content: 'Introduction to Java syntax, data types, and operators.'
            },
            {
                week: 2,
                topic: 'Object-Oriented Programming',
                content: 'Understanding classes, objects, inheritance, and polymorphism in Java.'
            },
        ],
        students: [
            {
                id: 801,
                name: 'Olivia Brown',
                email: 'olivia@example.com',
            },
            {
                id: 802,
                name: 'William Garcia',
                email: 'william@example.com',
            },
        ],
    },
    {
        id: 9,
        name: 'Frontend Web Development',
        instructor: 'Ava Carter',
        description: 'Learn frontend web development technologies like HTML, CSS, and JavaScript.',
        enrollmentStatus: 'Open',
        thumbnail: 'frontend_web_dev.jpg',
        duration: '8 weeks',
        schedule: 'Saturdays and Sundays, 10:00 AM - 12:00 PM',
        location: 'Online',
        prerequisites: ['Basic computer skills'],
        syllabus: [
            {
                week: 1,
                topic: 'HTML Basics',
                content: 'Introduction to HTML tags and elements.'
            },
            {
                week: 2,
                topic: 'CSS Styling',
                content: 'Styling HTML elements using CSS properties.'
            },
        ],
        students: [
            {
                id: 901,
                name: 'Sophia Adams',
                email: 'sophia@example.com',
            },
            {
                id: 902,
                name: 'James Martinez',
                email: 'james@example.com',
            },
        ],
    },
    {
        id: 10,
        name: 'Machine Learning Fundamentals',
        instructor: 'Jack Taylor',
        description: 'Introduction to machine learning algorithms and techniques.',
        enrollmentStatus: 'Open',
        thumbnail: 'machine_learning.jpg',
        duration: '12 weeks',
        schedule: 'Fridays and Sundays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python knowledge', 'Understanding of statistics'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Machine Learning',
                content: 'Overview of machine learning concepts and applications.'
            },
            {
                week: 2,
                topic: 'Supervised Learning',
                content: 'Understanding supervised learning algorithms.'
            },
        ],
        students: [
            {
                id: 1001,
                name: 'Alexander Thompson',
                email: 'alexander@example.com',
            },
            {
                id: 1002,
                name: 'Emily Taylor',
                email: 'emily@example.com',
            },
        ],
    },
];
export default courseData;
