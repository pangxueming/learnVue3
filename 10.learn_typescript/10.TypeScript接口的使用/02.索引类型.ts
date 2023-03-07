// 通过interface定义索引类型
interface IndexLanguage {
  [index: number] : string
}

const fontLanguage: IndexLanguage = {
  0: 'HTML',
  1: 'CSS',
  2: 'JavaSctipt',
  3: 'Vuejs',
  // 'ss': 'vlj'
}

interface ILanguageYear {
  [name: string]: number 
}

const languageYear: ILanguageYear = {
  'C': 1972,
  'JAVA': 1995,
  'JavaScript': 1996,
  'TypeScript': 2014,
  // 77: 'jj'
}