import {connect} from 'react-redux';
import addToCart from '../Services/Action/Actions'
import Home from '../Components/Home';

const mapStateToProps=state=>({
    cardData:state
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
