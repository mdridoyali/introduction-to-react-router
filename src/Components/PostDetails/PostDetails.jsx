import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {postId} = useParams()
    const navigate = useNavigate();
console.log(postId)

    const handleGoBack =()=>{
        navigate(`/posts`)
        // navigate(-1)
    }
    return (
        <div>
            <h2 className="text-xl font-bold">This is post details {post.id}</h2>
            <h2>Title: {post.title}</h2>
            <h2>Body: {post.body}</h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;