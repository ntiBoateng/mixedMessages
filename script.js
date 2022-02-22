function generateRandomNumber(num) {
 
    return Math.floor(Math.random() * num)
  }
  
  
  const collectiveAdvice = {
    programLanguage: ['javascript', 'ruby', 'java', 'kotlin', 'php', 'go', 'c#'],
    level: ['Newbie', 'Intermidiate', 'Senior', 'Master', 'Gran Master'],
    tip: ['improve and improve', 'you should practice more', 'relax and learn']
  }
  
  
  let nextStep = []
  
 
  for(let item in collectiveAdvice) {
    let optionIdx = generateRandomNumber(collectiveAdvice[item].length)
  
    
    switch(item) {
      case 'programLanguage':
        nextStep.push(`Your skill path right now is a "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'level':
        nextStep.push(`Your next target should be: "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'tip':
        nextStep.push(`You should: "${collectiveAdvice[item][optionIdx]}".`)
        break
      default:
        nextStep.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
  
    const formatted = nextStep.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(nextStep);