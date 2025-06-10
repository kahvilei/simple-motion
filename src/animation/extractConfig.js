export function extractEntranceConfig(element) {
    const config = element.attributes?.simple_animation??{ mode: "normal"}
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