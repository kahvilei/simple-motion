import { arrowUp, arrowDown, arrowRight, arrowLeft, border, square } from '@wordpress/icons';
import { InspectorControls } from '@wordpress/block-editor';
import { 
	 __experimentalToggleGroupControl as ToggleGroupControl,
  	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	PanelBody, 
	PanelRow, 
	Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export function settingsPanel( BlockEdit ) {
	return ( props ) => {
		const { attributes, setAttributes } = props;

		// Retrieve selected attributes from the block.
		const { simpleAnimation } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __(
							<><Icon icon={square} /> Animation</>,
							'simple-animation'
						) }
					>
			
							<ToggleGroupControl
							 	__next40pxDefaultSize
  								__nextHasNoMarginBottom
								isBlock
								value={attributes.simpleAnimation?.direction??undefined}
                                label="Direction"
								onChange={(value) => {
									setAttributes({
											...attributes,
											simpleAnimation: {
												direction: value
											}
										})
								}}
								width={"100%"}
                            >
								<ToggleGroupControlOptionIcon
									icon={arrowUp} 
									value="up"
									label="Animate Up"
								/>
								<ToggleGroupControlOptionIcon
									icon={arrowDown}
									value="down"
									label="Animate Down"
								/>
								<ToggleGroupControlOptionIcon
									icon={arrowRight}
									value="right"
									label="Animate Right"
								/>
								<ToggleGroupControlOptionIcon
									icon={arrowLeft}
									value="left"
									label="Animate Left"
								/>
								<ToggleGroupControlOptionIcon
									icon={border}
									value="center"
									label="From Center"
								/>
							</ToggleGroupControl>

			
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}