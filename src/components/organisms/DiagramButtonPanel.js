import { Button } from '..';
import React from 'react'

// 도형 상호작용 버튼 패널
const DiagramButtonPanel = ({ diagramDefaultTypes, addDiagram}) => {

    return (
        <>
            <div>
                {/* 클릭하면 종류별로 새로운 도형 추가하는 버튼 추가 */}
                {
                    diagramDefaultTypes.map((diagramDefaultType, index) => {
                        return <Button
                            key={index}
                            handleClick={addDiagram}
                            diagramDefaultType={diagramDefaultType}
                        />
                    })
                }
            </div>
        </>
    )
}

export default DiagramButtonPanel;