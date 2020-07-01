export function hasNumber(value){
  return (/\d/.test(value))? true : false
}
  
export function hasCapitalLetter(value){
  return (/[A-Z]/.test(value))? true : false
}
  
export function hasSmallLetter(value){
  return (/[a-z]/.test(value))? true : false
}


/**************special character expression*******************/
// export function hasSpecialCharacters(value){
//   return (/[\^\$*.[\]{}()!#%&\/\\,<>':;|_~`]/.test(value))? true : false
// }
  