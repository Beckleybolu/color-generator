import React,{useState,useEffect} from "react"

const SingleColor = ({rgb,weight,index,hexColor})=>{
    const [alert, setAlert] = useState(false)
    const hexValue = `#${hexColor}`
    const background = rgb.join(',')
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlert(false)
        }, 1000)
        return () => clearTimeout(timeout)
      }, [alert])
    return(
        <article style={{backgroundColor: `rgb(${background})`}} className={`color ${index > 10 && 'color-light'}`}
        onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
          }}
        >
            <p className="percent-value">{`${weight}%`}</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColor
