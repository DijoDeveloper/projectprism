import Navbar from './Navbar';
import SwapContainer from './SwapContaier';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { withTheme } from '../../../theme/themeProvider';

function SwapInterface(props: any) {
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