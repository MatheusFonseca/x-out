import { IBox } from '../../../interfaces/IBox';
import { markNumber } from '../Sheet.reducer';

describe('Sheet Component - markNumber function', () => {
  const rowState: IBox[] = [
    { state: 'disabled', value: 1 },
    { state: 'markedOff', value: 2 },
    { state: 'default', value: 3 },
    { state: 'default', value: 4 },
    { state: 'default', value: 5 },
    { state: 'default', value: 6 },
    { state: 'default', value: 7 },
  ];

  it('should mark off the passed number', () => {
    const newRowState = markNumber(2, rowState);

    expect(newRowState[2]).toMatchObject({ state: 'markedOff' });
  });

  it('should do nothing if a disabled number is passed', () => {
    expect(markNumber(0, rowState)).toMatchObject(rowState);
  });

  it('should disable all non marked numbers that come before the passed number', () => {
    const newRowState = markNumber(4, rowState);

    expect(newRowState[0]).toMatchObject({ state: 'disabled' });
    expect(newRowState[1]).toMatchObject({ state: 'markedOff' });
    expect(newRowState[2]).toMatchObject({ state: 'disabled' });
    expect(newRowState[3]).toMatchObject({ state: 'disabled' });
  });

  it('should disable the last number if its not possible to mark 5 numbers before it', () => {
    const newRowState = markNumber(3, rowState);

    expect(newRowState[rowState.length - 1]).toMatchObject({
      state: 'disabled',
    });
  });

  it('should not mark off the last number if there is less than 5 other marked off numbers before it', () => {
    const newRowState = markNumber(rowState.length - 1, rowState);

    expect(newRowState[rowState.length - 1]).toMatchObject({
      state: 'default',
    });
  });
});
