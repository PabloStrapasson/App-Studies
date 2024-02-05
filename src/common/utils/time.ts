export function timeToSecond(tempo: string){
    const [hours = '0', minutes = '0', seconds = '0'] = tempo.split(":")
    
    const hour_to_seconds = Number(hours) * 3600
    const minutes_to_seconds = Number(minutes) * 60
    return hour_to_seconds + minutes_to_seconds + Number(seconds)
}