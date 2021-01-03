import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
    &:focus {
        border: none;
        outline: none;
    }
`;

// 텍스트를 수정하는 영역
const TextEditor = ({ position, size, textInDiagram, setTextInDiagram, setEditText }) => {

    // 포커스를 위한 지정
    const divRef = useRef(null);

    // 첫 진입 시에만 포커스
    useEffect(() => {
        divRef.current.focus();
    })

    // 포커스 시 전체 텍스트 선택
    const handleFocus = (event) => {
        event.target.select();
    }

    // 포커스 해제 시 텍스트를 저장하고 텍스트 수정 모드 해제
    const handleLeave = (event) => {
        setTextInDiagram(event.target.value);
        setEditText(false);
    }

    // Ctrl + Enter 시 포커스 해제
    const handleKeyboardLeave = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) {
            handleLeave(event);
        }
    }


    return (
        <>
            <foreignObject width="100%" height="100%" pointerEvents="none">
                <Textarea
                    className="text-editor"
                    ref={divRef}
                    position={position}
                    size={size}
                    style={{
                        overflow: "none",
                        resize: "none",
                        zIndex: 5,
                        marginLeft: position.x + 1,
                        marginTop: position.y + 1,
                        width: size.width - 8,
                        height: size.height - 8,
                        border: "none",
                        fontFamily: "inherit",
                        pointerEvents: "all"
                    }}
                    defaultValue={textInDiagram}
                    onBlur={handleLeave}
                    onKeyDown={handleKeyboardLeave}
                    onFocus={handleFocus}
                />
            </foreignObject>
        </>
    );
}

export default TextEditor;