import { HomeExploreConfig, SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import loadingScreen from '../loadingScreen'
import facetAliases from '../facetAliases'

const rgbIndex = 0
export const dataSql = `SELECT * FROM syn22084217 where WorkflowState = 'Selected'`
export const dataEntityId = 'syn22084217'
const entityId = dataEntityId
const sql = dataSql

export const selected: SynapseConfig = {
    name: 'QueryWrapperPlotNav',
    props: {
      rgbIndex,
      entityId,
      shouldDeepLink: true,
      sql,
      name: 'Selected Participants',
      // @ts-ignore
      facetAliases,
      tableConfiguration: {
        markdownColumns: ['dataDescriptionLocation', 'dataAccessInstructions'],
      },
      facetsToPlot: [
        'COVID19TestType',
        'Age',
        'ZipCode',
        'Sex',
        'Ethnicity',        
      ],
    },
}

export default selected
