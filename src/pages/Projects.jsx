import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: "Todo app", description: "OHHH", link: "#"
    },
    {
        title: "Todo app 2", description: "OHHH 2", link: "#"
    },
];
function Projects() {

    return(
        <div>
            <h2>My projects</h2>
            {projects.map((proj, index) => (
                <ProjectCard key={index} {...proj} />
            ))}
        </div>
    );
}

export default Projects;