import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ showModal, setShowModal, selectedDateRange, user, product }) => {
    if (!showModal || !selectedDateRange) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                <h1 className="modal-title">Detalle de la Reserva</h1>
                <p>___________________________________________________________________</p>
                <h2><strong>Rango de fechas seleccionado</strong></h2>
                <p>{selectedDateRange}</p>
                <p>___________________________________________________________________</p>
                <h2><strong>Usuario</strong></h2>
                <p>{user.name}  {user.lastname}</p>
                <p>{user.email}</p>
                <p>___________________________________________________________________</p>
                <h2><strong>Disfraz a reservar</strong></h2>
                <p>Nombre: {product.name}</p>
                <p>Precio: ${product.price}</p>
                <p>Categoría: {product.mainCategory}</p>
                <p>Subcategoría: {product.subCategory}</p>
                <p>Talle: {product.size}</p>
                <p>Descripción: {product.largeDescription}</p>
                <p>___________________________________________________________________</p>
                <button className="confirm-button" onClick={() => alert('Reserva realizada con exito!')}>Confirmar Reserva</button>
            </div>
        </div>
    );
};

export default Modal;