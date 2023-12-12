export default function CommunityList({communities, handleShowRide}) {
    return <div>
        <h1>Your communities:</h1>
        <ul>
            {communities.map(community => <CommunityCard key={community.id} community={community} handleShowRide={handleShowRide}/>)}
        </ul>
    </div>
}

function CommunityCard({community, handleShowRide}) {
    return <div onClick={() => {
        handleShowRide(community)
    }}>
        <h2>{community.name}</h2>
    </div>

}