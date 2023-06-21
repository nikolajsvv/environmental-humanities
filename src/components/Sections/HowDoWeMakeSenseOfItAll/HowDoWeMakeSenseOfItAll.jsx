import SectionTitle from "../SectionTitle"
import PoemComponent from "../../Poem/PoemComponent"
import intro from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/intro.json'
import poem1 from '../../../assets/Submissions/HowDoWeMakeSenseOfItAll/Poem/just_in_time-acacia_j_lynch.json'

const HowDoWeMakeSenseOfItAll = () => {
  return (
    <div id='how-do-we-make-sense-of-it-all' style={{marginBottom: '100px'}}>
      <div className="px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <SectionTitle sectionContent={intro}/>
      </div>
      <div className="min-h-screen px-8 mx-auto xl:px-5 max-w-screen-2xl py-3 lg:py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:row-span-2 lg:col-span-2">
            <PoemComponent content={poem1}/>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default HowDoWeMakeSenseOfItAll
