export const timelineResumeMain = [
    {
      id: 1,
      title: "Software Developer",
      description: "5+ years experience in Software Development. Focusing in innovation and challenges to achieve greater success in my path. I have solid background in Python, and JavaScript Languages and Frameworks. Frameworks such as Django for Python and ReactJS for JavaScript. With an experience, In deployment using Nginx, and Gunicorn in a Linux Platform. And as well in IIS Web Service of Microsoft.For the past years my experiences allowed me to grow more in order for me to achieve my goal which is to be an effective and innovative software developer.",
    },
    {
        id: 2,
        title: "Experiences",
        description: [1,2]
    },
];


export const timelineDescription = [
    {
        id: 0,
        description: {
            start_date: "November 21, 2017",
            end_date: "December 21, 2018",
            company_name: "Teletech",
            projects: [1]
        },
    },
    {
        id: 1,
        description: {
            start_date: "November 21, 2017",
            end_date: "December 21, 2019",
            company_name: "PAGASA",
            projects: [1]
        },
    },
];

export const timelineProjects = [
    {
        id: 1,
        projects: {
            project_position: "Programmer",
            project_name: "Impact Based Forecasting",
            project_description: "Refactor C# Script to Python Syntax"
        }
    },
];


export const experiences = [
      {
        id: 0,
        experiences_details: {
            image: "ttech_logo.png",
            company_name: "Teletech",
            position_name: "Technical Support Representative",
            job_description: [
                "My first job related to supporting customers offshore. We support Verizon Internet, Cable, and Television services." ,
                "And one of my key achievements was to be a consistent top 20 performer for last 6 months.",
                "My greatest upskill here was to communicate effectively in English to an English Native person thru phone call"
            ],
            reason: "Upskill and Wanting to become a successful software developer",
            started: "November 2015",
            left: "December 2016",
            tech_used: "Telecommunication Services (AVAYA) and Coffee Anywhere Dashboard"
        }
    },
    {
        id: 1,
        experiences_details: {
            image: "pagasa_logo.png",
            company_name: "PAGASA",
            position_name: "Science Research Specialist and Information System Analyst",
            job_description: [
                "This was my first journey as a Python Developer and my first task was to create a script.",
                "Related in forecasting the estimated impact of households. And  this script was activated with the use of ",
                "ArcMAP and I was able to integrate it to FTP to display the interpolated values from ArcMAP.",
                " And I'm also responsible in developing the ICT Management System and became one of developers in building PAGASA CMS,and Website",
                "understand Process involving in solving a particular problem."
            ],
            reason: "Upskill and Wanting to become a successful software developer",
            started: "June 2017",
            left: "April 2021",
            tech_used: "Python"
        }
    },
    {
        id: 2,
        experiences_details: {
            image: "nea_logo.jpg",
            company_name: "NEA",
            position_name: "Computer Services Programmer A",
            job_description: [
                "Created an Web Application for the financial department to keep on track on the existing budget ",
                "and to send monthly reports from the division heads. And I'm also responsible in creating technical documentation of the said system",
                " Including the Learning Management System. And as well as the Raffle Application.",
            ],
            reason: "Upskill and Wanting to become a successful software developer",
            started: "May 2021",
            left: "May 2023",
            tech_used: "Python"
        }
    },
    {
        id: 3,
        experiences_details: {
            image: "sm_logo.svg",
            company_name: "SM Supermalls",
            position_name: "Developer",
            job_description: [
                "My tasked here was to support and debug existing applications. And became part of Leasing Team",
                "and as well as been part of other projects Sprints to achieve timeline deliverables. ",
                "Learn't how to use Agile Methodologies and Jira.",
                "Learn't how to use Agile Methodologies and Jira.",

            ],
            reason: "Upskill and Wanting to become a successful software developer",
            started: "June 2023",
            left: "May 2024",
            tech_used: "Python"
        }
    },



]

export const experiencesLength = {
    page_numberStart: 0,
    page_numberEnd: 3,
    page_totalLength: 3,
    currentPage: 0
}

