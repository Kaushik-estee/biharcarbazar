import axios from "axios"
import {  Grid,
    GridItem} from "@chakra-ui/react"
import {useEffect,useState} from "react"
import ProductCard from "./Productcard"
import Footer from "./Footer"
import Loading from "./Loading"
import Pagination from "./Pagination"
import Nav from "../Nav"
import{BsFillFilterSquareFill} from "react-icons/bs"
import Popup from "./Test"
import './Popup.css'

const Product=()=>{
const [data,setData] = useState([])
const [asortdata,setAsortdata]= useState([])
const [dsortdata,setDsortdata]= useState([])
const [isLoading, setIsLoading] = useState(true);
const [isPopupOpen, setIsPopupOpen] = useState(false);

const fetchData = () => {
    axios.get('https://car-back-qqz1.onrender.com/cars')
      .then(response => {
        setData(response.data);
        setIsLoading(false);
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
  await fetch(`https://car-back-qqz1.onrender.com/cars?_sort=price&_order=desc`)
  let data = await res.json()
  setData(data);
  setIsLoading(false);
}
const  AscData=async(page)=>{
 
  let res = await fetch
  (`https://car-back-qqz1.onrender.com/cars?_sort=price&_order=asc`)
  let data = await res.json()
  setData(data);
  setIsLoading(false);
}
const  All=async(page)=>{
 
  let res = await fetch
  (`https://car-back-qqz1.onrender.com/cars`)
  let data = await res.json()
  setData(data);
  setIsLoading(false);
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

   const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
 
    return(
<div  >
  <div ><Nav/></div>
  
<div id="header" style={{display:'flex',justifyContent:'space-between'}}  >
  <div>
                
                <select style={{margin:'30px',border:'1px solid gray',borderRadius:'5px',marginTop:'120px'}} onChange={HandleChange}  > Sort by: All 
                    <option value="all">Sort by Price: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select>
                </div>
                <div>
                <button id='popbtn' style={{fontSize:'40px',color:'black',marginTop:'120px',marginRight:'30px',color:'#D4C5C7',cursor:'pointer'}} onClick={togglePopup}><BsFillFilterSquareFill/></button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
          <p id='close'  onClick={togglePopup} >✖</p>
            <h2>Filter Options</h2>
            <select style={{margin:'30px',border:'1px solid gray',borderRadius:'5px',marginTop:'120px'}} onChange={HandleChange}  > Sort by: All 
                    <option value="all">Sort by Price: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select>
            {/* Add filter options here */}
            
          </div>
        </div>
      )}
                
                </div>
            </div>
            
   
            <div>
              {isLoading ? (
<Loading/>
              ):(<Grid  templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}> 
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
          
          </Grid>)}
          <div style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
          <Pagination/>
          </div>
          

<Footer/>
</div>
</div>
    )
}
export default Product