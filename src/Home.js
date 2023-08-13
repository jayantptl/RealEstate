import React,{useState,useEffect} from 'react';
import {Data} from './data'
import LocationDropdown from './components/LocationDropdown';
import PropertyTypeDropdown from './components/PropertyTypeDropdown';
import PriceRangeDropdown from './components/PriceRangeDropdown'
import MoveInDropdown from './components/MoveInDropdown';
import Properties from './components/Properties';



const Home = () => {

  // States for filters
  const [properties,setProperties]=useState([]);
  const [type,setType]=useState('All-Types');
  const [location,setLocation]=useState('Show-All');
  const [price,setPrice]=useState('all-ranges');
  const [moveIn,setMoveIn]=useState('Any-Time');
  const [sideTitle,setSideTitle]=useState('All-Types');

  // We set the data into properties state on first render
  useEffect(()=>{
      setProperties(Data);
  },[]);


  // handle functions when a dropdown menu is selected
  const handleLocation=(e)=>{
     setLocation(e.target.value);
  }
  const handleType=(e)=>{
    setType(e.target.value);
  }
  const handlePrice=(e)=>{
     setPrice(e.target.value);
  }

  const handleMoveIn=(e)=>{
     setMoveIn(e.target.value);
  }


  // handle function when search button is clicked
  const handleClick=(e)=>{
    
    //getiing price bounds
    const arr=price.split('/');
    const lowerPrice=(arr[0])*10000;
    const upperPrice=(arr[1])*10000;


    // filtering the data as per selected states and saving in 'properties' state 
    const filtered_data=Data.filter((data)=>{
      
       return (location==='Show-All' || data.country===location) 
          && (type==='All-Types' || data.type===type)
          && (price==='all-ranges' || (data.price>=lowerPrice && data.price<=upperPrice))
          && (moveIn==='Any-Time' || data.MoveIn===moveIn);
    });
  
    setSideTitle(type);
    setProperties(filtered_data);
}

  return <>
          <section className='main'>
               <div className="container ">
                  <div className="row py-5">
                     <div className="col-lg-10 py-5 mx-auto">
                          <h1 className='text-white text-center'>Find your Property</h1>
                          <p className='text-white text-center'>We offer the Best Real Estate Deals</p>
                                   
                             <div className="card mt-4">
                                <div className="card-body">
                                   <div className="row">

                                    {/* Filter card components */}
                                      <LocationDropdown location={location} handleLocation={handleLocation}/>
                                      <PropertyTypeDropdown type={type} handleType={handleType}/>
                                      <PriceRangeDropdown price={price} handlePrice={handlePrice} />
                                      <MoveInDropdown moveIn={moveIn} handleMoveIn={handleMoveIn}/>
                                      
                                  <div className="col-lg-3 bt_con">
                                      <input type="button" onClick={handleClick} className='btn1' value={'search'} />
                                  </div>
                              </div>
                          </div>
                     </div>
                 </div>
            </div> 
      </div>
  </section>


  {/* Render the properties component */}
  {properties && ( <>
      <div className='head'> <h4>{sideTitle} Property for Rent</h4>  </div>
      <Properties properties={properties}/>
  </>
  )} 

  {/* if there are no such property */}
  {!properties && (
        <div className='noData'>
        <h4>No Properies Available</h4>
      </div>

  )}
       

  
  </>
};

export default Home;
