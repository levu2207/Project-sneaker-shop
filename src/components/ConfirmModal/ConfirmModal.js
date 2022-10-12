import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./confirmModal.css";

const ConfirmModal = (props) => {
  const { title, onClick } = props;

  const [show, setShow] = useState(false);

  const handleConfirm = (e) => {
    onClick(e.target.value);
    setShow(false);
  };

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShow(true);
        }}
        className="primary-btn rounded-btn-1 small"
      >
        Xóa
      </button>

      <Modal
        centered
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="modal-confirm">
          <i className="bi bi-x-circle"></i>
          <p>{title}</p>

          <div>
            <button className="modal-cancel-btn" onClick={() => setShow(false)}>
              Hủy
            </button>
            <button className="modal-confirm-btn" value="confirm" onClick={(e) => handleConfirm(e)}>
              Đồng ý
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
