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
        <p>Description:  {currentProject.description}</p>
        <div>
          <p>
          <a href={currentProject.github}>GitHub: {currentProject.github}</a>
          </p>
          <p>
          <a href={currentProject.deployment}>Deployment: {currentProject.deployment}</a>
          </p>
          
          </div>        
        <button type="button" onClick={() => onClose(currentProject.id)}>Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
