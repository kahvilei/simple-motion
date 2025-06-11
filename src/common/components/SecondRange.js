import {
    RangeControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function SecondRange( props ) {
    const { value, onChange, label } = props;


    return (
        <RangeControl
            label={label}
            value={value}
            onChange={onChange}
            marks={[
                {
                    label: '0',
                    value: 0
                },
                {
                    label: '',
                    value: .5
                },
                {
                    label: '1',
                    value: 1
                },
                {
                    label: '',
                    value: 1.5
                },
                {
                    label: '2',
                    value: 2
                },
                {
                    label: '3',
                    value: 3
                },
                {
                    label: '4',
                    value: 4
                },
                {
                    label: '5',
                    value: 5
                }
            ]}
            min={0}
            max={5}
            step={.1}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            allowReset={true}
            withInputField={true}
            currentInput={null}
            resetFallbackValue={null}
        />

    );
}