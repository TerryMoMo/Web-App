import React from 'react'
import { Route, Switch } from "react-router-dom"
// 引入组件
import Home from '../components/Home'
import List from '../components/list'
import User from '../components/User'
import Error from '../components/404'

export default class AppRouter extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/user" component={User}></Route>
                {/* 没有写path表示匹配到所有的路径 */}
                <Route path="*" component={Error}></Route>
          </Switch>
        )
    }
}