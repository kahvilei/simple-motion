import { addFilter } from "@wordpress/hooks"
import { __ } from '@wordpress/i18n';
import { blockSettings } from "./filters/block/blockSettings"
import { blockSettingsPanel } from "./filters/block/blockSettingsPanel";


/* Block filters */
addFilter(
	'blocks.registerBlockType',
	'simple-animation/add-animation-attribute',
	blockSettings
);


/* Settings Panel */
addFilter(
	'editor.BlockEdit',
	'simple-animation/animation-edit-panel',
	blockSettingsPanel
);