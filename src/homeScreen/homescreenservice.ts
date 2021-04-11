export function getCategories(todos:any):string[] {
    console.log(todos)
    let categoryList = todos?.map((value:any) => value.category)
    return Array.from(new Set(categoryList));
}

export function filterItemsByCategory(todos:any, category:string|null) {
    if (todos?.filter) {
        if (category) {
            let filteredList = todos?.filter((value:any) => value.category === category && value.completed === false)
            return filteredList;
        }
        let filteredList = todos?.filter((value:any) => value.completed === false)
        return filteredList;
    }
}

export function getCompletedItems(todos:any) {
    let filteredList = todos?.filter((value:any) => value.completed === true)
    return filteredList;
}