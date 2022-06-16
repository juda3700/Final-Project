// Check that the category index in the URL is valid
function getCatIndex() {

    // Copy the value of the URL parameter "catIndex" into the variable "result"
    let result = urlParams.catIndex

    // Make sure we have been given a valid category index
    if (result == null || isNaN(result) || result < 0 || result > teams.length-1) {
        document.write("Invalid team index")
        return -1 // Return -1 to indicate an error
    }

    // All is good if we made it here. Return the result.
    return result
}

// Populates the <h3> tag with id="heading" and the rest of the table
function outputHTML() {

    // Update the heading with the name of the category
    setHTML("heading", `Players: ${teams[teamIndex].name}`)

    // Append data to the table
    let players = teams[teamIndex].playerss // gives us easier access to the todo list for this category
    for (let i = 0; i < players.length; i++) {

        // If the todo has been marked as "done" we make the checkbox status "checked", otherwise
        // we make it an empty string
        // let checkboxStatus = ""
        // if (todos[i].isDone) {
        //     checkboxStatus = "checked"
        // }

        // Append the data for the current todo item to the table
        appendHTML("player-table", `
            <tr>
                <td>${players[i].desc}</td>
                <td>${players[i].due}</td>
                <td><input type="checkbox" ${checkboxStatus} onclick="togglePlayer(${i})"></td>
                <td><a href="#" onclick="deletePlayer(${i})">Delete</a></td>
            </tr>`
        )
    }
}

// Adds a new todo to the list
function addPlayer() {

    // Get the values of the description and due date from the text boxes
    let desc = document.getElementById("new-player-desc").value
    let due = document.getElementById("new-player-due").value

    // Insert a new todo with the provided information. Notice that we need to use "catIndex" to ensure
    // we are inserting into the proper todo list
    teams[teamIndex].players.push({
        name: desc,
        position: position,
        number: number,
    })

    // Save the data to the local browser storage and reload the page
    saveLocal(teams)
    location.reload()
}

// Deletes a todo item
function deletePlayer(playerIndex) {
    let arr = teams[teamIndex].players // Get easier access to the proper todo array
    arr.splice(playerIndex, 1) // Delete the item

    // Save the data to the local browser storage and reload the page
    saveLocal(player)
    location.reload()
}

// Toggles the completion status of a todo item
function togglePlayer(playerIndex) {

    // Get the current status of the todo item - will be a Boolean true or false
    let curStatus = teams[teamIndex].players[playerIndex].isDone

    // The !curStatus will flip the Boolean value of curStatus to its opposite
    teams[teamIndex].players[playerIndex].isDone = !curStatus

    // Save the data to the local browser storage and reload the page
    saveLocal(teams)
    location.reload()
}

// As soon as the page loads, set the catIndex variable from the URL
let teamsIndex = getTeamsIndex()

// Only call outputHTML if getCatIndex didn't return the error code (-1)
if (teamIndex > -1)
    outputHTML()