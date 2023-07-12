import React from 'react'

function Contact() {
  return (
    <>
      <div className='contact'>
        <section>
          <form action='' method=''>
            <input type="text" name="name" id="name" placeholder='Name' className='contact__input' />
            <input type="email" name="email" id="email" placeholder='Email' className='contact__input' />
            <textarea name="Message" id="Message" cols="65" rows="20" className='contact__textarea'></textarea>
          </form>
        </section>
      </div>
    </>
  )
}

export default Contact