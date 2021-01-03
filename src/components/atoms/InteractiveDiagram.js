import React from 'react';
import { Rectangle, Ellipse } from '.'

// 도형에 상호작용 부여
const InteractiveDiagram = ({ type, position, size, startDrag, drag, endDrag, doubleClick }) => {

    const diagramTypes = {
        Rectangle: Rectangle,
        Ellipse: Ellipse
    }

    return (
        <>
            {(diagram => {
                const DiagramType = diagramTypes[diagram];
                return (
                    <DiagramType
                        position={position}
                        size={size}
                        startDrag={startDrag}
                        drag={drag}
                        endDrag={endDrag}
                        doubleClick={doubleClick}/>
                );
            })(type)}
        </>
    );
}

export default InteractiveDiagram;