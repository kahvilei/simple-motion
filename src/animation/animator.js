import generateFrames from "./utils";
import { fade } from "./styles/fade";
import { slide } from "./styles/slide";
import { zoom } from "./styles/zoom";

export default function animate(element, config) {
    const { style, direction, keyframes, duration, easing, fill, delay, mode } = config;

    let preset = fade;
    
    switch(style){
        case "slide":
        preset = slide;
        break;
        case "zoom":
        preset = zoom;
        break;
        default:
        preset = fade;
    }

    if (preset.hideOutside) {
        element.parentNode.style.overflow = "hidden";
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