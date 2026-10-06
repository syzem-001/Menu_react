import {foods} from "./data.js"
export const getAllCategories = () => {
    let categories  = foods.map(obj => obj.category)
    
    categories  = [... new Set(categories)]
    return ([...categories,"all"].sort((a,b ) => a.localeCompare(b)))
}