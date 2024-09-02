function findSimple(number) {
  let result;
  
  if (number <= 1000 && number > 1) {
    for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = 'Число ${number} - простое';
            }
      else if (number > 1000) {
        result = 'Данные неверны';
      }
      else result = 'Число ${number} - составное'
    
  }
    
  return result;
}
}
console.log(findSimple(50));