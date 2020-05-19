import Theme from './reducer';
import * as ThemeActions from './actions';

describe('Theme reducer', () => {
  const data = {
    theme: 'grass',
    color: 'green',
  };

  it('Should be able to define theme color', () => {
    const state = Theme('', ThemeActions.defineTheme(data.theme));
    expect(state).toStrictEqual(data);
  });

  it('Should be grass theme if none theme is passed', () => {
    const state = Theme();
    expect(state).toStrictEqual(data);
  });

  it('Should be red color if fire theme is passed', () => {
    data.theme = 'fire';
    data.color = 'red';
    const state = Theme('', ThemeActions.defineTheme(data.theme));
    expect(state).toStrictEqual(data);
  });

  it('Should be grass theme if any string is passed', () => {
    const state = Theme('', ThemeActions.defineTheme('auhediuahediuae'));
    expect(state).toStrictEqual(data);
  });
});
