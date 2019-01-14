import React, { Component } from 'react';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {

    state = {
        citas:[]
    }

    componentDidMount(){
        console.log('esta listo')
        const citasLS = localStorage.getItem('citas')
        if(citasLS){
            this.setState({
                citas: JSON.parse(citasLS)
            })
        }
    }

    componentDidUpdate(){
        console.log('cambio')
        localStorage.setItem(
            'citas',
            JSON.stringify(this.state.citas)
        )
    }

    crearCita = (nuevaCita) => {
        const citas = [...this.state.citas, nuevaCita]

        console.log(citas)

        this.setState({
            citas
        })
    }

    borrarCita = (id) => {
        // Obtener Copia del State
        const citasActuales = [...this.state.citas]

        // borrar elemento del State
        const citas = citasActuales.filter(cita => cita.id !== id)

        // actualizar el state
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
                <div className='col col-md-6'>
                    <ListaCitas
                        citas={this.state.citas}
                        borrarCita={this.borrarCita}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default App;
