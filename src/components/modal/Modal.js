import React, { useEffect, useState } from "react";
import "./Modal.css";
import close from "./../../img/close.svg";
import Accordion from "../Accordion/Accordion";

export default function Modal({ visible, setVisible, title, children, accordionData,modalText }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsMounted(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!isMounted) return null;

  return (
    <div
      className={`overlay ${isVisible ? "visible" : ""}`}
      onClick={() => setVisible(false)}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <p>{title}</p>
          <button onClick={() => setVisible(false)}>
            <img src={close} alt="close" />
          </button>
        </div>
        <div className="modalContent">
          {children}
          <div className="modalContentRight">
          <p style={{ whiteSpace: "pre-line", fontSize:'1.2rem' }}>{modalText}</p>
            {accordionData.map((item, index) => (
              <Accordion key={index} title={item.title}>
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
