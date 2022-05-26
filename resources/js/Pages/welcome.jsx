import { useEffect } from "react";
import NavBar from "../Components/NavBar";

const Welcome = (props) => {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);

    return (
        <>
            <h1>{props.greeting} Inertia.js</h1>
            <NavBar />
        </>
    );
};

export default Welcome;
