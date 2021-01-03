import React from 'react';

// 도형 추가하는 버튼
const Button = ({ handleClick, diagramDefaultType }) => {

    return (
        <>
            {/* 클릭 시 얕은 복사된 도형 객체 반환 */}
            <button onClick={() => handleClick(Object.assign({}, diagramDefaultType))}>{diagramDefaultType.type}</button>
        </>
    );
}

export default Button;