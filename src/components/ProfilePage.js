import React from 'react';
import profile from './img/profile.png';
import github from './img/github.png';
import slack from './img/slack.png';
import Icon from './img/Icon.png';
import Icon_new from './img/Icon_new.png';

function Profile() {
  return (
    <>
    <div className='font-inter'>
      <div>
        <img src={Icon}
       className='share_icon'/>

        <img src={Icon_new}
           className='share_icon2'/>
    </div>

      <div className='flex justify-center pt-8'>

        <img id='profile_img'
         className="w-32 rounded-full items-center"
          src={profile}
           alt="logo" />

      </div>

      <div id='twitter'>@CodedLibra</div>

      <div id='slack'>Adeola Ogundijo</div>

      <div className='grid justify-items-center px-16'>
      <a href='http://twitter.com/CodedLibra'
       className='rounded-[10px] p-3 text-center w-[90%] my-3 bg-[#EAECF0]'
       >Twitter Link</a>

      <a id='btn_zuri'
       href='https://training.zuri.team/'
        title='Want to Learn Coding/Design Better?'
         className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
         >Zuri Team</a>

      <a id='books'
       href='http://books.zuri.team'
        className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
        >Zuri Books</a>

      <a id='book_python'
       href='https://books.zuri.team/python-for-beginners?ref_id=adeola-ogundijo'
        className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
        >Python Books</a>

      <a id='pitch'
       href='https://background.zuri.team'
        title='Be sure not to Employ a Bad Developer'
         className='rounded-[10px] p-3 text-center w-[90%] my-2 bg-[#EAECF0]'
         >Background Check for Coders</a>

      <a id='book_design'
       href='https://books.zuri.team/design-rules'
        title='Take a look at the Free Design by Zuri!>'
         className='rounded-[10px] p-3 text-center w-[90%] my-2 mb-10 bg-[#EAECF0]'
         >Design Books</a>
    </div>

    <div className='profile_bottom space-x-6'>
        <img src={slack} />
        <img src={github} />
    </div>

    </div>
    </>
  )
}

export default Profile