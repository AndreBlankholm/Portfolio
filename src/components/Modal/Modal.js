import React from "react";
import './Modal.css';


function Modal(props) {
  const {currentProject, onClose} = props;
  
  return (
    // JSX
    
    
    <div className="modalBackdrop" >
      <div className="modalContainer">
        <h3 className="modalTitle">{currentProject.title}</h3>
        <img src={require(`../../assests/images/img_folder/${currentProject.img}`)} alt={currentProject.alt} />
        <p>{currentProject.description}</p>
        <button type="button" onClick={() => onClose(currentProject.id)}>Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
