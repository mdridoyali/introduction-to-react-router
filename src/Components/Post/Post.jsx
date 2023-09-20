import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

  const handleShowMore = ()=>{
     navigate(`/post/${id}`)
  }

    return (
        <div className="border-2 border-orange-600 p-5 text-xl font-semibold rounded-md">
            <h3>Post of id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`} ><button className="bg-orange-200 px-3 py-1 rounded-lg mx-auto text-center">Post Detail</button></Link>
       <button onClick={handleShowMore}>Click to see more</button>
        </div>
    );
};

export default Post;