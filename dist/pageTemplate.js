//console.log(data);
function generateHtml(data){
    
    var htmlList ="";
    
    data.forEach(element => {
        var newText = "";
        if(Object.keys(element)[3] == 'github'){   
            newText = `<a href = 'https://github.com/${Object.values(element)[3]}' target = '_blank'>`;
        }
        
        htmlList += `<div class = "data col-4"><ul class = "card data-ul"><li class= "card-title">${element.name}<br>${element.type}</li><li class = "card-text"> ID : ${element.id}</li><li class = "card-text">Email: <a href="mailto:${element.email}" >${element.email}</a></li><li class = "card-text">${Object.keys(element)[3]} : ${newText}${Object.values(element)[3]}</a></li>
        </ul></div>`
        
    });

    return `
        <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body class= "bg-light">
        <header>
        <div class="container flex-row justify-center align-center py-3">
            <h1 class="bg-tertiary py-2 px-3">My Team</h1>
        </div>
        </header>
        <main class="row container my-4">
            ${htmlList}
           

            
        </main>
        <footer class="container text-center py-3">
        
        </footer>
    </body>
    </html>
    `
}


module.exports = generateHtml;