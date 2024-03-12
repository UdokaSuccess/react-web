import React from 'react'
import img from './pic6.jpg'
import imgb from './pic7.jpg'


 function Connect() {
   return (
    <div className='row-2'>
      <div>
<img src={img} width={160}/>
<img src={imgb} width={160}/>

</div>
<div>
<h4>Connect For Expert Counselling</h4>
<button>Connect</button>
</div>
    </div>
  )
}

export default Connect

