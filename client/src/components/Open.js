import React, { useContext, useEffect } from 'react'
import { NotesContext } from '../Contexts/NotesContextProvider'
import { useNavigate, useParams } from 'react-router-dom'
import DeleteModal from './Modals/DeleteModal';

const Open = () => {
  
  const { id } = useParams();
  const Navigate = useNavigate();
  const { note, getNote } = useContext(NotesContext);
  const { title, tag, description } = note;

  useEffect(() => {
    getNote(id);
  }, [])

  return (
    <div className='container text-center my-5' >
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-end my-3">
        <button className="btn btn-primary me-md-2 mx-2" type="button" onClick={() => Navigate(`/editnote/${id}`)}>Edit Note</button>
        <DeleteModal symbol="Delete" id={id} title={title} />
        <button className="btn btn-info me-md-2 mx-2" type="button" onClick={() => Navigate(`/home`)}>Back</button>
      </div>
      
      <div style={{ border: "solid 2px black" }} className='py-3 px-3'>
        <h3>{title}</h3>
        <h5>{tag}</h5>
        <br />
        <hr />
        <p>{description}</p>
      </div>

    </div>
  )
}

export default Open