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
      origin = "top center";
      break;
    case "down":
      origin = "bottom center";
      break;
    case "right":
      origin = "center right";
      break;
    case "left":
      origin = "center left";
      break;
    default: 
      origin = "center";
  }
    
    return frames.map(frame => {
      return {
        transformOrigin: origin,
        ...frame,
        translate: generateTranslateString(frame, translateFactor, direction)
      }
    });
}

function generateTranslateString (frame, translateFactor, direction) {
  const xMult = (direction === "right" || direction === "left")?((direction === "right")?1:-1):0;
  const yMult = (direction === "up" || direction === "down")?((direction === "up")?1:-1):0;
  return `calc((${translateFactor} * ${frame.translate/100}) * ${xMult}) calc((${translateFactor} * ${frame.translate/100}) * ${yMult})`
}