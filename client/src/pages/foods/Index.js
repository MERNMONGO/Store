import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllFoods,deleteFood,deleteAllFood } from "../../services/foodService"


function Index(props) {

    const [foods, setFoods] = useState([])
    // const [food,setFood] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await getAllFoods()
           
            console.log("data:",data)
            const res = Object.values(
                data.reduce((prev,curr)=>(
                  (prev[curr.category] = prev[curr.category] || []).push(curr), prev
                ), {})
              );
              console.log("res:",res);
            setFoods(res)
            // console.log("foods:",foods)
          
        }
        getData()
       
    }, [])

    useEffect(()=>{
        console.log("foods:", foods)
        
    }, [foods])

    async function handleBought(e,id) {
        console.log("bought")
        // e.preventDefault()
        console.log("default")
            await deleteFood(id)
            console.log("deleteFood")
            
    }
 

      

    return (
        
    <>
        
        <div className="butAlign">
            <button className ="fruitsButton" >Fruits</button>  <button>Grains</button>  <button>Proteins</button>  <button>Dairy</button> <button>Vegetables</button>
        </div>
                <div className = "centerText">
                <h1>{props.user.toUpperCase()}'s Grocery List</h1>
                </div>
                <br></br>
                <div className ="flexy" >
                    {foods && foods.map((category)=> (
<div className = "flex">
                        <div className ="rowy" >

{category && category.map((food) => 
  
 
  
        
        <div className ={food.category}>
        <div className ="box" >
            
            <h2>{food.quantity}  {food.food}</h2>
            {food.isOrganic=== true &&
            <p className = "organic">Organic Only</p>
          
            }
            <p className ="loc" >Location:<p>{food.category} Aisle</p> </p>
            <form onSubmit={ (e) => handleBought(e,food._id)}>
            <button >Add to Cart</button>


                                
            
            </form>
            
    <Link to={`/foods/${food._id}/edit`} >
       <span className = "spans">Edit Item</span>
    </Link>
    </div>
    <div>
    <Link to={`/foods/${food._id}`} >
       <span className ="spans">Item Details</span>
    </Link>
    </div>
    

    </div>
    

            
        
   
)}




</div>
                    </div>))}

                       
                  
    
                </div>

                <div className = "buttBot">

                {
                        <Link to="/foods/new">
<button type="button" class="btn btn-secondary">Add Item</button>
                        </Link>
                    }
                    <form onSubmit={ async function handleBoughtAll() {
        await deleteAllFood(foods)
    }}>
                                   <button  class="btn btn-danger">Clear Grocery List</button>


                                    </form>
                                    </div>
                    
 </>
    )
}

export default Index