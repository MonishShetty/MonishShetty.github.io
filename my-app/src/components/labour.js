import React from 'react'

export default function labour() {
  
  return (
    <div>
      <div class="formmain" style={{backgroundImage:"url('https://media.istockphoto.com/photos/in-the-muddy-indian-women-planting-rice-sprout-in-the-field-picture-id1325387353?k=20&m=1325387353&s=612x612&w=0&h=hZWF1Zu_E49Y8a2fL0zxV-SXx8z_eEZmR4hmR8iZAmc=')", backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:"no-repeat",height:'1008px',
    width:'100%'} }>
      <div className='labourform'>
      <h1 className='labourheading'>Apply as a labourer</h1> 
        <form className='labourformclass' action="">
          
            Name <input type="text" required placeholder="Enter your name"/> <br/>
            Age <input type="text" required placeholder="Enter your name"/> <br/>
            Contact number <input type="text" required placeholder="Enter your contact number"/> <br/>
            Address <input type="text" required placeholder="Enter your address"/> <br/>
            Pin code <input type="text" required placeholder="Enter your pincode"/> <br/>
            Field Works <input type="text" required placeholder="Agricultural activities you are good at"/> <br/>
            Anything you would like to add <textarea name="" id="" cols="20" rows="20"></textarea>

            <a class="bn31" href="/"><span class="bn31span">Submit</span></a>
        </form>
        </div>


        </div>
    </div>
   
  )
}
