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

export function setAnimation(position, animation) {
  switch (position) {
    case "bottom-left":
      if (animation === "bounce") {
        return "left-right-bounce";
      } else {
        return "left-right-smooth";
      }
    case "bottom-center":
      if (animation === "bounce") {
        return "down-up-bounce";
      } else {
        return "down-up-smooth";
      }
    case "bottom-right":
      if (animation === "bounce") {
        return "right-left-bounce";
      } else {
        return "right-left-smooth";
      }
    case "top-left":
      if (animation === "bounce") {
        return "left-right-bounce";
      } else {
        return "left-right-smooth";
      }
    case "top-center":
      if (animation === "bounce") {
        return "up-down-bounce";
      } else {
        return "up-down-smooth";
      }
    case "top-right":
      if (animation === "bounce") {
        return "right-left-bounce";
      } else {
        return "right-left-smooth";
      }
    default:
      break;
  }
}
