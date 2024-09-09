import {React,useState,useContext, useEffect} from 'react';
import Communication from './Communication';
import PropertyTimeline from './PropertyTimeline';
import PropertyDetails from './PropertyDetails'
import RepairStatus from './RepairStatus';
import { MainContext } from '../../Context/MainContext';
import Modal from './Model';
const ReportMaintainanceTimeline = () => {
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
      <h5 className="heading-text">Repair Status</h5>
      <RepairStatus/>
      <h5 className="heading-text">Communication</h5>
      <Communication people={people} />
      <h5 className="heading-text">Photos</h5>
      <div className='ImageGallery d-flex flex-wrap gap-2'>
        <img className='GalleryPhoto' src="/floarmapphoto.jpg" alt="galleryImg"/>
        <img className='GalleryPhoto' src="/floarmapphoto.jpg" alt="galleryImg"/>
        <img className='GalleryPhoto' src="/floarmapphoto.jpg" alt="galleryImg"/>
        <img className='GalleryPhoto' src="/floarmapphoto.jpg" alt="galleryImg"/>
        <img className='GalleryPhoto' src="/floarmapphoto.jpg" alt="galleryImg"/>
        <img className='GalleryPhoto' src="/floarmapphoto.jpg" alt="galleryImg"/>
      </div>
    </div>
    <div className='Footer mt-2 w-100 d-flex flex-row gap-8 align-items-center'>
        <div className='FooterTextContainer'>
            <h1 className='footerText m-0'>Full Report</h1>
        </div>
        <div className='FooterTextContainer d-flex flex-row justify-content-between'>
          <h1 className='footerText m-0'>Notes</h1>
          <div className='AddBtn'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00014 1.5V16.5" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5 9.00014H1.5" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
    </div>
    </Modal>
    </div>

  );
};

export default ReportMaintainanceTimeline;
