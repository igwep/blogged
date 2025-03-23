"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

interface ViewAllBtnProps {
    children: React.ReactNode;
    }

const ViewAllBtn: React.FC<ViewAllBtnProps> = ({ children }) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/blog')  
  }

  return (
    <button
    onClick={handleNavigate}
    className='px-8 py-3 font-semibold cursor-pointer   rounded-lg text-white bg-[#7C4EE4]'>{children}</button>
  )
}

export default ViewAllBtn