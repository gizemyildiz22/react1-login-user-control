import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Form1 from "./Form1"
import Servis from "./Servis"
function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={ <Form1/> } />
<Route path="/about" element={ <About/> } />
<Route path="/contact" element={ <Contact/> } />
<Route path="/form1" element={ <Form1/> } />
<Route path="/servis" element={ <Servis/> } />
<Route path="/home" element={ <Home/> } />
</Routes>
</div>
)
}
export default App