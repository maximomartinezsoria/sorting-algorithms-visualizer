export type Steps = Step[]

export type Step = {
  array: number[],
  currentIdx: number,
  nextIdx: number
}

export type SortFunction = (array: number[]) => [Steps, number[]]