import React from 'react';
import axios from 'axios';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: null,
         }
    }

async journalApiCall() {
    try {
        const res = await axios.get('https://content.guardianapis.com/search?api-key=9e18061c-d955-4143-8a9e-c15b0220e2dc');
        console.log(res.data);
    }catch(e){
        console.error(e)
    }
}

    render() { 
        return ( 
            {this.data.}
         );
    }
}
 
export default Header;