import { fromObject } from '@nativescript/core'

import { SelectedPageService } from '../shared/selected-page-service'

export function AppRootViewModel() {
  const viewModel = fromObject({
    selectedPage: '',
  })

  SelectedPageService.getInstance().selectedPage$.subscribe((selectedPage) => {
    viewModel.selectedPage = selectedPage
  })

  return viewModel
}

/*
* The purpose of app-root-view-model.js' file is to define the view model for the root component of a nativeScript application.
* Function AppRootViewModel: a new viewModel object is created using the 'fromObject' function provided by the NativeScript core library. This view model initially contains a single property named 'selectedPage' which is a set of empty string.
*/

