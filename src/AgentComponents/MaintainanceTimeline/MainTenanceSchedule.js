import {React,useState,useContext, useEffect} from 'react';
import Communication from './Communication';
import PropertyTimeline from './PropertyTimeline';
import PropertyDetails from './PropertyDetails'
import { MainContext } from '../../Context/MainContext';
import Modal from './Model';
const MainTenanceSchedule = () => {
  const {popupData,popupStae,dispatch} = useContext(MainContext);
  
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
          popupStae: false
      }
  });
  }
  return (
    <div>
    <Modal isOpen={open} onClose={handleClose}>
    <div>
      <PropertyDetails data={popupData}/>
      <h5 className="heading-text">Maintenance Schedule</h5>
      <PropertyTimeline className={'MTSechular'} timelineEvents={timelineEvents} />
      <div className="prop-btn">
        <button className="property-button">Go to Property</button>
      </div>
    </div>
    </Modal>
    </div>

  );
};

export default MainTenanceSchedule;
