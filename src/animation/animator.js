import generateFrames from "./utils";
import styles from "./styles";

export default function animate(element, config) {
    const { style, direction, keyframes, duration, easing, fill, delay, mode } = config;
    console.log(config)

    let preset = styles.fade;
    
    try {
        preset = styles[style];
    } catch (e) {
        preset = styles.fade;
    }

    if (preset.hideOutside) {
        element.parentNode.style.overflow = "hidden";
    }

    element.animate(
        keyframes??generateFrames(preset, direction), {
            duration: duration??preset.duration??500,
            easing: easing??preset.easing??'ease',
            fill: fill??preset.fill??'forwards',
            delay: delay??preset.delay??0,
            direction: mode??"normal"
        }
    )    
}