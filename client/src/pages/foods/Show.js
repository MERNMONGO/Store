import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getFood,deleteFood } from "../../services/foodService"




function Show() {
    const params = useParams()
    const [food, setFood] = useState([])

useEffect(() => {
       

        async function getData() {
            const data = await getFood(params.id)
            console.log(data)
            setFood(data)
            
        console.log("food:",food)
           
        }
        getData()
    }, [params.id, food])


    const redirect = useNavigate()
   
   



 

    async function handleDeleteFood() {
        await deleteFood(food._id)
        redirect('/foods')
    }

    let snacks = food.isOrganic
    if (snacks === true) {
        snacks = `Organic Status: ${food.food} is Organic`;
      } else {
        snacks = `${food.food} is NOT organic`;
      }
    //   let bgColor = food.category === "Fruits" ? red:

    return (
        <div className ="showView">
                <div className="showList">
                    <h2>Item Name: {food.food}</h2>
                    <h2>Quantity: {food.quantity}</h2>
                    <h2>Category: {food.category}</h2>
                    <h2>{snacks}</h2>
              

             
                   
                    
                        <div className = "showButtons">
                        <button type="button" class="btn btn-danger" onClick={handleDeleteFood}>Delete</button>

                        <Link to={`/foods/${food._id}/edit`}>
                        <button type="button" class="btn btn-secondary" disabled>Edit</button>

                        </Link>
                        </div>
                       
                    </div>
                
            
        </div>
        
    )
}

export default Show