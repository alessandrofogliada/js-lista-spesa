
// Data una lista della spesa

const list = [ 
    'latte',
    'pomodori' ,
    'insalata',
    'nutella' ,
    'pasta',
    'pesche'
];

const listContainer = document.getElementById("listaspesa");

// for (let i = 0; i < list.length; i++){
//     const item = list[i];
//     const listItems =document.createElement('li');
//     listItems.innerHTML = item;
//     listContainer.append(listItems);
// }

let i=0;
while (i < list.length){
    const item = list[i];
    const listItems =document.createElement('li');
    listItems.innerHTML = item;
    listContainer.append(listItems);
    i++;
}





// Stampare tutti gli elementi della lista della spesa, all'interno di una lista in HTML
// Va fatto SOLO CON IL FOR!!!!!!

