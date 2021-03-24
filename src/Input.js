import React, { useState } from 'react'
import PropType from 'prop-types'
import './App.css'

const Input = ({ addPost }) => {
    const [input, setInput] = useState('')

    const onChange = event => {
        setInput(event.target.value)
    }

    const onKeyDown = event => {
        const title = event.target.value
        if (event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return <>
        <div className="Input">
            <div className="Input__header">Create Post</div>
            <input
                className="Input__field"
                type="text"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    </>
}

Input.PropType = {
    addPost: PropType.func.isRequired,
}

export default Input