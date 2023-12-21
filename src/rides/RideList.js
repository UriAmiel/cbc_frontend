export default function RideList({rides, communityName}) {

    if (rides.length === 0) {
        return <div>
            <h1>{communityName} has no rides</h1>
        </div>
    }

    return <div>
        <h1>{communityName} Rides:</h1>
        <ul>
            {rides.map(ride => <RideCard key={ride.id} ride={ride}/>)}
        </ul>
    </div>
}

function RideCard({ride}) {
    return <div>
        <h2>{ride.destination}</h2>
    </div>
}