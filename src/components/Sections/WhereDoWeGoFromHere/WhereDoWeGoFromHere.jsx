import SectionTitle from "../SectionTitle"
import EssayComponent from "../../Essay/EssayComponent"
import PoemComponent from '../../Poem/PoemComponent'
import IFrameComponent from "../../iFrame/IFrameComponent"
import intro from '../../../assets/Submissions/WhereDoWeGoFromHere/intro.json'
import essay1 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/its_what_saved_the_world-aaryan_chirag_sukhadia.json'
import essay2 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/networks-abi_leigh_archer.json'
import essay3 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/the_environmental_law_enforcement_agency-alice_wang.json'
import essay4 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/family_values_and_food_waste-carmel_limcaoco.json'
import essay5 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/the_ecollective_manifesto-eli_rimer.json'
import essay6 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/legal_personhood_for_societal_efficiency-eric_gao.json'
import pdfDocument from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/capitalverse-abi_leigh_archer.pdf'
import poem1 from '../../../assets/Submissions/WhereDoWeGoFromHere/Poem/this_earth-acacia_j_lynch.json'
import iframe1 from '../../../assets/Submissions/WhereDoWeGoFromHere/iFrame/stanford_tree_journal.json'
const WhereDoWeGoFromHere = () => {
  return(
  <section id='where-do-we-go-from-here' style={{marginBottom: '100px'}} className='pt-40'>
    <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={intro}/>
      </div>
    <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IFrameComponent content={iframe1}/>
        <EssayComponent content={essay1}/>
        <EssayComponent content={essay2}/>
        <EssayComponent content={essay3}/>
        <EssayComponent content={essay4}/>
        <EssayComponent content={essay5}/>
        <EssayComponent content={essay6}/>
        <EssayComponent content={{ body: 'A true cost accounting board game to redefine capitalism for the benefit of the environment', title: 'Capitalverse', author: 'Abi Leigh Archer', url: pdfDocument}} />
        <div className="lg:row-span-2 lg:col-span-2">
          <PoemComponent content={poem1} />
        </div>
      </div>
    </div>
  </section>
  )
}
export default WhereDoWeGoFromHere