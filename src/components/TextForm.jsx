// import { useState } from "react";

// export default function Textform(props) {
//   const [text, setText] =
//     useState(""); /*enter text here is default value of text variable*/
//   // text="new test"; //wrong way to update text
//   // setText("new text"); // corrrect way to update text

//   const handleOnChange = (event) => {
//     // console.log("On Change")
//     setText(event.target.value);
//   };
//   const handleUpclick = () => {
//     // console.log("Upper case was clicked"+ text)
//     let newText = text.toUpperCase();
//     setText(newText);
//     props.showAlert("Converted TO Upper Case", "success");
//     // setText("You have clicked on upperbutton")
//   };

//   const handleDownclick = () => {
//     // console.log("Lower case was clicked"+ text)
//     let newText = text.toLowerCase();
//     setText(newText);
//     props.showAlert("Converted TO Lower Case", "success");
//     // setText("You have clicked on Lowerbutton")
//   };

//   const handleClearclick = () => {
//     // console.log("Clear was clicked"+ text)
//     let newText = "";
//     setText(newText);
//     props.showAlert("You Have Cleared The Text", "success");
//     // setText("You have clicked on Clear Button")
//   };
//   const handleCopy = () => {
//     // console.log("Copy was clicked"+ text)
//     var text = document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
//     props.showAlert("Text is Copied", "success");
//   };
//   const handleExtraSpaces = () => {
//     // console.log("Remove Extra spaces was clicked"+ text)
//     let newText = text.split(/[ ]+/);
//     setText(newText.join(" "));
//     props.showAlert("Extra Spaces From The Text are Removed", "success");
//   };

//   return (
//     <>
//       <div
//         className="container"
//         style={{ color: props.mode === "dark" ? "white" : "black" }}
//       >
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             style={{
//               backgroundColor: props.mode === "dark" ? "grey" : "white",
//               color: props.mode === "dark" ? "white" : "#042743",
//             }}
//             id="myBox"
//             value={text}
//             onChange={handleOnChange}
//             rows="8"
//           ></textarea>
//         </div>
//         <button className="btn btn-primary" onClick={handleUpclick}>
//           Convert To Uppercase
//         </button>
//         <button className="btn btn-primary mx-2" onClick={handleDownclick}>
//           Convert To Lowercase
//         </button>
//         <button className="btn btn-primary mx-2" onClick={handleClearclick}>
//           Clear the Text Area{" "}
//         </button>
//         <button className="btn btn-primary mx-2" onClick={handleCopy}>
//           Copy Text{" "}
//         </button>
//         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
//           Remove Extra Spaces{" "}
//         </button>
//       </div>
//       <div
//         className="container my-3"
//         style={{ color: props.mode === "dark" ? "white" : "black" }}
//       >
//         <h2>Your Text Summary</h2>
//         <p>
//           {text.split(" ").length} Words and {text.length} Characters
//         </p>
//         <p>{0.008 * text.split(" ").length} Minutes Read</p>
//         <h2>Preview</h2>
//         <p>
//           {text.length > 0
//             ? text
//             : "Enter Something in the Text Box to Preview it here"}{" "}
//         </p>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpclick = () => {
    setText((prevText) => prevText.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleDownclick = () => {
    setText((prevText) => prevText.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearclick = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    const textToCopy = document.getElementById("myBox").value;
    navigator.clipboard.writeText(textToCopy);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    setText((prevText) => prevText.split(/\s+/).join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter(Boolean).length} Words and {text.length}{" "}
          Characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter(Boolean).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text || "Enter text to preview here"}</p>
      </div>
    </>
  );
}
