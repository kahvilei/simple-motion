export function extractEntranceConfig(element) {
    const config = JSON.parse(element?.getAttribute('simple_animation'))??{ mode: "normal"}
    return {
        ...config,
        mode: "normal"
    };
}

export function extractExitConfig(element) {
    return { 
        ...extractEntranceConfig(element),
        mode: "reverse"
    };
}

export function wrapAnimatedElements(elements) {
    const wrappedElements = [];
    for (const element of elements){
        let watchContainer = element;
        const wrapperClass = "simple-animate-wrapper";
        // Check if container already exists
        let existingContainer = element.parentNode.className === wrapperClass || element.className === wrapperClass;

        if (!existingContainer) {
            const wrapper = document.createElement("div");
            wrapper.classList.add(wrapperClass);
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            watchContainer = wrapper;
        } else if(element.parentNode.className === wrapperClass){
            watchContainer = element.parentNode;
        }
        wrappedElements.push(watchContainer);
    }
    return wrappedElements;
}

export default function generateFrames(preset, direction) {
  let origin = "center";
  const { frames, translateFactor } = preset

  switch(direction){
    case "up":
      origin = "bottom center";
      break;
    case "down":
      origin = "top center";
      break;
    case "right":
      origin = "center left";
      break;
    case "left":
      origin = "center right";
      break;
    default: 
      origin = "center";
  }
    
    return frames.map(frame => {
        let clipPath = "none";
        if(frame.window !== undefined){
            
            const windowPercent = frame.window * 100;
            
            switch(direction) {
                case "up":
                    // Wipe from top to bottom
                    clipPath = `polygon(0% ${100 - windowPercent}%, 100% ${100 - windowPercent}%, 100% 100%, 0% 100%)`;
                    break;
                case "down":
                    // Wipe from bottom to top
                    clipPath = `polygon(0% 0%, 100% 0%, 100% ${windowPercent}%, 0% ${windowPercent}%)`;
                    break;
                case "left":
                    // Wipe from left to right
                    clipPath = `polygon(${100 - windowPercent}% 0%, 100% 0%, 100% 100%, ${100 - windowPercent}% 100%)`;
                    break;
                case "right":
                    // Wipe from right to left
                    clipPath = `polygon(0% 0%, ${windowPercent}% 0%, ${windowPercent}% 100%, 0% 100%)`;
                    break;
                default:
                    // Default to left-to-right wipe
                    clipPath = `polygon(${frame.window*-50 + 50}% 0%, ${frame.window *50 +50}% 0%, ${frame.window *50 +50}% 100%, ${frame.window*-50 + 50}% 100%)`;
            }
        }
        return {
            transformOrigin: origin,
            clipPath: clipPath,
            ...frame,
            scale: 1,
            translate: 0,
            transform: `scale(${frame.scale}) translate(${generateTranslateString(frame, translateFactor, direction)}) `,
        }
    });
}

function generateTranslateString (frame, translateFactor, direction) {
    if (frame.translate === undefined){
        
        return "0 0"
    }
    const xMult = (direction === "right" || direction === "left")?((direction === "right")?-1:1):0;
    const yMult = (direction === "up" || direction === "down")?((direction === "up")?1:-1):0;
    console.log(xMult,yMult,translateFactor,frame.translate)
    return `calc((${translateFactor} * ${frame.translate/100}) * ${xMult}), calc((${translateFactor} * ${frame.translate/100}) * ${yMult})`
}