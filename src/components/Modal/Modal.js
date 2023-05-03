import React from "react";
import "./Modal.css";

function Modal(props) {
  const { currentProject, onClose } = props;

  return (
    // JSX

    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{currentProject.title}</h3>
        <img
          className="modal-img"
          src={require(`../../assests/images/img_folder/${currentProject.img}`)}
          alt={currentProject.alt}
        />
        <div>
          <p className="description">
            Description: {currentProject.description}
          </p>
          
        </div>
        <div className="hyperLinks">
        <h2>Links:</h2>
          <div className="h-links">
            
            <p>
              <a href={currentProject.github}>
                GitHub: {currentProject.github}
              </a>
            </p>
            <p>
              <a href={currentProject.deployment}>
                Deployment: {currentProject.deployment}
              </a>
            </p>
          </div>
        </div>

        <button className="modal-button" type="button" onClick={() => onClose(currentProject.id)}>
          Close Modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
