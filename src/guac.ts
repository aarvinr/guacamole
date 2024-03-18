export function guac(strings: TemplateStringsArray, ...args: string[]): string {
  const res: string = strings.reduce((acc, str, i) => {
    return acc + args[i - 1] + str;
  });

  return res;
}
