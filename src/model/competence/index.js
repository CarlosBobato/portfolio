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
    ]
};

export default data;