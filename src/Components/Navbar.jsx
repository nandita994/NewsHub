
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-5">NewsHub</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <a style={{cursor:"pointer"}} className="nav-link" onClick={()=>setCategory("technology")} >Technology</a>
        <a style={{cursor:"pointer"}} className="nav-link" onClick={()=>setCategory("business")} >Business</a>
        <a style={{cursor:"pointer"}} className="nav-link" onClick={()=>setCategory("health")} >Health</a>
        <a style={{cursor:"pointer"}} className="nav-link" onClick={()=>setCategory("sports")} >Sports</a>
        <a style={{cursor:"pointer"}} className="nav-link" onClick={()=>setCategory("entertainment")} >Entertainment</a>
        
      </div>


      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
