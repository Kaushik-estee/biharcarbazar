import axios from "axios"
import {  Grid,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
import ProductCard from "./Productcard"
import Footer from "./Footer"


const Product=()=>{
const [data,setData] = useState([])
const [asortdata,setAsortdata]= useState([])
const [dsortdata,setDsortdata]= useState([])

const fetchData = () => {
    axios.get('https://car-back-qqz1.onrender.com/cars')
      .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
        console.error('Fetching data failed:', error);
      });
  };

// const onEdit=(id)=>{
// console.log(id);
// fetchData();
// }
const  DescData=async(page)=>{
               
  let res = 
  await fetch(`https://car-back-qqz1.onrender.com/cars?\_sort=price&_order=desc`)
  let data = await res.json()
  setData(data);
}
const  AscData=async(page)=>{
 
  let res = await fetch
  (`https://car-back-qqz1.onrender.com/cars?_sort=price&_order=asc`)
  let data = await res.json()
  setData(data);
}
const  All=async(page)=>{
 
  let res = await fetch
  (`https://car-back-qqz1.onrender.com/cars?`)
  let data = await res.json()
  setData(data);
}



useEffect(() => {
    fetchData(); // Fetch initial data
  }, []);
  function HandleChange(e){
    if(e.target.value==="asc"){
        console.log(asortdata)
        AscData()
    }else if(e.target.value==="dsc"){
        DescData()
        console.log(dsortdata)
    }else if(e.target.value==="all"){
All()
    }
  
   }

   
    return(
<div>
<div id="header" >
                
                <select style={{margin:'30px',border:'1px solid gray',borderRadius:'5px'}} onChange={HandleChange}  > Sort by: All 
                    <option value="all">Sort by Price: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select>
            </div>
<Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={6}> 
    {/* mapping product */}
{
    data?.length>0 && data.map((e)=>{
return (
<GridItem key={e.id} >
    {/* mapping in card */}
<ProductCard

image={e.image}
id={e.id}
year={e.year}
price={e.price}

make={e.make}

model = {e.model}
kms = {e.kms}
transmission={e.transmission}
fuel={e.fuel}
exteriorcolor={e.exteriorcolor}

/>
</GridItem>
     ) })
}

</Grid>
<Footer/>

</div>
    )
}
export default Product