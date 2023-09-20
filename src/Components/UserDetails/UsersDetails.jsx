import { useLoaderData } from "react-router-dom";


const UsersDetails = () => {
    const user = useLoaderData();
    const {name, website, email, phone} = user
    return (
        <div className="bg-amber-100 text-black p-5 m-5">
            <h2 className="text-3xl">Name: {name}</h2>
            <p>Website: {website}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default UsersDetails;