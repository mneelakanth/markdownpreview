import React from 'react';
import {marked} from "https://cdn.skypack.dev/marked";
import './App.css';

const initialState = `
  
 
  # heading 1
  ## heading 2
  
  
  
  [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
  This is a inline \`<div>HI</div>\`
  
  This is a block code 
  \`\`\`
    function anotherExample(firstLine, lastLine) {
      if(typeOf === \' true \'){
        return firstLine;
      }
      }
    }
  \`\`\`
  
  - list item 1
  - list item 2
  - list item 3
  
  
  > Block Quotes!

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  
  **This is bolded text**
`;

 //(H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.


class App extends React.Component {
  state = {
    text: initialState,
  }
  
  handleChange = (e) => {
    this.setState({
      text:e.target.value
    })
  }
  
  render(){
    const { text } = this.state;
    const markdown = marked(text, { breaks:true });
    
    return(
      <div className="container">
        <h1 className="text-center m-4">Convert your Markdown</h1>
        <div class="row">
          <div className="col-6">
            <h6 className="text-center">Enter your Markdown</h6> 
            <textarea id="editor" className="form-control" value={text} onChange={this.handleChange} />
          </div>
          <div className="col-6" >
            <h6 className="text-center">See the Result</h6> 
            <div className="preview rounded ps-2"  
              dangerouslySetInnerHTML= {{__html:markdown}} id="preview" />
          </div>
        </div> 
      </div>
    );
  }
}


export default App;
