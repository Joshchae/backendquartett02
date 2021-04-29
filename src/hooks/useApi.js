import { useState, useEffect } from 'react'
import axios from 'axios'
// import client from '../client'
// import { useParams } from 'react-router-dom'

// This just puts our API call to contenful in its own hook which makes our code cleaner 

function useApi() {
    const [characters, setCharacters] = useState([]);
    // const { id } = useParams()

    useEffect(() => {
      const apiUrl = 'http://localhost:5000/'
      const requestUsers = axios.get(`${apiUrl}users`)
      axios.all(([requestUsers]))
      .then(([userData]) => {
        setCharacters(userData.data.data);
        console.log(userData.data.data)
      })
      .catch(console.log('request failed, useApi'));
    }, [])      
    return characters
  }
  export default useApi
  
  //   useEffect(() => {
  //   fetch('http://localhost:5000/users/')
  //   .then(res => res.json())
  //   .then((json) => {
  //     setCharacters(json);
  //     console.log(json)
  //     // setIsLoading(false);
  //   })
  //   .catch(console.log('request failed, useApi'));
  // }, [])