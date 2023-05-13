import "./View.css"
import { useState } from 'react'

const View = () => {
    const [DarkMode, setDarkMode] = useState(false);

    const changeMode = () => {
        setDarkMode(!DarkMode);
    }

    const stile = DarkMode ? "dark" : "ligth";

    return (
        <div>
            <button onClick={changeMode}>Change to DarkMode</button>
        </div>
    )
}

export default View