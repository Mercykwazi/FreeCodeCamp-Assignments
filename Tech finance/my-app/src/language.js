
import React, { Component } from 'react';

class Language extends Component {
    render() {

        return (
            <div >

                <h1>Hey there! Choose a language that you would like to communicate with</h1>
                {/* <input type="text" placeholder=" Language " input /> */}
                <div className="styling">
                <button>IsiZulu</button><br />
                <button>English</button><br />

                <button>SeSotho</button><br />
                <button>XiTsonga</button><br />
                <button>Afrikaans</button></div>

            </div>
        );
    }
}
export default Language;