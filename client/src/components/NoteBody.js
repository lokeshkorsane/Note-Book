import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoteBody = ({ title, description, tag, id }) => {

  const Navigate = useNavigate();
  return (
    <div style={{ position: "relative", width: "100%" }} className="mx-5 my-4">

      <div className="card" style={{ height: "24rem", overflow: "scroll" }}>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
      
      <div className="d-grid gap-2" style={{ position: "absolute", bottom: "8px", left: "8px", right: "8px" }}>
        <button className="btn btn-primary" type="button" onClick={(e) => { e.preventDefault(); Navigate(`/open/${id}`) }}>OPEN</button>
      </div>
      
    </div>
  )
}

export default NoteBody