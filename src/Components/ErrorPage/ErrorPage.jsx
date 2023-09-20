import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error  = useRouteError();
    console.log(error)
    return (
        <div className="text-5xl font-bold text-center mt-20">
            <h1>Oops...</h1> <br></br>
            <h4>{error.statusText || error.message }  </h4>
            {
                error.status === 404 && 
                <div>
                 <Link to={'/'} ><button className="text-base border p-1">Go Home</button></Link>
                </div> 
            }
        </div>
        
    );
};

export default ErrorPage;