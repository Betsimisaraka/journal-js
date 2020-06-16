//These are the journal list 
const journal = [
    { title: "First blog letter",
      content: "This blog is about what happended last week during the election time."}, 
      
    { title: "Today was a good day",
      content: "This blog is about what happended last week during the election time."},
               
    { title: "Another day at onja",
      content: "This blog is about what happended last week during the election time."}
]

let choice = prompt('Welcome to my Onja journal\n Choose(1) for listing all the entries \n Choose(2) for adding a new entry \n Choose(3) to quite \n choose(4) to delete \n Choose(5) to delete a spesific entry');
while (choice !== '3') { // Return the menu
    if (choice === '1') { // Loop though all the entries
        for(let i = 0; i < journal.length; i++) {
            alert('Title:' +' '+ journal[i].title + '\n'+ 'Content:' + ' ' + journal[i].content);
        }
    } else if (choice === '2') { // Add new entry
        let newEntrytitle = prompt('Enter your journal title');
        let newEntrycontent = prompt('Enter your journal content');
        let newEntry = {title: newEntrytitle, content: newEntrycontent};
            journal.push(newEntry);
          
    } else if (choice === '3') { // We want to quit the program
        alert('thank you');
    } else if (choice === '4') { // Delete the last entry
        const entryDeleted = journal.pop();
        alert(`We delete the last entry ${entryDeleted.title}`);
    } else if (choice === '5') { // Enter the index's entry you want to delete.
        let indexTodelete = Number(prompt('Enter the index of the array you want to delete (1 to ${journal.lenth})'));
        let deleteEntry = journal.splice(indexTodelete--, 1);
        alert(`Index to delete ${deleteEntry[0].title} `);
    }
    choice = choice = prompt('Welcome to my Onja journal\n Choose(1) for listing all the entries \n Choose(2) for adding a new entry \n Choose(3) to quite \n choose(4) to delete \n Choose(5) to delete a spesific entry');
}
