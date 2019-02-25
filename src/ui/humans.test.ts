import { Humans } from './humans';
import { Roles } from './human';

test('scaleOut', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(3);
  expect(humans.length).toBe(3);
}
);

test('scaleCut', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(12);
  humans.scale(1);
  expect(humans.length).toBe(1);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('scaleCut2', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(5);
  humans.scale(3);
  expect(humans.length).toBe(3);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('scaleCut3', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(3);
  humans.scale(5);
  expect(humans.length).toBe(5);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('setToZero', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(3);
  humans.scale(0);
  expect(humans.length).toBe(0);

  const uniq = new Set<string>(humans.map(i => i.name));
  expect(uniq.size).toBe(humans.length);
}
);

test('kill down', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(5);
  const fns = humans.map((human, idx) => {
    const orig = human.kill;
    const fn = jest.fn(() => orig.apply(human));
    human.kill = ((i) => () => fn(i))(idx);
    return fn;
  });
  expect(fns.length).toBe(5);
  humans.scale(2);

  expect(fns.map(fn => fn.mock.calls)).toEqual([[], [], [[2]], [[3]], [[4]]]);
});

test('kill zero', () => {
  const humans = new Humans({ roles: [Roles.Attendee] });
  humans.scale(5);
  const fns = humans.map((human, idx) => {
    const orig = human.kill;
    const fn = jest.fn(() => orig.apply(human));
    human.kill = ((i) => () => fn(i))(idx);
    return fn;
  });
  expect(fns.length).toBe(5);
  humans.scale(0);

  expect(fns.map(fn => fn.mock.calls)).toEqual([[[0]], [[1]], [[2]], [[3]], [[4]]]);
});
