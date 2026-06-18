import NFHeader from '@sage-bionetworks/synapse-portal-framework/components/nf/NFHeader'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'
import type { MetaArgs, MetaDescriptor } from 'react-router'
import { useNavigate } from 'react-router'
import { Skeleton } from '@mui/material'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import SynapseSankeyPlot, {
  type SankeyTier,
} from 'synapse-react-client/components/Plot/SynapseSankeyPlot'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdFromSqlStatement } from 'synapse-react-client/utils/functions/SqlFunctions'
import RssFeedCards from 'synapse-react-client/components/RssFeedCards/RssFeedCards'
import { UserCardListRotate } from 'synapse-react-client/components/UserCardList/UserCardListRotate'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  datasetsSql,
  filesSql,
  fundersSql,
  initiativesSql,
  peopleSql,
  studiesSql,
  topProjectsSql,
} from '../config/resources'
import { columnAliases } from '../config/synapseConfigs/commonProps'
import {
  organizationCardSchema,
  organizationDetailsPageLinkConfig,
} from '../config/synapseConfigs/organizations'
import {
  newStudiesSql,
  studyCardConfiguration,
  studyColumnIconConfigs,
} from '../config/synapseConfigs/studies'

export function meta(args: MetaArgs): MetaDescriptor[] {
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  const portalUrl = `https://${import.meta.env.VITE_PORTAL_KEY}.synapse.org`
  return mergeMeta(args, [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: portalDescription },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        '@id': portalUrl,
        keywords: [
          'neurofibromatosis',
          'schwannomatosis',
          'NF1',
          'NF2',
          'RASopathies',
          'rare tumor syndrome',
          'genetics',
          'tumor biology',
          'biomedical research',
          'Human Data',
          'Life Science',
        ],
        description:
          'The NF Data Portal provides a data repository for neurofibromatosis type 1 and schwannomatosis research data, aimed at improving understanding and treatment of the disorder.',
        name: 'NF Data Portal',
        provider: [
          {
            '@type': 'Organization',
            '@id': 'Sage Bionetworks',
            name: 'Sage Bionetworks',
            url: 'https://www.synapse.org/',
          },
        ],
        alternateName: 'Neurofibromatosis Data Portal',
      },
    },
  ])
}

const limit = 3

// Total row count for a table query (uses the count part of the bundle so it
// doesn't fetch rows).
function useResourceCount(sql: string): number | undefined {
  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: parseEntityIdFromSqlStatement(sql),
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: { sql },
  }
  const { data } = useGetQueryResultBundle(request)
  return data?.queryCount
}

export default function HomePage() {
  const navigate = useNavigate()
  const initiativesCount = useResourceCount(initiativesSql)
  const studiesCount = useResourceCount(studiesSql)
  const datasetsCount = useResourceCount(datasetsSql)
  const filesCount = useResourceCount(filesSql)
  const resourceCountsLoaded = [
    initiativesCount,
    studiesCount,
    datasetsCount,
    filesCount,
  ].every(count => count !== undefined)
  // Initiatives -> Studies -> Datasets -> Files, each linking to its Explore page.
  const resourceTiers: SankeyTier[] = [
    {
      label: 'Initiatives',
      value: initiativesCount ?? 0,
      onClick: () => {
        navigate('/Explore/Initiatives')
      },
    },
    {
      label: 'Studies',
      value: studiesCount ?? 0,
      onClick: () => {
        navigate('/Explore/Studies')
      },
    },
    {
      label: 'Datasets',
      value: datasetsCount ?? 0,
      onClick: () => {
        navigate('/Explore/Datasets')
      },
    },
    {
      label: 'Files',
      value: filesCount ?? 0,
      onClick: () => {
        navigate('/Explore/Files')
      },
    },
  ]
  return (
    <>
      <NFHeader />
      <SectionLayout
        title={'Resource Overview'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        {resourceCountsLoaded ? (
          <SynapseSankeyPlot tiers={resourceTiers} />
        ) : (
          <Skeleton variant="rounded" width="100%" height={300} />
        )}
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={'New Studies'}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <CardContainerLogic
            initialLimit={limit}
            columnAliases={columnAliases}
            sql={newStudiesSql}
            cardConfiguration={studyCardConfiguration}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Data Contributor Spotlight'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <UserCardListRotate
          sql={`${peopleSql} where isFeatured=true`}
          count={3}
          size={SynapseConstants.LARGE_USER_CARD}
          useQueryResultUserData={true}
          // summaryLink: 'Explore/People',
          // summaryLinkText: 'Explore All People',
        />
      </SectionLayout>
      <SectionLayout
        title={'Our Partners'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <CardContainerLogic
          columnAliases={columnAliases}
          sql={fundersSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            titleLinkConfig: organizationDetailsPageLinkConfig,
            genericCardSchema: {
              ...organizationCardSchema,
              imageFileHandleColumnName: 'cardLogo',
            },
            descriptionConfig: {
              showFullDescriptionByDefault: true,
            },
            ctaLinkConfig: {
              text: 'Visit Website',
              link: 'website',
            },
          }}
        />
      </SectionLayout>
      <div className={'home-bg-dark'}>
        <SectionLayout
          title={"What's New"}
          centerTitle
          ContainerProps={{ className: 'home-spacer' }}
        >
          <RssFeedCards
            url={'https://news.nfdataportal.org'}
            itemsToShow={3}
            allowCategories={[
              'Newsletter',
              'Hackathon',
              'Publication',
              'Funding',
            ]}
            // mailChimpListName: 'NF quarterly newsletter',
            // mailChimpUrl:'https://sagebase.us7.list-manage.com/subscribe/post?u=abcdefghi...',
            filter={{
              value: 'featured',
            }}
          />
        </SectionLayout>
      </div>
      <SectionLayout
        title={'Top 10 Studies (Last 30 Days)'}
        centerTitle
        ContainerProps={{ className: 'home-spacer' }}
      >
        <CardContainerLogic
          sql={topProjectsSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: {
              type: SynapseConstants.STUDY,
              title: 's.studyName',
              secondaryLabels: [
                'f.n_downloads',
                'f.n_unique_users',
                'f.egress_size_in_gb',
                's.studyId',
              ],
              dataTypeIconNames: 's.dataType',
            },
            columnIconOptions: studyColumnIconConfigs,
            secondaryLabelLimit: 5,
            titleLinkConfig: {
              isMarkdown: false,
              baseURL: 'Explore/Studies',
              URLColumnName: 'studyId',
              urlParamStyle: 'path-segment',
              matchColumnName: 's.studyId',
            },
          }}
          columnAliases={{
            'f.n_downloads': '# Downloads',
            'f.n_unique_users': '# Unique Users',
            'f.egress_size_in_gb': 'Download Volume (GB)',
            's.studyId': 'On Synapse',
          }}
        />
      </SectionLayout>
    </>
  )
}
