import React from 'react';

import logoImg from '../../assets/images/logo.svg';

function First_Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="loader-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
            </div>
        </div>

    )
}

export default First_Landing;