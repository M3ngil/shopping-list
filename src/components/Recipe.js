import React from 'react';
import PropTypes from 'prop-types';

const recipe = {
    title: 'Tacopaj',
    imageUrl: 'https://cdn-rdb.arla.com/Files/arla-se/4287675424/64f6a3c3-a309-45ee-a1d1-3a15a980e181.jpg?mode=crop&w=479&h=335&ak=f525e733&hm=d7d1b1dd',
    ingredientList: [
        {name: 'Taco', amount: 100, unit: 'g'},
        {name: 'Paj', amount: 2, unit: 'l'}
    ],
    instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}

const styles ={
    container:{
        border: 1,
        borderStyle:'solid',
        borderRadius: 5,
        display:'flex',
        padding: 10,
        margin: 'auto',
        flexDirection: 'column',
        maxWidth: 1000
    },
    header:{
        margin: 10,
        padding: 10,
        fontWeight: 600,
        fontFamily: 'Arial',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    image:{
        height: 200,
        backgroundImage: 'url(https://cdn-rdb.arla.com/Files/arla-se/4287675424/64f6a3c3-a309-45ee-a1d1-3a15a980e181.jpg?mode=crop&w=479&h=335&ak=f525e733&hm=d7d1b1dd)',
        backgroundSize: 'cover'
      }
}


export function Recipe(props) {

    return(
        <div style={styles.container}>
            <div style={styles.image}>
                <h1 style={styles.header}>Recipe {props.id}</h1>
            </div>
            <div>
                <h3>ingredients:</h3>
                {recipe.ingredientList.map((i, index) =>{
                    return <p key={index} style={{margin:0}}>{i.name + ' : ' + i.amount + ' ' + i.unit}</p>
                })}
            </div>
            <div>
                <h3>instructions:</h3>
                <p>{recipe.instructions}</p>
            </div>
        </div>
    );
}

Recipe.propTypes = {
    id: PropTypes.number.isRequired
}