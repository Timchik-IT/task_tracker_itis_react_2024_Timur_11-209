import { React, useState } from "react";
import ConfirmModal from "src/components/molecules/Modal/Modal";
import Button from "src/components/atoms/Button/Button";
import { mockProjects } from "./mokProjects";
import { Table, TableCol, TableColActions, TableHead } from "./styled";

const ProjectsHolder = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteConfirm = () => {
        setShowModal(false)
    }

    const handleDeleteCancel = () => {
        setShowModal(false)
    }

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
                            <Button lable='Edit' variant="primary" onClick={() => {}} color='green'>Edit</Button>
                            <Button lable='Show' variant="warning" onClick={() => {}} color='blue'>Show</Button>
                            <Button lable='Delete' variant="danger" onClick={() => setShowModal(true)} color='red'>Delete</Button>
                        </TableColActions>
                    </tr>
                )
                })}
            </tbody>

            { (showModal && (
            <ConfirmModal 
                onCancel={handleDeleteCancel}
                onConfirm={handleDeleteConfirm}
                show={showModal}/>))
            }
        </Table>
    )
}

export default ProjectsHolder;
