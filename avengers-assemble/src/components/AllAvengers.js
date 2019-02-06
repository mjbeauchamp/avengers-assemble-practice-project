import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {getAvengers} from '../dux/reducer'

class AllAvengers extends Component {
    constructor(){
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        axios.get('/api/all-avengers')
            .then(res => {
                getAvengers(res.data)
                this.setState({
                    list: res.data
                })
            })
    }

    render(){
        console.log(this.state.list)
        let avengers = this.state.list.map((val, i) => {
            return (
                <div key={i}>
                    <h2>{val.name}</h2>
                </div>
            )
        })
        return (
            <div>
                {avengers}
            </div>
        )
    }
}

export default connect(null, {getAvengers})(AllAvengers);