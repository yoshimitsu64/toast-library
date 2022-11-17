import Toast from '@components/toast/index.jsx';
import { StyledSloatsContainer } from './styled';

function ToastSlots({ slotsList }) {
  const containerPosition = slotsList[0].position;

  return (
    <StyledSloatsContainer
      data-test="slot"
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
