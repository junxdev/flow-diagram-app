import React, { useState } from 'react';
import { TextEditor, TextInDiagram, InteractiveDiagram } from "..";

const Diagram = ({ CTM, diagram }) => {

    // 도형 내 텍스트
    const [textInDiagram, setTextInDiagram] = useState('');
    // 도형 위치
    const [position, setPosition] = useState({
        x: diagram.x,
        y: diagram.y
    });
    // 도형 크기
    const [size, setSize] = useState({
        width: diagram.width,
        height: diagram.height
    });
    // 도형 선택 중인지 여부
    const [selected, isSelected] = useState(false);
    // 도형 이동 시 시작 위치 조정 수치
    const [offset, setOffset] = useState({});
    // 도형 내 텍스트 수정 중인지 여부
    const [editText, setEditText] = useState(false);

    // 현재 마우스 위치를 얻는 함수
    const getMousePosition = (event) => {
        return {
            x: (event.clientX - CTM.e) / CTM.a,
            y: (event.clientY - CTM.f) / CTM.d
        };
    }

    // 드래그를 시작하기 위해 클릭하면 실행되는 함수
    const startDrag = (event) => {
        // 기존 더블 클릭 이벤트 방지
        if (event.detail > 1) {
            event.preventDefault();
        };
        // 도형 선택됨
        isSelected(true);
        const mousePosition = getMousePosition(event);
        setOffset({
            x: mousePosition.x - position.x,
            y: mousePosition.y - position.y
        });
    };

    // 드래그 중 위치를 조정하는 함수
    const drag = (event) => {
        if (selected) {
            const mousePosition = getMousePosition(event);
            setPosition({
                x: mousePosition.x - offset.x,
                y: mousePosition.y - offset.y
            });
        }
    };

    // 드래그 종료 함수
    const endDrag = () => {
        isSelected(false);
    };

    // 더블 클릭하면 텍스트 수정 모드로 전환
    const doubleClick = (event) => {
        selectTextInDiagram();
    };

    // 텍스트 수정 모드 전환
    const selectTextInDiagram = () => {
        setEditText(true);
    }

    return (
        <>
            <g>
                <InteractiveDiagram
                    type={diagram.type}
                    position={position}
                    size={size}
                    startDrag={startDrag}
                    drag={drag}
                    endDrag={endDrag}
                    doubleClick={doubleClick}
                    selectTextInDiagram={selectTextInDiagram} />
                {textInDiagram && !editText && <TextInDiagram
                    position={position}
                    size={size}
                    textInDiagram={textInDiagram} />}
                {editText && <TextEditor
                    position={position}
                    size={size}
                    textInDiagram={textInDiagram}
                    setTextInDiagram={setTextInDiagram}
                    setEditText={setEditText} />}
            </g>
        </>
    );
}

export default Diagram;