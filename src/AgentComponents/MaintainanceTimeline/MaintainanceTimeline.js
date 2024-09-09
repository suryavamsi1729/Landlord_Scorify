import {React,useState,useContext, useEffect} from 'react';
import Communication from './Communication';
import PropertyTimeline from './PropertyTimeline';
import PropertyDetails from './PropertyDetails'
import { MainContext } from '../../Context/MainContext';
import Modal from './Model';
import api from '../../api';
const MaintainanceTimeline = () => {
  const {popupStae,popupId,dispatch} = useContext(MainContext);
  const [timelinedata,Settimelinedata]=useState();
  const [pd,setpd]=useState('');
  useEffect(()=>{
   
     const fetchData=async()=>{
        try{
           console.log(popupId);

           const response=await api.get(`agent/repair/timeline/${popupId}`);
           Settimelinedata(response.data.timeline_data);
           setpd(response.data.property_data[0]);
        }catch(err){
           console.log("Error while the data",err);
        }
       
     } 
     fetchData();
  },[]);
  
  const people = [
    {
      name: 'Khadijah Ali',
      role: 'Landlord',
      image: 'path-to-khadijah-image',
      icons: {
        person: 'path-to-person-icon',
        call: 'path-to-call-icon',
        message: 'path-to-message-icon',
      },
    },
    {
      name: 'Sara Jane',
      role: 'Tenant',
      image: 'path-to-sara-image',
      icons: {
        person: 'path-to-person-icon',
        call: 'path-to-call-icon',
        message: 'path-to-message-icon',
      },
    },
  ];

  const timelineEvents = [
    {
      date: 'JUL 24, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
      person: {
        name: 'Khadijah Ali',
        role: 'Landlord',
        roleClass: 'landlord',
        image: 'path-to-person-image',
      },
    },
    {
      date: 'JUL 25, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
      person: {
        name: 'Sara Jane',
        role: 'Tenant',
        roleClass: 'tenant',
        image: 'path-to-person-image',
      },
    },
    {
      date: 'JUL 26, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
      person: {
        name: 'Sara Jane',
        role: 'Tenant',
        roleClass: 'tenant',
        image: 'path-to-person-image',
      },
    },
    {
      date: 'JUL 27, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
      person: {
        name: 'John Doe',
        role: 'Agent',
        roleClass: 'agent',
        image: 'path-to-person-image',
      },
    },
    ,
    {
      date: 'JUL 27, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
      person: {
        name: 'John Doe',
        role: 'Agent',
        roleClass: 'agent',
        image: 'path-to-person-image',
      },
    },
    ,
    {
      date: 'JUL 27, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
      person: {
        name: 'John Doe',
        role: 'Agent',
        roleClass: 'agent',
        image: 'path-to-person-image',
      },
    },
  ];
  const [open,setOpen]=useState(popupStae);
  useEffect(()=>{
    setOpen(popupStae);
  },[popupStae]);
  
  const handleClose=()=>{
     setOpen(false);
     dispatch({
      type:"popup",
      payload:{
          popupData:{},
          popupStae: false,
          popupId:""
      }
  });
  }
  return (
    <div>
    <Modal isOpen={open} onClose={handleClose}>
    <div>
      <PropertyDetails data={pd}/>
      <h5 className="heading-text">Communication</h5>
      <Communication people={people} />
      <h5 className="heading-text">Property Timeline</h5>
      <PropertyTimeline timelineEvents={timelinedata}/>
      <div className="prop-btn">
        <button className="property-button">Go to Property</button>
      </div>
    </div>
    </Modal>
    </div>

  );
};

export default MaintainanceTimeline;
