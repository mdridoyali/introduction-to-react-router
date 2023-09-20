import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className="border-2 border-y-orange-600 p-5 rounded-xl space-y-4 m-3">
            <h2 className="text-3xl">{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show More</button></Link>
        </div>
    );
};

export default User;