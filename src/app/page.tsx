async function getArtist(data: any) {
  const res = await fetch("http://localhost:3001/match", {
    next: {
      revalidate: 1,
    },
  });
  const json = await res.json();
  return json;
}

export default async function Home(data: any) {
  type Card = {
    home: string;
    away: string;
    date: string;
    location: string;
    startTime: string;
    score: string;
    status: string;
    matchInfo: string;
  };
  type Game = {
    date: string;
    section: number;
    matches: Card[];
  };
  const res = await getArtist("(´・ω・｀)ショボーン");
  const games: Game[] = res;
  console.log(
    games.map((game) => {
      return game.matches.map((card) => {
        return card;
      });
    })
  );

  return (
    <main>
      <h1>WellCome to GoalTime!</h1>
      <div>
        {games.map((game, i) => {
          return (
            <div key={i}>
              <h2> {game.date}</h2>
              <h3>{game.section}</h3>
              {game.matches.map((card) => {
                return (
                  <div
                    style={{
                      border: "1px solid gray",
                      padding: "4px",
                      margin: "4px",
                    }}
                    key={card.home + card.away}
                  >
                    <p>{card.matchInfo}</p>
                    <p>
                      {card.location} {card.startTime}
                    </p>
                    <p>{card.status}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}
