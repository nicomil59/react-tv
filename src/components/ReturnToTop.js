import React from 'react'

const ReturnToTop = () => {
  return (
    <div className="return-top" onClick={() => window.scrollTo(0,0)}>
        <span className="fas fa-arrow-circle-up"></span>
    </div>
  )
}

export default ReturnToTop