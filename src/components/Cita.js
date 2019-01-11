import React, { Component } from 'react'

class Cita extends Component{

    eliminarCita = (e) => {
        // console.log(this.props.info.id)
        this.props.borrarCita(this.props.info.id)
    }

    render(){
        const { mascota, propietario, fecha, hora, sintomas, id } = this.props.info
        return(
            <div className='media mt-3'>
                <div className='media-body'>
                    <h3 className='mt-0'>{mascota}</h3>
                    <p className='card-text'><span>Nombre del Dueño: {propietario}</span></p>
                    <p className='card-text'><span>Fecha:</span> {fecha}</p>
                    <p className='card-text'><span>Hora:</span> {hora}</p>
                    <p className='card-text'><span>Sintoma:</span></p>
                    <p className='card-text'>{sintomas}</p>
                    <button onClick={ this.eliminarCita } className='btn btn-danger'>Borrar &times;</button>
                </div>
            </div>
        )
    }
}

export default Cita
