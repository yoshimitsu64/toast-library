import Toast from '../toast';
import { StyledToaster } from '../toaster/styled';
import { StyledSlot } from './styled';

function ToastSlots({ toastList }) {
  console.log(toastList);
  return (
    <>
      {toastList?.map((item, index) => {
        return (
          <StyledSlot index={index} className={item.position} key={item.id}>
            <Toast key={item.id} {...item} />
          </StyledSlot>
        );
      })}
    </>
  );
}

export default ToastSlots;
