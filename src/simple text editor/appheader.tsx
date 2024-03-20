import '../styles.css'
import '../App.css'
import './texteditor.css'
function appheader(){
    return (
        <div className='Header'>
            <header>
                <div className='item_container main'>
                    <div className='item'>open file</div>
                    <div className='item'>save as</div>
                </div>
            </header>
        </div>
    )
}
export default appheader;