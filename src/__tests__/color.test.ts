import { notionColorToMantineColor } from '@/utils/color';

describe('@/utils/color3', () => {
  test('changing', () => {
    expect(notionColorToMantineColor('default')).toBe('dark');
    expect(notionColorToMantineColor('gray')).toBe('gray');
    expect(notionColorToMantineColor('brown')).toBe('grape');
    expect(notionColorToMantineColor('orange')).toBe('orange');
    expect(notionColorToMantineColor('yellow')).toBe('yellow');
    expect(notionColorToMantineColor('green')).toBe('green');
    expect(notionColorToMantineColor('blue')).toBe('blue');
    expect(notionColorToMantineColor('purple')).toBe('violet');
    expect(notionColorToMantineColor('pink')).toBe('pink');
    expect(notionColorToMantineColor('red')).toBe('red');
  });
});
