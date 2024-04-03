import React from "react";
import ProjectsHolder from "src/components/organisms/ProjectsHolder";
import DefaultTemplate from "src/components/templates/DefaultTemplate"

const ProjectPage = () => {
    return (
        <DefaultTemplate>
            <h2> Projects List </h2>
            <ProjectsHolder/>
        </DefaultTemplate>
     )
}

export default ProjectPage;
