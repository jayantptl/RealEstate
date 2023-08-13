import React from 'react';

const Properties = (prop) => {
  return <div className='prop_cont'>
                
  {prop.properties &&  prop.properties.map((data)=>{
           return ( 
             <div className='prop' key={data.id}>
            <img src={data.property_image} style={{height:'300px',width:'302px'}} alt="" />
            <h6 className='mx-2'>${data.price} <span className='sideMonth'>/month  </span> 
             <span className='mx-3'> {data.type} , {data.MoveIn}</span>
             </h6>
             <h5 className='mx-2'>{data.name} - {data.country}</h5>
             <p className='mx-2'>{data.address}</p>
             <p className='mx-2'>{data.bedrooms} Bedroom,  {data.bathrooms} Bathroom, {data.surface} </p> 
             </div>
           )
      })  
     
  }

</div>
};

export default Properties;
