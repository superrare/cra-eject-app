import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const defaultTitle = 'SuperRare | CryptoArt | NFT Art Marketplace | Digital Art'
const defaultDescription =
  'SuperRare is the digital art market on Ethereum. Each artwork is authentically created by an artist in the network, and tokenized as a collectible digital item that you can own, display and trade.'
const defaultUrl = 'https://superrare.com'
const defaultTwitterCard = 'summary_large_image'

const AppPage = props => {
  const { className, title, description, url, children } = props
  const pageTitle =
    title || 'SuperRare | CryptoArt | NFT Art Marketplace | Digital Art'

  const fullPageTitle = pageTitle

  return (
    <div id="app-page" className={`${className} app-page `}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{fullPageTitle}</title>
        <meta property="og:title" content={`${title || defaultTitle}`} />
        <meta
          property="og:description"
          content={`${description || defaultDescription}`}
        />
        <meta
          name="description"
          content={`${description || defaultDescription}`}
        />
        <meta property="og:url" content={`${url || defaultUrl}`} />
        <meta
          property="og:site_name"
          content="SuperRare | CryptoArt | NFT Art Marketplace | Digital Art"
        />
        <meta name="twitter:site" content="@superrare_co" />
        <meta name="twitter:card" content={`${defaultTwitterCard}`} />
        <meta name="twitter:title" content={`${title || defaultTitle}`} />
        <meta name="twitter:image:alt" content={`${title || defaultTitle}`} />
      </Helmet>
      <div className="">{children}</div>
    </div>
  )
}

AppPage.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  hideBanner: PropTypes.bool,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  headerColor: PropTypes.string,
  excludeFooter: PropTypes.bool,
  children: PropTypes.element
}

export default AppPage
