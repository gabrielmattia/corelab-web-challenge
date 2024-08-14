import { useState } from "react";

interface PencilIconProps {
  onClick?: () => void;
}

const PencilIcon: React.FC<PencilIconProps> = ({ onClick }) => {
  const [update, setUpdate] = useState(false);

  const handleClick = () => {
    setUpdate(!update);
    console.log("click");
    if (onClick) {
      onClick();
    }
  };
  return update ? (
    <svg
      onClick={handleClick}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="12.5" r="12.5" fill="#FFE3B3" />

      <path
        d="M14.0725 9.63188L14.9603 10.5197L6.38473 19.0763H5.51584V18.2074L14.0725 9.63188ZM17.4725 3.96521C17.2364 3.96521 16.9908 4.05965 16.8114 4.2391L15.0831 5.96743L18.6247 9.5091L20.3531 7.78077C20.7214 7.41243 20.7214 6.79854 20.3531 6.4491L18.1431 4.2391C17.9542 4.05021 17.7181 3.96521 17.4725 3.96521ZM14.0725 6.97799L3.62695 17.4235V20.9652H7.16862L17.6142 10.5197L14.0725 6.97799Z"
        fill="#51646E"
      />
    </svg>
  ) : (
    <svg
      onClick={handleClick}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M10.5498 6.16667L11.4376 7.05444L2.86206 15.6111H1.99318V14.7422L10.5498 6.16667ZM13.9498 0.5C13.7137 0.5 13.4682 0.594444 13.2887 0.773889L11.5604 2.50222L15.1021 6.04389L16.8304 4.31556C17.1987 3.94722 17.1987 3.33333 16.8304 2.98389L14.6204 0.773889C14.4315 0.585 14.1954 0.5 13.9498 0.5ZM10.5498 3.51278L0.104286 13.9583V17.5H3.64595L14.0915 7.05444L10.5498 3.51278Z"
        fill="#51646E"
      />
    </svg>
  );
};

export default PencilIcon;
