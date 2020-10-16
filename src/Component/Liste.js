import React from 'react';

export default class Liste extends React.Component{
render(){
return(
    <li className={`${this.props.couleur === true ? "bg-success" : "bg-light"} list-group-item d-flex justify-content-between align-items-center mb-4`}>
        <h5 className ={`${this.props.edition === true ? "d-none": ""}`}>{this.props.nom}</h5>
        <input onChange={this.props.changer} className={`${this.props.edition === true ? " ": "d-none"} mr-auto`}type="text" value ={this.props.contenuInput}/>
        <div className = "">
            <button onClick={this.props.check} className ={`${this.props.edition === true ? "d-none": ""} bg-success py-3 px-3 border-0`}>
                <i className="fas fa-check text-white"></i>
            </button>
            <button onClick={this.props.editer} className ="bg-warning py-3 px-3 mx-2 border-0">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={this.props.supprimer} className ={`${this.props.edition === true ? "d-none": ""} bg-danger py-3 px-3 border-0`}>
                <i className="fas fa-trash-alt text-white"></i>
            </button>

        </div>

    </li>

)
}
}
