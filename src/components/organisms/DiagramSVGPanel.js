import React from 'react';
import {Diagram, Svg} from '../index';

const DiagramSVGPanel = ({ diagrams }) => {

    return (
        <>
            <div>
                {/* SVG 요소에 도형 목록 데이터를 자식으로 전달*/}
                <Svg>
                    {diagrams.map(diagram => {
                        return <Diagram key={diagram.number} diagram={diagram} />;
                    })}
                </Svg>
            </div>
        </>
    );
}

export default DiagramSVGPanel;