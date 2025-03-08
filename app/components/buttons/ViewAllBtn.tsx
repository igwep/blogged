import React from 'react'
interface ViewAllBtnProps {
    children: React.ReactNode;
    }

const ViewAllBtn: React.FC<ViewAllBtnProps> = ({ children }) => {
  return (
    <button className='px-8 py-3 font-semibold   rounded-lg text-white bg-[#7C4EE4]'>{children}</button>
  )
}

export default ViewAllBtn