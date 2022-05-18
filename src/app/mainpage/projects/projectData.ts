import { ProjectInfo } from 'src/app/models';

export const projectData : ProjectInfo[] = [
  {
    title:"Highschool student number/information searching app",
    techs:"ASP & mySQL & html",
    description:" A courses/degree planner full stack system to help students plan future courses",
    githubLink:"https://github.com/Chris-He01",
    pictureLink:"courseplanner.png",
    techsUsedList:["Angular","PostgresSQL",'Flask','Psycopg2','Python'],
    picturesList:["courseplanner.png"],
    additionalInfo:[
      "A database course group project that stores real data of high school student's information & provides various searching methods",
    ]
    }  
  ,{
      title:"Two Players Tetris",
      techs:"C++ & Xwindow Graphic",
      description:"A two players competitive tetris game project made using C++ and Xwindow.",
      githubLink:"https://github.com/JingfeiPeng/Biquadris",
      pictureLink:"graphical.png",
      techsUsedList:["C++","Xwindow Graphic", "Observer Design Pattern" ,"MVC design pattern"],
      picturesList:["graphical.png"],
      additionalInfo:[
          "A fun 1vs1 competitive Tetris Game", 
          "Incorporated observer, factory and MVC design patterns. It also used OOP techniques such as Polymorphism, RAII and single responsibility principle",
          "The game contains 4 difficulty levels and hidden triggers to sabotage the opponent"
        ]
    },
    {
      title:"PDF Reader",
      techs:"Java & Android",
      description:"An Android app that allows user to make anotations on PDF similar to OneNote",
      githubLink:"",
      pictureLink:"reader.png",
      techsUsedList:["Java","Android"],
      picturesList:["reader.png"],
      additionalInfo:[
        "An Android app that allows user to make anotations on PDF",
        'Users can use pen, highlighter and eraser',
        'Supports redo and undo actions',
        'Support Zoom and Pan around the PDF',
        "Github link unavaliable since this is an academic project"
      ]
    },
    {
      title:"SketchIt",
      techs:"Java & JavaFx",
      description:"A Vector-drawing Computer App that allows a user to select shapes to draw, set their properties, and draw the shapes on-screen",
      githubLink:"",
      pictureLink:"javaFx/screenshot1.png",
      techsUsedList:["Java","JavaFx", "Gradle"],
      picturesList:["javaFx/screenshot1.png"],
      additionalInfo:[
        "A 2D GUI snake Game built using JavaFx", 
        "This app allows a user to select shapes to draw, set their properties, and draw the shapes on-screen, with ability to resize shapes",
        "User can select line thickness, line style for drawing lines and shape's borders",
        "Colour and fill colours can be selected for drawing shapes",
        "6 modes avaliable: select, erase, line, circle rectangle, and fill colour",
        "Github link unavaliable since this is an academic project"
      ]
    },
    {
      title:"User authentication system & backend",
      techs:"Node & Express & MongoDB & Google cloud platform",
      description:"Created backend server using Node, Express, Mongoose to handle APIs used in the app. Implemented middleware functions to log errors to text file, authenticate users, and handle exceptions",
      githubLink:"https://github.com/Chris-He01",
      pictureLink:"Registration-form.png",
      techsUsedList:["Node", "Express", "MongoDb", "Mongoose", "Google cloud platform"],
      picturesList:["Registration-form.png"],
      additionalInfo:[
            "Users' database management server to support remote rehabilitation system's login",
            "Created APIs to handle CRUD operations on user's mission activities", 
            "Created APIs to handle petients and clinicians' relationship network which includes adding patient lists, retrieving history, as well as updating users' credentials and infomations",
            "Utilized a MongoDb database using Mongoose the store"]
    },
    {
      title:"GLUTTONOUS-SNAKE-GAME",
      techs:"html",
      description:"an web game of Gluttonous-Snake-game for practiving my html skills",
      githubLink:"",
      pictureLink:"energyStation.png",
      techsUsedList:["html"],
      picturesList:["energyStation.png"],
      additionalInfo:[
        "an web game of Gluttonous-Snake-game for practiving my html skills"
      ]
    },
    {
      title:"chrisheportfolio.netlify.com",
      techs:"Angular6 & gulp & Netlify hosting",
      description:"This is the codebase for the site you are seeing now. Available in both English and French",
      githubLink:"https://github.com/Chris-He01/Chrishe_portfolio",
      pictureLink:"personalWeb.png",
      techsUsedList:["Angular", "gulp", "PrimeNg", "Heroku Hosting", "Netlify hosting"],
      picturesList:["personalWeb.png"],
      additionalInfo:[
          "An awesome portfolio site to showcase some of my works", 
          "Built in Angular6",
          "Utlized Angular translation module for French Translation. Though French translation text was created using Google translate."
        ]
    },
    {
      title:"Chat App",
      techs:"React & Node & Express & Socket.io",
      description:"a real-time chat applications built using react/react hooks. backend uses Node, Express, and Socket.io",
      githubLink:"https://github.com/Chris-He01",
      pictureLink:"chat.png",
      techsUsedList:["React", "Node","Express", "Socket.io"],
      picturesList:["chat.png"],
      additionalInfo:["A Real Time Chat Application"]
    }
    // {
    //   title:"Recipe Builder",
    //   techs:"React & GraphQL & MongoDB",
    //   description:"A tool to help average guys/girls to remember cooking recipes",
    //   githubLink:"https://github.com/JingfeiPeng/graphqlproject",
    //   pictureLink:"underConstruction.png",
    //   techsUsedList:["React", "Apollo", "GraphQL", "Node", "Express", "MongoDB","mlab"],
    //   picturesList:["underConstruction.png"],
    //   additionalInfo:["A tool to help average guys to remember cooking recipes",
    //     "In progress in building a backend with Node/express, GraphQL ",
    //     "In progress to build front-end with React, and apollo"]
    // },
  ]