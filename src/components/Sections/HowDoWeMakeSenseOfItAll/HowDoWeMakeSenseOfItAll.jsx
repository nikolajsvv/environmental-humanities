import SectionTitle from "../SectionTitle"
import PoemComponent from "../../Poem/PoemComponent"
import EssayComponent from '../../Essay/EssayComponent'
import AudioComponent from "../../Audio/AudioComponent"
import intro from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/intro.json'
import poem1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/just_in_time-acacia_j_lynch.json'
import poem2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/where_do_we_store_our_hope-sarah_crable.json'
import poem3 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/what_are_these_walls_that_are_my_skin-eli_rimer.json'
import poem4 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/dread-anonymous.json'
import essay1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/do_we_have_time_for_life_to_move_on-leilani_tian.json'
import essay2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Essay/google_earth-maya_harris.json'
import audioContent1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/gratitude_and_compassion-eli_rimer.json'
import audioFile1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/gratitude-eli_rimer.mp3'
import audioFile2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/the_stanford_soundscape-maya_h_green.mp3'
import pdfDocument1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/the_stanford_soundscape-maya_h_green.pdf'

const HowDoWeMakeSenseOfItAll = () => {
  return (
    <section id='how-do-we-make-sense-of-it-all' style={{marginBottom: '100px'}} className='pt-40'>
      <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={intro}/>
      </div>
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AudioComponent audioFile={audioFile1} content={audioContent1} />
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem1} />
          </div>
          <EssayComponent content={essay1} />
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem2} />
          </div>
          <AudioComponent audioFile={audioFile2} content={{ body: 'What do you bring with you on a walk around campus? Phone, keys, maybe a laptop if you’re headed to CoHo or Green. And AirPods, right? Beats? Headphones of some ilk. Something to listen to. Maybe it’s Doja Cat or J. Cole in your ears. Maybe Ella Fitzgerald. Maybe it’s 21 Savage or Bach’s cello concertos or Taylor Swift. You could choose a podcast: the news, influencer garble, self-help. An audiobook. Something, anything, to accompany you down Escondido, past Arrillaga, through Meyer Green.', title: 'The Stanford Soundscape', author: 'Maya H. Green', url: pdfDocument1}}/>
          <EssayComponent content={essay2} />
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem3} />
          </div>
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem4} />
          </div>
        </div>  
      </div>
    </section>
  )
}

export default HowDoWeMakeSenseOfItAll
