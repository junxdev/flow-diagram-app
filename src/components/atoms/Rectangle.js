import React from 'react';

// 직사각형 도형
const Rectangle = ({position, size, startDrag, drag, endDrag, doubleClick}) => {

    return (
        <>
            <rect
                x={position.x}
                y={position.y}
                width={size.width}
                height={size.height}
                fill="#ffffff"
                stroke="#000000"
                onMouseDown={event => startDrag(event)}
                onMouseMove={event => drag(event)}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onDoubleClick={event => {
                    doubleClick(event)
                }}
            />
        </>
    );
}

export default Rectangle;