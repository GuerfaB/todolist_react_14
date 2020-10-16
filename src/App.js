import React from 'react';
import Liste from "./Component/Liste"
import Milieu from './Component/Milieu';
import Milieur from "./Component/Milieu"


export default class App extends React.Component{
  constructor(){
    super()
    
    this.state ={
      contenu: "blabla",
      tableau: [],
      contenuInput : " "

    }
  }
  change = (valeur) => {
    this.setState({
      contenu: valeur.target.value,
     

    })
    
    

  }
  change2 = (valeur) =>{
    this.setState({
      contenuInput : valeur.target.value

    })
    console.log(this.state.contenuInput);
  }
  
  rajouter = () =>{
    let a = this.state;
    let objet = {
      valeur: a.contenu,
      validate: false,
      edit: false,
      
    }
    a.tableau.push(objet)
    this.setState(a);

  }
  editer = (i) => {
    let e = this.state;
    if (e.tableau[i].edit === false) {
      e.tableau[i].edit = true
    }
    else if (e.tableau[i].edit === true){
      e.tableau[i].edit = false
      e.tableau[i].valeur = e.contenuInput
      console.log("test");
    }
    this.setState(e)
  }
  supprimer = (i) =>{
    let c = this.state;
    c.tableau.splice(i,1);
    this.setState(c)

  }
  check = (i) =>{
    let d = this.state
    if (d.tableau[i].validate === false) {
      d.tableau[i].validate = true
     
    }
    else if (d.tableau[i].validate === true) {
      d.tableau[i].validate = false
      
    } 

    this.setState(d)
  }
render(){
  
  
return(
  <div className="container">
    <div className="row d-flex flex-column justify-content-center align-items-center">
      <h1>Todo List</h1>
      <ul id = "haut">
          <li className = "list-group-item d-flex justify-content-between align-items-center px-0">
              <input type="text"  onChange={valeur => this.change(valeur)} value={this.state.contenu}/>
              <button onClick ={this.rajouter} className ="btn btn-primary">Add</button>
          </li>
      </ul>
      <Milieu/>
      <ul className="mt-5">
        {this.state.tableau.map((e,i) => {
          return(
            <Liste changer={(e) => this.change2(e)} key = {i} contenu={this.state.contenuInput} nom ={e.valeur} supprimer={() => this.supprimer(i)} couleur={this.state.tableau[i].validate} edition={this.state.tableau[i].edit} check ={() => this.check(i)} editer ={() => this.editer(i)}/>

          )
        }
        )}

      </ul>

    </div>
  </div>

)
}
}