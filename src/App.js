import './App.css';
import Dropdown from './color';

function App() {
    var options = [
        { 'label': 'Lime', 'value': 'lime' },
        { 'label': 'Lavender', 'value': 'lavender' },
        { 'label': 'Crimson', 'value': 'crimson' },
        { 'label': 'Darkblue', 'value': 'darkblue' },
        { 'label': 'Teal', 'value': 'teal' },
        { 'label': 'Rebecca Purple', 'value': 'rebeccapurple' },
        { 'label': 'Ghost White', 'value': 'ghostwhite' },
        { 'label': 'Aqua Marine', 'value': 'aquamarine' },
        { 'label': 'Alice Blue', 'value': 'aliceblue' }
    ];
    return (
        <div className="App">
            <h1 className='mainH'>Dynamic Color Changer</h1>
            <Dropdown options={options} />
            <div className="box">
                <div id='noob' className='area'>Magic Box</div> 
            </div>
        </div>
    );
}

export default App;
