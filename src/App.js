import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './antd.css';
import { DatePicker } from 'antd';
import moment from 'moment';
const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;
var d = new Date();
var date = d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <RangePicker
              defaultValue={[moment(date, dateFormat), moment('2017/08/31', dateFormat)]}
              format={dateFormat}
          />
      </div>
    );
  }
}

export default App;
