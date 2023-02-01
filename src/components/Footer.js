import React from 'react'

const Footer = () => {
  const css_footer = {
    backgroundColor:"black",
    position:"absolute",
    bottom:"0px",
    width:"100%"
  }
  return (
    <>
      <div className='py-3 mt-3' style={css_footer}>
        <p className='text-center text-light py-0 my-0'>Designed and Developed By &#169;Nurul Islam</p>
      </div>
    </>
  )
}

export default Footer