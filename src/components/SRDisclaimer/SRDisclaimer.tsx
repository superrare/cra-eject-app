import React from 'react'
import { DisclaimerComponent } from '@rainbow-me/rainbowkit'
import { Text, Link, Wrapper, PrimaryLink } from './styles'

export const SRDisclaimer: DisclaimerComponent = (): JSX.Element => {
  return (
    <Wrapper>
      <PrimaryLink
        target="_blank"
        rel="noreferrer"
        href="https://help.superrare.com/en/articles/3575628"
      >
        First time setting up a wallet?
      </PrimaryLink>
      <PrimaryLink
        target="_blank"
        rel="noreferrer"
        href="https://help.superrare.com/en/articles/6684376-exporting-your-keys-from-a-fortmatic-wallet"
      >
        Do you use Fortmatic?
      </PrimaryLink>
      <Text>
        By connecting your wallet you agree to the SuperRare.com{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://campaigns.superrare.com/terms"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://campaigns.superrare.com/privacy"
        >
          Privacy Notice
        </Link>
      </Text>
    </Wrapper>
  )
}
