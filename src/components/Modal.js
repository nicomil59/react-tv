import React from "react";

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Synopsis</h3>
        </div>
        <div className="modal-body">{props.show.overview}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="btn btn-close">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
