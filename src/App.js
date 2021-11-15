import './App.css';
import Axios from "axios"
import {useState} from 'react' 
import RecipeTile from './RecipeTile';
function App() {
  const [query, setquery]= useState("")
  const [recipes, setRecipes] = useState([])
  const [healthLabels, sethealthLabels] = useState('vegan')
  const YOUR_APP_ID="d8a312e5";
  const YOUR_APP_KEY="26e526e9e6a6426f8f3cb06b8d2f8944"; 
  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`
  async function getRecipes()
  {
    var result=await Axios.get(url); 
    setRecipes(result.data.hits)
    console.log(result.data)
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
     <h1>Food Recipes Plaza 🍔</h1>
     <form className='app__searchForm' onSubmit={onSubmit}>
       <input 
       className='app__input'
       type='text' 
       placeholder='Enter Ingredient' 
       value={query}
       onChange={(e) => setquery(e.target.value)}></input>
       <input className='app__submit' type='submit' value='Search'/>
       <select className='app__healthLabels'>
         <option onClick={() =>sethealthLabels('vegan')}>Vegan</option>
         <option onClick={() =>sethealthLabels('vegetarian')}>Vegetarian</option>
         <option onClick={() =>sethealthLabels('paleo')}>Paleo</option>
         <option onClick={() =>sethealthLabels('dairy-free')}>Dairy-Free</option>
         <option onClick={() =>sethealthLabels('gluten-free')}>Gluten-Free</option>
         <option onClick={() =>sethealthLabels('wheat-free')}>Wheat-Free</option>
         <option onClick={() =>sethealthLabels('fat-free')}>Fat-Free</option>
         <option onClick={() =>sethealthLabels('low-sugar')}>Low-Sugar</option>
         <option onClick={() =>sethealthLabels('egg-free')}>Egg-Free</option>
         <option onClick={() =>sethealthLabels('peanut-free')}>Peanut-free</option>
         <option onClick={() =>sethealthLabels('tree-nut-free')}>Tree-nut-free</option>
         <option onClick={() =>sethealthLabels('soy-free')}>Soy-free</option>
       </select>
     </form>
     <div className='app__recipes'>
       {recipes.map((recipe) => {
        return <RecipeTile recipe={recipe}/>;
       
       })}
     </div>
    </div>
  );
}

export default App;
