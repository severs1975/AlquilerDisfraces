import "./CardCat.css";

const CardCat = ({ product }) => {

    if (!product || !product.id || !product.name ||!product.mainCategory|| !product.description || !product.price || !product.imageUrl) {
        return null; // O puedes renderizar un componente de carga o un mensaje de error
      }
    
      const { id, name, mainCategory, description, price, imageUrl } = product;
    
      return (
        <div className="CATcard">
          <h3>{mainCategory}</h3>
          <div className="CATimageContent">
            <img src={imageUrl} alt={name} />
          </div>
        </div>
      );

}

export default CardCat