export const projects = [
    {
        id:0,
        projects_details : {
            image: "impact_based.png",
            company: "PAGASA",
            projects_name: "Impact Based Forecasting",
            projects_description: "Created a Python Script that allows forecasters to estimate the damage of households based on typhoon wind speed. The dataset output will be triggered in ArcMap and the output is distributed to ftp in an Excel file. The website page will get the latest data from the ftp and display it.",
            projects_tech: 0,
            projects_deployment: 0
        },

    },
    {
        id:1,
        projects_details : {
            image: "ims.jpg",
            company: "PAGASA",
            projects_name: "ICT Management System",
            projects_description: "My Initiative was to create a Ticketing Tool for our department. To Keep track on support records including both hardware and software.",
            projects_tech: 1,
            projects_deployment: 1
        },
    },
    {
        id:2,
        projects_details : {
            image: "daily_weather.png",
            company: "PAGASA",
            projects_name: "Daily Weather Script",
            projects_description: "My Initiative to create a script to display data from Daily Weather API to PAGASA Facebook Page",
            projects_tech: 2,
            projects_deployment: 2
        },
    },
    {
        id:3,
        projects_details : {
            image: "ebus.png",
            company: "NEA",
            projects_name: "Electronic Budget Utilization System",
            projects_description: "A long term project which will allow users to digitalize the process of utilizing the budget.",
            projects_tech: 3,
            projects_deployment: 3
        },
    }
]

export const tech = [
    {
        id:0,
        tech_details: [
            {
                tech_name: "Python",
                tech_lib: "Tkinter, and ArcPy Interpolation"
            },
            {
                tech_name: "ArcMap",
                tech_lib: "Interpolation Tools, and Export CSV, Shape files, and Image."
            },
            {
                tech_name: "JavaScript",
                tech_lib: "Leaflet.js to map shape files."
            },
        ],
    },
    {
        id:1,
        tech_details: [
            {
                tech_name: "Python",
                tech_lib: "Django Framework, and Django Channels."
            },
            {
                tech_name: "JavaScript",
                tech_lib: "Native, and Chart.Js"
            },
        ],
    },
    {
        id:2,
        tech_details: [
            {
                tech_name: "Python",
                tech_lib: "httplib, and selenium"
            },
        ],
    },
    {
        id:3,
        tech_details: [
            {
                tech_name: "Python",
                tech_lib: "Django Framework, and Django Rest Framework"
            },
            {
                tech_name: "JavaScript",
                tech_lib: "Luckysheet.js"
            },
        ]
    }





]

export const deployment = [
    {
        id:0,
        deployment_details: [
            {
                deployment_name: "Git Repository",
                deployment_description: "Bitbucket"
            },
            {
                deployment_name: "AWS",
                deployment_description: "application hosting"
            },
            {
                deployment_name: "Cronjob",
                deployment_description: "Scheduler use to run script using Linux OS"
            },
            {
                deployment_name: "FTP",
                deployment_description: "Repository for Excel files and Image files."
            },
        ],
        id:1,
        deployment_details: [
            {
                deployment_name: "Git Repository",
                deployment_description: "Bitbucket"
            },
            {
                deployment_name: "Centos 7",
                deployment_description: "Linux OS"
            },
            {
                deployment_name: "Nginx, and Gunicorn",
                deployment_description: "Deployment Libraries"
            },
        ],
        id:2,
        tech_details: [
            {
                deployment_name: "Task Scheduler for Windows",
                deployment_description: "Created a Batch File inserted the script to run only every 4am and 4pm."
            },
        ],
        id:3,
        deployment_details: [
            {
                deployment_name: "Git Repository",
                deployment_description: "Bitbucket"
            },
            {
                deployment_name: "Centos 7",
                deployment_description: "Linux OS"
            },
            {
                deployment_name: "Nginx, and Gunicorn",
                deployment_description: "Deployment Libraries"
            },
        ],

    }
]

export const projectsLength = {
    page_numberStart: 0,
    page_numberEnd: 3,
}




