
import { Component } from 'react';
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Home, NotFound, Play, Study, Todo } from './pages';
//bootstrap css 로딩하기 
import './css/bootstrap.css'

//클래스형 component
class App extends Component{
  
  //render() 함수에서 리턴하는 jsx 로 화면 구성이 된다.
  render(){

    return (
      <div className="container">
        <h1>React Router 를 이용한 SPA 테스트</h1>
        <ul className="nav nav-pills">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/study">Study</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/play">Play</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/todos">Todos</NavLink></li>
        </ul>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/study/*" Component={Study}/>
          <Route path="/play" Component={Play}/>
          <Route path="/todos" Component={Todo}/>
          <Route path="/*" Component={NotFound}/>
        </Routes>
      </div>
    )
  }
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
