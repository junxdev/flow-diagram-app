import React, {useEffect, useRef, useState} from 'react';

// 도형이 추가되는 SVG 영역
const Svg = ({ children }) => {

    // 위치, 크기를 위한 CTM 관리
    const [CTM, setCTM] = useState({});

    useEffect(() => {
        setCTM(document.querySelector("svg").getScreenCTM());
        console.log(children);
    }, [children]);

    return (
        <>
            <svg
                version="1.1"
                baseProfile="full"
                width="100%" height="500px"
                style={{
                    border: "1px solid black"
                }}
                xmlns="http://www.w3.org/2000/svg">
                {/* 전달된 도형 Props에 CTM 추가 */}
                {children.map(child => {
                    console.log(child);
                    return React.cloneElement(child, {CTM});
                })}
            </svg>
        </>
    );
}

export default Svg;