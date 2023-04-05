import { useEffect, useState, useRef } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { getFood, updateFood } from '../../services/foodService'


function Edit() {
// refs
    const categoryRef = useRef()
    const foodRef = useRef()
    const quantityRef = useRef()
    const isOrganicRef = useRef()
// others
const redirect = useNavigate()

    const [food, setFood] = useState({})

    const params = useParams()

useEffect(() => {
    async function getData() {
        const data = await getFood(params.id)
        setFood(data)
    }
    getData()
}, [params.id])





    


   

    async function handleSubmit(event) {
        event.preventDefault()
        let updatedFood = {
            food: foodRef.current.value,
            quantity: quantityRef.current.value,
            isOrganic: isOrganicRef.current.checked,
            category: categoryRef.current.value,
        }
        await updateFood(food._id, updatedFood)
        redirect(`/foods/${food._id}`)
    }

    return ( 
    
            
            <div className='centerEdit'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="zz">Item Name:</label><br />
                    <input type="text" id="zz" ref={foodRef} defaultValue={food.food} /><br /><br />

                    <label htmlFor="zzz">Quantity:</label><br />
                    <input type="number" ref={quantityRef} id="zzz"  defaultValue={food.quantity} /><br /><br />

                    <label for="az"> Food Category:</label>
                        <br></br><br></br>
      
                        <select name="airport" id="az" ref={categoryRef}>
                        <option value="Grains">Grains</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Proteins">Proteins</option>
                        <option value="Fruits"> Fruits</option>
                        </select>

                        <br></br>                        <br></br>


                        <label htmlFor="zzzz">Is it Organic:</label><br />
                         <input type="checkbox" id="zzzz" ref={isOrganicRef} defaultValue={food.checked} /><br /><br />

                         <button >Update Item</button>
                </form>
              
                
            </div>
    );
}

export default Edit;