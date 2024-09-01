import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { useUser } from '../UserContext';
import Calendario2 from '../Components/Calendario/Calendario2';
import Modal from '../Components/Modal/Modal';

const Detail2 = ({ products }) => {

  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));
  
  const [selectedDateRange, setSelectedDateRange] = useState(null);  
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();

  const handleDateRangeChange = (range) => {
    const { startDate, endDate } = range;
    const reservaString = `${startDate},${endDate}`;
    setSelectedDateRange(reservaString);
  };


  const handleReservaClick = () => {
    if (user) {
      setShowModal(true);
    } else {
      alert('Para poder reservar un disfraz, Ud. debe **Iniciar Sesion**');
    }

    const formDatab = new FormData();
    formDatab.append('Id', product.id);
    formDatab.append('Reserva', selectedDateRange);
    formDatab.append('Price',product.price);
    formDatab.append('User',user.email);

    console.log(product.id);


    

    fetch(
      "https://script.google.com/macros/s/AKfycbzg3at9n3xuDalcRtvDJPSSSu8Gh0LhjiZ6a_GdVPaiGWuZwtOl4f6HjaMrMpb1Xq4YOA/exec",
      //"https://script.google.com/macros/s/AKfycbwcA7UM-dWoRgIv4GEHy7zrcSsYFxQBv7jbi4L-3shez9RSWV4XmSlrHz0btrN61TcB/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

    fetch(
      "https://script.google.com/macros/s/AKfycbzGKYic_d1YSwhQK8BXbw9cxiSpTvsvnHkLkjEywR96Lb3oUWMyTM4w0pu6v4RIeQMItA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <div className="Detail">
      <div className="Detail-imgContent">
        <img src={product?.imageUrl} alt={product?.name} />
      </div>

      <div className="Detail-textContent">
        <h2>{product?.name}</h2>
        <h1>$ {product?.price}</h1>
        <a>...</a>
        <p>{product?.subCategory} para {product?.mainCategory}</p>
        <p>Talle: {product?.size}</p>
        <a>...</a>
        <p>{product?.largeDescription}</p>
      </div>

      <div className="Detail-calendar">
        <Calendario2 reservas={product.reservas} onDateRangeChange={handleDateRangeChange} />
        <div className='detailCalendarDiv' >
          <button className="Reserva-button"  onClick={handleReservaClick}>Reservar</button>
        </div>
      </div>

      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        selectedDateRange={selectedDateRange} 
        user={user} 
        product={product} 
      />

    </div>
  );
}

export default Detail2;
