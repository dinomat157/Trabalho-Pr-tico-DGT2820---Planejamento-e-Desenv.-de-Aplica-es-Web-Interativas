//troca dois valores no vetor
const swap = (vet, i, j) => {
  const temp = vet[i]
  vet[i] = vet[j]
  vet[j] = temp
}

//embaralha o vetor algumas vezes
const shuffle = (vet, qtdTrocas) => {
  for (let i = 0; i < qtdTrocas; i++) {
    const a = Math.floor(Math.random() * vet.length)
    const b = Math.floor(Math.random() * vet.length)
    swap(vet, a, b)
  }
}

//ordena usando bubble sort (simples e lento)
const bubble_sort = (vet) => {
  const n = vet.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vet[j] > vet[j + 1]) {
        swap(vet, j, j + 1)
      }
    }
  }
}

//ordena usando selection sort
const selection_sort = (vet) => {
  const n = vet.length
  for (let i = 0; i < n - 1; i++) {
    let menor = i
    for (let j = i + 1; j < n; j++) {
      if (vet[j] < vet[menor]) menor = j
    }
    swap(vet, menor, i)
  }
}

//parte o vetor pro quick sort
const particiona = (vet, ini, fim, pivot) => {
  const valPivot = vet[pivot]
  swap(vet, pivot, fim)

  let i = ini
  for (let j = ini; j < fim; j++) {
    if (vet[j] <= valPivot) {
      swap(vet, i, j)
      i++
    }
  }

  swap(vet, i, fim)
  return i
}

//quick sort recursivo
const quick_sort = (vet, ini, fim) => {
  if (ini < fim) {
    const pivot = Math.floor((ini + fim) / 2)
    const pos = particiona(vet, ini, fim, pivot)

    quick_sort(vet, ini, pos - 1)
    quick_sort(vet, pos + 1, fim)
  }
}
