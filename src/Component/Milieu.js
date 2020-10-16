import React from 'react';

export default class Milieu extends React.Component{
render(){
return(
    <div id="milieu" className="d-flex justify-content-center align-items-center">
        <button id="secondary" className="text-secondary px-3">
            Toutes
        </button>
        <button id="success"className="text-success mx-4 px-3">
            Completées
        </button>
        <button id="danger" className="text-danger px-3">
            A faire
        </button>


    </div>

)
}
}