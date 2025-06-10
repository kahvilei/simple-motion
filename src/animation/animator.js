import generateFrames from "./keyFrameGenerator";

export default function animate(element, config) {
    const { style, direction, keyframes, duration, easing, fill, delay } = config;

    element.animate(
        keyframes??generateFrames(style, direction), {
            duration: duration??500,
            easing: easing??'ease-out',
            fill: fill??'forwards',
            delay: delay??0
        }
    )
      
}