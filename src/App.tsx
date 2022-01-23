import { ReactElement, useEffect, useRef } from 'react';
import './App.scss';
import round from './ts/round';

interface IProps {
    items: Array<ReactElement>;
    sizeFactor: number;
}

const Slider = (props: IProps) => {
    const refferences = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            refferences.current.forEach((element, index) => {
                let current = element
                let next = refferences.current[index + 1]
                
                if (next && current) {
                    let scale = round(Math.max(0, Math.min(1, (next.offsetTop - window.scrollY) / props.sizeFactor)), 2)
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
            <Slider sizeFactor={500} items={[
                <h1>witam</h1>,
                <p>siema</p>,
                <p>siema</p>,
                <p>siema</p>
            ]} />
        </div>
    );
}

export default App;
