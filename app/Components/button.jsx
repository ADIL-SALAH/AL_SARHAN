import React from 'react'

function Button(props) {
    const { btnName, btnType, btnStyle } = props
    return (
        <button type={btnType ? btnType : 'button'} className={btnStyle}>
            {btnName}
        </button>
    )
}

export default Button