import React from "react";

const Modal = ({ onClose, currentProject }) => {
  const { name, github, deployment, category, index } = currentProject;

  return (
    <div className="modalContainer">
      <h3>{name}</h3>
      <img
        src={require(`../../assets/${category}/${index}.jpg`).default}
        alt="current"
      />
      <div>
        <h4>{github}GitHub</h4>
        <h4> {deployment}Live Website</h4>
      </div>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Modal;
