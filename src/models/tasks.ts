export type Task = {
  id: number
  description: string
  incoming_example: unknown
  outgoing_example: unknown
  tags: Tag[]
  category: CategoryType
  additional_info?: string[]
  score: number
  title: string
}

export enum Tag {
  STRINGS = 'strings',
  BACKEND = 'backend',
  FUNDAMENTALS = 'fundamentals',
  ARRAYS = 'arrays'
}

export enum CategoryType {
  ALGORITHMS = 'Algorithms',
  ARRAYS = 'Arrays',
  RECURSION = 'Recursion',
  DATA_SCIENCE = 'Data Science',
  STRINGS = 'Strings'
}

export type Score = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
