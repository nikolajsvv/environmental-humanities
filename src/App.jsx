
import './styles/App.css'
import NavBar from './components/NavBar/NavBar'
import Launch from './components/Sections/Launch/Launch'
import StanfordFooter from './components/Footer/StanfordFooter'
import HowDidWeGetHere from './components/Sections/HowDidWeGetHere/HowDidWeGetHere'
import WhereAreWe from './components/Sections/WhereAreWe/WhereAreWe'
import WhereDoWeGoFromHere from './components/Sections/WhereDoWeGoFromHere/WhereDoWeGoFromHere'
import HowDoWeMakeSenseOfItAll from './components/Sections/HowDoWeMakeSenseOfItAll/HowDoWeMakeSenseOfItAll'

const App = () => {

  return (
    <>
    <NavBar/>
    <Launch/>
    <WhereAreWe />
    <HowDidWeGetHere />
    <WhereDoWeGoFromHere />
    <HowDoWeMakeSenseOfItAll />
    <StanfordFooter />
    </>
  )
}

export default App