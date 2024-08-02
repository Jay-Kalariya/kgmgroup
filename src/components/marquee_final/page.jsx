import React from 'react'
import Marquee from "react-fast-marquee";
import "./marqueefinal.scss";
import Image from 'next/image';
// import intertek from '@/ImagesNew/marquee1.svg';
// import iso from '@/ImagesNew/xparsvg.svg'
import Img1 from "@/ImagesNew/xparvision.svg";
import Img2 from "@/ImagesNew/marquee1.svg";
import Img3 from "@/ImagesNew/oi.svg";
import Img4 from "@/ImagesNew/xparvision.svg";
import Img5 from "@/ImagesNew/marquee1.svg";
import Img6 from "@/ImagesNew/marquee2.svg";
import Img7 from "@/ImagesNew/oi.svg";
import Img8 from "@/ImagesNew/xparvision.svg";
import Img9 from "@/ImagesNew/marquee1.svg";
import Img10 from "@/ImagesNew/oi.svg";

const Certification = () => {
  
  return (
    <>
     <div className="certification_main" >
     {/* <h2 className='certification_heading'>CERTIFICATIONS</h2> */}
        <Marquee speed={50} loop={0} direction='right' pauseOnHover={true}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
            <Image className='logocertificate' src={Img3} alt="certificationimg" />
            <Image className='logocertificate' src={Img4} alt="certificationimg" />
            <Image className='logocertificate' src={Img5} alt="certificationimg" />
            <Image className='logocertificate' src={Img1} alt="certificationimg" />
            <Image className='logocertificate' src={Img2} alt="certificationimg" />
            <Image className='logocertificate' src={Img3} alt="certificationimg" />
            <Image className='logocertificate' src={Img4} alt="certificationimg" />
            <Image className='logocertificate' src={Img5} alt="certificationimg" />
          </div>
        </Marquee>
        <Marquee speed={50} loop={0} direction='left' pauseOnHover={true}> 
          <div className='certificate_marqee'>
            <Image className='logocertificate' src={Img6} alt="certificationimg" />
            <Image className='logocertificate' src={Img7} alt="certificationimg" />
            <Image className='logocertificate' src={Img8} alt="certificationimg" />
            <Image className='logocertificate' src={Img9} alt="certificationimg" />
            <Image className='logocertificate' src={Img10} alt="certificationimg" />
             <Image className='logocertificate' src={Img6} alt="certificationimg" />
            <Image className='logocertificate' src={Img7} alt="certificationimg" />
            <Image className='logocertificate' src={Img8} alt="certificationimg" />
            <Image className='logocertificate' src={Img9} alt="certificationimg" />
            <Image className='logocertificate' src={Img10} alt="certificationimg" />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Certification
