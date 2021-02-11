import React from 'react';
import {useSelector} from "react-redux";

export const Home = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            Home: {user}
        </div>
    );
};
export default Home;

