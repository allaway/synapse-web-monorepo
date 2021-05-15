import React, { useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  EntityHeader,
  EntityType,
  ProjectHeader,
  Reference,
} from '../../../utils/synapseTypes'
import { GetProjectsParameters } from '../../../utils/synapseTypes/GetProjectsParams'
import { SearchQuery } from '../../../utils/synapseTypes/Search'
import { EntityChildrenDetails } from './configurations/EntityChildrenDetails'
import { FavoritesDetails } from './configurations/FavoritesDetails'
import { ProjectListDetails } from './configurations/ProjectListDetails'
import { SearchDetails } from './configurations/SearchDetails'
import { DetailsView } from './view/DetailsView'

export enum EntityDetailsListDataConfigurationType {
  HEADER_LIST, // simply displays one or more entity headers. incompatible with pagination
  PARENT_CONTAINER, // retrieve the children for a given entity ID
  USER_PROJECTS, // retrieve the user's projects (using the parameters)
  USER_FAVORITES, // retrieve the user's favorites (using the parameters)
  ENTITY_SEARCH, // Search for an entity
  PROMPT, // Show no entities and instruct the user to make a selection
}

export type EntityDetailsListDataConfiguration = {
  type: EntityDetailsListDataConfigurationType
  /** Defined if type is HEADER_LIST */
  headerList?: (EntityHeader | ProjectHeader)[]
  /** Defined if type is PARENT_CONTAINER */
  parentContainerId?: string
  /** Defined if type is USER_PROJECTS */
  getProjectParams?: GetProjectsParameters
  /** Defined if type is ENTITY_SEARCH */
  query?: SearchQuery
}

/**
 * These props are set by a parent to this component, but they are not affected by the configuration.
 * We collect them into this type to simplify passing them through to the view.
 */
export type EntityDetailsListSharedProps = {
  accessToken: string
  showVersionSelection: boolean
  selectColumnType: 'checkbox' | 'none'
  visibleTypes: EntityType[]
  selected: Reference[]
  selectableTypes: EntityType[]
  toggleSelection: (entity: Reference) => void
}

export type EntityDetailsListProps = EntityDetailsListSharedProps & {
  configuration: EntityDetailsListDataConfiguration
}

export const EntityDetailsList: React.FunctionComponent<EntityDetailsListProps> = ({
  configuration,
  ...sharedProps
}) => {
  /**
   * This component simply uses the data configuration prop to determine which configuration component
   * to use. Each configuration component has its own logic to utilize different Synapse APIs.
   * The configuration components also manage view props that are more tightly-coupled with data,
   * such as pagination and sorting.
   *
   * In the future, if we wanted to reuse this in other contexts (e.g. not selecting entities), we should consider refactoring
   * to support different 'Row' components, determining the correct one determined at this level.
   */

  const [component, setComponent] = useState(<></>)

  useDeepCompareEffect(() => {
    const getComponentFromConfiguration = (
      config: EntityDetailsListDataConfiguration,
    ) => {
      switch (config.type) {
        case EntityDetailsListDataConfigurationType.PARENT_CONTAINER:
          return (
            <EntityChildrenDetails
              parentContainerId={config.parentContainerId!}
              {...sharedProps}
            />
          )

        case EntityDetailsListDataConfigurationType.HEADER_LIST:
          return (
            <DetailsView
              entities={config.headerList as (EntityHeader | ProjectHeader)[]}
              queryStatus={'success'}
              queryIsFetching={false}
              hasNextPage={false}
              {...sharedProps}
            />
          )
        case EntityDetailsListDataConfigurationType.USER_FAVORITES:
          return <FavoritesDetails {...sharedProps} />
        case EntityDetailsListDataConfigurationType.ENTITY_SEARCH:
          return <SearchDetails searchQuery={config.query!} {...sharedProps} />

        case EntityDetailsListDataConfigurationType.USER_PROJECTS:
          return (
            <ProjectListDetails
              projectsParams={config.getProjectParams!}
              {...sharedProps}
            />
          )
        case EntityDetailsListDataConfigurationType.PROMPT:
          return (
            <DetailsView
              entities={[]}
              queryStatus={'success'}
              queryIsFetching={false}
              hasNextPage={false}
              noResultsPlaceholder={
                <div>
                  Use the left panel to browse Synapse, then make a selection in
                  this panel
                </div>
              }
              {...sharedProps}
            />
          )

        default:
          console.warn(
            'The configuration type does not map to a known view type. No Details view will be rendered. Invalid configuration: ',
            config,
          )
          return <></>
      }
    }
    setComponent(getComponentFromConfiguration(configuration))
  }, [configuration, sharedProps])

  return component
}
