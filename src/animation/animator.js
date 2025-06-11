import generateFrames from "./utils";
import { fade } from "./styles/fade";
import { slide } from "./styles/slide";
import { zoom } from "./styles/zoom";
import { pop } from "./styles/pop";
import { wipe } from "./styles/wipe";

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
        case "pop":
        preset = pop;
        break;
        case "wipe":
        preset = wipe;
        break;
        default:
        preset = fade;
    }

    if (preset.hideOutside) {
        element.parentNode.style.overflow = "hidden";
    }

    element.animate(
        keyframes??generateFrames(preset, direction), {
            duration: duration??preset.duration??200,
            easing: easing??preset.easing??'ease-out',
            fill: fill??preset.fill??'forwards',
            delay: delay??preset.delay??0,
            direction: mode??"normal"
        }
    )    
}