import FAQ from './components/FAQ'
import FidgetSpinner from './components/FidgetSpinner'
const App = () => {
  return (
    <div> 
      <FAQ question='Miért vannak dolgok?' answer='Csak'/>
      <FAQ question='Hány?' answer='Csak'/>
      <FidgetSpinner/>
    </div>
  )
}

export default App