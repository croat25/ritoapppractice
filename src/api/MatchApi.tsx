import  {ritoAPI}  from '../appsettings.json'; 

export async function fetchWholeMatchHistoryOfSummoner(encryptedSummonerId: string) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${encodeURI(encryptedSummonerId)}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}

export async function GetMatchByGameId(gameId: number) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/match/v4/matches/${encodeURI(gameId.toString())}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}
