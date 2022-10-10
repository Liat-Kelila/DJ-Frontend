import {useState} from 'react'

const Input = (props) => {
  let emptyGig = {Title: '', Location: '', Date: '', Notes: ''}
  const [gig, setGig] = useState(emptyGig)

  const handleChange = (event) => {
    setGig({...gig, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(gig)
    setGig(emptyGig)
  }

  return (
    <>
    <div className="input">
      <h1>New Gig</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Gig: </label>
        <input class="form-control" type="text" name="Title" onChange={handleChange}/>
        <label htmlFor="Location">Location: </label>
        <input class="form-control" type="text" name="Location" onChange={handleChange}/>
        <label htmlFor="Date">Date: </label>
        <input class="form-control" type="text" name="Date" onChange={handleChange}/>
        <label htmlFor="Notes">Notes: </label>
        <textarea class="form-control" rows="3" input type="text" name="Notes" onChange={handleChange}></textarea>
        <input type="submit" onClick={() => window.location.reload(false)} value="Submit entry"/>
      </form>
    </div>
    </>
  )
}

export default Input;
