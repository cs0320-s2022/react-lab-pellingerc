import React from 'react';


function TextBox(props: any) {
    const changeHandler = (event: any) => {
        props.change(event.target.value)
    }
    return (
        <div className="App">
            <label>
                {props.sign}
            </label>
            <input type={"text"} onChange={changeHandler}>
            </input>
        </div>
    );
}

export default TextBox;
