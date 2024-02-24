import { Frame, Application } from '@nativescript/core';

import { AppRootViewModel } from './app-root-view-model'

export function onLoaded(args) {
  const drawerComponent = args.object
  drawerComponent.bindingContext = new AppRootViewModel()
}

export function onNavigationItemTap(args) {  //this function is called when a navigation item (e.g. a menu item is tapped). It recieves args parameter representing the event arguments inside this function
  const component = args.object  //extracts information on the object and saves it to a variable named component
  const componentRoute = component.route  //extracts infomration of the routes from the compoennt and saves it in a variable named compoentRoute
  const componentTitle = component.title  //extracts information on the title and saves it in a variable named componentTitle
  const bindingContext = component.bindingContext  //extracts information on the bindingContext of the component and saves it in a variable named bindingContext

  bindingContext.set('selectedPage', componentTitle)  //set function accepts two arguments, title of the compoent and the current selected page

  Frame.topmost().navigate({  //defines compoent animation when navigating from one page to another
    moduleName: componentRoute,
    transition: {
      name: 'fade',
    },
  })

  const drawerComponent = Application.getRootView()
  drawerComponent.closeDrawer()
}

/**
 * Purpose of this file:
 * is to handle the behavior and interactions of the root component of a NativeScript application.
 */