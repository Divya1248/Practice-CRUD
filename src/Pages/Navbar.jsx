import React from 'react'


const Navbar = () => {
    return (
      <section className="flex bg-gray-400 w-[100%] border-2 h-[40px]">
        <article className="flex w-[90%]">
          <div className="flex justify-start basis-[30%] text-xl">
            TODO LIST
          </div>
          <div className="flex justify-end  basis-[70%]">
            <div className="mx-4 text-xl ">
              <a href="/">Home</a>
            </div>
            <div className="mx-4 text-xl">
              <a href="/createposts">AddPost</a>
            </div>
            <div className="mx-4 text-xl">
              <a href="">Login</a>
            </div>
          </div>
        </article>
      </section>
    );
}

export default Navbar
