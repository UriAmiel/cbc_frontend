export default function CommunityList({communities}) {
    return <div>
        <h1>Your communities:</h1>
        <ul>
            {communities.map(community => <Community key={community.id} community={community}/>)}
        </ul>
    </div>
}

function Community({community}) {
    return <div>
        <h2>{community.name}</h2>
    </div>

}