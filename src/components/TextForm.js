import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
       props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick= ()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text Cleared!","success");
        
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy= () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to Clipboard!","success");
    }

     const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
     }

     const HandleRevClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
    
        props.showAlert('Text reversed!', 'success')
    
      }

      const handleSentenceCase = () => {
        let newText = text.replace(/(^\w{1}|\.\s*\w{1})/gi, (match) => {
          return match.toUpperCase();
        });
        setText(newText);
        props.showAlert('Converted to Sentence Case!', 'success');
      };
    

    //   const handleSentenceCase = () => {
    //     let newText = text.replace(/\w\S*/g, (txt) => {
    //       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //     });
    //     setText(newText);
    //     props.showAlert('Converted to Sentence Case!', 'success');
    //   };

    //  const handleSentenceCase = (str) => {
    //     if (typeof str !== 'string') {
    //       // If str is not a string, return an empty string or handle the error as appropriate
    //       return '';
    //     }
      
    //     return str.replace(
    //       /\w\S*/g,
    //       (text) => {
    //         return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    //       }
    //     );
    //   };
      
      

    const [text,setText] = useState('');
    // text="new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'? 'white':'#042743'}}> 
        <h1>{props.heading} </h1>
         <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>

         {/* <textarea className="form-control" value={text} onChange={handleOnChange} sytle={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea> */}
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Spaces text</button>
    <button className="btn btn-primary mx-2" onClick={HandleRevClick}>Reverse text</button>
    <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case Text</button>
    {/* <button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case Text</button> */}
    
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word and { text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
    </div>
    </>
  )
}
