import { fromObject } from '@nativescript/core'

import { SelectedPageService } from '../shared/selected-page-service'

export function BrowseViewModel() {
  SelectedPageService.getInstance().updateSelectedPage('Browse')

  const viewModel = fromObject({
    /* Add your view model properties here */
  })

  return viewModel  //returns the newly created view model
}

/**
 * Define the view model for the "Browser" page in a NativeScript application. 
 * Initialize and provide a view model object specifically tailored for the "Browse" page of the NativeScript application.
 * It sets the initial state and behavior for the page's view model.
 * 
 */