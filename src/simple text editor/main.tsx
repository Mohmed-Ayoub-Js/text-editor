import '../styles.css';
import '../App.css';
import './texteditor.css';
import ReactDOM from 'react-dom'; 
import appheader from './appheader.tsx';
function textED_main(){  
    return (
        <div>
            {appheader()}
            <div>
                <textarea className="numbered" placeholder="Enter something..."></textarea>
            </div>
        </div>
    )
}
export default textED_main;
