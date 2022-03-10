import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "../Axios/axios";

const DeletePost = () => {
     
    let navigate = useNavigate();
    let { id } = useParams();
    let [state, setstate] = useState({
      title: "",
      author: "",
      loading: false,
    });

    let { title, author, loading } = state;
    useEffect(() => {
      let fetchData = async () => {
        let deletedata = await axios.get(`/posts/${id}`);
        setstate(deletedata.data);
      };
      fetchData();
    }, [id]);

    let handledelete = async e => {
        await axios.delete(`/posts/${id}`)
        navigate("/")
    }
    return (
      <div className="text-center border-2 w-[20%] m-auto py-4">
            <h3 className="mx-4 ">{title + author}</h3>
            <button onClick={handledelete} className="bg-blue-400 p-2 rounded-md mx-4 mt-4">Delete</button>
      </div>
    );
};

export default DeletePost;
