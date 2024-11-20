import AboutMovie from "./Resources/AboutMovie";
import BookingForm from "./Resources/BookingForm";
import Home from "./Resources/Home";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={ <Home/>} path='/' />
          <Route element={ <AboutMovie/>} path='/aboutmovie/:id' />
          <Route element={ <BookingForm/>} path='/bookmovie/:Title' />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
