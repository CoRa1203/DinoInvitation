import {useState} from "react";
import './Tooltip.css'

const Tooltip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
      };
    
    return (
        <div className="tooltipBlock"  onClick={handleClick}>
        <div
      className="tooltip-container"

    //   onMouseEnter={() => setIsVisible(true)}
    //   onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip">{text}</div>}
    </div>
    </div>
    )
}
export default Tooltip;