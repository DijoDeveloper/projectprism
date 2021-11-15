import { ChainId, DAppProvider } from '@usedapp/core'

import Navbar from './Navbar';
import SwapContainer from './SwapContaier';
import URL_CONFIG from '../../../config/url-config';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { withTheme } from '../../../theme/themeProvider';

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: URL_CONFIG.dappMainnet,
  },
}


function SwapInterface(props: any) {
  var theme = props.theme
  const { t } = useTranslation();

  const [showTokenDet, toggleshowTokenDetails] = useState(false);


  return (
    <DAppProvider config={config}>
      <Navbar toggleshowTokenDetails={toggleshowTokenDetails} />
      <SwapContainer
        showTokenDet={showTokenDet}
        toggleshowTokenDetails={toggleshowTokenDetails}
      />
    </DAppProvider>
  );
}

export default withTheme(SwapInterface);