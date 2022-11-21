export const setMargin = (
  positionProp = 'bottom-left',
  horizontalMargin = 0,
  verticalMargin = 0,
) => {
  const position = positionProp.split('-');
  const vertical = position[0]?.includes('top')
    ? { 'margin-top': verticalMargin }
    : { 'margin-bottom': verticalMargin };

  const horizontal = position[1]?.includes('right')
    ? { 'margin-right': horizontalMargin }
    : { 'margin-left': horizontalMargin };
    
  return {
    horizontalMargin: horizontal,
    verticalMargin: vertical,
  };
};
