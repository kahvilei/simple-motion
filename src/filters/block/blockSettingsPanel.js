import { InspectorControls } from '@wordpress/block-editor';
import { 
	PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import DirectionToggle from '../../common/components/DirectionToggle';
import SelectAnimation from '../../common/components/SelectAnimation';
import SimpleLogo from '../../common/icons/simpleLogo';
import { useEffect, useRef } from 'react';
import animate from '../../animation/animator';

export function blockSettingsPanel( BlockEdit ) {
	return ( props ) => {
		const { attributes, setAttributes } = props;
		const blockRef = useRef();

		// Retrieve selected attributes from the block.
		const { simpleAnimation } = attributes;

		useEffect(() => {
			console.log(blockRef, simpleAnimation)
			if (blockRef.current && simpleAnimation && simpleAnimation.style !== ""){
				animate(blockRef.current.nextElementSibling, simpleAnimation);
			}
		}, [animate, blockRef, simpleAnimation])


		return (
			<>
				<div style={{display:"none"}} ref={blockRef}></div>
				<BlockEdit { ...props }/>
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
									style={simpleAnimation.style}
								/>
							
						</>
							
						 }
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}