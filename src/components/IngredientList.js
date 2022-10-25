// loops over ingredients from props and displays one Ingredient component per item
import React from 'react'
import Ingredient from './Ingredient'

 const IngredientList = ({ingredients, add}) => {
    
    let allIngredients = ingredients.map((ing, i) => ( 
      
       <li key={i}>
            <Ingredient
                itemKey={i}
                ingredient={ing}
                clickFunc={add}
            />
        </li>
        ))          
    
    
    // const allIngredients = 
    // props.ingredients.map((ing, i) =>{
    //     return <Ingredient ingredients={ing} key={i} clickFunc ={props.add}/>
    // })
    
    return (
        <section className='pane'>
            <h3>Ingredients List</h3>
            <ul>
                {allIngredients}
                
            </ul>
        </section>
    )
    
}
export default IngredientList