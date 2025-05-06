import { useParams } from "react-router-dom"


export default function User() {
    const { userid } = useParams();

    return (
        <>
            <div className="bg-blue-300 p-5 text-center">
                <h2 className="text-2xl">
                    User: {userid}
                </h2>
            </div>
        </>
    )
}