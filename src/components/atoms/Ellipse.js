import React from 'react';

// 타원형 도형
const Ellipse = ({position, size, startDrag, drag, endDrag, doubleClick}) => {

    return (
        <>
            <ellipse
                cx={position.x}
                cy={position.y}
                rx={size.width}
                ry={size.height}
                fill="#ffffff"
                stroke="#000000"
                onMouseDown={event => startDrag(event)}
                onMouseMove={event => drag(event)}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onDoubleClick={doubleClick}
            />
        </>
    );
}

export default Ellipse;
