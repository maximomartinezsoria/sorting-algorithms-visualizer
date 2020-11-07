export type Steps = Step[]

export type Step = {
  array: number[],
  currentIdx: number,
  nextIdx?: number,
  prevIdx?: number
}

export type SortFunction = (array: number[]) => [Steps, number[]]