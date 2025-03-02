import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
    const [words, setWords] = useState(0)
    // const [searchText, setSearchText] = useState("")
    // const [replaceText, setReplaceText] = useState("")
    // const [btnColor, setBtnColor] = useState("red")

    const handleUpConversion = ()=>
    {
        setText(text.toUpperCase())
        props.showAlert(": Converted to Upper Case.", "success")
    }

    const handleLowConversion = ()=>
        {
            setText(text.toLowerCase())
            props.showAlert(": Converted to Lower Case.", "success")
        }
    

    const handleOnChange = (event)=>
        {
            setCount(count+1)
            setText(event.target.value)
        }

    // const handleReplaceChange = (event) => {
    //     setReplaceText(event.target.value);
    //     }

    // const handleSearchChange = (event) => {
    //     const searchValue = event.target.value;
    //     setSearchText(searchValue);
    
    //     if (text.toLowerCase().includes(searchValue.toLowerCase())) {
    //         setBtnColor('blue');
    //     } else {
    //         setBtnColor('red');
    //     }
    //     }

    // const handleReplace = () => {
    //     if (searchText.trim() !== '') {
    //         const regex = new RegExp(searchText, 'gi');
    //         const updatedText = text.replace(regex, replaceText);
    //         setText(updatedText);
    //     }
    // }
    const handleClear = ()=>
            {
                setCount(0)
                setText("")
                setWords(0)
                props.showAlert(": Text Cleared.", "success")
            }
        
    const handleKeyDown = (event) =>
    {
        if(event.key === "Backspace" && count > 0)
            {
                const removedChar = text[text.length-1];
                if((removedChar===" " || removedChar === ".") && (text[text.length-2] !== " " && text[text.length-2] !== "."))
                {
                    setWords(words-1)
                }
                const textarea = event.target;
                const cursorPosition = textarea.selectionStart;

                if (cursorPosition > 0 && text[cursorPosition - 1] === "\n" && text[cursorPosition - 2] !== " " ) {
                    setWords(words-1)
                }
                setCount(count-2)
            }
        else if((event.key === " " || event.key === "." || event.key === "Enter") && text[text.length-1] !== " " && text[text.length-1] !== ".")
        {
            setWords(words+1)
        }
    }
    
    return (
    <>
    <div className={`container my-3 text-${props.mode === "light" ? 'dark': 'white'}`}>
        <h4>{props.heading}</h4>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === "light" ? 'white': '#3f4866',
        color: props.mode === "light" ? 'black': 'white'}} value = {text} onChange={handleOnChange} onKeyDown={handleKeyDown} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" style={{marginRight: 1 + 'em'}} onClick={handleUpConversion}>Upper Case</button>
        <button className="btn btn-primary" style={{marginRight: 1 + 'em'}} onClick={handleLowConversion}>Lower Case</button>
        <button className="btn btn-primary" style={{marginRight: 1 + 'em'}} onClick={handleClear}>Clear text</button>
        {/* <div className='container my-3'>
        <textarea className="form-control" placeholder='Find' value = {searchText} style={{width: 13 + 'em'}} onChange={handleSearchChange} id="exampleFormControlTextarea1" rows="1"></textarea>
        <textarea className="form-control" placeholder='Replace' value = {replaceText} style={{width: 13 + 'em'}} onChange={handleReplaceChange} id="exampleFormControlTextarea1" rows="1"></textarea>
        <button className="btn btn-primary" style={{marginLeft: 8 + 'em', backgroundColor: btnColor}} onClick={handleReplace}>Replace</button>
        </div> */}
    </div>
    <div className={`container my-3 text-${props.mode === "light" ? 'dark': 'white'}`}>
        <h4>You Text Summary</h4>
        <p>{words} words {count} letters</p>
    </div>
    </>
  )
}
