function Random(props) {
   
    // set random with minimum and maximum value    
    let random =Math.floor(Math.random() * (props.max - props.min) + props.min) 
    return (

          <div>
              <p>Random number bertween {props.min} and {props.max} is {random} </p>
          </div>  

 ); 
}

export default Random;