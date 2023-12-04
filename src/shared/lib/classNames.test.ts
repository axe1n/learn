import { classNames } from './classNames';

describe('classNames', () => {
  test('with only one first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with aditional class (third param)', () => {
    const expected = 'someClass thirdClass1 thirdClass2';

    expect(classNames('someClass', {}, ['thirdClass1', 'thirdClass2'])).toBe(
      expected
    );
  });

  test('with all three params', () => {
    const expected = 'someClass thirdClass hovered';

    expect(classNames('someClass', { hovered: true }, ['thirdClass'])).toBe(
      expected
    );
  });

  test('with all three params and second param have true and false', () => {
    const expected = 'someClass thirdClass scrollable';

    expect(
      classNames('someClass', { hovered: false, scrollable: true }, [
        'thirdClass',
      ])
    ).toBe(expected);
  });

  test('with all three params and second param have true and undefined', () => {
    const expected = 'someClass thirdClass hovered';

    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, [
        'thirdClass',
      ])
    ).toBe(expected);
  });
});
