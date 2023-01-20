import {Link, useRouteError} from "react-router-dom";

function ErrorPage() {
  const {message,statusText} = useRouteError();
  console.log({message,statusText})
  return (
    <div id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{statusText || message}</i>
      <Link to="/Login">back to Home </Link>
    </p>
  </div>
  )
}

export default ErrorPage