import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import { Navbar } from "./components/layout/navbar"
import { MovieContent } from "./cases/movies/components/movie-content"


function App() {

  return (
    <>
    <Header/>
    <main>
      <Navbar></Navbar>
      <MovieContent></MovieContent>
    </main>
    <Footer />

    
    </>
  )
}

export default App