import React from 'react'
import contact from '../css/Contact.css';
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';

export default function Contact() {
  return (
    <>
        <h4>Contact: <br />
            (336)-509-2070 <br />
            skyler.greensboro@gmail.com <br /></h4>
            <div>
              <ul className="iconList_ul">
                <li className="iconList_li"><SocialIcon url="https://www.facebook.com/SkylerWhitfieldLive/" network="facebook" bgColor="yellow" /></li>
                <li className="iconList_li"><SocialIcon url="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" network="youtube" bgColor="yellow" /></li>
                <li className="iconList_li"><SocialIcon url="https://www.soundcloud.com/user-238870048/" network="soundcloud" bgColor="yellow" /></li>
              </ul>
            </div>

        <h4>** I own all the rights to my music. Any monetary redistribution of intellectual property found on this page without credit and compensation to the original artist will receive legal action from the U.S. Copyright Office and their affiliates.**</h4>
    </>
  )
}
