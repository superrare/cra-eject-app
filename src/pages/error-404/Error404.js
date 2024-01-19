import React from 'react'
import AppPage from '../../components/AppPage'

export const Error404Page = () => (
  <AppPage
    className="profile-page"
    title="404 Page Not Found | SuperRare"
    hideBanner={false}
  >
    <div className="profile__error-container">
      <div className="profile__error">404</div>
      <span className="profile__error-info">Page too rare, not found</span>
    </div>
  </AppPage>
)

export default Error404Page
