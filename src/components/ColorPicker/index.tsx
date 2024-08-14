import React, { useState, useEffect, useRef } from "react";
import styles from "./ColorPicker.module.scss";

interface ColorPickerProps {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  handleSetColor: (color:string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ setColor,handleSetColor }) => {
  const [showColors, setShowColors] = useState(false);

  const colors = [
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD6FF",
    "#ECA1FF",
    "#DAFF8B",
    "#FFA285",
    "#CDCDCD",
    "#979797",
    "#A99A7C",
  ];
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target as Node)
    ) {
      setShowColors(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleColorClick = (color: string) => {
    setColor(color);
    handleSetColor(color);
    setShowColors(false);
  };

  return (
    <div
      ref={pickerRef}
      style={{ position: "relative", display: "inline-block" }}
      className={styles.ColorPicker}
    >
      <div
        onClick={() => setShowColors(!showColors)}
        style={{ cursor: "pointer" }}
      >
        {!showColors ? (
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1011 11.5468C16.1011 11.5468 14.1011 13.7168 14.1011 15.0468C14.1011 15.5772 14.3118 16.086 14.6869 16.461C15.062 16.8361 15.5707 17.0468 16.1011 17.0468C16.6316 17.0468 17.1403 16.8361 17.5153 16.461C17.8904 16.086 18.1011 15.5772 18.1011 15.0468C18.1011 13.7168 16.1011 11.5468 16.1011 11.5468ZM2.31113 10.0468L7.10113 5.25681L11.8911 10.0468M13.6611 8.98681L4.72113 0.046814L3.31113 1.45681L5.69113 3.83681L0.541133 8.98681C-0.0488672 9.54681 -0.0488672 10.5168 0.541133 11.1068L6.04113 16.6068C6.33113 16.8968 6.72113 17.0468 7.10113 17.0468C7.48113 17.0468 7.87113 16.8968 8.16113 16.6068L13.6611 11.1068C14.2511 10.5168 14.2511 9.54681 13.6611 8.98681Z"
              fill="#51646E"
            />
            <path
              d="M7.17009 15.0439L2.34009 10H11.9075L7.17009 15.0439Z"
              fill="#FFA000"
            />
          </svg>
        ) : (
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14.4945" cy="15" r="14.4504" fill="#FFE3B3" />
            <path
              d="M21.4956 16.5469C21.4956 16.5469 19.4956 18.7169 19.4956 20.0469C19.4956 20.5773 19.7063 21.086 20.0814 21.4611C20.4565 21.8362 20.9652 22.0469 21.4956 22.0469C22.0261 22.0469 22.5348 21.8362 22.9098 21.4611C23.2849 21.086 23.4956 20.5773 23.4956 20.0469C23.4956 18.7169 21.4956 16.5469 21.4956 16.5469ZM7.70563 15.0469L12.4956 10.2569L17.2856 15.0469M19.0556 13.9869L10.1156 5.04691L8.70563 6.45691L11.0856 8.83691L5.93563 13.9869C5.34563 14.5469 5.34563 15.5169 5.93563 16.1069L11.4356 21.6069C11.7256 21.8969 12.1156 22.0469 12.4956 22.0469C12.8756 22.0469 13.2656 21.8969 13.5556 21.6069L19.0556 16.1069C19.6456 15.5169 19.6456 14.5469 19.0556 13.9869Z"
              fill="#51646E"
            />
            <path
              d="M12.5646 20.0439L7.73459 15.0001H17.302L12.5646 20.0439Z"
              fill="#FFA000"
            />
          </svg>
        )}
      </div>
      {showColors && (
        <div className={styles.ColorPalette}>
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                width: "37px",
                height: "37px",
                backgroundColor: color,
                borderRadius: "50%",
                margin: "0 5px",
                cursor: "pointer",
              }}
              className={styles.ColorSwatch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
