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
const[price,setPrice] = useState({lte:null,gte:null})
const [year,setYear] =useState({lte:null,gte:null})
const [kms,setKms] =useState({lte:null,gte:null})
const [make,setMake] = useState('')


// https://car-back-qqz1.onrender.com/cars?_page=1&_limit=9&price_gte=1000000&price_lte=2000000&kms_gte=20000&kms_lte=40000&year_gte=2010&year_lte=2013

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
  const handleMakeChange = (e) => {
    setMake(e.target.value);
  };

const applyFilter=async()=>{
 
  // if(price.gte>price.lte||year.gte>year.lte||kms.gte>kms.lte||make===""){
  //   alert("Put Details in correct Order")
  // }
 
  
    let res = 
    await fetch(`https://car-back-qqz1.onrender.com/cars?_page=${page}&_limit=9&price_gte=${price.gte}&price_lte=${price.lte}&kms_gte=${kms.gte}&kms_lte=${kms.lte}&year_gte=${year.gte}&year_lte=${year.lte}&make=${make}`)
    let data = await res.json()
    if(data.length===0){
      alert('no data found please fill data again')
    }else{
      setData(data);
      setIsLoading(false);
     console.log(year.lte,year.gte,price.lte,price.gte,kms.gte,kms.lte,make);
      setIsPopupOpen(!isPopupOpen);
    }
 
  
 
}

    return(
<div  >
  <div ><Nav/></div>
  <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  
<div id="header" style={{display:'flex',justifyContent:'space-between',width:'90%',height:"250px"}}  >
  <div id="totalres" style={{width:'25%'}}>
  <h1 style={{marginTop:'175px',marginLeft:'25px',color:'#27005D',fontWeight:"bold",fontSize:'1.4rem'}}>TOTAL 20 RESULTS FOUND</h1>
  </div>
                     
                <div id="filter" >
                  <div style={{width:"28%"}}>
                  <div style={{display:"flex"}}>
                  <p id="filterText" style={{fontWeight:'700',color:'#27005D',fontSize:'1rem',marginTop:"7px",marginRight:'5px'}}>FILTER</p>
                <button id='popbtn' style={{color:'black',color:'#D4C5C7',cursor:'pointer',marginRight:"7px",borderRadius:'10px'}} onClick={togglePopup}>
                <img style={{width:'35px',height:"40px",border:'1px solid gray',borderRadius:'10px'}} src="https://i.ibb.co/HNKgwM2/transparentfilrter-fotor-bg-remover-20230919122145.png" alt="" />
                </button>
                </div>
                </div>
                <div  style={{width:"72%"}}>
                  <div style={{display:'flex',justifyContent:'space-between',justifyContent:'flex-end'}}>
                <h3 id="sortByText" style={{fontWeight:'700',color:'#27005D',fontSize:'1rem',marginTop:"7px",marginRight:'7px'}}>SORT BY</h3>
                <select style={{border:'1px solid gray',borderRadius:'8px',marginRight:'5px',color:'#27005D',fontWeight:"500",height:"40px",width:'180px'}} onChange={HandleChange}  > Sort by: All 
                    <option value="all"> Price: All</option>
                    <option value="asc">Price- Low To High </option>
                    <option value="dsc">Price- High To Low</option>
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
              {/* <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>BELOW 10 LACKS</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>10 TO 15 LACKS</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>15 TO 20 LACKS</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>20 LACKS& ABOVE</button> */}
              <div style={{display:"flex",margin:"5px"}}>
                {/* <h3 style={{margin:'5px',fontWeight:"600"}}>Min</h3> */}
              <input
              value={price.gte}
              onChange={(e) =>
    setPrice({ ...price, gte: e.target.value })
    
  } style={{border:'1px solid black',margin:'5px',borderRadius:'5px',width:'6rem'}} type="number" name="" id="" placeholder="Minimum" /></div>
              <div style={{display:"flex",margin:"5px"}}>
                {/* <h3 style={{margin:'5px',fontWeight:"600"}}>Max</h3> */}
              <input 
               value={price.lte}
              onChange={(e) =>
                setPrice({ ...price, lte: e.target.value })
              }
               style={{border:'1px solid black',margin:'5px',borderRadius:'5px',width:'6rem'}} type="number" name="" id="" placeholder="Maximum" /></div>

            </div>
            </div>
            {/* ////////////////////////////////////// */}
            {/* <div>
              <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>REGISTRATION YEAR</h1>
            <div style={{display:'flex',alignItems:'center',textAlign:"center",justifyContent:"center"}}>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>2000 - 2010</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>2010 - 2015</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>2015 - 2020</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>ALL</button>

            </div>
            </div> */}
                 <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
      <h1>Select Year:</h1>
      <select style={{border:'1px solid black',marginLeft:"20px"}} onChange={(e) =>
                setYear({ ...year, gte: e.target.value })
              }value={year.gte}>
        <option value="">From</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>

      </select>
      <select style={{border:'1px solid black',marginLeft:"20px"}} onChange={(e) =>
                setYear({ ...year, lte: e.target.value })
              }value={year.lte}>
        <option value="">To</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>

      </select>
      
    </div>
            {/* /////////////////////////////////////////////// */}
            {/* <div>
              <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>KMS DRIVEN</h1>
            <div style={{display:'flex',alignItems:'center',textAlign:"center",justifyContent:"center"}}>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>BRAND NEW</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>0 - 10000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>10000-15000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>15000-20000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>20000-40000</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer'}}>40000 ABOVE</button>

            </div>
            </div> */}
            
            <div>
              <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>KM</h1>
            <div style={{display:'flex',alignItems:'center',textAlign:"center",justifyContent:"center"}}>
              {/* <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>BELOW 10 LACKS</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>10 TO 15 LACKS</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>15 TO 20 LACKS</button>
              <button style={{background:'#EDF0F9',margin:"2px",borderRadius:'5px',cursor:'pointer',minHeight:'50px'}}>20 LACKS& ABOVE</button> */}
              <div style={{display:"flex",margin:"5px"}}>
                {/* <h3 style={{margin:'5px',fontWeight:"600"}}>Min</h3> */}
              <input
              value={kms.gte}
              onChange={(e) =>
    setKms({ ...kms, gte: e.target.value })
    
  } style={{border:'1px solid black',margin:'5px',borderRadius:'5px',width:'6rem'}} type="number" name="" id="" placeholder="Minimum" /></div>
              <div style={{display:"flex",margin:"5px"}}>
                {/* <h3 style={{margin:'5px',fontWeight:"600"}}>Max</h3> */}
              <input 
               value={kms.lte}
              onChange={(e) =>
                setKms({ ...kms, lte: e.target.value })
              }
               style={{border:'1px solid black',margin:'5px',borderRadius:'5px',width:'6rem'}} type="number" name="" id="" placeholder="Maximum" /></div>

            </div>
            </div>


            {/* //////////////////////////////////////////////////////// */}
            <div>
            <h1 style={{color:'black',fontWeight:"bold",margin:"10px"}}>BRAND</h1>
            <select onChange={handleMakeChange } value={make} style={{width:'70%',border:'1px solid black',borderRadius:'4px',height:'40px'}} name="" id="">SELECT BRAND
            <option value="">SELECT BRAND</option>
            <option value="TATA">TATA</option>
        <option value="MAHINDRA">MAHINDRA</option>
        <option value="AUDI">AUDI</option>
        <option value="BMW">BMW</option>
        <option value="RENAULT">RENAULT</option>
        <option value="DATSON">DATSON</option>
        <option value="HONDA">HONDA</option>
        <option value="HYUNDAI">HYUNDAI</option>
        <option value="FORD">FORD</option>
        <option value="TOYOTA">TOYOTA</option>
        <option value="MARUTI SUZUKI">MARUTI SUZUKI</option>
        <option value="HONDA">HONDA</option>
        <option value="KIA">KIA</option>
            
          
            
            </select>
            </div>
            <button onClick={applyFilter} style={{width:'80%',background:'#F26522',borderRadius:'8px',color:'white',marginTop:'15px',height:'40px',cursor:'pointer'}}>APPLY FILTER</button>
          </div>
        </div>
      )}
                
                </div>
            </div>
            
            <div id="hr" style={{width:"90%",margin:"auto",height:"30px"}}>
                <hr/>
                </div>
            <div style={{width:'90%'}}>
              {isLoading ? (
<Loading/>
              ):(<Grid  templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}> 
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
          


</div>
<Footer/>
</div>
</div>
    )
}
export default Product


{/* <a href="https://ibb.co/f9YkZh7"><img src="https://i.ibb.co/tzMqn75/file-svg-filter-icon-11562874693tj59mpz35p.png" alt="file-svg-filter-icon-11562874693tj59mpz35p" border="0"></a> */}
// ✖

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/HNKgwM2/transparentfilrter-fotor-bg-remover-20230919122145.png" alt="transparentfilrter-fotor-bg-remover-20230919122145" border="0"></a> */}