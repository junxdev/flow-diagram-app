import React from 'react';
import { Paragraph } from '..';

// 입력된 텍스트를 보여주는 영역
const TextInDiagram = ({ position, size, textInDiagram }) => {

    return (
        <>
            <foreignObject width="100%" height="100%" pointerEvents="none">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    marginLeft: position.x,
                    paddingTop: position.y,
                    width: size.width,
                    height: size.height,
                    border: "none",
                }}>
                    <div style={{
                        position: "absolute",
                        textAlign: "center"
                    }}>
                        <div>
                            {/* 줄바꿈 적용 */}
                            {textInDiagram.split('\n').map((text, index) => {
                                return <Paragraph key={index} text={text} />
                            })}
                        </div>
                    </div>
                </div>
            </foreignObject>
        </>
    );
}

export default TextInDiagram;