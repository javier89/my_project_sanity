import React, {useEffect, useState} from "react";
import project from "../../ataraxia/schemas/project.js";
import sanityClient from '../client.js';

export default function Project(){

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[type == project"]{
            title,
            date,
            place,
            description,
            projectType,
            link, 
            tags
        }`).then((data) => setProjectData(data))
           .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Proyectos</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-23">
                    Bienvenidos a la pagina de porjectos
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {project.Data && projectData.map((project, index)=> (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                <a
                                href={project.link}
                                alt={project.title}
                                targe = "_blank"
                                rel = "noopener noreferrer"
                                >{project.title}</a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Final</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold"></strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl" >
                                        View The Project{" "}
                                    <span role="img" aria-label="right pointer">

                                    </span>
                                </a>
                                <span></span>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
    
}