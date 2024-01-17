import React from 'react'

const style = {
  height: "100%",
  width: "100%",
}

const containerStyle = {
  background: "white", overflow: "hidden", height: "100vh", width: "100vw"
}
const SponsPdf = () => {
  return (
    <div style={containerStyle}>
      <iframe src={'/pdfs/Sponsorship Brochure 22-23.pdf'} style={style}></iframe>
    </div>
  )
}
export default SponsPdf

