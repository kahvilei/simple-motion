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