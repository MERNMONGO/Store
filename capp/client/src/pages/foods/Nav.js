import { Link } from "react-router-dom";

function Nav({ user, setUser }) {
  
  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <div className="navb">
    <nav className="navbar navbar-expand navbar-dark ">
    <div className="container-fluid">
       

    
            <ul className="navbar-nav">
         
             
                        {user ? (
            <>
                
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">Grocery List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/foods/new">Add Item</Link>
              </li>
           
              <li onClick={logout}>
                <Link className="nav-link" to="/">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/foods">Grocery List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </>
          )}
    
            </ul>
        </div>
   
    </nav>
    </div>
  );
}

export default Nav;