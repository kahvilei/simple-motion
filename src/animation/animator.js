import generateFrames from "./keyFrameGenerator";
import { fade } from "./styles/fade";
import { slide } from "./styles/slide";

export default function animate(element, config) {
    const { style, direction, keyframes, duration, easing, fill, delay, mode } = config;

    let preset = "fade"
    
    switch(style){
        case "slide":
        preset = slide;

        break;
        default:
        preset = fade;
    }

    let animateNode = element

    if (preset.hideOutside) {
        const wrapperClass = "animate-overflow-container";
        console.log(element)
        // Check if container already exists
        let existingContainer = element.parentNode.className === wrapperClass;
    
        
        if (!existingContainer) {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            wrapper.classList.add(wrapperClass);
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
        } 
    }

    element.animate(
        keyframes??generateFrames(preset, direction), {
            duration: duration??200,
            easing: easing??'ease-out',
            fill: fill??'forwards',
            delay: delay??0,
            direction: mode??"normal"
        }
    )
      
}