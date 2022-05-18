import { Experience } from "../../models/experience.model";

export const experiencesData: Experience[] = [
    
    {
        title: "OBEL_Lab",
        descriptions: [{
            title: "DESCRIPTION_1", details: ["D1_D0", "D1_D1", "D1_D2"]
        }, {
            title: "DESCRIPTION_2", details: []
        }, {
            title: "DESCRIPTION_3", details: []
        }],
        techsUsed: ["Node.js", "Express", "React", "MongoDB", "Mediapipe(Google ML)", "electron", "docker", "QT"],
        period: "Jan 2022 - Apr 2022",
        logoImg: "obel.jpg",
        show: false
    },{
        title: 'DingTech',
        descriptions: [
            {
                title: "DESCRIPTION_1", details: ["D1_D0", "D1_D1","D1_D2"]
            }
        ],
        techsUsed: ['rxjs', 'NgRx', 'React', 'React Hooks & Contexts',
        'Joint.js', 'Node/Express', 'Electron', 'MongoDB', 'docker', 'Angular'],
        period: "May 2021 - Aug 2021",
        logoImg: "ding.png",
        show: false
    },
    
    {
        title: 'ASSA_ABLOY',
        descriptions: [
            {
                title: "DESCRIPTION_1", details: []
            },
            {
                title: 'GENSYNTH', details: []
            },
            {
                title: 'GENSYNTH2', details: []
            }
        ],
        techsUsed: [".net", "c#", 'HTML', 'CSS', 'Typescript', 'JavaScript', 'ASP', 'mySQL', 'jQuery', 'Bootstrap', 'Bootstrap', 'PHP', 'SQLsever', 'PostreSQL'],
        period: "May 2020 - Aug 2020",
        logoImg: "assa.png",
        show: false
    },
    {
        title: 'Xmind_Education',
        descriptions: [{
            title: "DESCRIPTION_1", details: []
        }, {
            title: "DESCRIPTION_2", details: []
        }],
        techsUsed: ["Python", "TensorFlow", "Scikit-learn", "Numpy", "Pandas", "matplotlib", "Keras"],
        period: "Jan 2019 - Apr 2019",
        logoImg: "phenex.png",
        show: false
    }
]