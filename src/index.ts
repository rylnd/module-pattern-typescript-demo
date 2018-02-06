import defaultExport, { named } from './imports';

const testImports = () => {
  console.log('default:', defaultExport);
  console.log('named:', named('test'));
}

testImports();
