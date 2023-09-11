import React from 'react'

const CustomButton = ({ type, title, handleClick, customStyles}) => {
    const generateStyle = (type) =>{
        if (type === 'filled') {
            return{
                backgroundColor: '#000' ,
                color: '#fff'
            }
        }
    }

    return (
        <button className={'px-2 py-1.5 flex-0 rounded-md ${customStyles}'}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton