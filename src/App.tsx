import './styles/index.scss';
import Slider from './components/Slider';
import Image1 from './img/image1.jpeg';
import Image2 from './img/image2.jpeg';
import Image3 from './img/image3.jpeg';
import Image4 from './img/image4.jpeg';
import Image5 from './img/image5.jpeg';

function App() {
    return (
        <div className="App">
            <div className="info-box">
                <p>↓ Scroll down ↓</p>
            </div>

            <Slider scrollFactor={1.2} items={[
                <img src={Image1} />,
                <img src={Image2} />,
                <img src={Image3} />,
                <img src={Image4} />,
                <img src={Image5} />
            ]} />

            <div className="info-box">
                <p>↑ Scroll up ↑</p>
            </div>
        </div>
    );
}

export default App;
