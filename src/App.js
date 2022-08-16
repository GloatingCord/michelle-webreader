import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Comic from "./pages/Comic";
import Navbar from './components/Navbar';
import Waifu from './components/Waifu';
import trumpQuote from './components/trumpQuote';
import './App.css';
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="container">
            <header>
                <section className="section pt-0">
                    <Navbar about="About" number={1} />
                    <div className="container pt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/comic" element={<Comic />} />
                        <Route path="/waifu" element={<Waifu />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                        <trumpQuote />
                    </div>
                </section>
            </header>
        </div>
    );
}

const divStyleButton = {
    width: '56px',
    height: '56px',
    borderRadius: '50% !important',

}

const divStyleSvg = {
    width: '20px',
    height: '20px',
}


export default App;
