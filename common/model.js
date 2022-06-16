// This is the default data to use if none is found in the browser's local storage
let defaultTeams = [
    {
        name: "Toronto Blue Jays",
        players: [
            {
                name: "Cut Grass",
                position: "May 24",
                number: false
            },
            {
                name: "Rake Leaves",
                position: "May 24",
                number: true
            }
        ]
    },
    {
        name: "New York Yankees",
        todos: [
            {
                name: "Mark Grade 12 Assignments",
                position: "ASAP",
                number: false
            },
            {
                name: "Prepare Project",
                position: "May 18",
                number: false
            }
        ]
    }
]

// Set "cats" (short for "categories") to the data found in the browser's local storage.
// If none is found, use "defaultCats"
let teams = loadLocal(defaultTeams)