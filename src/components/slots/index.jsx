import Toast from '@components/toast';
import { getMargin } from '../../helpers/toast';
import { StyledSloatsContainer } from './styled';

function ToastSlots({ slotsList }) {
  const containerPosition = slotsList[0].position;

  return (
    <StyledSloatsContainer
      className={containerPosition}
      margin={slotsList[slotsList.length - 1].verticalMargin}
    >
      {slotsList?.map((item) => {
        return <Toast key={item.id} {...item} />;
      })}
    </StyledSloatsContainer>
  );
}

export default ToastSlots;