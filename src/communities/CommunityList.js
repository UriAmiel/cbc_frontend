export default function CommunityList({communities, onCommunityClick}) {
    return <div>
        <h1>Your communities:</h1>
        <ul>
            {communities.map(community => <CommunityCard key={community.id} community={community}
                                                         onCommunityClick={onCommunityClick}/>)}
        </ul>
    </div>
}

function CommunityCard({community, onCommunityClick}) {
    return <div onClick={() => {
        onCommunityClick(community)
    }}>
        <h2>{community.name}</h2>
    </div>
}