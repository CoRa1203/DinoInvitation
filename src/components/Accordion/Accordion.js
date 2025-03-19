import React, { useState } from "react";
import './../Accordion/Accordion.css';
export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordionHeader" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <div className="accordionArrow">
          {isOpen ? (
           <svg
           className="accordionIcon"
           width="32"
           height="32"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
          ) : (
            <svg
            className="accordionIcon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          )}
        </div>
      </div>
      {isOpen && <div className="accordionContent">{children}</div>}
    </div>
  );
}