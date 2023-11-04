import React from 'react'

function Button(props) {
    const { btnName, btnType, btnStyle, onClick } = props
    return (
        <button type={btnType ? btnType : 'button'} className={btnStyle} onClick={onClick}>
            {btnName}
        </button>
    )
}

export default Button