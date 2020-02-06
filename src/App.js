import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dividend from '../src/components/Scratch'
import ReactJSConstructor from '../src/components/Constructor'
import Resizer from '../src/components/Resizer'
import Content from '../src/components/AdminTemplate/Content'
import Sidebar from '../src/components/AdminTemplate/Sidebar'
import Header from '../src/components/AdminTemplate/Header'
import Contact from '../src/components/Contact'
import AwesomeComponent from '../src/components/AwesomeComponent'
import AnimatedComponent from '../src/components/Animated'
import LoaderComponent from '../src/components/Spinner'
import StyledComponent from '../src/components/StyledComponent'
import Table2 from '../src/components/Table2'
function App() {
  // return <Dividend />
  // return <ReactJSConstructor />
  return <div>
    {/* <StyledComponent /> */}
    <Table2 />
  </div>
}

export default App;
