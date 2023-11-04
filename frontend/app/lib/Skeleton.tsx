import React from "react";

interface Props {
  width: number | string;
  height: number | string;
  radius?: string;
  className?: string;
}

export default function Skeleton(props: Props) {
  const generateCss = () => {
    const { width, height, radius, className } = props;
    var css = "";
    if (className) {
      css += className + " ";
    }
    css += "w-" + width + " ";
    css += "h-" + height + " ";
    if (radius) {
      css += "rounded-" + radius + " "
    };
    css += "bg-gray-400 ";
    return css;
  };

  return (
    <div className="animate-pulse flex space-x-4">
      <div className={generateCss()}></div>
    </div>
  );
}
