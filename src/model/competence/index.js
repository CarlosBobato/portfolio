import skills from "./skills";
import education from "./education";

const data = {
    index: 3,
    name: "competence",
    type: "list",
    title: "Competências",
    education: education,
    skills: skills,
    relationships: [
        {
            educationId: 1,
            skillIds:[
                4,
                5,
                6,
                9
            ]
        },
        {
            educationId: 2,
            skillIds:[
                1,
                2,
                3
            ]
        },
        {
            educationId: 3,
            skillIds:[
                7,
                8
            ]
        }
    ],
    data: education,
};
// let variable = {
//     index: 1,
//     name: "resume",
//     type: "list",
//     title: "Currículo",
//     data:[
//         {
//             id: 1,
//             date:{
//                 start: "20210802",
//                 end: ""
//             },
//             title: "Desenvolvedor Front-end",
//             description: "Trabalho com o  time analisando código antigo e atualizando-o para versões atuais dos pacotes. Geralmente implementando novas soluções de UX/UI em código.",
//             skillIds: [
//                 1,
//                 2,
//                 3,
//                 4,
//                 5
//             ]
//         },
//     ]
// }

export default data;