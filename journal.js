
let Journallist = {
    "Title": ["First blog letter", "Today was a good day", "Another day at onja"],
    "Content": [ "This blog is about what happended last week during the election time.", "This blog is about what happended last week during the election time.",
                "This blog is about what happended last week during the election time."]
}


let continueProgram = '';
while (continueProgram === '') {

    let journalTypes = prompt('Welcome to my Onja journal\n Choose(1) for listing all the entries \n Choose(2) for adding a new entry \n Choose(3) to quite');
    if (journalTypes === '1') {
        alert(`Title: ${Journallist.Title[0]} \n Content: ${Journallist.Content[0]}`);
        alert(`Title: ${Journallist.Title[1]} \n Content: ${Journallist.Content[1]}`);
        alert(`Title: ${Journallist.Title[2]} \n Content: ${Journallist.Content[2]}`);
    } else if (journalTypes === '2') {
        var  newJournal = prompt('Enter your journal title');
        var  newJournal = prompt('Enter your journal content');  
        if (newJournal === 'title') {
            newJournal = prompt('Enter your journal title'); 
        } else if (newJournal === 'content') {
            newJournal = prompt('Enter your journal content'); 
        }
        continueProgram = '';
    }
} 

let journalTypes = prompt('Welcome to my Onja journal\n Choose(1) for listing all the entries \n Choose(2) for adding a new entry \n Choose(3) to quite');
if (journalTypes === '3') {
  var journal = 0;
  alert('Thank you');
}