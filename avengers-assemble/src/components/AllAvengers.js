import React, {Component} from 'react';
import axios from 'axios';

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
                console.log(res.data)
            })
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}

export default AllAvengers;