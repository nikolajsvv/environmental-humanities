import SectionTitle from "../SectionTitle"
import EssayComponent from "../../Essay/EssayComponent"
import PoemComponent from '../../Poem/PoemComponent'
import IFrameComponent from "../../iFrame/IFrameComponent"
import IFrameComponent2 from "../../iFrame/IFrameComponent2"
import intro from '../../../assets/Submissions/WhereDoWeGoFromHere/intro.json'
import backgroundImage1 from '../../../assets/Images/WhereDoWeGoFromHere/pine_tree.webp'
import backgroundImage2 from '../../../assets/Images/WhereDoWeGoFromHere/ice_caps.webp'
import backgroundImage3 from '../../../assets/Images/WhereDoWeGoFromHere/sunlight.webp'
import backgroundImage4 from '../../../assets/Images/WhereDoWeGoFromHere/oil_spill.webp'
import backgroundImage5 from '../../../assets/Images/WhereDoWeGoFromHere/philippines.webp'
import backgroundImage6 from '../../../assets/Images/WhereDoWeGoFromHere/protest.webp'
import backgroundImage7 from '../../../assets/Images/WhereDoWeGoFromHere/meditation.webp'
import backgroundImage8 from '../../../assets/Images/WhereDoWeGoFromHere/court.webp'
import backgroundImage9 from '../../../assets/Images/WhereDoWeGoFromHere/ocean_cleanup.webp'
import backgroundImage10 from '../../../assets/Images/WhereDoWeGoFromHere/corn_field.webp'
import backgroundImage11 from '../../../assets/Images/WhereDoWeGoFromHere/knitting.webp'
import backgroundImage12 from '../../../assets/Images/WhereDoWeGoFromHere/singapore.webp'
import backgroundImage13 from '../../../assets/Images/WhereDoWeGoFromHere/gardening.webp'
import backgroundImage14 from '../../../assets/Images/WhereDoWeGoFromHere/classroom.webp'
import backgroundImage15 from '../../../assets/Images/WhereDoWeGoFromHere/fisherie.webp'
import backgroundImage16 from '../../../assets/Images/WhereDoWeGoFromHere/money.webp'
import essay1 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/its_what_saved_the_world-aaryan_chirag_sukhadia.json'
import essay2 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/networks-abi_leigh_archer.json'
import essay3 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/the_environmental_law_enforcement_agency-alice_wang.json'
import essay4 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/family_values_and_food_waste-carmel_limcaoco.json'
import essay5 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/the_ecollective_manifesto-eli_rimer.json'
import essay6 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/legal_personhood_for_societal_efficiency-eric_gao.json'
import pdfDocument1 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/capitalverse-abi_leigh_archer.pdf'
import pdfDocument2 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/keeping_my_hands_busy-jessica_sydney_fairlie.pdf'
import poem1 from '../../../assets/Submissions/WhereDoWeGoFromHere/Poem/this_earth-acacia_j_lynch.json'
import iframe1 from '../../../assets/Submissions/WhereDoWeGoFromHere/iFrame/stanford_tree_journal.json'
import essay7 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/promoting_the_value_of_tikkun_olam-jason_bloom.json'
import essay8 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/changing_tides-jaya_sandhu.json'
import essay9 from '../../../assets/Submissions/WhereDoWeGoFromHere/Essay/the_rebranding.json'
import essay10 from'../../../assets/Submissions/WhereDoWeGoFromHere/Essay/inside_vs_outside-kimberly_cheung.json'
import essay11 from'../../../assets/Submissions/WhereDoWeGoFromHere/Essay/three_days_out_of_a_thousand-max_manson.json'
import iframe2 from '../../../assets/Submissions/WhereDoWeGoFromHere/iFrame/sustainability_is_multifaceted-shuvi_jha.json'
import { Helmet } from 'react-helmet';

const WhereDoWeGoFromHere = () => {
  return(
  <section id='where-do-we-go-from-here' style={{marginBottom: '100px'}} className='pt-40'>
    <Helmet>
      <title>Changing Planet</title>
      <meta name="description" content="Explore a variety of essays, poems, and interactive content focused on the future of sustainability. Discover fresh perspectives and innovative solutions from a diverse group of global authors." />
    </Helmet>
    <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={intro}/>
    </div>
    <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <IFrameComponent content={iframe1} backgroundImage={backgroundImage1}/>
        <EssayComponent content={essay1} backgroundImage={backgroundImage2}/>
        <EssayComponent content={essay2} backgroundImage={backgroundImage3}/>
        <EssayComponent content={essay3} backgroundImage={backgroundImage4}/>
        <EssayComponent content={essay4} backgroundImage={backgroundImage5}/>
        <EssayComponent content={essay5} backgroundImage={backgroundImage6}/>
        <div className="lg:row-span-2 lg:col-span-2">
          <PoemComponent content={poem1} backgroundImage={backgroundImage7}/>
        </div>
        <EssayComponent content={essay6} backgroundImage={backgroundImage8}/>
        <EssayComponent content={essay7} backgroundImage={backgroundImage9}/>
        <EssayComponent content={{ body: 'When I feel overwhelmed contemplating issues in life, especially the environment, I self soothe by keeping my hands busy. This is the sweater that’s been keeping me sane for the last several weeks, and I am very proud of how it turned out.', title: 'Keeping my hands busy', author: 'Jessica Sydney Fairlie', url: pdfDocument2}} backgroundImage={backgroundImage11}/>
        <EssayComponent content={essay8} backgroundImage={backgroundImage10} />
        <EssayComponent content={essay9} backgroundImage={backgroundImage12}/>
        <EssayComponent content={essay10} backgroundImage={backgroundImage13}/>
        <EssayComponent content={essay11} backgroundImage={backgroundImage14}/>
        <IFrameComponent2 content={iframe2} backgroundImage={backgroundImage15}/>
        <EssayComponent content={{ body: 'A true cost accounting board game to redefine capitalism for the benefit of the environment', title: 'Capitalverse', author: 'Abi Leigh Archer', url: pdfDocument1}} backgroundImage={backgroundImage16}/>
      </div>
    </div>
  </section>
  )
}
export default WhereDoWeGoFromHere