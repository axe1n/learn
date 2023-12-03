type ModsType = Record<string, boolean | string>;

export const classNames = (
  styles: string,
  mods: ModsType = {},
  additional: string[] = []
): string =>
  [
    styles,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([style, value]) => Boolean(value))
      .map(([style]) => style),
  ].join(' ');
