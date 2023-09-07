
import './styles/App.css'
import NavBar from './components/NavBar/NavBar'
import About from './components/Sections/About/About'
import Launch from './components/Sections/Launch/Launch'
import HowDidWeGetHere from './components/Sections/HowDidWeGetHere/HowDidWeGetHere'
import WhereAreWe from './components/Sections/WhereAreWe/WhereAreWe'
import WhereDoWeGoFromHere from './components/Sections/WhereDoWeGoFromHere/WhereDoWeGoFromHere'
import HowDoWeMakeSenseOfItAll from './components/Sections/HowDoWeMakeSenseOfItAll/HowDoWeMakeSenseOfItAll'
// import StanfordFooter from './components/Footer/StanfordFooter'

const App = () => {

  return (
    <>
    <NavBar/>
    <Launch/>
    <About/>
    <WhereAreWe />
    <HowDidWeGetHere />
    <WhereDoWeGoFromHere />
    <HowDoWeMakeSenseOfItAll />
    {/* <StanfordFooter /> */}
    </>
  )
}

export default App