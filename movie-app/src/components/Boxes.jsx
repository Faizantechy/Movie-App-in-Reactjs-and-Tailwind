import React from "react";

function Boxes(props) {
  return (
    <>
      <div className="boxes w-full h-auto p-5 bg-slate-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {props.movies.map((movie) => {
                  
                  console.log(movie);
                  
                              
          return (
            <div className="min-h-[200px] shadow border overflow-hidden">
           <img
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  className="w-full object-cover"
/>


              <div className="flex justify-between items-center mt-2 p-3 mb-2 text-white w-full">
                      <span className="text-4xl font-bold md:text-3xl lg:text-2xl">{ movie.title}</span>

                      <span className="text-4xl font-bold text-yellow-400 md:text-3xl lg:text-2xl">{ movie.release_date}</span>


              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Boxes;
