import { useRef } from "react";
import { createFood } from "../../services/foodService";
import { useNavigate } from "react-router-dom";



function New({user}) {
    const redirect = useNavigate()

let foodRef = useRef()
let quantityRef = useRef()
let categoryRef = useRef()
let isOrganicRef = useRef()
let priceRef = useRef()
let caloriesRef = useRef()


async function handleSubmit(e) {
    e.preventDefault()
    let newFood = {
        food: foodRef.current.value,
        quantity: quantityRef.current.value,
        category: categoryRef.current.value,
        isOrganic: isOrganicRef.current.checked,
        price:priceRef.current.value,
        calories:caloriesRef.current.value,
        user: user
        
    }
    console.log("food",newFood)
    await createFood(newFood)
    redirect ('/foods')
}

return ( 
    <div className="centerText">
        <h1>Add Grocery Item</h1>
        <form onSubmit={handleSubmit}>

        <label for="az"> Food Category</label>
        <br></br><br></br>

      
            <select name="airport" id="az" ref={categoryRef}>
            <option value="Grains">Grains</option>
            <option value="Dairy">Dairy</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Proteins">Proteins</option>
            <option value="Fruits" selected >Fruits</option>
            <option selected >Select a Category</option>
            </select>
            <br></br><br></br>

            <label htmlFor="z">Item Name</label><br />
            <input type="text" id="z" ref={foodRef} /><br /><br />

            <label htmlFor="zz">Quantity</label><br />
            <input type="number" id="zz" ref={quantityRef} /><br /><br />

            <label htmlFor="zzw">Price</label><br />
            <div className = "input-icon"><input type="number" id="zzw" ref={priceRef} /><i>$</i></div><br /><br />
           
            <label htmlFor="zszz">Calories</label><br />
            <input type="number" id="zszz" ref={caloriesRef} /><br /><br />


            <label htmlFor="zzzz">Is it Organic</label><br />
                <input type="checkbox" id="zzzz" ref={isOrganicRef} /><br /><br />

                <button onClick = {handleSubmit} type="button" class="btn btn-primary">Add Item To List</button>
        </form>
    </div>
 );
}
export default New;