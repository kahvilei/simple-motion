export function extractEntranceConfig(element) {
    const config = element.attributes?.simple_animation??{}
    return {...config};
}

export function extractExitConfig(element) {
    return { 
        ...extractEntranceConfig(element),
        fill: "backwards"
    };
}