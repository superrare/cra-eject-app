import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalLoader from './components/GlobalLoader'
import RestoreScroll from './components/RestoreScroll'

const Error404 = lazy(() => import('./pages/error-404'))
const HomePage = lazy(() => import('./pages/homepage'))

const Routes = () => (
  <Suspense fallback={<GlobalLoader />}>
    <RestoreScroll />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/404" component={Error404} />
      <Route component={Error404} />
    </Switch>
  </Suspense>
)

export default Routes
