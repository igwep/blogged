"use client";
import React,{useEffect, useState} from 'react'

const Map = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) return null; 
  return (
    <div className='w-full'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2452207115193!2d3.1758932999999994!3d6.4906023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b83f8f6585fb5%3A0x724bc88ccf7fc0df!2s6%20Gospel%20Rd%2C%20Ojo%2C%20Lagos%20102101%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742480161428!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Map