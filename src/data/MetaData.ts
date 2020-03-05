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


export interface MasterDto{
    masteryId:	number	
    rank: number
}

export interface ParticipantTimelineDto{
    lane: string,
    participantId: number,
    csDiffPerMinDeltas : Map<string, number>,
    goldPerMinDeltas :Map<string, number>,
    xpDiffPerMinDeltas :Map<string, number>,
    creepsPerMinDeltas :Map<string, number>,
    xpPerMinDeltas :Map<string, number>,
    role :string,
    damageTakenDiffPerMinDeltas :Map<string, number>,
    damageTakenPerMinDeltas :Map<string, number>,
}

export interface RuneDto{
    runeId:	number,	
    rank: number
}

export interface ParticipantStatsDto{
    firstBloodAssist : boolean,
    visionScore : number,
    magicDamageDealtToChampions : number,
    damageDealtToObjectives : number,
    totalTimeCrowdControlDealt : number,
    longestTimeSpentLiving : number,
    perk1Var1 : number,
    perk1Var3 : number,
    perk1Var2 : number,
    tripleKills : number,
    perk3Var3 : number,
    nodeNeutralizeAssist : number,
    perk3Var2 : number,
    playerScore9 : number,
    playerScore8 : number,
    kills : number,
    playerScore1 : number,
    playerScore0 : number,
    playerScore3 : number,
    playerScore2 : number,
    playerScore5 : number,
    playerScore4 : number,
    playerScore7 : number,
    playerScore6 : number,
    perk5Var1 : number,
    perk5Var3 : number,
    perk5Var2 : number,
    totalScoreRank : number,
    neutralMinionsKilled : number,
    damageDealtToTurrets : number,
    physicalDamageDealtToChampions : number,
    nodeCapture : number,
    largestMultiKill : number,
    perk2Var2 : number,
    perk2Var3 : number,
    totalUnitsHealed : number,
    perk2Var1 : number,
    perk4Var1 : number,
    perk4Var2 : number,
    perk4Var3 : number,
    wardsKilled : number,
    largestCriticalStrike : number,
    largestKillingSpree : number,
    quadraKills : number,
    teamObjective : number,
    magicDamageDealt : number,
    item2 : number,
    item3 : number,
    item0 : number,
    neutralMinionsKilledTeamJungle : number,
    item6 : number,
    item4 : number,
    item5 : number,
    perk1 : number,
    perk0 : number,
    perk3 : number,
    perk2 : number,
    perk5 : number,
    perk4 : number,
    perk3Var1 : number,
    damageSelfMitigated : number,
    magicalDamageTaken : number,
    firstInhibitorKill : boolean,
    trueDamageTaken : number,
    nodeNeutralize : number,
    assists : number,
    combatPlayerScore : number,
    perkPrimaryStyle : number,
    goldSpent : number,
    trueDamageDealt : number,
    participantId : number,
    totalDamageTaken : number,
    physicalDamageDealt : number,
    sightWardsBoughtInGame : number,
    totalDamageDealtToChampions : number,
    physicalDamageTaken : number,
    totalPlayerScore : number,
    win : boolean,
    objectivePlayerScore : number,
    totalDamageDealt : number,
    item1 : number,
    neutralMinionsKilledEnemyJungle : number,
    deaths : number,
    wardsPlaced : number,
    perkSubStyle : number,
    turretKills : number,
    firstBloodKill : boolean,
    trueDamageDealtToChampions : number,
    goldEarned : number,
    killingSprees : number,
    unrealKills : number,
    altarsCaptured : number,
    firstTowerAssist : boolean,
    firstTowerKill : boolean,
    champLevel : number,
    doubleKills : number,
    nodeCaptureAssist : number,
    inhibitorKills : number,
    firstInhibitorAssist : boolean,
    perk0Var1 : number,
    perk0Var2 : number,
    perk0Var3 : number,
    visionWardsBoughtInGame : number,
    altarsNeutralized : number,
    pentaKills : number,
    totalHeal : number,
    totalMinionsKilled : number,
    timeCCingOthers : number,
}

export interface ParticipantDto{
    stats: ParticipantStatsDto,
    participantId: number,
    runes: RuneDto[],
    timeline: ParticipantTimelineDto,
    teamId: number,
    spell2Id: number,
    masteries: MasterDto[],
    highestAchievedSeasonTier: string,
    spell1Id: number,
    championId: number,
}

export interface TeambansDto{
    pickTurn:number	
    championId:number
}

export interface TeamStatsDto{
    firstDragon: boolean,
    firstInhibitor: boolean,
    bans: TeambansDto[],
    baronKills: number,
    firstRiftHerald: boolean,
    firstBaron: boolean,
    riftHeraldKills: number,
    firstBlood: boolean,
    teamId: number,
    firstTower: boolean,
    vilemawKills: number,
    inhibitorKills: number,
    towerKills: number,
    dominionVictoryScore: number,
    win: string,
    dragonKills: number
}

export interface PlayerDto{
    currentPlatformId: string,
    summonerName: string,
    matchHistoryUri: string,
    platformId: string,
    currentAccountId: string,
    profileIcon: number,
    summonerId: string,
    accountId: string,
}

export interface ParticipantIdentityDto{
    player: PlayerDto,
    participantId: number
}

export interface MatchDto{
seasonId: number,
queueId: number,
gameId: number,
participantIdentities: ParticipantIdentityDto[],
gameVersion: string,
platformId: string,
gameMode: string,
mapId: number,
gameType: string,
teams: TeamStatsDto[],
participants: ParticipantDto[],
gameDuration: number,
gameCreation: number
}