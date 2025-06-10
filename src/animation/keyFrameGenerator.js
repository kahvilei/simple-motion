import { fade } from "./styles/fade";

export default function generateFrames(preset, direction) {
  let angle = null;
  const { frames, translateFactor } = preset

  switch(direction){
    case "up":
      angle = 90;
      break;
    case "down":
      angle = 270;
      break;
    case "right":
      angle = 0;
      break;
    case "left":
      angle = 180;
      break;
    default: 
      angle = null;
  }
    
    return frames.map(frame => {
      const { x, y } = polarToCartesian(angle, frame.translate);
      return {
        ...frame,
        translate: `${x}px ${y}px`
      }
    });
}

function polarToCartesian(angle, distance) {
  if (angle === null){
    return { x: 0, y: 0};
  }
   const angleRadians = angle * (Math.PI / 180);
  return {
    x: distance * Math.cos(angleRadians),
    y: distance * Math.sin(angleRadians)
  };
}
