import { renderHook, act } from '@testing-library/react-hooks';
import { useThemeRD, ThemeRDProvider } from '@contexts/theme';

// jest.setTimeout(30000);

describe('ThemeRD hook', () => {
  it('shoud be able change theme', () => {
    const { result } = renderHook(() => useThemeRD(), {
      wrapper: ThemeRDProvider,
    });

    act(() => {
      result.current.selectTheme();
    });

    expect(result.current.theme.title).toEqual('blackfriday');
  });
});
