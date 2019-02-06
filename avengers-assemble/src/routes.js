import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AllAvengers from './components/AllAvengers'
import TeamCap from './components/TeamCap'
import TeamStark from './components/TeamStark'
import Avenger from './components/Avenger'

export default (
    <Switch>
        <Route exact path="/" component={AllAvengers}/>
        <Route path="/team_cap" component={TeamCap}/>
        <Route path="/team_stark" component={TeamStark}/>
        <Route path="/avenger/:id" component={Avenger} />
    </Switch>
)