import "./CardFilter2.css";

const CardFilter2 = ({ product, onDetailClick }) => {
    if (!product || !product.id || !product.name || !product.mainCategory || !product.description || !product.price || !product.imageUrl) {
        return null; // O puedes renderizar un componente de carga o un mensaje de error
    }

    const { name, imageUrl, price } = product;

    return (
        <div className="card-filter">
             
            <div className="filter2-imageContent">
               <h3>{name+" "}{" Precio: $"+price}</h3>
                <img src={imageUrl} alt={name} />
                <button className="detail-button" onClick={onDetailClick}>Detalle</button>
            </div>
        </div>
    );
}

export default CardFilter2;