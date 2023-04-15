// 4 - import de components
import { createContext } from 'react'
import FirstComponent from './components/FirstComponent'

// 5 - props destructuring
import SecondComponents, {Category} from './components/SecondComponents'

// 6 - useState
import State from './components/State'

// 10 - using context
import Context from './components/Context'

// 8 - type
type textOrNull = string | null
type fixed = "Isso" | "Ou" | "Aquilo"

// 9 - context
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variables
  const name: string = 'Igor'
  const age: number = 22
  const isWorking: boolean = false

  // 2 - function
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  // 8 - type
  const myText: textOrNull = "Some text"
  let text2: textOrNull = null
  //text2 = "a"

  // error: const testandoFixed: fixed = "Testando fixed";
  const testandoFixed: fixed = "Aquilo";

  // 9 - context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponents category={Category.TS} name="Segundo" title="Primeiro post" content="Algum conteudo" commentsQty={12} tags={['js', 'ts']} />
        <SecondComponents category={Category.P} name="Segundo" title="Segundo post" content="Algum conteudo" commentsQty={2} tags={['css', 'html']} />
        <State/>
        {myText && <p>Tem um texto no myText: {myText}</p>}
        {text2 && <p>Tem um texto no text2: {text2}</p>}
        <Context/>
      </div>
    </AppContext.Provider>
  )
}

export default App
