import { useState } from "react";
const CakeForm = ({cake, listOfCakes, setListOfCakes}) => {

    const[name, setName] = useState("");
    const[ingredients, setIngredients] = useState([]);
    const[price, setPrice] = useState("");
    const[rating, setRating] = useState("");
    const[error, setError] = useState("");

    // i want to add the whole validation thing as well
    const handleValidation = (e) => {
        let errorMessage = "";
        if(name === "" || ingredients === [] || price === "" || rating === ""){
            errorMessage = "Please fill in all fields";
        }

        if(name === cake.cakeName){
            errorMessage = "This cake already exist!"
        }

        if(price < 0 || rating < 0){
            errorMessage = "Please give a price/rating greater than 0;"
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!handleValidation){
            const updatedCakes =  [...listOfCakes];
            const newCakeItem = {
                name : name,
                ingredients : ingredients,
                price : price,
                rating : rating
            }

            updatedCakes.push(newCakeItem);

            setListOfCakes(updatedCakes);
        }
    }

return (
    <>
    <h2>Add a new cake</h2>
    <form onSubmit={handleFormSubmit}>

    <p>Cake name</p>
    <input
    type="text"
    name="cake_name"
    placeholder="Cake name..."
    value={name}
    onChange={(e) => setName(e.target.value)}/>

    <p>Ingredients:</p>
    <input
    type="text"
    name="ingredients"
    placeholder="Add ingredients..."
    value={ingredients}
    onChange={(e) => setIngredients(e.target.value)}/>
        <ul>
            
        </ul>

    <p>Price</p>
    <input
    type="text"
    name="price"
    placeholder="Price..."
    value={price}
    onChange={(e) => setPrice(e.target.value)}/>

    <p>Rating</p>
    <input
    type="text"
    name="rating"
    placeholder="Rating..."
    value={rating}
    onChange={(e) => setRating(e.target.value)}/>

    <input 
    type="submit"
    name="submit"/>

    </form>
    <p>{error}</p>
    </>
)
};

export default CakeForm;

//TO-DO:
// add new cake to listOfCakes 