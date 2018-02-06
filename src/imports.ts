export type Named = (name: string) => string;

const named: Named = name => `named ${name}`;

const defaultExport = 'default export';

export {
  named,
  defaultExport as default,
}
