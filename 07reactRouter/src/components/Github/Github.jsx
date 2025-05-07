import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    //TODO: commenting out useEffect and useState as we are using githubInfoLoader func for the loader

    const data = useLoaderData();

    return (
        <>
            <div className="bg-orange-700 p-5 text-white text-2xl flex gap-4">
                <img src={data.avatar_url} alt="Github picture" width={300} />
                <h1>
                    Github Followers: {data.followers}
                </h1>

            </div>
        </>
    )
}

// we are doing this for loader in main.jsx

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}