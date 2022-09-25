import Home from "./routes/home/home.component";
import {Routes , Route} from 'react-router-dom';
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return(
    <div>
      <h3>We are on shop ! </h3>
    </div>
    )
}

const Contact = () => {
  return(
    <div>
      <h3>We are on contact ! </h3>
    </div>
    )
}
const Signin = () => {
  return(
    <div>
      <h3>We are on Singnin ! </h3>
    </div>
    )
}

const App = () => { 
    return(
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="signin" element={<Signin/>} />
        </Route>
      </Routes>
       
  )
}

export default App;
