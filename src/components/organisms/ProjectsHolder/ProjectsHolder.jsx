import Button from "src/components/atoms/Button/Button";
import { mockProjects } from "./mokProjects";
import { Table, TableCol, TableColActions, TableHead } from "./styled";

const ProjectsHolder = () => {
    return(
        <Table>
            <thead>
                <tr>
                    <TableHead>id</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                </tr>
            </thead>

            <tbody>
                {mockProjects.map(({ id, name, description }) => {
                return (
                    <tr key={id}>
                    <TableCol>{id}</TableCol>
                    <TableCol>{name}</TableCol>
                    <TableCol>{description}</TableCol>
                    <TableColActions>
                        <Button lable='Edit' variant="primary" onClick={() => {}}>Edit</Button>
                        <Button lable='Show' variant="warning" onClick={() => {}}>Show</Button>
                        <Button lable='Delete' variant="danger" onClick={() => {}}>Delete</Button>
                    </TableColActions>
                    </tr>
                )
                })}
            </tbody>
        </Table>
    )
}

export default ProjectsHolder;
