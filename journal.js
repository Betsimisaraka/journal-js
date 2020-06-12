
let Journallist = {
    "Title": {
        "title1": "First blog letter",
        "title2": "Today was a good day",
        "title3": "Another day at onja"
    },
    "Content": {
        "content1": "This blog is about what happended last week during the election time.",
        "content2": "This blog is about what happended last week during the election time.",
        "content3": "This blog is about what happended last week during the election time."
    }
}


let continueProgram = '';
while (continueProgram === '') {

    let journalTypes = prompt('Welcome to my Onja journal\n Choose(1) for listing all the entries \n Choose(2) for adding a new entry \n Choose(3) to quite');
    if (journalTypes === '1') {
        alert(`Title: ${Journallist.Title.title1} \n Content: ${Journallist.Content.content1}`);
        alert(`Title: ${Journallist.Title.title2} \n Content: ${Journallist.Content.content2}`);
        alert(`Title: ${Journallist.Title.title3} \n Content: ${Journallist.Content.content3}`);
    } else if (journalTypes === '2') {
        var  newJournal = prompt('Enter your journal title');
        var  newJournal = prompt('Enter your journal content');  
        if (newJournal === 'title') {
            newJournal = prompt('Enter your journal title'); 
        } else if (newJournal === 'content') {
            newJournal = prompt('Enter your journal content'); 
        }
         
    }
        continueProgram = '';
}
