import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({ onConfirm, onCancle, show }) => {
    return (
        <Modal show={show} onHide={onCancle}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancle}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;
