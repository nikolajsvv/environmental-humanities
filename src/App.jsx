import './styles/App.css'
// import StanfordBanner from './components/Banner/StanfordBanner'
// import Header from './components/Header/Header'
// import NavBar from './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar'
import HowDidWeGetHere from './components/Sections/HowDidWeGetHere/HowDidWeGetHere'
import WhereAreWe from './components/Sections/WhereAreWe/WhereAreWe'
import WhereDoWeGoFromHere from './components/Sections/WhereDoWeGoFromHere/WhereDoWeGoFromHere'
import HowDoWeMakeSenseOfItAll from './components/Sections/HowDoWeMakeSenseOfItAll/HowDoWeMakeSenseOfItAll'

const App = () => {
  return (
    <>
    <NavBar/>
    <WhereAreWe/>
    <HowDidWeGetHere />   
    <HowDoWeMakeSenseOfItAll/>
    <WhereDoWeGoFromHere/>
    </>
  )
}

export default App
