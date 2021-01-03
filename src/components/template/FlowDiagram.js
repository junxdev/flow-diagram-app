import { DiagramSVGPanel, DiagramButtonPanel } from '..';
import React, { useState } from 'react'

const FlowDiagram = ({ diagramDefaultTypes }) => {
    // 생성한 도형 목록
    const [diagrams, setDiagrams] = useState([]);
    // 도형 번호 관리
    const [count, setCount] = useState(0);

    // 도형 목록에 새 도형 추가
    const addDiagram = (diagram) => {
        const history = diagrams.slice();
        diagram.number = count;
        history.push(diagram);
        setDiagrams(history);
        setCount(count + 1);
    };

    return (
        <>
            <div className="FlowDiagram">
                {/* 버튼 패널 유기체: 도형 종류 데이터 및 도형 추가 함수 전달 */}
                <DiagramButtonPanel diagramDefaultTypes={diagramDefaultTypes} addDiagram={addDiagram} />
                {/* svg 패널 유기체: 도형 목록 데이터 전달 */}
                <DiagramSVGPanel diagrams={diagrams} />
            </div>
        </>
    );
}

export default FlowDiagram;