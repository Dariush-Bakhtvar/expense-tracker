import { useState } from 'react'
const WithToggle = (WrappedComponent) => {
  const UpdatedComponent = (props) => {
    const [isToggle, setIsToggle] = useState(false);
    const setToggleHandler = () => {
      setIsToggle(!isToggle);
    }
    return <WrappedComponent isToggle={isToggle} setIsToggle={setToggleHandler} {...props} />
  }
  return UpdatedComponent;
}
export default WithToggle
