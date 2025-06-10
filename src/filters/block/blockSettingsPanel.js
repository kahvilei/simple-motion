import { InspectorControls } from '@wordpress/block-editor';
import { 
	PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import DirectionToggle from '../../common/components/DirectionToggle';
import SelectAnimation from '../../common/components/SelectAnimation';
import SimpleLogo from '../../common/icons/simpleLogo';

export function blockSettingsPanel( BlockEdit ) {
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
							<><SimpleLogo />&nbsp;&nbsp;Animation</>,
							'simple-animation'
						) }
					>
						<SelectAnimation
							onChange={(value) => {
								setAttributes({
									...attributes,
									simpleAnimation: {
										...(simpleAnimation??simpleAnimation),
										style: value
									}
								})
							}
							}
							value={attributes.simpleAnimation?.style??undefined}
							label="Animation Style"
						/>
						{(simpleAnimation && simpleAnimation.style !== "") &&
						<>
							<DirectionToggle
									onChange={(value) => {
											setAttributes({
													...attributes,
													simpleAnimation: {
														...(simpleAnimation??simpleAnimation),
														direction: value
													}
												})
										}
									}
									value={simpleAnimation?.direction??undefined}
									label="Direction"
								/>
							
						</>
							
						 }
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}