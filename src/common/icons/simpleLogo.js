
export default function SimpleLogo( props ) {
    const { height, width, color} = props;

    return (
        <svg width={width??"20"} height={height??width??"20"} xmlns="http://www.w3.org/2000/svg">
            <rect width={width??"20"} height={height??width??"20"} x="0" y="0" fill={color??"black"} />
        </svg> 
    );
}