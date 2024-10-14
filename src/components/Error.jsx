import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError()

    return (
        <div>
            <h1>Hi, this page doesn't exist</h1>
            <p>{err.statusText}</p>
        </div> 
    )
}

export default Error