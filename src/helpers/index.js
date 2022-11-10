export const getPosition = (positionProp) => {
    const position = positionProp.split("-");
    const vertical = position[0].includes("top") ? { top: 0 } : { bottom: 0 };
    const horizontal = position[1].includes("right")
      ? { right: "0" }
      : position[1].includes("center")
      ? { right: "50%" }
      : { left: "0%" };
    return {
      vertical: vertical,
      horizontal: horizontal,
    };
  };
  