import { ReactElement, useEffect, useRef } from 'react';
import './App.scss';
import round from './ts/round';
import Image1 from './img/image1.jpeg';
import Image2 from './img/image2.jpeg';
import Image3 from './img/image3.jpeg';
import Image4 from './img/image4.jpeg';
import Image5 from './img/image5.jpeg';

interface IProps {
    items: Array<ReactElement>;
    scrollFactor?: number;
}

const Slider = (props: IProps) => {
    const refferences = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            refferences.current.forEach((element, index) => {
                let current = element
                let next = refferences.current[index + 1]
                if (next && current) {
                    let scale = round(Math.max(0, Math.min(1, (next.offsetTop - window.scrollY) / 
                        (window.innerHeight / (props.scrollFactor ? props.scrollFactor : 1.5)))), 2)

                    if (current.style.transform !== `scale(${scale})`)
                        current.style.transform = `scale(${scale})`
                }
            })
        })
    }, [])

    return (
        <div className="cards">
            {props.items.map((item, i) => 
                <div key={i} className="card" ref={(element) => {refferences.current[i] = element}}>
                    <div className="content">{item}</div>
                </div>
            )}
        </div>   
    )
}

function App() {
    return (
        <div className="App">
            <div className="something" style={{height: '100vh', width: '100%'}}></div>
            <Slider scrollFactor={1.2} items={[
                <img src={Image1} />,
                <img src={Image2} />,
                <img src={Image3} />,
                <img src={Image4} />,
                <img src={Image5} />
            ]} />
        </div>
    );
}

export default App;
