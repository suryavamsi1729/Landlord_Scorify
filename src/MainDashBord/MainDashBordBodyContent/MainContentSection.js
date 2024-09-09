import {React,useContext,useEffect,useState} from "react";
import { MainContext } from "../../Context/MainContext";
import CardItm from './CardItm'
import './MDBContentCompStyle.css';
import { Link } from "react-router-dom";
import img from './Svg/ImageAI.png';
import Img from "./Svg/Image.jpg";
import Floormap from "./Floormap";
import imgavt from './Svg/Avatar2.jpg';
import SectionPropertyScoreDetails from "./SectionPropertyScoreDetails";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import api from "../../api";


export default function MainContentSection(){
    const navitage=useNavigate();
    const [Tname,setTname]=useState('');
    const [Tnumber,setTnumber]=useState('');
    const [Agname,setAgname]=useState('');
    const [Agnum,setAgnum]=useState('');
    const [Agimg,setAgimg]=useState('');
    const [data,setData]=useState({
    
    })
    const [images, setImages] = useState([]);
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");
    const [location,setlocation]=useState("");
    const [property, setProperty] = useState("");
    const [age, setAge] = useState("");
    const [date,SetDate]=useState('');
    const [score,Setscore]=useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('landlord/dashboard/');
                const property_id=response.data.properties[0].property[0].id;
                const dateStr = response.data.due_date
                const dateObj = new Date(dateStr);
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                const suffixes = ["th", "st", "nd", "rd"];
                const day = dateObj.getDate();
                const daySuffix = (day % 10 <= 3 && ![11, 12, 13].includes(day)) ? suffixes[day % 10] : suffixes[0];
                const month = months[dateObj.getMonth()];
                const formattedDate = `${day}${daySuffix} ${month}`;
                

                const pid=response.data.properties[0].property[0].id;
                const res = await api.get(`landlord/house-photo/${pid}/`);
                // const Agentres=await api.get("landlord/agent/");
                // setAgname(Agentres.data.data.name)
                // setAgnum(Agentres.data.data.phone)
                // setAgimg(Agentres.data.data.profile_photo)
                console.log(res);
                const allImages = [];
                res.data.forEach(item => {
                  item.house_item.forEach(houseItem => {
                    allImages.push(houseItem.image);
                  });
                });
                
               
                const shuffledImages = allImages.sort(() => 0.5 - Math.random());
                const selectedImages = shuffledImages.slice(0, 4);
                

                //For the Agent data
               
                if (selectedImages.length >= 4) {
                    setImg1(selectedImages[0]);
                    setImg2(selectedImages[1]);
                    setImg3(selectedImages[2]);
                    setImg4(selectedImages[3]);
                }

                //locationcard

                let address=response.data.properties[0].property[0].address.split("\n");

                setlocation({
                 imgsrc:Img,
                 Location:address[0],
                 LocationSteet:address[1],
                 ZipCode:response.data.properties[0].property[0].zip_code,
                 bedroomno:response.data.properties[0].property[0].bedroom_count,
                 bathroomno:response.data.properties[0].property[0].bathroom_count,
                 halls:response.data.properties[0].property[0].living_room_count,
                 con:'Good'
                 });
                
                //CardComp
                setProperty(response.data.properties[0].property[0].property_type);
                setAge(response.data.properties[0].property[0].house_age);


                //Scorecard
                SetDate(response.data.properties[0].property[0].next_inspection_date);
                Setscore(Math.round(response.data.properties[0].property[0].score));

                setData({
                    Inspec:response.data.properties[0].property[0].inspection_repair_count,
                    Repair:response.data.properties[0].property[0].open_repair_count,
                    Duedate: formattedDate,  
                    mvperc:response.data.properties[0].ventilation_score,
                    Pstat:response.data.properties[0].current_score,
                    Cstat:response.data.properties[0].potential_score,
                    // Tname:response.data.tenants[0].name,
                    // Tnumber:response.data.tenants[0].phone_number
                });
                setTname(response.data.tenants[0].name);
                setTnumber(response.data.tenants[0].phone_number);
            } catch (error) {
                console.log("Error while fetching the data", error);
            }
        };

        fetchData();
    }, []);

    const {dispatch} = useContext(MainContext);
    return(
        <>
            <div className="MainContentContainerSection">
                <div className="ContentContainer">
                    <SectionPropertyScoreDetails locationcard={location} Property={property} Age={age} Score={score} Date={date}></SectionPropertyScoreDetails>
                    <div className="CardsContainerbottom">
                        <div className="row d-flex flex-row">
                            <Link  to="/dashboard/inspections&inventory" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Dashboard Inspections & Inventory",
                                        sidebar:false
                                    }
                                });
                                
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(50% - 8px)'}}>
                                <CardItm>
                                    <h1 className="HeadingText">Inspections & Inventory</h1>
                                    <p className="Text">{data.Inspec}</p>
                                </CardItm>
                            </Link>
                            <CardItm>
                                <h1 className="HeadingText">AI - Score Fix</h1>
                                <img className="AIImg" src={img} alt="img"/>
                            </CardItm>
                        </div>
                        <div className="row">
                        <Link  to="/dashboard/openrepair" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Dashboard Open Repair",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:`calc(50% - 8px)`}}>
                                <CardItm>
                                    <h1 className="HeadingText">Open Repairs</h1>
                                    <p className="Text">{data.Repair}</p>
                                </CardItm>
                        </Link>
                        <Link  to="/dashboard/regularmaintenance" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Dashboard Regular Maintenance",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:`calc(50% - 8px)`,font:'none'}}>
                            <CardItm>
                                <h1 className="HeadingText">Regular Maintenance</h1>
                                <p className="Text">Due Date:<span className="blockText">{data.Duedate}</span></p>
                            </CardItm>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="ContentContainerCards">
                    <div className="cardsContainer">
                    <Link  to="/dashboard/epc" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"EPC",
                                        sidebar:false
                                    }
                                });
                                
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(50% - 8px)'}}>
                        <CardItm>
                            <h1 className="Heading">EPC</h1>
                            <div className="CECardsContainer">
                                <div className="Card cardC">
                                    <p className="MainText">{data.Pstat}</p>
                                    <p className="SubText">Potential</p>
                                </div>
                                <div className="Card cardE">
                                    <p className="MainText">{data.Cstat}</p>
                                    <p className="SubText">Current</p>
                                </div>
                            </div>
                        </CardItm>
                    </Link>
                    <Link  to="/dashboard/riskassessment" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"EPC",
                                        sidebar:false
                                    }
                                });
                                
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(50% - 8px)'}}>
                        <CardItm>
                            <h1 className="Heading">Risk Assessment</h1>
                            <p className="SubHeading">04 %</p>
                        </CardItm>
                    </Link>
                    </div>
                    <Link  to="/dashboard/moudleandhumidity" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Moulde and Humidity",
                                        sidebar:false
                                    }
                                });
                                
                            }} style={{textDecoration:'none',padding:'0px',width:'100%'}}>
                    <div className="CategoryCardSection">
                        <p className="Heading">Mould and Ventilation</p>
                        <p className="SubHeading">{data.mvperc}%</p>
                    </div>
                    </Link>
                        <div className="AHContainer w-100 d-flex flex-row gap-3">
                        <Link  to="/dashboard/applience" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"applience",
                                        sidebar:false
                                    }
                                });
                                
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(50% - 8px)'}}>
                            <div className="SubCard ApllienceContainer p-3">
                                <div className="iconitm">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H32.8C39.5206 0 42.8809 0 45.4479 1.30792C47.7058 2.4584 49.5416 4.29417 50.6921 6.55211C52 9.11905 52 12.4794 52 19.2V32.8C52 39.5206 52 42.8809 50.6921 45.4479C49.5416 47.7058 47.7058 49.5416 45.4479 50.6921C42.8809 52 39.5206 52 32.8 52H19.2C12.4794 52 9.11905 52 6.55211 50.6921C4.29417 49.5416 2.4584 47.7058 1.30792 45.4479C0 42.8809 0 39.5206 0 32.8V19.2Z" fill="#F4F4F5"/>
                                    <path d="M29.428 16.3599C33.1996 19.9866 36.9582 24.7733 36.6488 30.4333C36.5321 32.4399 35.8293 34.3599 34.7791 36.0392C34.0215 37.2485 33.0312 38.2834 31.8699 39.0795C30.7086 39.8756 29.4011 40.4159 28.029 40.6666C32.638 36.3333 29.6601 28.4333 25.289 25.2133L24.8377 24.8933C24.9731 26.5739 25.0124 28.0666 24.1672 29.5399C23.4902 30.7139 22.6005 31.7533 22.1299 33.0399C21.1184 35.6799 21.8398 38.8333 23.9544 40.6666C21.1822 40.1599 18.7323 38.4866 17.2043 36.0399C15.2567 32.9199 14.7351 29.0539 16.089 25.5666C17.5138 21.5866 21.4149 18.8466 22.0977 14.5399C22.2588 13.4733 22.2395 12.3873 22.0332 11.3333C24.7345 12.6066 27.2296 14.2999 29.428 16.3599Z" fill="#EF4444"/>
                                    <path d="M25.289 25.2133C29.6601 28.4333 32.638 36.3333 28.029 40.6666C28.029 40.6666 26.834 41.3313 26 41.3333C25.1598 41.3353 23.9544 40.6666 23.9544 40.6666C21.8398 38.8333 21.1184 35.68 22.1299 33.04C22.6005 31.7533 23.4902 30.714 24.1672 29.54C25.0124 28.0666 24.9731 26.574 24.8377 24.8933L25.289 25.2133Z" fill="#FBBF24"/>
                                </svg>
                                </div>
                                <div className="textItm">
                                    <p className="Subheading">Appliance</p>
                                    <p className="Subheading2">20th Aug</p>
                                </div>
                            </div>
                        </Link>
                        <Link  to="/dashboard/heatingsystem" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"applience",
                                        sidebar:false
                                    }
                                });
                                
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(50% - 8px)'}}>
                            <div className="SubCard HeatingSystem p-3">
                                <div className="iconitm">
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H32.8C39.5206 0 42.8809 0 45.4479 1.30792C47.7058 2.4584 49.5416 4.29417 50.6921 6.55211C52 9.11905 52 12.4794 52 19.2V32.8C52 39.5206 52 42.8809 50.6921 45.4479C49.5416 47.7058 47.7058 49.5416 45.4479 50.6921C42.8809 52 39.5206 52 32.8 52H19.2C12.4794 52 9.11905 52 6.55211 50.6921C4.29417 49.5416 2.4584 47.7058 1.30792 45.4479C0 42.8809 0 39.5206 0 32.8V19.2Z" fill="#F4F4F5"/>
                                    <path d="M22.7333 37.6951C21.3927 37.5307 20.0527 37.2652 18.7138 36.8988C17.5036 36.5675 16.6667 35.4865 16.6667 34.2547V14.0848C16.6667 12.853 17.5036 11.772 18.7138 11.4407C21.1398 10.7768 23.5692 10.4443 26 10.4443C28.4307 10.4443 30.8602 10.7768 33.2862 11.4408C34.4964 11.772 35.3333 12.853 35.3333 14.0848V34.2548C35.3333 35.4866 34.4964 36.5676 33.2862 36.8988C31.9473 37.2653 30.6073 37.5308 29.2666 37.6951V40.6404C29.2666 41.1458 28.8488 41.5554 28.3333 41.5554C27.8178 41.5554 27.4 41.1458 27.4 40.6404V37.8585C26.4673 37.9075 25.5327 37.9075 24.6 37.8585V40.6404C24.6 41.1458 24.1822 41.5554 23.6667 41.5554C23.1512 41.5554 22.7333 41.1458 22.7333 40.6404V37.6951Z" fill="#EF4444"/>
                                    <path d="M26.9428 21.6093L27.6094 20.9426C28.1301 20.4219 28.1301 19.5777 27.6094 19.057C27.0887 18.5363 26.2444 18.5363 25.7238 19.057L25.0572 19.7237C24.5365 20.2444 24.5365 21.0886 25.0572 21.6093C25.5779 22.13 26.4221 22.13 26.9428 21.6093Z" fill="white"/>
                                    <path d="M26 27.3331C29.6819 27.3331 32.6666 24.3483 32.6666 20.6664C32.6666 16.9845 29.6819 13.9998 26 13.9998C22.3181 13.9998 19.3333 16.9845 19.3333 20.6664C19.3333 24.3483 22.3181 27.3331 26 27.3331ZM26 24.6665C23.7909 24.6665 22 22.8756 22 20.6665C22 18.4574 23.7909 16.6665 26 16.6665C28.2091 16.6665 29.9999 18.4573 29.9999 20.6664C29.9999 22.8755 28.2091 24.6665 26 24.6665Z" fill="#FBBF24"/>
                                </svg>
                                </div>
                                <div className="textItm">
                                    <p className="Subheading">Heating System</p>
                                    <p className="Subheading2">16th Aug</p>
                                </div>
                            </div>
                        </Link>
                        </div>
                        <Link 
            to="/dashboard/floarmapandphotos"
            onClick={() => {
               
                dispatch({
                    type: "path",
                    payload: {
                        path: "Dashboard Floor Map And Photo",
                        sidebar: false
                    }
                });
            }} 
            style={{ textDecoration: 'none', padding: '0px', width: 'calc(100%)', font: 'none' }}>
            
            <div className="GalaryContainer">
                        <h1 className="heading">Floor Map & Photos</h1>
                        <div className="imgitmcontainer">
                            {/* <img className="img1" src={img1} style={{ borderRadius:"8px"}} />
                            <img className="img2" src={img2} style={{ borderRadius:"8px"}}/>
                            <img className="img3" src={img3}  style={{ borderRadius:"8px"}}/>
                            <img className="img4" src={img4} /> */}
                            <div className="imgcol"><img className="img1" src={img1} style={{ borderRadius:"8px"}} /></div>
                            <div className="imgco2">
                                <div className="imgrow1"><img className="img2" src={img2} style={{ borderRadius:"8px"}}/></div>
                                <div className="imgrow2">
                                    <div className="imgcol"><img className="img3" src={img3} style={{ borderRadius:"8px"}} /></div>
                                    <div className="imgcol"><img className="img4" src={img4} style={{ borderRadius:"8px"}}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
        </Link>
             
                     {/* <Floormap img1={img1} img2={img2} img3={img3} img4={img4}/> */}
                              
                    <div className="CardsContainerbottom">
                        <div className="row">
                        <Link  to="/dashboard/tenantsprofile" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Tenants Profile",
                                        sidebar:false
                                    }
                                }); 
                            }} style={{textDecoration:'none',color:"#18181B",padding:'0px',width:'calc(50% - 8px)'}}>
                            <CardItm>
                                <h1 className="HeadingText">Tenants Profile</h1>
                                <div className="containerwrapper d-flex flex-column gy-4">
                                    <p className="text1 m-0">{data.Tname}</p>
                                    <p className="text2 m-0">{data.Tnumber}</p>
                                </div>
                            </CardItm>
                        </Link>
                        <Link  to="/dashboard/agentsprofile" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Agents Profile",
                                        sidebar:false
                                    }
                                }); 
                            }} style={{textDecoration:'none',color:"#18181B",padding:'0px',width:'calc(50% - 8px)'}}>
                            <CardItm>
                                <h1 className="HeadingText">Agent Profile</h1>
                                <div className="containerwrapper">
                                    <div className="imgele">
                                        <img src={Agimg} style={{width:"100%" , height:"100%",borderRadius:'50%'}} />
                                    </div>
                                    <div className="sidebox">
                                        <p className="text1">{Agname}</p>
                                        <p className="text2">{Agnum}</p>
                                    </div>
                                </div>
                            </CardItm>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}