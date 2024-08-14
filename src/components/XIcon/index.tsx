interface XIconProps {
  onClick?: () => void;

}
const XIcon:React.FC<XIconProps>  = ({onClick}) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <svg
      onClick={handleClick}

      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M13.1817 1.8608L11.8581 0.53717L6.61051 5.78475L1.36293 0.53717L0.0393066 1.8608L5.28688 7.10838L0.0393066 12.356L1.36293 13.6796L6.61051 8.432L11.8581 13.6796L13.1817 12.356L7.93414 7.10838L13.1817 1.8608Z"
        fill="#51646E"
      />
    </svg>
  );
};

export default XIcon;
