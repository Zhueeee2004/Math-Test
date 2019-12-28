import { Component, OnInit } from '@angular/core'
import { NumberSymbol } from '@angular/common'
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    numbers = [6, 7, 8]
    numbersToString = ''
    title = 'math-test'
    sumStrings = ''
    example = ''
    completeInsultGenerator = ''
    exampleFunction() {
        this.example = 'My example.'
    }

    insultGenerator() {
        let randomBodyParts = ['Face', 'Nose', 'Hair']
        let randomAdjectives = ['Smelly', 'Boring', 'Stupid']
        let randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat']

        let bodyPart = randomBodyParts[Math.floor(Math.random() * 3)]
        let adjective = randomAdjectives[Math.floor(Math.random() * 3)]
        let word = randomWords[Math.floor(Math.random() * 5)]
        this.completeInsultGenerator =
            'Your ' + bodyPart + ' is like a ' + adjective + ' ' + word + '.'
    }

    ngOnInit() {
        this.numbers = this.getNumbers()
        this.numbersToString = this.convertNumbersToNumbersString()
        this.sumStrings = this.sumNumbers()
        this.exampleFunction()
        this.insultGenerator()
    }

    getNumbers() {
        let numberArray = []
        for (let i = 0; i < 10; i++) {
            // let random = Math.random()
            // numberArray.push(random)
            // (0-0.99)*10 =>0-9.9

            numberArray.push(Math.floor(Math.random() * 100))
        }
        return numberArray
    }

    convertNumbersToNumbersString() {
        // [1, 23, 44] 1+23+44
        let convertToString = this.numbers.join(' + ')
        return convertToString
    }

    //sum all string into answer

    sumNumbers() {
        //console.log(this.numbersToString)
        let splitOff = this.numbersToString.split(' + ')
        //console.log(splitOff)
        let total = 0
        for (let a = 0; a < 10; a++) {
            total = Number(splitOff[a]) + total
            //console.log(total)
        }
        //more elegent way
        // splitOff.forEach((element)=>{
        //   total = Number(element) + total
        // })
        console.log('Overall total:', total)

        return total.toString()
    }
    // checkUserInput(userInput: string) {
    //     console.log(userInput)
    //     if (this.sumStrings === Number(userInput))
    //         console.log('thats is correct')
    //     else console.log('try again')
}
//}
