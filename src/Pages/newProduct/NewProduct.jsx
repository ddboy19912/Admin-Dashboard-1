import './NewProduct.css'

function newProduct() {
  return (
   <div className="newProduct">
       <h1 className="addProductTitle">New Product</h1>
       <form className="addProductForm">
           <div className="addProductItem">
               <label>Image</label>
               <input type="file" id='file' />
           </div>

           <div className="addProductItem">
               <label>Name</label>
               <input type="text" placeholder="Football" />
           </div>

           <div className="addProductItem">
               <label>Stock</label>
               <input type="text" placeholder='312'/>
           </div>

           <div className="addProductItem">
               <label>Active</label>
               <select name="active" id="active">
                   <option value="yes">yes</option>
                     <option value="no">no</option>
               </select>
           </div>
           <button className="newProductButton">Create</button>
       </form>
   </div>
  )
}

export default newProduct