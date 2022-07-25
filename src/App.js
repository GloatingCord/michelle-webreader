import './App.css';
import Navbar from './components/Navbar';
import ComicPage from './components/Comic';
import Waifu from './components/Waifu';

function App() {
    return (
        <div className="container">
            <header>
                <section className="section pt-0">
                    <Navbar about="hei Michelle!" number={1} />
                    <div className="container pt-5">
                        <ComicPage></ComicPage>
                        <Waifu/>
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
