import React, { useEffect, useState } from "react"
const Display = (props) => {
    const [display, setDisplay] = useState(null)
    useEffect(() => {
        if (props) {
            setDisplay(props.display)
        }
    }, [props])
    const handleBack = () => {
        props.goBack()
    }
    return (
        <div>{display &&
            <div>
            <h1>{display.first_name}</h1>
            <button onClick={handleBack}>GOBACK</button>
            </div>
        
        }
        </div>
    )
}
export default Display