import SectionTitle from "../SectionTitle"
import EssayComponent from "../../Essay/EssayComponent"
import ImageComponent from "../../Image/ImageComponent"
import PoemComponent from "../../Poem/PoemComponent"
import introduction from '../../../assets/Submissions/WhereAreWe/intro.json'
import imageSubmissionContent1 from '../../../assets/Submissions/WhereAreWe/Images/current_state-jj_jean_noland_murphy.json'
import imageSubmission1 from '../../../assets/Submissions/WhereAreWe/Images/current_state-jj_jean_noland_murphy.webp'
import essay1 from '../../../assets/Submissions/WhereAreWe/Essay/lily-alice_wang.json'
import essay2 from '../../../assets/Submissions/WhereAreWe/Essay/where_the_wild_things_are_and_where_they_arent-jason_bloom.json'
import essay3 from '../../../assets/Submissions/WhereAreWe/Essay/a_reflection on_natures_splendor-george_robert_dimopoulos.json'
import essay4 from '../../../assets/Submissions/WhereAreWe/Essay/grappling_with_hope-will_beasley.json'
import essay5 from '../../../assets/Submissions/WhereAreWe/Essay/how_much_longer_do_we_have_to_keep_screaming-sabrina_ahmed.json'
import poem1 from '../../../assets/Submissions/WhereAreWe/Poem/the_linden-divya_mehrish.json'
import poem2 from '../../../assets/Submissions/WhereAreWe/Poem/a_city_underwater-brianna_gamble.json'
import poem3 from '../../../assets/Submissions/WhereAreWe/Poem/burning-patricia_gerli.json'
import poem4 from '../../../assets/Submissions/WhereAreWe/Poem/i_remember_how_i_hid-.json'
import poem5 from '../../../assets/Submissions/WhereAreWe/Poem/musings_on_a_crisis_across_worlds-eric_bear.json'
import poem6 from '../../../assets/Submissions/WhereAreWe/Poem/tenebrae-richzeska_fandino.json'
import poem7 from '../../../assets/Submissions/WhereAreWe/Poem/helpless…_but_hopeful-ronan_esperanza.json'
import image1 from '../../../assets/Images/WhereAreWe/water_lily.webp'
import image2 from '../../../assets/Images/WhereAreWe/surfing.webp'
import image3 from '../../../assets/Images/WhereAreWe/fishing.webp'
import image4 from '../../../assets/Images/WhereAreWe/sprouting_plant.webp'
import image6 from '../../../assets/Images/WhereAreWe/trees.webp'
import image7 from '../../../assets/Images/WhereAreWe/charleston.webp'
import image8 from '../../../assets/Images/WhereAreWe/fall_leaves.webp'
import image9 from '../../../assets/Images/WhereAreWe/jakarta.webp'
import { Helmet } from 'react-helmet';


const WhereAreWe = () => {
  return(
    <section id='where-are-we' style={{marginBottom: '100px'}} className='pt-40'>
      <Helmet>
        <title>Changing Planet</title>
        <meta name='description' content='Explore the "Where Are We" section of our website, where we offer a unique blend of images, essays, and poems exploring our shared existence. Dive into thoughtful essays, awe-inspiring imagery, and evocative poems that ponder the question, "Where are we?"'/>
      </Helmet>
      <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={introduction}/>
      </div>
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 lg:row-span-2">
              <ImageComponent backgroundImage={imageSubmission1} content={imageSubmissionContent1} />
            </div>
            <EssayComponent content={essay1} backgroundImage={image1}/>
            <EssayComponent content={essay2} backgroundImage={image2} />
            <EssayComponent content={essay3} backgroundImage={image3} />
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem1} backgroundImage={image4}/>
            </div>
            <EssayComponent content={essay4} backgroundImage={image6} />
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem2} backgroundImage={image7}/>
            </div>
            <EssayComponent content={essay5} backgroundImage={image6} />
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem3} backgroundImage={image8}/>
            </div>
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem4} backgroundImage={image9}/>
            </div>
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem5} backgroundImage={image9}/>
            </div>
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem6} backgroundImage={image9}/>
            </div>
            <div className="lg:row-span-2 lg:col-span-2">
              <PoemComponent  content={poem7} backgroundImage={image9}/>
            </div>
          </div>  
      </div>
    </section>
  )
}

export default WhereAreWe
