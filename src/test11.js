import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
//函数组件
const Main = () => <h3>我是首页</h3>
const Login = () => <div>
    <p>我是登录页</p>
    <input type="text" />
    <button>登录</button>
</div>

const App = () => {
    <Router>
        <h1>路由测试</h1>
        <ul>
            <li to="/">首页</li>
            <li to="/login">登录</li>
        </ul>

        <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Mian/>}></Route>
        </Routes>
    </Router>
}

var root = document.getElementById("root");
ReactDOM.render(<Mytag />, root)