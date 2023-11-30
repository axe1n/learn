type ModsType = Record<string, boolean | string>;

export const classNames = (
  styles: string,
  mods: ModsType,
  additional: string[]
): string =>
  [
    styles,
    ...additional,
    ...Object.entries(mods)
      .filter(([style, value]) => Boolean(value))
      .map(([style, value]) => style),
  ].join(' ');