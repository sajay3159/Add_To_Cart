import React from 'react';

function Home(props){
    console.log('Home',props)

    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props?.cardData?.cardItems?.cardData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Page</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://thumbs.dreamstime.com/b/new-iphone-features-all-screen-design-99917162.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }
                        >
                        Add To Cart</button>
                </div>
            </div>

        </div>
    )

}

export default Home;