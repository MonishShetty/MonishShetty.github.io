import React from 'react'

export default function sell() {
  return (
    <div>
     <div  class="formmain" style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/3543885.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: "no-repeat", height: '1058px',
        width: '100%'
      }}>
    <div className='sellform'>
      <h1 className='sellheading'>Sell here...</h1> 
        <form className='sellformclass' action="">
          
            Name <input type="text" required placeholder="Enter your name"/> <br/>
            Age <input type="text" required placeholder="Enter your name"/> <br/>
            Contact number <input type="text" required placeholder="Enter your contact number"/> <br/>
            Address <input type="text" required placeholder="Enter your address"/> <br/>
            Pin code <input type="text" required placeholder="Enter your pincode"/> <br/>
            Product<input type="text" required placeholder="Enter the name of the product "/> <br/>
            Quantity <input type="text" required placeholder="Enter the quantity of the product "/> <br/>
            Price <input type="number" required placeholder="Enter the price you claim for your product"/> <br/>



            <a class="bn31" href="/"><span class="bn31span">Submit</span></a>
        </form>
        </div>





























        
      </div>
    </div>
  )
}
