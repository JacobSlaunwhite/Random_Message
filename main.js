const phraseArr = ['You Should','You are having','your sign is','your future'];
const phraseInputArr = ['dog','good day','drink','god'];

const numberGenerator = () => {
    let generatedNumber = Math.floor(Math.random() * 4)
    return generatedNumber
};

const phraseMaker = () => {
   let arrayIndexValue1 = numberGenerator();
   let arrayIndexValue2 = numberGenerator();
return phraseArr[arrayIndexValue1] + " " + phraseInputArr[arrayIndexValue2]

}




console.log(phraseMaker());