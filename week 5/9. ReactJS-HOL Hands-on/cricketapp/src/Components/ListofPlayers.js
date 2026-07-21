function ListofPlayers() {

    const players = [

        { name: "Virat Kohli", score: 95 },

        { name: "Rohit Sharma", score: 88 },

        { name: "KL Rahul", score: 42 },

        { name: "Shubman Gill", score: 81 },

        { name: "Hardik Pandya", score: 69 },

        { name: "Jadeja", score: 75 },

        { name: "Ashwin", score: 61 },

        { name: "Bumrah", score: 35 },

        { name: "Siraj", score: 40 },

        { name: "Surya Kumar", score: 98 },

        { name: "Rinku Singh", score: 72 }

    ];

    const lowScorePlayers = players.filter(

        player => player.score < 70

    );

    return (

        <div>

            <h2>List of Players</h2>

            <ul>

                {

                    players.map((player, index) => (

                        <li key={index}>

                            {player.name} - {player.score}

                        </li>

                    ))

                }

            </ul>

            <h2>Players Scoring Below 70</h2>

            <ul>

                {

                    lowScorePlayers.map((player, index) => (

                        <li key={index}>

                            {player.name} - {player.score}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default ListofPlayers;