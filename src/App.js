import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Input from './components/Input';
import Update from './components/Update';
// import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

const [gigs, setGigs] = useState([]);
const [showSuggestionBox, setShowSuggestionBox] = useState(false);


const getGigs = () => {
  axios
    .get('http://localhost:8080/previousGigs')
    .then(
      (response) => setGigs(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }


const handleCreate = (addGig) => {
    axios.post('http://localhost:8080/previousGigs', addGig)
    .then((response) => {
      setGigs([...gigs, response.data])
    })
  }

const handleUpdate = (editGig) => {
    axios.put('http://localhost:8080/previousGig/{id}' + editGig.ID, editGig)
    .then((response) => {
      setGigs(gigs.map((gig) => {
        return gig.ID !== editGig.ID ? gig : editGig
      }))
    })
  }

const handleDelete = (event) => {
      axios.delete('http://localhost:8080/previousGig/' + event.target.value)
        .then((response) => {
          getGigs()
        })
    }

useEffect(() => {
    axios
      .get('http://localhost:8080/previousGigs')
      .then((response) => {
        setGigs(response.data)
        })
  }, []);



  return (
    <div className="home">
      <button onClick={() =>
        setShowSuggestionBox(!showSuggestionBox)}>Add New Entry
      </button>
        {showSuggestionBox ?
          <div className="new-gig">
            <Input handleCreate={handleCreate}/>
          </div>
          : null
        }
          <div className="gig-list">
          <h4>Gig History</h4>
            {gigs.map((gig) => {
              return (
              <div className="gig" key={gig.ID}>
              <h4>Gig: {gig.Title}</h4>
              <h5>Location: {gig.Location}</h5>
              <h5>Date: {gig.Date}</h5>
              <h5>Notes: {gig.Notes}</h5>
              <Update gig={gig} handleUpdate={handleUpdate}/>
              <details>
              <summary>Delete</summary>
              <button onClick={handleDelete} value={gig.ID}>Delete</button>
              </details>
              </div>
              )
            })}
          </div>
    </div>
  );
}

export default App;
