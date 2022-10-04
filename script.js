const students = [
  {
    name: 'Davi',
    firstTest: 10,
    secondTest: 9
  },
  {
    name: 'Caio',
    firstTest: 8,
    secondTest: 6
  },
  {
    name: 'Helena',
    firstTest: 5,
    secondTest: 3
  },
  {
    name: 'Raquel',
    firstTest: 10,
    secondTest: 1
  }
]

function average(firstTest, secondTest) {
  return ((firstTest + secondTest) / 2).toFixed(1)
}

for (let student of students) {
  let result = average(student.firstTest, student.secondTest)
  if (result >= 7) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${result}. \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`
    )
  } else {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${result}. \nNão foi dessa vez, ${student.name}! Tente novamente!`
    )
  }
}
