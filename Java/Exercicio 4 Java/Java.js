const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log(`O número de categorias é ${booksByCategory.length}`)

function Contar_Livros (){
    let i=0;
    let total=0;
while(i<booksByCategory.length){
    total=total+booksByCategory[i].books.length
    i++
}
console.log(`O número total de livros é ${total}`)
}



function Contar_Autores(){
    let i=0;
    let j=0;
    let total=[];
    while(i<booksByCategory.length){
        while(j<booksByCategory[i].books.length){
            if(total.indexOf(booksByCategory[i].books[j].author) == -1){
                total.push(booksByCategory[i].books[j].author)
            }
        ++j;    
        }
    j=0;
    ++i;
    }
    console.log(`O total de autores é ${total.length}`)
}

function Mostrar_livro(author){
    let i=0;
    let j=0;
    let livros = []
    while(i<booksByCategory.length){
        while(j<booksByCategory[i].books.length){
            if(booksByCategory[i].books[j].author == author){
                livros.push(booksByCategory[i].books[j].title)
            }
        ++j;    
        }
    j=0;
    ++i;
    }
    console.log(`São livros de ${author}: ${livros.join(", ")}.`)

}

Contar_Livros()
Contar_Autores()
Mostrar_livro("Augusto Cury")

