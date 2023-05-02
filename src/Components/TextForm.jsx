import React, {useState} from 'react';

export default function TextForm(props) 
{
  const handleUpClick = () =>
    { // console.log("upper case clicked" + text );
      let newText = text.toUpperCase();
      setText(newText)
    }
  
  const handleLoClick = () =>
    {// console.log("upper case clicked" + text );
      let newText = text.toLowerCase();
      setText(newText)
    }
  
  const handleXml = () =>
    { let newText = text.replace(/class/g , "className").replace(/for/g , "htmlfor");
      setText(newText)
    }

  const handleOnChange = (event) =>
    {// console.log(" On change"); 
      setText(event.target.value);  
    }
  
  const[text , setText] = useState("");  //here text is variable  jo use state ki value hold krta hai 
                                                          // text="new text "; //this is wrong way to update the text 
                                                          // setText("new text"); // this is correct way to change the state;
  
 
  return (
    <  >   {/*this is jsx pregment */}
      
    <div className="container" >
      <h1 style = {{color: props.mode === 'dark'?'white':'black'}} >{props.heading} </h1>
      
        <p className="my-0" style = {{color: props.mode === 'dark'?'white':'black'}}>{text.split(" ").length -1} words, {text.length} charactor</p> {/* text.split(" ").length > ye text ko " " se spit kar raha hai our length ko reed kr raha hai   */}
        <p className="md-2" style = {{color: props.mode === 'dark'?'white':'black'}} >It Will Take {0.008 * text.split(" ").length} Minuts To Read</p>       
      
      <div className="mb-3 ">
        <textarea className="form-control" onChange={handleOnChange}  style={{backgroundColor : props.mode==='dark'?'lightslategrey':'white' ,color: props.mode==='dark'? 'white':'black'}} value= {text} id="myBox" rows="16"></textarea>
      </div>
      <button type="button" className="btn btn-warning mx-1" onClick ={handleUpClick}>Convert into Uppercase</button>     
      <button type="button" className="btn btn-secondary mx-1" onClick ={handleLoClick}>Convert into lower</button>
      <button type="button" className="btn btn-success mx-1" onClick ={handleXml}>Convert into XML</button>
      <h4 style = {{color:props.mode === 'dark'?'white':'black'}}>Preview</h4>
      <p style = {{color:props.mode === 'dark'?'white':'black'}} >{text}</p>
    </div>
       
      </>
  )

}