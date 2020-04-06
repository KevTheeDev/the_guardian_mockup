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
        const res = await axios.get('')
    }catch(e){
        console.error(e)
    }
}

    render() { 
        return ( 
            {}
         );
    }
}
 
export default Header;