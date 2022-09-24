import React ,{useState, useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import {Row,Col,ListGroup,Image,Card,Button} from 'react-bootstrap'
import Rating from '../Components/Rating' 
import axios from 'axios'



const ProductScreen = () => {
    const params = useParams()
   const [product,Setproduct] = useState({})
   useEffect(()=>{
    const fetchProduct = async ()=>{
      const {data} = await axios.get(`/api/products/${params.id}`)
      console.log('params id is ',params.id)
      Setproduct(data)
    }
    fetchProduct()
    
  },[])
return(
    <>
<Link className='btn btn-dark my-3' to='/'>
    go back
    </Link>
    <Row>
        <Col md={6}>
            <Image src ={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating 
                    value={product.rating}
                    text={`${product.numberofReviews} reviews` }
                    />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        price:{product.price}
                        
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description:{product.description}
                    </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={3}>
               <Card>
                <ListGroup variant='flush'>
                   <ListGroup.Item>
                    <Col>
                        <Col>Price:</Col>
                    </Col>
                    <Col>
                        <h3>${product.price}</h3>
                    </Col>
                   </ListGroup.Item>
                   <ListGroup.Item>
                    <Col>
                        <Col>Status:</Col>
                    </Col>
                    <Col>
                        {product.countinStocks > 0 ? 'In Stock' 
                        : 'Out of Stock'}
                    </Col>
                   </ListGroup.Item>
                  <ListGroup.Item>
                    <Button className='btn-block' 
                    type='button'
                    disabled={product.countinStocks === 0}>
                        Add to Cart
                    </Button>
                  </ListGroup.Item>
              </ListGroup>

                </Card>
            </Col>
    </Row>
</>
)
}

export default ProductScreen