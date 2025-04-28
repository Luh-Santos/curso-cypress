it('sem testes ainda', () => {})
/*
const getSomething = () => {
    // timeout usado para simular uma consulta no banco ou outra ação que demoraria
    setTimeout(() => {
        console.log('respondendo...');
        return 11;
    }, 1000)
}

const system = () => {
    console.log('init');
    const something = getSomething();
    console.log(`Something is ${something}`);
    console.log('end');
}
    // Vai retornar:
    // init
    // Something is undefined
    // end
    // respondendo...
*/

/*
// Callback é a maneira antiga de se fazer, pois não é bom aninhar callbacks quando se precisa de muitas coisas assíncronas
const getSomething = callback => {
    setTimeout(() => {
        callback(12);
    }, 1000)
}

const system = () => {
    console.log('init');
    getSomething(some => { 
        console.log(`Something is ${some}`);
        console.log('end');
    })
}
*/

const getSomething = () => {
    // Resolve retorna quando a promise finalizar e for resolvida, reject vai retornar quando der algo de errado
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)    
    })
}

const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Something is ${some}`)
        console.log('end')
    }) 
}

system();