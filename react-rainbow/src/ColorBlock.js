import React from 'react'

function ColorBlock(prop){
    return (
        <div classaName="colorBlock"
        style={{'backgroundColor': prop.color}}>
            <p>{prop.color}</p>
        </div>
    )
}
export default ColorBlock
