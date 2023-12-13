import { buildSvgLoader } from 'config/build/loaders';
import { RuleSetRule } from 'webpack';

export const storybookSvgLoader = (
  rules: (false | '' | 0 | RuleSetRule | '...')[]
) => {
  const fileLoaderRule = rules.find(
    (rule): rule is RuleSetRule =>
      rule &&
      typeof rule === 'object' &&
      'test' in rule &&
      rule.test instanceof RegExp &&
      rule.test.test('.svg')
  );

  if (fileLoaderRule) {
    fileLoaderRule.exclude = /\.svg$/;
  }

  return buildSvgLoader();
};
