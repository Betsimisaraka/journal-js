
const journallist = [
    { title: "First blog letter",
      content: "This blog is about what happended last week during the election time."}, 
      
    { title: "Today was a good day",
      content: "This blog is about what happended last week during the election time."},
               
    { title: "Another day at onja",
      content: "This blog is about what happended last week during the election time."}
]

let choice = prompt('Welcome to my Onja journal\n Choose(1) for listing all the entries \n Choose(2) for adding a new entry \n Choose(3) to quite \n choose(4) to delete');
    while (choice !== '3') {
        for(let i = 0; i < journallist.length; i++) {
            if (choice === '1') {
                alert('Title:' +' '+ journallist[i].title + '\n'+ 'Content:' + ' ' + journallist[i].content);
            } else if (choice === '2') {
                let newEntrytitle = prompt('Enter your journal title');
                let newEntrycontent = prompt('Enter your journal content');
                let newEntry = {title: newEntrytitle, content: newEntrycontent};
                newEntry.newEntrytitle = newEntrytitle;
                newEntry.newEntrycontent = newEntrycontent;
                journallist.push(newEntry);
                for(let i = 0; i < journallist.length; i++) {
                    alert('Title:' +' '+ journallist[i].title + '\n'+ 'Content:' + ' ' + journallist[i].content);
                }
          
            } else if (choice === '3') {
              alert('thank you');
            } else if (choice === '4') {
                let deleteEntrytitle = prompt('Enter your journal title');
                let deleteEntrycontent = prompt('Enter your journal content');
                let deleteEntry = {title: deleteEntrytitle, content: deleteEntrycontent};
                deleteEntry.deleteEntrytitle = deleteEntrytitle;
                deleteEntry.deleteEntrycontent = deleteEntrycontent;
                journallist.pop(deleteEntry);
                for(let i = 0; i < journallist.length; i++) {
                    alert('Title:' +' '+ journallist[i].title + '\n'+ 'Content:' + ' ' + journallist[i].content);
                }
            }
        }
        choice = '';
    }
/*
        let newTitle = prompt('Enter your new title');
        let newContent = prompt('Enter your new content');
        let newEntry = {title: newTitle, content: newContent}
        newEntry.newTitle = newTitle;
        newEntry.newContent = newContent;
        journalEntries.push(newEntry);
        for (let i = 0; i < journalEntries.length; i++) {
            alert(`Title: ${journalEntries[i].title} \n Content: ${journalEntries[i].content}`);
        }
        */