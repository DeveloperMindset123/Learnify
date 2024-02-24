import { Application } from '@nativescript/core'; 

import { BrowseViewModel } from './browse-view-model';  //import the BrowseViewModel component

export function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = new BrowseViewModel()
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView()
  sideDrawer.showDrawer()
}

