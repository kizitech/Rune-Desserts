import React from 'react'

function Contact() {
  return (
    <>
      <div className='contact'>
        <section className='contact-bg'></section>
        
        <form action='' method='' className='contact-form'>
          <input type="text" name="name" id="name" placeholder='Name' className='contact__input' />
          <input type="email" name="email" id="email" placeholder='Email' className='contact__input' />
          <textarea name="Message" id="Message" cols="65" rows="20" placeholder='Message' className='contact__textarea'></textarea>
          <button type="submit" className='contact__btn'>Send</button>
        </form>
      </div>
    </>
  )
}

export default Contact