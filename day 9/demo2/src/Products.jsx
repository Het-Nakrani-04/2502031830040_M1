import {Link,Outlet} from 'react-router-dom'

function Products()  {
    return(
        <>
        <h1>Products</h1>
        <nav>
            <Link to="Phone">Phone</Link>
            <Link to="Laptop">Laptop</Link>
        </nav>
        <Outlet />
        </>
        
    )
}

export default Products