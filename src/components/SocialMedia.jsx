import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';


const SocialMedia = () => {
  // const github = "https://github.com/manjunathk833";
  return (
    <div className='app__social'>
    <div>
      <a href='https://www.linkedin.com/in/manjunath-h-k-ab30b1146/'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://github.com/manjunathk833'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a href='mailto:manjunathhk833@gmail.com'>
        <SiGmail />
      </a>
    </div>
    </div>
  )
}

export default SocialMedia