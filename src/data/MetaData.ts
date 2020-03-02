export interface PhotoProps{
    tier : string
}

export interface MatchinfoProps{
    platformId: string,
    gameId: number,
    champion: number,
    queue: number,
    season: number,
    timestamp: number,
    role: string,
    lane: string
}

export interface MatchGridProps{
  matches : MatchinfoProps[];
}

export interface MatchStatsProps{
  match : MatchinfoProps;
}

export interface MatchViewProps{
    matches : MatchinfoProps[];
}
  
export interface PropingShit{
    name : string
}

export interface SummonersMatchesProps{
    encryptedSummonerId: string
}

export interface ToggleTrayProps {
    title?: string;
}
