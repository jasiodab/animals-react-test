import animalsData from './data/animals.json'
import type { Animal } from './types/Animal'
import './App.css'

const animals: Animal[] = animalsData

function App() {
  return (
    <main>
      <h1>Animals</h1>

      <div className="animals">
        {animals.map((animal) => (
          <article className="animal-card" key={animal.name}>
            <h2>{animal.name}</h2>

            <p>
              <strong>Continent:</strong> {animal.continent}
            </p>

            <p>
              <strong>Average speed:</strong> {animal.averageSpeed} km/h
            </p>

            <p>
              <strong>Average weight:</strong> {animal.weight} kg
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}

export default App