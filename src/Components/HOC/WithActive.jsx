import { useState } from 'react'
const WithActive = (WrappedComponent) => {
  const UpdatedComponent = (props) => {
    const [isActive, setIsActive] = useState(false);
    const setActiveHandler = () => {
      setIsActive(!isActive);
    }
    return <WrappedComponent isActive={isActive} setIsActive={setActiveHandler} {...props} />
  }
  return UpdatedComponent;
}
export default WithActive
