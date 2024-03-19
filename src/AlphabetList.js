import React from "react";
//import ReactDOM from "react";

function AlphabetList(){
    const alphabets = Array.from({length:26}, (_, index) => String.fromCharCode(97 + index));
    return(
        <div>
            <h1>List of Alphabets</h1>
            <ul>
            {alphabets.map((alphabet) => (
          <li key={alphabet}>{alphabet}</li>
        ))
        }
            </ul>
        </div>
    );

}
export default AlphabetList;
