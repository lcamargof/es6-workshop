const anonFunc = function() {

  return 'Anon';
};

function haveName() {

  return 'got a name';
}

const anonFreson = () => {

  return 'Fresoooon';
};

console.log('anon!', anonFunc());
console.log('name!', haveName());
console.log('freson!', anonFreson());