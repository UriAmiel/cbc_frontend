import React, {useState} from 'react';
import {BACKEND_ENDPOINT} from "../Constants";
import axios from 'axios';
import './createForm.css';

const ENDPOINT = BACKEND_ENDPOINT + 'community/add'

export default function CreateCommunityForm({addCommunity}) {
    const [communityName, setCommunityName] = useState('');
    const [communityDescription, setCommunityDescription] = useState('');

    async function handleCreateCommunity(e) {
        e.preventDefault();

        try {
            const newCommunity = {
                name: communityName,
                description: communityDescription
            };

            const response = await axios.post(ENDPOINT, newCommunity);

            addCommunity(response.data);
            setCommunityName('')
        } catch (error) {
            console.error(`Error creating community ${communityName}`, error);
        }
    }

    return (
        <form onSubmit={handleCreateCommunity}>
            <div>
                <FormLabel text="Name" value={communityName} type="text" setFunction={setCommunityName}/>
                <FormLabel text="Description" value={communityDescription} type="text"
                           setFunction={setCommunityDescription}/>
            </div>
            <button type="submit">Create Community</button>
        </form>
    );
};

function FormLabel({text, type, value, setFunction}) {
    return <div className="input-div">
        <label>{text}:</label>
        <input type={type} value={value}
               onChange={(e) => setFunction(e.target.value)}
        />
    </div>
}