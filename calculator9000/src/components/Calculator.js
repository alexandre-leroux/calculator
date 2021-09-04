
import '../App.css';
import '../style/AmazingNumberButton.css';
import '../style/GreatOperationButton.css';
import '../style/BeautifullScreen.css';
import '../style/MagnificientEqualButton.css';
import TheTitle from './TheTitle'
import BeautifullScreen from './BeautifullScreen'
import AmazingNumberButton from './AmazingNumberButton'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'

function Calculator() {
  return (
    <div>
        <TheTitle />
        <BeautifullScreen />
        <AmazingNumberButton />
        <GreatOperationButton />
        <MagnificientEqualButton />
    </div>
  );
}



export default Calculator


