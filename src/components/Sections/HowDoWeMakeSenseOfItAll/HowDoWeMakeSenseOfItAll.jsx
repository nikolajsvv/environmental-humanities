import SectionTitle from "../SectionTitle"
import PoemComponent from "../../Poem/PoemComponent"
import EssayComponent from '../../Essay/EssayComponent'
import AudioComponent from "../../Audio/AudioComponent"
import VideoComponent from "../../Video/VideoComponent"
import intro from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/intro.json'
import poem1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/just_in_time-acacia_j_lynch.json'
import poem2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/where_do_we_store_our_hope-sarah_crable.json'
import poem3 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/what_are_these_walls_that_are_my_skin-eli_rimer.json'
import poem4 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/dread-anonymous.json'
import poem5 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/all_i_can_do-teddy_hickenlooper_jason_bloom.json'
import poem6 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/questions_for_earth-camryn_carmouche.json'
import poem7 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/tiny_spec_on_a_floating_orb_in_an_infinite_universe-camryn_carmouche.json'
import poem8 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/alaskan_summer-regina_kong.json'
import poem9 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/aspirations_of_a_singular_college_student-teddy_hickenlooper.json'
import essay1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/do_we_have_time_for_life_to_move_on-leilani_tian.json'
import essay2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/google_earth-maya_harris.json'
import essay3 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/embracing_grief_and_hope-emily_summer_elliott.json'
import essay4 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/reflections_from_trees-shawn_charles.json'
import audioContent1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/gratitude_and_compassion-eli_rimer.json'
import audioFile1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/gratitude-eli_rimer.mp3'
import audioFile2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/the_stanford_soundscape-maya_h_green.mp3'
import pdfDocument1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/the_stanford_soundscape-maya_h_green.pdf'
import pdfDocument2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/feelings_about_home-samuel-price.pdf'
import pdfDocument3 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/reflections_from_trees-shawn_charles.pdf'
import video1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Video/real_decay_in_a_synthetic_world-rellie_liu,_tianshu_luo,_grace_wanrong_tan.json'
import backgroundImage1 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/group_hug.webp'
import backgroundImage2 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/deforestation.webp'
import backgroundImage3 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/creek.webp'
import backgroundImage4 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/soil.webp'
import backgroundImage5 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/lush_stanford.webp'
import backgroundImage6 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/google_earth.webp'
import backgroundImage7 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/yosemite.webp'
import backgroundImage8 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/child_in_nature.webp'
import backgroundImage9 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/pollution.webp'
import backgroundImage10 from '../../../assets/Images/HowDoWeMakeSenseOfItAll/tree_on_fire.webp'
import backgroundImage11 from '../../../assets/Images/WhereAreWe/forest_fire.webp'

import { Helmet } from 'react-helmet';

const HowDoWeMakeSenseOfItAll = () => {
  return (
    <section id='how-do-we-make-sense-of-it-all' style={{marginBottom: '300px'}} className='pt-40'>
      <Helmet>
        <title>Changing Planet</title>
        <meta name='description' content='Explore "How Do We Make Sense of It All," a curated collection of poems, essays, audios, and videos. This diverse selection seeks to express the intricate tapestry of human experiences and our attempts to understand the world. Expect a deep dive into environmental issues, personal identity, societal interactions, and more.'/>
      </Helmet>
      <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={intro}/>
      </div>
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AudioComponent audioFile={audioFile1} content={audioContent1} backgroundImage={backgroundImage1}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem1} backgroundImage={backgroundImage2} />
          </div>
          <EssayComponent content={essay1} backgroundImage={backgroundImage3}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem2} backgroundImage={backgroundImage4}/>
          </div>
          <AudioComponent audioFile={audioFile2} content={{ body: 'What do you bring with you on a walk around campus? Phone, keys, maybe a laptop if you’re headed to CoHo or Green. And AirPods, right? Beats? Headphones of some ilk. Something to listen to. Maybe it’s Doja Cat or J. Cole in your ears. Maybe Ella Fitzgerald. Maybe it’s 21 Savage or Bach’s cello concertos or Taylor Swift. You could choose a podcast: the news, influencer garble, self-help. An audiobook. Something, anything, to accompany you down Escondido, past Arrillaga, through Meyer Green.', title: 'The Stanford Soundscape', author: 'Maya H. Green', url: pdfDocument1}} backgroundImage={backgroundImage5}/>
          <EssayComponent content={essay2} backgroundImage={backgroundImage6}/>
          <EssayComponent content={essay3} backgroundImage={backgroundImage6}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem6} backgroundImage={backgroundImage9}/>
          </div>
          <EssayComponent content={{body: "", title: 'Feelings About Home', author: 'Samuel Price', url: pdfDocument2}} backgroundImage={backgroundImage7}/>
          <VideoComponent content={video1}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem3} backgroundImage={backgroundImage8}/>
          </div>
          <EssayComponent content={{body: "", title: 'Reflections from trees', author: 'Shawn Charles', url: pdfDocument3}} backgroundImage={backgroundImage7}/>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem4} backgroundImage={backgroundImage9}/>
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem5} backgroundImage={backgroundImage10}/>
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem7}/>
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem8}/>
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem9}/>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default HowDoWeMakeSenseOfItAll
