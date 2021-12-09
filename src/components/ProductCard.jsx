import'./page.css'
function ProductCard({onAdd, passedData}) {
    if (!passedData.length) return <h2>Loading ...</h2>;
    return (
        <div>
              <div className={'pro'}>
                {
                    passedData.map((product, index)=>(
                        
                        <div key={index} className={'pr'}>
                            <div className={'img-div'}>
                            <img src={product.image} alt="" />
                            </div>
                            <h3 className={'pro-nam'}>
                            {product.title}
                            </h3>
                            <h4 className={'price'}>
                            $ {product.price}
                            </h4>
                            <button className={'cart-btn'} onClick={()=>onAdd(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCard;