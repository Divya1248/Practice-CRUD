import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import axios from "../Axios/axios";

const Home = () => {
  let { id } = useParams();
  let [state, setstate] = useState([]);
  let [searchTerm, setsearchTerm] = useState("");
  let [loading, setload] = useState(false);

  useEffect(() => {
    let fetchData = async () => {
      let payload = await axios.get("/posts");
      setstate(payload.data);
    };
    fetchData();
  }, [id]);

   let mapdata = (state.filter(val => {
     if (searchTerm === "") return val;
     else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
       return val;
   }).map(x => {
     return (
       <Fragment key={x.id}>
         <tr className="border-collapse">
           <td className="border border-gray-300 w-[300px]">{x.id}</td>
           <td className="border border-gray-300 w-[300px]">{x.title}</td>
           <td className="border border-gray-300 w-[300px]">{x.author}</td>
           <td>
             <div className="mx-4 px-4 border-2 border-y-2">
               <Link
                 to={`/editposts/${x.id}`}
                 className="p-3 text-blue-400 rounded-md "
               >
                 Edit
               </Link>
               <span className="border-2 bg-red-500 text-white rounded-md mx-2 h-2">
                 {" "}
                 <Link to={`/deletepost/${x.id}`}>Delete</Link>
               </span>
             </div>
           </td>
         </tr>
       </Fragment>
     );
   }));
    
 
 
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <Fragment>
          <div className="border-2 rounded-md w-[80%] m-auto p-1 my-4">
            <input
              type="search"
              name="searchTerm"
                              placeholder="search..."
                              className="p-1 w-[80%] "
              value={searchTerm}
              onChange={e => setsearchTerm(e.target.value)}
            />
          </div>

          <div className=" w-[80%] m-auto my-8">
            <table className="mx-6  border border-gray-400 ">
              <thead className="p-2">
                <tr className="p-4 ">
                  <th className="border border-gray-300 text-center">id</th>
                  <th className="border border-gray-300 text-center ">title</th>
                  <th className="border border-gray-300  text-center">
                    author
                  </th>
                </tr>
              </thead>
              <tbody className="border border-gray-300 text-center ">
                {mapdata}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;

