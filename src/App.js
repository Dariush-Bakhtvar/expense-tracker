import ThemeProvider from './Components/Context/ThemeProvider';
import Container from './Components/Container/Container';
const App = () => {

  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  )
}

export default App;