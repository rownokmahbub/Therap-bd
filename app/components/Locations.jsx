import React from 'react'

export default function Locations() {
  return (
    <div className='container mx-auto'>
         <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-5'>Where we located</h2>
        <div className='google-maps rounded-lg overflow-hidden'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7577009036977!2d90.39858897595244!3d23.791641078642318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7118f15b685%3A0xb3d328e9144e1518!2sTherap%20(BD)%20Ltd.!5e0!3m2!1sen!2sbd!4v1698682988697!5m2!1sen!2sbd" width="500" height={400} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
