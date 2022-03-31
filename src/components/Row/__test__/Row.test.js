import { markNumber } from '../Row';

describe('Row Component - markNumber function', () => {
  const rowState = [
    { markedOff: false, disabled: true },
    { markedOff: true, disabled: false },
    { markedOff: false, disabled: false },
    { markedOff: false, disabled: false },
    { markedOff: false, disabled: false },
    { markedOff: false, disabled: false },
    { markedOff: false, disabled: false },
  ];

  it('should mark off the passed number', () => {
    const newRowState = markNumber(2, rowState);

    expect(newRowState[2]).toMatchObject({ markedOff: true });
  });

  it('should do nothing if a disabled number is passed', () => {
    expect(markNumber(0, rowState)).toMatchObject(rowState);
  });

  it('should disable all non marked numbers that come before the passed number', () => {
    const newRowState = markNumber(3, rowState);

    expect(newRowState[0]).toMatchObject({ disabled: true });
    expect(newRowState[1]).toMatchObject({ disabled: false });
    expect(newRowState[2]).toMatchObject({ disabled: true });
  });

  it('should disable the last number if its not possible to mark 5 numbers before it', () => {
    const newRowState = markNumber(3, rowState);

    expect(newRowState[rowState.length - 1]).toMatchObject({ disabled: true });
  });

  it('should not mark off the last number if there is less than 5 other marked off numbers before it', () => {
    const newRowState = markNumber(rowState.length - 1, rowState);

    expect(newRowState[rowState.length - 1]).toMatchObject({
      markedOff: false,
    });
  });
});
