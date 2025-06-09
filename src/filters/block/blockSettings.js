
/**
 * Adds a custom 'simpleAnimation' attribute to all blocks' settings
 *
 * @param {Object} settings The block settings for the registered block type.
 * @param {string} name     The block type name, including namespace.
 * @return {Object}         The modified block settings.
 */
export function blockSettings( settings, name ) {

    settings.attributes = {
        ...settings.attributes,
        simpleAnimation: {
            type: 'object',
            default: null,
        },
    }; 
 
    return settings;
}