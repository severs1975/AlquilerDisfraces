import React, { useEffect, useState } from 'react'; // Importa React y useEffect de la librería React
import { useParams } from 'react-router-dom'; // Importa useParams de react-router-dom para obtener los parámetros de la URL
import DatePicker from 'react-datepicker'; // Importa el componente DatePicker de react-datepicker
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS para el DatePicker
import './Detail2.css'; // Importa los estilos CSS personalizados para el componente Detail
import CustomDatePicker from '../Components/CustomDatePicker/CustomDatePicker';
import Calendario from '../Components/Calendario/Calendario';
import AnimationComponent from '../Components/AnimationComponent/AnimationComponent';
import { useUser } from '../UserContext';
//import CustomCalendar from '../Components/CustomCalendar/CustomCalendar';


const Detail2 = ({ products }) => { // Define el componente Detail que recibe una prop llamada products
  const { productId } = useParams(); // Extrae el productId de los parámetros de la URL usando useParams
  const product = products.find((product) => product.id === parseInt(productId)); // Busca el producto en la lista de productos que tiene el id correspondiente

  if (!product) { // Si el producto no se encuentra, muestra un mensaje de error
    return <div>Product not found</div>;
  }

  const { user } = useUser();



  
  useEffect(() => {

    if (user){
      console.log('logeado');
    }else{
      console.log('noLogeado');
    };

    window.scrollTo(0, 0); // Desplaza la ventana a la parte superior al montar el componente
    /*console.log(product);
    console.log(products);
   
    console.log(reservations);
    console.log(reservations[0]);
    console.log(reservations[0].startDate);
    console.log(reservations[0].startDate.getDate());
    console.log(reservations[0].startDate.getMonth()+1);
    console.log(reservations[0].startDate.getDay());
    console.log('fechaActual');
    console.log(fechaActual);
    console.log(fechaActual.getDate());
    console.log(fechaActual.getMonth()+1);
    console.log(fechaActual.getDay());
    console.log('primerDia = ' + primerDia(fechaActual.getDate()))*/

  }, []); // El array vacío como dependencia asegura que esto ocurra solo una vez al montar el componente

  // Función para parsear las reservas en un formato que react-datepicker pueda entender
  const parseReservations = (reservations) => {
    if (!reservations) return []; // Si no hay reservas, retorna un array vacío

    // Divide las reservas por el carácter '|' y luego por ',' para obtener las fechas de inicio y fin
    return reservations.split('|').map(range => {
      const [start, end] = range.split(','); // Separa cada tupla de fechas
      return {
        startDate: new Date(start), // Convierte la fecha de inicio a un objeto Date
        endDate: new Date(end) // Convierte la fecha de fin a un objeto Date
      };
    });
  };

  const reservations = parseReservations(product.reservas); // Llama a la función parseReservations con las reservas del producto

  const [startDate1, setStartDate1] = useState(new Date('2024-06-04'));
  const [endDate1, setEndDate1] = useState(new Date('2024-06-10'));
  const [startDate2, setStartDate2] = useState(new Date('2024-06-15'));
  const [endDate2, setEndDate2] = useState(new Date('2024-06-20'))

  const [startDate, setStartDate] = useState(new Date('2024-06-04'));
  const [endDate, setEndDate] = useState(new Date('2024-06-10'));
  const handleSelectRange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth() + 1; // 1 - Enero, 12 - Diciembre

  // Aquí puedes definir el mes que quieras mostrar
  const mesParaMostrar = 6; // 6 - Junio
  const esMesActual = mesParaMostrar === mesActual;

  const primerDia = (n) => {
  
    while (n > 0) {
      n = n-7;
    }
    return 6+n;
  };




  const range01 = [];
  const range02 = [];
  

  reservations.map((reservation) => ( // Itera sobre las reservas parseadas
    console.log(typeof (reservation.startDate.getDate())),
    console.log(reservation.endDate)

    //range01.push({ inicio: 5, fin: reservation.endDate.getDate() });

  ));





  return (
    <div className="Detail"> {/* Contenedor principal del componente Detail */}

        <div className="Detail-imgContent"> {/* Contenedor de la imagen del producto */}
          <img src={product.imageUrl} alt={product.name} /> {/* Muestra la imagen del producto */}
        </div>

        <div className="Detail-textContent"> {/* Contenedor del texto descriptivo del producto */}
          <h2>{product.name}</h2> {/* Muestra el nombre del producto */}
          <h2>Precio: {product.price}</h2> {/* Muestra el precio del producto */}
          <a>...</a> {/* Enlace o espacio para información adicional */}
          <p>{product.subCategory} para {product.mainCategory}</p> {/* Muestra la subcategoría y la categoría principal del producto */}
          <p>Talla: {product.size}</p> {/* Muestra la talla del producto */}
          <a>...</a> {/* Enlace o espacio para información adicional */}
          <p>{product.largeDescription}</p> {/* Muestra una descripción larga del producto */}
        </div>

        <div className="Detail-calendarContent"> {/* Contenedor de los calendarios de reservas */}

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>


            
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
              <div>
              <Calendario 
                  diaInicio={ primerDia(fechaActual.getDate()) } 
                  numeroMes={mesParaMostrar} 
                  rangos={[
                    { inicio: 5, fin: 10 },
                    { inicio: 15, fin: 23 }
                  ]}
                  esMesActual={esMesActual}
                />

              </div>
          
          <div>

          <Calendario 
                  diaInicio={0} 
                  numeroMes={mesParaMostrar+1} 
                  rangos={[
                    { inicio: 5, fin: 10 },
                    { inicio: 15, fin: 23 }
                  ]}
                  esMesActual={esMesActual}
                />

          </div>



            </div>
        
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                {reservations.map((reservation, index) => ( // Itera sobre las reservas parseadas
                  <div key={index}> {/* Contenedor para cada reserva, con una clave única */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                      
                      <p></p>

                      {/*<DatePicker
                        selected={reservation.startDate} // Fecha seleccionada inicial
                        startDate={reservation.startDate} // Fecha de inicio del rango
                        endDate={reservation.endDate} // Fecha de fin del rango
                        selectsRange // Habilita la selección de un rango de fechas
                        inline // Muestra el calendario inline, dentro del contenedor
                      />*/}

                    </div>
                  </div>
                ))}
              </div>
            </div>
      
      </div>

  );  
}

export default Detail2; // Exporta el componente Detail para su uso en otras partes de la aplicación

/*
              <div>
                <p>Primer rango de fechas</p>
                <DatePicker
                  selected={startDate1}
                  startDate={startDate1}
                  endDate={endDate1}
                  onSelect={(date) => setStartDate1(date)}
                  onChange={(date) => setEndDate1(date)}
                  customInput={<input style={{ border: '1px solid #ccc', padding: '10px' }} />}
                />
              </div>

              <div>
                <p>Segundo rango de fechas</p>
                <DatePicker 
                  selected={startDate2}
                  startDate={startDate2}
                  endDate={endDate2}
                  onSelect={(date) => setStartDate2(date)}
                  onChange={(date) => setEndDate2(date)}
                  customInput={<input style={{ border: '1px solid #ccc', padding: '10px' }} />}
                />
              </div>
*/