import { Button, Modal } from "react-bootstrap";
import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nulla?
        </p>
      </Modal.Body>
    </Modal>
  );
}

function MyModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="modalBtnDiv">
      <Button
        className="modalBtn"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default MyModal;
