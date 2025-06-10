import { arrowUp, arrowDown, arrowRight, arrowLeft, border, square } from '@wordpress/icons';
import { 
    __experimentalToggleGroupControl as ToggleGroupControl,
  	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    Notice
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function DirectionToggle( props ) {
    const { value, onChange, label } = props;

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
            <ToggleGroupControlOptionIcon
                icon={border}
                value="center"
                label="From Center"
            />
        </ToggleGroupControl>

    );
}