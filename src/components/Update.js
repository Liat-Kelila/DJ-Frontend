import {useState} from 'react'
import React from 'react';

const Update = (props) => {
  const [gig, setGig] = useState({...props.gig})

  const handleChange = (event) => {
    setGig({...gig, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(gig)
  }

  return (
    <>
      <details>
        <summary>Update Gig</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Title">Gig: </label>
          <input className="form-control" type="text" name="Title" value={gig.Title} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="Location">Location: </label>
          <input className="form-control" type="text" name="Location" value={gig.Location} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="Date">Date: </label>
          <input className="form-control" type="text" name="Date" value={gig.Date} onChange={handleChange}/>
          <br />
          <br />
          <label htmlFor="Notes">Notes: </label>
          <input className="form-control" type="text" name="Notes" value={gig.Notes} onChange={handleChange}/>
          <input className="submit" type="submit" onClick={() => window.location.reload(false)} value="Save"/>
        </form>
      </details>
    </>
  )
}

export default Update;
