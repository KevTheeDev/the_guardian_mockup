import React from 'react';
import axios from 'axios';

class Culture extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cultureTab: null,
            culturePic: null,
         }
    }

    async cultureApiCall() {
        try {
            const cultapi = await axios.get('https://content.guardianapis.com/search?api-key=9e18061c-d955-4143-8a9e-c15b0220e2dc');
            console.log(cultapi.data);
            this.setState({cultureTab: cultapi.data.result[0].id})
        }catch(e){
            console.log(e)
        }
    }

    componentDidMount() {
        this.cultureApiCall()
    }

    render() { 
        return (
            <div>
                <p> { this.state.cultureTab} </p>
            </div>
        )
    }
}
 
export default Culture;