import React from 'react'
import Banner from '../Components/Banner'
import Gallery from '../Components/Gallery'
import OrderOnline from '../Components/OrderOnline'

export default function DisplayPage() {
  return (
    <div className='flex flex-col gap-4'>
<Banner/>
{/* <Gallery/> */}
<OrderOnline/>


    </div>
  )
}
