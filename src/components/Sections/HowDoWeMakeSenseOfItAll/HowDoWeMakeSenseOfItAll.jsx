import SectionTitle from "../SectionTitle"
import PoemComponent from "../../Poem/PoemComponent"
import AudioComponent from "../../Audio/AudioComponent"
import intro from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/intro.json'
import poem1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/just_in_time-acacia_j_lynch.json'
import poem2 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/where_do_we_store_our_hope-sarah_crable.json'
import audioContent1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/gratitude_and_compassion-eli_rimer.json'
import audioFile1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Audio/gratitude-eli_rimer.mp3'

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
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem2} />
          </div>
        </div>  
      </div>
    </section>
  )
}

export default HowDoWeMakeSenseOfItAll
