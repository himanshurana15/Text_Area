/* eslint-disable react/prop-types */


export default Alert;




function Alert(props) {
  const type = props.alert?.type; // Use optional chaining operator

  const capitalize = (word) => {
    if (word) {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return word;
  }

  return (
    <div style={{height: '50px'}}>
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(type)}</strong> {props.alert?.msg}
      </div>
    </div>
    
  )
}