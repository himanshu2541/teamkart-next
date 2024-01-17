import React from 'react'
import Image from "next/image";
import Loader from '@/assets/images/gears-spinner.svg'
const Loading = () => {
  return (<div className={'loading'}>
    <Image src={Loader} alt={''} />
  </div>)
}
export default Loading
