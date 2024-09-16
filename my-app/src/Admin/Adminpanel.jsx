import axios from "axios"
import {  Grid,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
import ProductCard from "./AdminCard"
import Footer from "../Ui/Components/Footer"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router"
const Product=()=>{
const [data,setData] = useState([])
const [asortdata,setAsortdata]= useState([])
const [dsortdata,setDsortdata]= useState([])
const{_id}=useParams()
console.log("params",_id);

const fetchData = () => {
    axios.get('https://wonderful-lamarr.152-53-1-117.plesk.page/cars')
      .then(response => {
        setData(response.data.cars);
        console.log(response.data.cars);
      })
      .catch(error => {
        console.error('Fetching data failed:', error);
      });
  };

// const onEdit=(id)=>{
// console.log(id);
// fetchData();
// }



const onDelete=(_id)=>{
    axios.delete(`https://wonderful-lamarr.152-53-1-117.plesk.page/cars/${_id}`)
    .then(response => {
      // Handle successful response
      
      console.log('Delete successful:', response.data);
      console.log(_id);
     // Notify parent component of successful deletion
     fetchData();
     toast.success('Deleted successfully');
    })
    .catch(error => {
      // Handle error
      console.log(_id);
      console.error('Delete failed:', error);
      fetchData();
    });
}

const  DescData=async(page)=>{
               
  let res = 
  await fetch(`https://wonderful-lamarr.152-53-1-117.plesk.page/cars?\_sort=price&_order=desc`)
  let data = await res.json()
  setData(data);
}
const  AscData=async(page)=>{
 
  let res = await fetch
  (`https://wonderful-lamarr.152-53-1-117.plesk.page/cars?_sort=price&_order=asc`)
  let data = await res.json()
  setData(data);
}
const  All=async(page)=>{
 
  let res = await fetch
  (`https://wonderful-lamarr.152-53-1-117.plesk.page/cars?`)
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
<Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}gap={6}> 
    {/* mapping product */}
{
    data?.length>0 && data.map((e)=>{
return (
<GridItem key={e._id} >
    {/* mapping in card */}
<ProductCard

image={e.image}
id={e._id}
year={e.year}
price={e.price}

make={e.make}

onDelete={onDelete}

/>
</GridItem>
     ) })
}

</Grid>

<ToastContainer/>
</div>
    )
}
export default Product