import React, { Component } from 'react';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'

class App extends Component {

    state = {
        citas:[]
    }

    crearCita = (nuevaCita) => {
        const citas = [...this.state.citas, nuevaCita]

        console.log(citas)

        this.setState({
            citas
        })
    }

  render() {
    return (
        <div className="container">
            <Header
                title="Administrador Turnos Veterinaria"
            />
            <div className='row'>
                <div className='col col-md-6'>
                    <AgregarCita
                        crearCita={this.crearCita}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
