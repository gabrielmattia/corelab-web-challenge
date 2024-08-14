import React, { useState, useEffect } from "react";

interface StarIconProps {
  onClick?: () => void;
  isFavorite?: number | string;
  isUpdate?: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({
  onClick,
  isFavorite,
  isUpdate,
}) => {
  const [fillColor, setFillColor] = useState("#455A64");

  useEffect(() => {
    if (isFavorite === 1) {
      setFillColor("#FFD700");
    }
  }, [isFavorite]);

  const handleClick = () => {
    setFillColor((prevColor) =>
      prevColor === "#455A64" ? "#FFD700" : "#455A64"
    );
    if (onClick) {
      onClick();
    }
  };

  return !isUpdate ? (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M10.3291 13.5094L6.69082 15.7059L7.64877 11.5645L4.43625 8.77769L8.67446 8.41966L10.3291 4.51045L11.9837 8.41966L16.2219 8.77769L13.0094 11.5645L13.9674 15.7059M20.0054 7.55848L13.0481 6.96822L10.3291 0.552856L7.61007 6.96822L0.652832 7.55848L5.9264 12.1354L4.34917 18.9378L10.3291 15.3285L16.309 18.9378L14.7221 12.1354L20.0054 7.55848Z"
        fill={fillColor}
      />
    </svg>
  ) : (
    <svg
      onClick={handleClick}
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M10.3291 13.5094L6.69082 15.7059L7.64877 11.5645L4.43625 8.77769L8.67446 8.41966L10.3291 4.51045L11.9837 8.41966L16.2219 8.77769L13.0094 11.5645L13.9674 15.7059M20.0054 7.55848L13.0481 6.96822L10.3291 0.552856L7.61007 6.96822L0.652832 7.55848L5.9264 12.1354L4.34917 18.9378L10.3291 15.3285L16.309 18.9378L14.7221 12.1354L20.0054 7.55848Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default StarIcon;
