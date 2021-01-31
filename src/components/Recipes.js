import React from 'react';
import { RecipeListItem } from "./RecipeListItem";
import {Recipe} from './Recipe';

import { useRouteMatch, Switch, Route, useLocation } from "react-router-dom";

const styles ={
    container: {
        display:'flex',
        justifyContent: 'space-between',
        
    },
    header:{
        padding: 'auto'
    }
}


const recipeList = [
    {name: 'Tacopaj', id: 0},
    {name: 'Halloumiburgare', id: 1},
    {name: 'Summer rolls', id: 2},
    {name: 'pankakor', id: 3},
];

export function Recipes() {

    const match = useRouteMatch();
    const {search} = useLocation();
    const searchParams = new URLSearchParams(search);
    const id = searchParams.get('id');
    
    return(
        <div style={styles.container}>
            <div>
                <ul style={{padding: 0, marginTop:0, backgroundColor: 'rgba(0, 255, 0, 0.2)'}}>
                    {
                        recipeList.map((recipe) => {
                            return <RecipeListItem name={recipe.name} id={recipe.id} key={recipe.id} />
                        })
                    }
                </ul>
            </div>
            <Switch>
                <Route path={match.path}>
                    <Recipe id={Number(id)} />
                </Route>
            </Switch>
        </div>
    );
}

