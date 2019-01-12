import React from 'react';
import { hot } from 'react-hot-loader/root';
import Style from './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this._textElement = null;
    this._output = "";

    this.onCompile = this.onCompile.bind(this);
  }

  onCompile()
  {
    const value = this._textElement.value;
    this._output = "Compile complete!";
  }

  //Override
  render()
  {
    return <div className="app-container">
      <h1>{"Anna"}</h1>
      <label>{"Another lambda calculus editor"}</label>
      <div>
        <textarea ref={ref=>this._textElement=ref}>
        </textarea>
        <button onClick={this.onCompile}>Compile</button>
        <div>
          {this._output}
        </div>
      </div>
    </div>;
  }
}

//For hotloading this class
export default hot(App);
