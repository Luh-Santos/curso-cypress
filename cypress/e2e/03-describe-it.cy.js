/// <reference types="cypress" />

// .only faz com que apenas aquele teste rode, se tiver mais de 1 only, vai rodar apenas o último
it.only('A external test...', () => {

})

describe('Should group tests...', () => {

    describe('Should group more specific tests...', () => {
        // .skip pula o teste, pode ser usado no describe também
        it.skip('A specific test...', () => {

        })
        
    })

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2...', () => {

        })
        
    })

    it('A internal test...', () => {

    })
})