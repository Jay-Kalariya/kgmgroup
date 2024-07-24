import React from 'react'
import Marquee from "react-fast-marquee";
import "./marqueefinal.scss";
import Image from 'next/image';
import intertek from '@/ImagesNew/marquee1.svg';
import iso from '@/ImagesNew/marquee2.svg'
import Img1 from "@/ImagesNew/marquee3.svg";
import Img2 from "@/ImagesNew/marquee4.svg";

const Certification = () => {
  return (
    <>
     <div className="certification_main" >
     {/* <h2 className='certification_heading'>CERTIFICATIONS</h2> */}
        <Marquee speed={50} loop={0} direction='right' pauseOnHover={true}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
            <Image className='logocertificate' src={intertek} alt="certificationimg" />
            <Image className='logocertificate' src={iso} alt="certificationimg" />
          </div>
        </Marquee>
        <Marquee speed={50} loop={0} direction='left' pauseOnHover={true}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Certification
