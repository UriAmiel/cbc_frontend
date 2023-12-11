import React, { useState } from 'react';
import {BACKEND_ENDPOINT} from "./Constants";
import axios from 'axios';

const ENDPOINT = BACKEND_ENDPOINT + 'community/add'

const CreateCommunityForm = ({ addCommunity }) => {
    const [communityName, setCommunityName] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const newCommunity = {name: communityName};
            const response = await axios.post(ENDPOINT, newCommunity);

            addCommunity(response.data);
            setCommunityName('')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Community Name:
                <input type="text" value={communityName}
                       onChange={(e) => setCommunityName(e.target.value)}
                />
            </label>
            <button type="submit">Create Community</button>
        </form>
    );
};

export default CreateCommunityForm;
