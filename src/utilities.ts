import { castAndCrewType } from "./Types/CastAndCrewType"

export function getDirecting(crews : castAndCrewType[] | undefined) {
        const directing = crews?.filter((ele) => ele.known_for_department == 'Directing')
        return directing
    }  
export function getArt(crews : castAndCrewType[] | undefined) {
        const Art = crews?.filter((ele) => ele.known_for_department == 'Art')
        return Art
    }  
export function getSound(crews : castAndCrewType[] | undefined) {
        const Sound = crews?.filter((ele) => ele.known_for_department == 'Sound')
        return Sound
    }
export function getWriting(crews : castAndCrewType[] | undefined) {
        const Writing = crews?.filter((ele) => ele.known_for_department == 'Writing')
        return Writing
    }
export function getProduction(crews : castAndCrewType[] | undefined) {
        const Production = crews?.filter((ele) => ele.known_for_department == 'Production')
        return Production
    }
export function getCrew(crews : castAndCrewType[] | undefined) {
        const Crew = crews?.filter((ele) => ele.known_for_department == 'Crew')
        return Crew
    }
export function getCamera(crews : castAndCrewType[] | undefined) {
        const Camera = crews?.filter((ele) => ele.known_for_department == 'Camera')
        return Camera
    }
export function getCostumeAndMake_Up(crews : castAndCrewType[] | undefined) {
        const CostumeAndMake_Up = crews?.filter((ele) => ele.known_for_department == 'Costume & Make-Up')
        return CostumeAndMake_Up
    }
export function getEditing(crews : castAndCrewType[] | undefined) {
        const Editing = crews?.filter((ele) => ele.known_for_department == 'Editing')
        return Editing
    }
export function getVisualEffects(crews : castAndCrewType[] | undefined) {
        const VisualEffects = crews?.filter((ele) => ele.known_for_department == 'Visual Effects')
        return VisualEffects
    }