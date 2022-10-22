import React from 'react'

export default function signup() {
  return (
    <div>
         <div >
      
      <div class="formmain" style={{backgroundImage:"url('https://wallpaperaccess.com/full/803470.jpg')", backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:"no-repeat",height:'658px',
         width:'100%'} }>
           <div className='signupform'>
           <h1 className='signupheading'>Signup page</h1> 
             <form className='signupformclass' action="">
               
                 Name <input type="text" required placeholder="Enter your name"/> <br/>
                 Contact number <input type="tel" required placeholder="Enter your contact number" minLength={10} maxLength={10}/> <br/>
                 Location <input type="text" required placeholder="Enter your location"/> <br/>
                 Email <input type="email" required placeholder="Enter your email"/> <br/>
                 Password <input type="password" required placeholder="Enter your password"/> <br/>
     
                 <a class="bn31" href="/"><span class="bn31span">Submit</span></a>
             </form>
             </div>
         </div>
     
     
         </div>
    </div>
  )
}





