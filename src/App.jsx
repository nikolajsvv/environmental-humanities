
import './styles/App.css'
import content1 from './assets/Submissions/About/section_1.json'
import content2 from './assets/Submissions/About/section_2.json'
import content3 from './assets/Submissions/About/section_3.json'
import content4 from './assets/Submissions/About/section_4.json'
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
    <About content={content1} id="about-1"/>
    <About content={content2} id="about-2"/>
    <About content={content3} id="about-3"/>
    <About content={content4} id="about-4"/>
    <WhereAreWe />
    <HowDidWeGetHere />
    <WhereDoWeGoFromHere />
    <HowDoWeMakeSenseOfItAll />
    {/* <StanfordFooter /> */}
    </>
  )
}

export default App