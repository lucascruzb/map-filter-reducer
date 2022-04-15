function mapComThis(arr, thisArg){
    return arr.map(function(item) {
       return item * this.value;
    }, thisArg)
}

function mapSemThis(arr){
    return arr.map(function(item) {
        return item * 2;
    });
}

function filtrarPares(arr){
    return arr.filter(item =>{
        return item%2 === 0;
    })
}

function filtrarImpares(arr){
    return arr.filter(item =>{
        return item%2 !== 0;
    })
}

function somaNumeros(arr){
    arr.reduce(function(prev,current){
        return prev + current;
    })
}

function calcularSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,index){
        return prev - current.preco;
    }, saldoDisponivel)
}


const maca = {value : 4,}

const laranja = { value : 3,}

const nums =[2,3,4,5,6];

const lista =[
    {
        nome : 'frango',
        preco : 20
    },
    {
        nome : 'morango',
        preco : 10
    },
    {
        nome : 'alface',
        preco : 5
    },
    {
        nome : 'mandioca',
        preco :8
    }
]

const saldoDisponivel = 100;



console.log('Map this -> maçã', mapComThis(nums,maca))
console.log('Map this -> laranja', mapComThis(nums,laranja))
console.log('Map sem this -> 2', mapSemThis(nums))
console.log('nums original',nums)
console.log('Filter Pares',filtrarPares(nums))
console.log('Filter Impares',filtrarImpares(nums))
console.log('Reducer Subtraindo',calcularSaldo(saldoDisponivel,lista))