// import { Link } from 'react-router-dom';

function ProjectCard({ title, description, link}) {

    return(
        <div className="">
            
        <div className="max-w-sm bg-white rounded-2xl shadow-md p-6 m-auto my-4 hover:shadow-lg transition">
            
            <img src="/img\11-11_660x330v2.jpg" alt="" className="w-full rounded-sm" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">View Project</a>
            </div>
        </div>
    );
}

export default  ProjectCard;