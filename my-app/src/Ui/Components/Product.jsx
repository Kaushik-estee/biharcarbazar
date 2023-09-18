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
const[total,setTotal]=useState(1)
const [page, setPage] = useState(1);

const fetchData = () => {
    axios.get(`https://car-back-qqz1.onrender.com/cars?_page=${page}&_limit=9`)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
        setTotal(data.length)
        
      })
      .catch(error => {
        console.error('Fetching data failed:', error);
      });
  };
  
  console.log(data);
// const onEdit=(id)=>{
// console.log(id);
// fetchData();
// }
const  DescData=async(page)=>{
               
  let res = 
  await fetch(`https://car-back-qqz1.onrender.com/cars?_sort=price&_order=desc&_page=${page}&_limit=9`)
  let data = await res.json()
  setData(data);
  setIsLoading(false);
}
const  AscData=async(page)=>{
 
  let res = await fetch
  (`https://car-back-qqz1.onrender.com/cars?_sort=price&_order=asc&_page=${page}&_limit=9`)
  let data = await res.json()
  setData(data);
  setIsLoading(false);
}
const  All=async(page)=>{
 
  let res = await fetch
  (`https://car-back-qqz1.onrender.com/cars?_page=${page}&_limit=9`)
  let data = await res.json()
  setData(data);
  setIsLoading(false);
}



useEffect(() => {
    fetchData(); // Fetch initial data
  }, [page]);
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
  
<div id="header" style={{display:'flex',justifyContent:'space-between',width:'100%'}}  >
  
                <div style={{display:'flex',marginTop:'120px',width:'100%',justifyContent:'flex-end'}}>
                  <div style={{width:'200px',display:"flex"}}>
                  <p style={{fontWeight:'bold',color:'#00008B',fontSize:'17px',margin:"5px"}}>Filter</p>
                <button id='popbtn' style={{fontSize:'35px',color:'black',color:'#D4C5C7',cursor:'pointer'}} onClick={togglePopup}>
                <BsFillFilterSquareFill/>
                </button>
                </div>
                <div>
                  <div style={{display:'flex',width:'250px',justifyContent:'space-between',justifyContent:'flex-end'}}>
                <h3 style={{fontWeight:'bold',color:'#00008B',fontSize:'17px',margin:'5px'}}>Sort By</h3>
                <select style={{border:'1px solid gray',borderRadius:'5px',margin:'5px'}} onChange={HandleChange}  > Sort by: All 
                    <option value="all">Sort by Price: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select>
                </div>
                </div>
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
            {/* filter by km */}
            <div style={{display:'flex'}}>
              <button>0 to 5000</button>
              <button>5000 to 10000</button>
              <button>10000 to 20000</button>
              <button>20000&above</button>

            </div>

            
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
          booked={e.booked}
         
          
          />
          </GridItem>
               ) })
          }
          
          </Grid>)}
          <div style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
          <Pagination
               current={page}
               total={total/9}
               onChange={(value) => setPage(value)}
          />
          </div>
          

<Footer/>
</div>
</div>
    )
}
export default Product


{/* <a href="https://ibb.co/f9YkZh7"><img src="https://i.ibb.co/tzMqn75/file-svg-filter-icon-11562874693tj59mpz35p.png" alt="file-svg-filter-icon-11562874693tj59mpz35p" border="0"></a> */}