import React from 'react';
import { Route, Switch} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Products from './subroutes/Products'
import UserList from './subroutes/UserList';
import './Admin.css'

const Admin = () => {
    return (
        <div>
          <div>
            <nav className='admin-nav'>
              <ul className='admin-nav-ul'>
                <li className='admin-nav-li'>
                  <NavLink activeClassName='admin-navlink-active' className='admin-navlink' exact to='/admin/products'>Products</NavLink>
                </li>
                <li className='admin-nav-li'>
                  <NavLink activeClassName='admin-navlink-active' className='admin-navlink' to='/admin/users'>Users</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/admin/products">
              <Products/>
            </Route>
            <Route path="/admin/users">
              <UserList/>
            </Route>   
          </Switch> 
        </div>
    );
}

export default Admin;
