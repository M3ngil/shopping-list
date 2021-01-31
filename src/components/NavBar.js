import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import '../styles/navBar.css'


const styles = {
    color: 'white',
    padding: '14px 25px',
    textDecoration: 'none',
    display: 'inlineBlock',
}
export function NavBar(props) {

    return(
        <div>
            <ul style={{backgroundColor: '#467a57', display:'flex', padding: 0, margin: 0}}>
                {
                    props.links.map((linkName, index) =>{
                        return <NavLink 
                            to={{pathname: `/${linkName}`}} 
                            style={styles} 
                            activeClassName="currentNavLink" 
                            key={index}
                            >
                                {linkName}
                            </NavLink>
                    })
                }
            </ul>
        </div>
    );
}

NavBar.propTypes = {
    links: PropTypes.array.isRequired
}