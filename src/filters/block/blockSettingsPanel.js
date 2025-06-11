import { InspectorControls } from '@wordpress/block-editor';
import {
    PanelBody,
	Panel
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import DirectionToggle from '../../common/components/DirectionToggle';
import SelectAnimation from '../../common/components/SelectAnimation';
import SimpleLogo from '../../common/icons/simpleLogo';
import { useEffect, useRef } from 'react';
import animate from '../../animation/animator';
import SecondRange from '../../common/components/SecondRange';
import { border } from '@wordpress/icons';

export function blockSettingsPanel( BlockEdit ) {
    return ( props ) => {
        const { attributes, setAttributes } = props;
        const blockRef = useRef();
        const animateTimeoutRef = useRef();
        
        // Retrieve selected attributes from the block.
        const { simpleAnimation } = attributes;
        
        useEffect(() => {
            // Clear previous timeout to debounce animate calls
            if (animateTimeoutRef.current) {
                clearTimeout(animateTimeoutRef.current);
            }
            
            // Debounce animate call by 300ms
            animateTimeoutRef.current = setTimeout(() => {
                console.log(blockRef, simpleAnimation)
                if (blockRef.current && simpleAnimation && simpleAnimation.style !== ""){
                    animate(blockRef.current.nextElementSibling, simpleAnimation);
                }
            }, 300);
            
            // Cleanup function
            return () => {
                if (animateTimeoutRef.current) {
                    clearTimeout(animateTimeoutRef.current);
                }
            };
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
                            }}
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
                                }}
                                value={simpleAnimation?.direction??undefined}
                                label="Direction"
                                style={simpleAnimation.style}
                            />
						

							<SecondRange
								label={__('Animation Delay (seconds)', 'simple-animation')}
								value={simpleAnimation?.delay/1000 ?? undefined}
								onChange={(value) => {
									setAttributes({
										...attributes,
										simpleAnimation: {
											...(simpleAnimation??simpleAnimation),
											delay: value?value*1000:undefined
										}
									})
								}}
							/>
							<SecondRange
								label={__('Animation Duration (seconds)', 'simple-animation')}
								value={simpleAnimation?.duration/1000 ?? undefined}
								onChange={(value) => {
									setAttributes({
										...attributes,
										simpleAnimation: {
											...(simpleAnimation??simpleAnimation),
											duration: value?value*1000:undefined
										}
									})
								}}
							/>
                        </>
                        }
                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}