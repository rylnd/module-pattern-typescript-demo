import flatten from 'rylnd-archetype/lodash.flatten';

const array = [1, 2, [3, 4]];

const testFlatten = () => {
  console.log('array:', array);
  console.log('flattened:', flatten(array));
}

testFlatten();
