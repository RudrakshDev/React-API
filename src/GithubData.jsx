import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubData = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let githubUser = "Rudraksh28";
                const response = await axios.get(`https://api.github.com/users/${githubUser}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    if (!userData) return <p>Loading...</p>;

    return (
        <div>
            <h1>{userData.name}</h1>
            <p>Username: {userData.login}</p>
            <p>Followers: {userData.followers}</p>
            <p>Public Repos: {userData.public_repos}</p>
            <p>Location: {userData.location}</p>
        </div>
    );
};

export default GitHubData;
