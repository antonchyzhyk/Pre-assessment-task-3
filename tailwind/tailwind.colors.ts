import twColors from 'tailwindcss/colors'

export const colors = {
  white: twColors.white,
  black: '#000000',
  gray: twColors.gray,
  red: twColors.red,
  green: twColors.green,
  orange: twColors.orange,

  // todo: with the following code you can use element colors
  primary: 'var(--el-color-primary)',
  'primary-900': '#C9B800',
  success: 'var(--el-color-success)',
  warning: 'var(--el-color-warning)',
  danger: 'var(--el-color-danger)',

  'brand-500': '#51585F',
  'brand-800': '#21262C',
  'brand-900': '#191D22',

  neutral: '#F4F8FB80',
  'neutral-50': '#F4F8FB80',
  'neutral-100': '#F4F8FB',
  'neutral-200': '#F0F6FA',
  'neutral-400': '#E3EEF6',

  'slate-gray-50': '#C5C7CA40',
  'slate-gray-100': '#C5C7CA33',
  'slate-gray-200': '#93989C',

  'secondary-600': '#34739D'
}
