import React from 'react'

 function Alert(props) {
    const capitalize = (word) => {
        const capital = word.toLowerCase();
        return capital.charAt(0).toUpperCase() + capital.slice(1);
    }
  return (  
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          {/* <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close"></button> */}
        </div>
      
      
  )
}
export default Alert