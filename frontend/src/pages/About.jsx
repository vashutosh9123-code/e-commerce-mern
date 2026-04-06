import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewLetter from '../component/NewLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide variety of high-quality lifestyle products from the comfort of their homes.</p>
         <p>Since our inception, we have worked tirelessly to curate a diverse selection of inspiring fashion finds that cater to every taste and preference. From clothing and beauty essentials to the latest accessories, we focus on sourcing products that offer exceptional quality, aesthetics, and incredible value to ensure you only get the best.</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Our mission at Forever is simple yet profound: to empower our customers with utmost confidence, convenience, and seamless satisfaction. We are dedicated to delivering an unmatched shopping experience through a user-friendly platform, secure gateways, super-fast deliveries, and a world-class customer service team ready to conquer any challenge.</p>
        </div>
      </div>


      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>
      We carefully select and test every product to ensure it meets our high standards of quality, durability, and performance. Our commitment to excellence guarantees that you receive only the best products every time you shop with us.
    </p>
  </div>

  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>
      Enjoy a seamless shopping experience with our easy-to-use platform, secure payment options, and fast delivery services. We bring your favorite products right to your doorstep with just a few clicks.
    </p>
  </div>

  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>
      Our dedicated support team is always ready to assist you with any queries or concerns. We prioritize your satisfaction and strive to provide quick, helpful, and friendly service at every step.
    </p>
  </div>
</div>

 <NewLetter/>
    </div>

  )
}

export default About
