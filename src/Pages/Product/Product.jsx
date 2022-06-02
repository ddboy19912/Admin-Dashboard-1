import { Link } from 'react-router-dom'
import Chart from '../../components/Chart/Chart'
import './Product.css'
import {productData} from '../../dummyData'
import { Publish } from '@material-ui/icons'

function Product() {
  return (
    <div className="product">
         <div className="productEditTitleContainer">
           <h1 className="productEditTitle">Edit Product</h1>
           <Link to='/newProduct'>
           <button className="productEditButton">Create</button>
           </Link>
       </div>
       <div className="productTop">
<div className="productTopLeft">
    <Chart data={productData} dataKey='Sales' title='Sales Analysis'/>
</div>
<div className="productTopRight">
    <div className="productInfoTop">
        <img src="https://cdn.mos.cms.futurecdn.net/PMQabZyoRB3TdS5gci9AZD.jpg" alt="" className="productImage"/>
        <span className="productName">Football</span>
    </div>
    <div className="productInfoBottom">
        <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">132</span>
        </div>

          <div className="productInfoItem">
            <span className="productInfoKey">sales:</span>
            <span className="productInfoValue">3024</span>
        </div>

          <div className="productInfoItem">
            <span className="productInfoKey">active:</span>
            <span className="productInfoValue">yes</span>
        </div>

          <div className="productInfoItem">
            <span className="productInfoKey">In stock:</span>
            <span className="productInfoValue">yes</span>
        </div>
    </div>
</div>
       </div>
       <div className="productBottom">
         <form  className="productForm">
           <div className="productFormLeft">
             <label>Product Name</label>
             <input type="text" placeholder="Football"/>
             <label>In Stock</label>
             <select name="inStock" id="inStock">
               <option value="yes">yes</option>
               <option value="no">no</option>
             </select>

<label>Active</label>
             <select name="active" id="active">
               <option value="yes">yes</option>
               <option value="no">no</option>
             </select>
         
           </div>
           <div className="productFormRight">
             <div className="productUpload">
               <img src="https://cdn.mos.cms.futurecdn.net/PMQabZyoRB3TdS5gci9AZD.jpg" alt="" className="productUploadImage" />
               <label for='file'>
                 <Publish />
               </label>
               <input type="file" id="file" style={{display: 'none'}} />
             </div>
             <button className="productUploadButton">Update</button>
           </div>
         </form>
       </div>
    </div>
  )
}

export default Product