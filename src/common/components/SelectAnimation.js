import { arrowUp, arrowDown, arrowRight, arrowLeft, border, square } from '@wordpress/icons';
import { 
    SelectControl,
    Notice
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ANIMATION_DEFAULTS } from '../config/animationConsts';

export default function SelectAnimation( props ) {
    const { value, onChange, label } = props;

    
    return (
        <SelectControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            label={label}
            value={value}
            onChange={onChange}
            options={[
                {
                label: 'None',
                value: ''
                },
                ...(Object.values(ANIMATION_DEFAULTS.style))
            ]}
            />
    );
}