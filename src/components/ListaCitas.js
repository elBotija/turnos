import React, { Component } from 'react'
import Cita from './Cita'

class ListaCitas extends Component {
    render(){
        const citas = this.props.citas

        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administra tus Citas'
        return(
            <div className='card mt-5'>
                <div className='card-body'>
                    <h2 className='card-title text-center'> {mensaje} </h2>
                    <div className='lista-citas'>
                        {Object.keys(citas).map(cita => (
                            <Cita
                                key={cita}
                                info={citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default ListaCitas