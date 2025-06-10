import generateFrames from "./keyFrameGenerator";

export default function animate(element, config) {
    const { style, direction, keyframes, duration, easing, fill, delay, mode } = config;

    console.log(config)

    element.animate(
        keyframes??generateFrames(style, direction), {
            duration: duration??200,
            easing: easing??'ease-out',
            fill: fill??'forwards',
            delay: delay??0,
            direction: mode??"normal"
        }
    )
      
}