export default function CommunityList({communities}) {
    return <div>
        <h1>Your communities:</h1>
        <ul>
            {communities.map( (community,index) => <Community key={index} community={community}/>)}
        </ul>
    </div>

}

function Community({community}) {
    return <li>
        <h3>{community.name}</h3>
    </li>
}