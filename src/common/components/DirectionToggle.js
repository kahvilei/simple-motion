import { arrowUp, arrowDown, arrowRight, arrowLeft, border, square } from '@wordpress/icons';
import { 
    __experimentalToggleGroupControl as ToggleGroupControl,
  	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    Notice
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import styles from '../../animation/styles';

export default function DirectionToggle( props ) {
    const { value, onChange, label, style } = props;

    const canCenter = (styles[style]?.canCenter);

    if (!ToggleGroupControl || !ToggleGroupControlOptionIcon) {
        return (<Notice status="error" isDismissible={false}>Experimental toggle controls are either deprecated or upgraded, update Simple Animation plugin to resolve.</Notice>)
    }
    return (
        <ToggleGroupControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            isBlock
            value={value}
            label={label}
            onChange={onChange}
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
            {canCenter &&
                <ToggleGroupControlOptionIcon
                    icon={border}
                    value="center"
                    label="From Center"
                />
            }
            
        </ToggleGroupControl>

    );
}