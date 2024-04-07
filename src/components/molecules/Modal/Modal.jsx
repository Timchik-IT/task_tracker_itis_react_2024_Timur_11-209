import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = ({ onConfirm, onCancle }) => {
    return (
        <Modal>
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
