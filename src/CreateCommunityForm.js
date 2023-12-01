import React, {useState} from 'react';
import {BACKEND_ENDPOINT} from './Constants';

const ENDPOINT = BACKEND_ENDPOINT + "community/add";
export default function CreateCommunityForm({addCommunity}) {
    const [communityName, setCommunityName] = useState('');

    async function sendCreateCommunityRequest(newCommunity) {
        const PROPERTIES_TO_EXCLUDE = ['create_date'];

        const filteredCommunity = Object.fromEntries(
            Object.entries(newCommunity).filter(([key]) =>
                !PROPERTIES_TO_EXCLUDE.includes(key)));

        try {
            const response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filteredCommunity),
            });
            if (!response.ok) {
                throw new Error("There was a problem sending create community request");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCommunity = {name: communityName, create_date: new Date()};
        await sendCreateCommunityRequest(newCommunity);

        addCommunity(newCommunity);
        setCommunityName('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Community Name: </label>
                <input type="text" value={communityName} onChange={(e) => setCommunityName(e.target.value)}/>
                <button type="submit">Create</button>
            </form>
        </>
    );
}
;