import CommunitiesFetcher from "./CommunitiesFetcher";
import CommunityList from "./CommunityList";
import CreateCommunityForm from "./CreateCommunityForm";
import React, {useState} from "react";
import PlusButton from "../general/buttons/PlusButton";

export default function CommunityView({onCommunityClick}) {
    const [shouldCreateForm, setShouldCreateForm] = useState(false);
    const [communities, setCommunities] = useState([]);

    function handleCreateCommunity(newCommunity) {
        setCommunities([...communities, newCommunity]);
        setShouldCreateForm(false);
    }

    function handleClickOnShouldCreateCommunityForm() {
        setShouldCreateForm(shouldCreateForm => !shouldCreateForm);
    }


    return <div>
        <CommunitiesFetcher setCommunities={setCommunities}/>
        <CommunityList communities={communities} onCommunityClick={onCommunityClick}/>
        <PlusButton onClick={handleClickOnShouldCreateCommunityForm}/>
        {shouldCreateForm && <CreateCommunityForm addCommunity={handleCreateCommunity}/>}
    </div>
}