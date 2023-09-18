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
  <div id="totalres" style={{width:'20%'}}>
  <h1 style={{marginTop:'120px',marginLeft:'25px',color:'#00008B',fontWeight:"bold"}}>TOTAL {total} RESULTS FOUND</h1>
  </div>
                     
                <div id="filter">
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
            {/* <h2>Filter Options</h2> */}
            {/* <select style={{margin:'30px',border:'1px solid gray',borderRadius:'5px',marginTop:'120px'}} onChange={HandleChange}  > Sort by: All 
                    <option value="all">Sort by Price: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select> */}
            {/* Add filter options here */}
            {/* filter by km */}
            <div>
              <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>BUDGET</h1>
            <div style={{display:'flex',alignItems:'center',textAlign:"center",justifyContent:"center"}}>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>0 to 5000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>5000 to 10000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>10000 to 20000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>20000&above</button>

            </div>
            </div>
            {/* ////////////////////////////////////// */}
            <div>
              <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>REGISTRATION YEAR</h1>
            <div style={{display:'flex',alignItems:'center',textAlign:"center",justifyContent:"center"}}>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>2000 - 2010</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>2010 - 2015</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>2015 - 2020</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>ALL</button>

            </div>
            </div>
            {/* /////////////////////////////////////////////// */}
            <div>
              <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>KMS DRIVEN</h1>
            <div style={{display:'flex',alignItems:'center',textAlign:"center",justifyContent:"center"}}>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>BRAND NEW</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>0 - 5000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>5000-10000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>10000-15000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>15000-20000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>20000 ABOVE</button>

            </div>
            </div>
            <div>
            <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>BRAND</h1>
            <select style={{width:'70%',border:'1px solid black',borderRadius:'4px',height:'40px'}} name="" id="">SELECT BRAND
            <option value="">SELECT BRAND</option>
            <option value="">AUDI</option>
            <option value="">BMW</option>
            <option value="">TATA</option>

            <option value="">HONDA</option>
            <option value="">HYUNDIE</option>
            <option value="">TOYOTA</option>
            
          
            
            </select>
            </div>
            <button style={{width:'80%',background:'#F26522',borderRadius:'8px',color:'white',marginTop:'15px',height:'40px',cursor:'pointer'}}>APPLY FILTER</button>
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
// ✖