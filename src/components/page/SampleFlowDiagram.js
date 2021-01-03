import React from 'react'
import {FlowDiagram} from "..";

const SampleFlowDiagram = () => {

    // 도형 데이터
    const diagramDefaultTypes = [
        {
            type: 'Rectangle',
            x: 0,
            y: 0,
            width: 100,
            height: 50
        }, {
            type: 'Ellipse',
            x: 50,
            y: 20,
            width: 50,
            height: 20
        }
    ];

    return (
        <>
            {/* 템플릿에 도형 데이터 전달 */}
            <FlowDiagram diagramDefaultTypes={diagramDefaultTypes}/>
        </>
    );
}

export default SampleFlowDiagram;