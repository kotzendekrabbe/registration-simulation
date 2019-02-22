import { Humans } from './humans';

test('scaleOut', () => {
  const humans = new Humans({});
  humans.scale(3);
  expect(humans.length).toBe(3);
}
);

test('scaleCut', () => {
  const humans = new Humans({});
  humans.scale(12);
  humans.scale(1);
  expect(humans.length).toBe(1);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('scaleCut2', () => {
  const humans = new Humans({});
  humans.scale(5);
  humans.scale(3);
  expect(humans.length).toBe(3);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('scaleCut3', () => {
  const humans = new Humans({});
  humans.scale(3);
  humans.scale(5);
  expect(humans.length).toBe(5);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('setToZero', () => {
  const humans = new Humans({});
  humans.scale(3);
  humans.scale(0);
  expect(humans.length).toBe(0);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);
