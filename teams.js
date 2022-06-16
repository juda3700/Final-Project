// Populates the <ul> with the id "cat-list"
function outputHTML() {
        
    for (let i = 0; i < teams.length; i++) {
        appendHTML("team-list", `
            <li>
                <a href="player.html?teamIndex=${i}">${teams[i].name}</a>
                (<a href="#" onclick='deleteTeam(${i})'>Delete</a>)
            </li>`)
    }
}

// Add a new category
function addTeam() {

    // Get the value from the text box with id="new-category"
    let name = document.getElementById("new-team").value

    // Add a new object onto the cats array. The object has the name that was typed into the textbox,
    // and an empty array of todos.
    teams.push({
        name: name,
        players: []
    })

    // Save the data to the local browser storage and reload the page
    saveLocal(teams)
    location.reload()
}

// Deletes a category
function deleteTeam(index) {

    // Delete the item with the given index from the cats array
    teams.splice(index, 1)

    // Save the data to the local browser storage and reload the page
    saveLocal(teams)
    location.reload()
}

// Since we are not inside a function here, outputHTML() will be called as soon as the page loads
outputHTML() 