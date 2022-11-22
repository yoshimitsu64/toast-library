import PropTypes from 'prop-types';

import Toast from '@components/toast/index.jsx';
import { setPosition } from '@helpers/setPosition';
import { StyledSloatsContainer } from './styled';

function ToastSlots({ slotsList }) {
  const containerPosition = setPosition(slotsList[0].position);
  const margin = slotsList[slotsList.length - 1].verticalMargin;

  return (
    <StyledSloatsContainer data-test="slot" position={containerPosition} margin={margin}>
      {slotsList.map((item) => {
        return <Toast key={item.id} {...item} />;
      })}
    </StyledSloatsContainer>
  );
}

ToastSlots.propTypes = {
  slotsList: PropTypes.array,
};

export default ToastSlots;
