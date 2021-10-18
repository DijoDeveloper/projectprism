import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
import SwapContainer from './SwapContaier';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { withTheme } from '../../../theme/themeProvider';

function SwapInterface(props: any) {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  var theme  = props.theme
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <SwapContainer />
    </div>
  );
}

export default withTheme(SwapInterface);