import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { useRouteMatch, Link } from "react-router-dom";

const styles = {
    
    container:{
        padding: 5,
        //backgroundColor: '#467a57',
        //width: 300,
        //flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    link:{
        backgroundColor: '#467a57',
        color: 'white',
        padding: '14px 25px',
        width: '200px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inlineBlock',
    },
    button:{
        borderRadius: 0,
    },
    addContainer:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    }
}

export function RecipeListItem(props) {

    const [count, setCount] = useState(0);
    let match = useRouteMatch();
    return(
        <div style={styles.container}>
            <Link 
                style={styles.link} 
                to={`${match.url}?id=${props.id}`}
            >
                {props.name}
            </Link>
            
            <div style={styles.addContainer}>
                <IconButton 
                    style={styles.button}
                    size='small'
                    onClick={() => setCount(count + 1)}
                >
                    <AddIcon  />
                </IconButton>
                <IconButton  
                    style={styles.button}
                    size='small'
                    onClick={() => setCount(count - 1)}
                >
                    <RemoveIcon />
                </IconButton>
                    
            </div>
            <div style={{display: 'flex', margin: 0, justifyContent: 'center', width:35}}>
                <p style={{padding: '5px'}}>{count}</p>
            </div>
            
        </div>
    );
}

RecipeListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
