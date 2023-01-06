import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./folder0/App2"
import APP3 from "./folder0/APP3";
import App4 from "./folder0/App4";
import App5 from "./folder0/App5";
import App6 from "./calculator/App6";
import App7 from "./folder3/App7";
import App8 from "./folder4/App8";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import AppTest from "./pagetest/AppTest";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // stricMode : 자바스크립트의  문법을 강력하게 검사한다느 의미
  // React.StrictMode : 배포 버전에는 제외되고 개발 버전에서 동작하는 업격 모드, 몇가지 함수를 중복 실행하여 잘못된 것이 없는지 개발자에게 확인하도록 함
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2/>*/}
    {/*<APP3/>*/}
    {/*<App4/>*/}
    {/*<App5/>*/}
    {/*<App6/>*/}
    {/*<App7/>*/}
    {/*<App8/>*/}
    <AppTest/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
