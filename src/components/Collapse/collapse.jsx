import './collapse.css'
import React, { useState } from 'react';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details className={`flex-card ${isOpen ? 'open' : ''}`}>
      <summary className={`summ-title`} onClick={toggleCollapse}>
        {title}
        <i className={`fas fa-chevron-up ${isOpen ? 'rotate' : ''}`}></i>
      </summary>
      {isOpen && <p className={`p-text`}>{content}</p>}
    </details>
  );
}

export default Collapse;
