import Loader from "../components/atoms/Loader";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import ProjectsTable from '../components/organisms/ProjectsTable';

import { useProjects } from "../lib/hooks/project";

const ProjectsPage = () => {
  const { projects, loading, error } = useProjects();

  return (
    <DefaultTemplate>
      <h2>Projects List</h2>

      {error && !loading && <div>Ошибка</div>}

      {loading && 
        <center>
          <Loader/>
        </center>}

      {projects && !loading && <ProjectsTable projects={projects} />}
    </DefaultTemplate>
  );
};

export default ProjectsPage;
