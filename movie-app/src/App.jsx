import React, { useEffect } from 'react'
import { useState } from 'react'
import Boxes from './components/Boxes'

function App() {


  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState('')
  
  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  

  const getAllmovies = async () => {
    
    const response = await fetch(APIURL)
    const data = await response.json();
setMovies(data.results)    

  }

  const searchedMovies = async (query) => {
    
    const response = await fetch(SEARCHAPI+query)
    const data = await response.json()
    setMovies(data.results)
   

  }

  
  useEffect(() => {
    
    if (search === '') {
      
      getAllmovies()

    } else {
      
      searchedMovies(search)
    }


  },[search])

  return (
    

    <div className='bg-slate-500'>

      <div className='w-full h-[200px] bg-slate-500 flex justify-center flex-col'>

        <input type="text" value={search} onChange={((e) => {
          
          setSearch(e.target.value)
        })} className=' p-4 rounded-xl w-[400px] md:w-[500px] lg:w-[580px] mx-auto text-xl'/>


      </div>

      <Boxes movies={ movies} />


   



    </div>




 
  )
}

export default App