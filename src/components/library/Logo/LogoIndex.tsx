import React from "react";

interface logoComponentProps {
  id: string;
  width?: string | number;
  height?: string | number;
}

const LogoComponent: React.FC<logoComponentProps> = ({ id, width, height }) => {
  return (
    <img
      id={id}
      width={width ? width : "150px"}
      height={height}
      src="/assets/logo.svg"
    />
  );
};

export default LogoComponent;
