import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../Axios/axios";

const EditPost = () => {
  let navigate = useNavigate("");
  let [state, setstate] = useState({
    title: "",
    author: "",
    loading: false,
  });

  let { title, author, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      let payload = { title, author };
      await axios.put(`/posts/${id}`, payload);
      navigate("/");
    } catch (err) {
      console.log("error message");
    }
    setstate({ loading: false });
  };

  let { id } = useParams();
  useEffect(() => {
    let fetchdata = async () => {
      let exitsdata = await axios.get(`/posts/${id}`);
      console.log(exitsdata.data);
    };
    fetchdata();
  }, [id]);

  return (
    <section className="flex justify-center items-center">
      <article className="text-center w-[400px] border-2 my-6">
        <h1 className="text-xl text-orange-600">Edit Posts</h1>

        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <div>
              <label className="mt-4 px-2 mr-[60%] capitalize text-lg">
                title
              </label>
            </div>
            <div>
              <input
                type="text"
                className="border-2 p-1 w-[300px] rounded-md"
                name="title"
                placeholder="enter title"
                value={title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="p-2">
            <div>
              <label className="mt-4 px-2 mr-[60%] capitalize text-lg">
                Author
              </label>
            </div>
            <div>
              <input
                type="text"
                className="border-2 p-1 w-[300px] rounded-md"
                name="author"
                placeholder="enter author"
                value={author}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-400 rounded-md p-2 w-[300px] my-4"
          >
            {loading === true ? "loading" : "submit"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default EditPost;
