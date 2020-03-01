import  {ritoAPI}  from '../appsettings.json'; 

export async function fetchSummonerByName(name: string) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(name)}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}

export async function fetchSummonerBySummoner(name: string) {
    const proxyUrl = "https://polar-cove-15690.herokuapp.com/";
    const response = await fetch(proxyUrl + `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encodeURI(name)}?api_key=${ritoAPI}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-cache'
        });
    return await response.json();
}
