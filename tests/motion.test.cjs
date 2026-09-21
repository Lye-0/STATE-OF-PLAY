const test = require('node:test');
const assert = require('node:assert/strict');
const { OBJECTS, Spring, clamp, isDrag, dragValue, orbitPosition } = require('../js/motion.js');
test('exactly ten unique material definitions; five initially on', () => {
  assert.equal(OBJECTS.length, 10);
  assert.equal(new Set(OBJECTS.map(o => o.id)).size, 10);
  assert.equal(OBJECTS.filter(o => o.initial).length, 5);
});
test('all ten springs settle at both ends at 30, 60 and 120 Hz', () => {
  for (const config of OBJECTS) for (const hz of [30, 60, 120]) {
    const spring = new Spring(0, config);
    for (const target of [1, 0]) {
      spring.setTarget(target);
      for (let i = 0; i < hz * 4; i++) spring.advance(1 / hz);
      assert.equal(spring.value, target, `${config.id} @ ${hz}Hz → ${target}`);
      assert.equal(spring.velocity, 0);
    }
  }
});
test('rapid reversing stays finite and converges to the latest state', () => {
  for (const config of OBJECTS) {
    const spring = new Spring(0, config);
    for (let i = 0; i < 200; i++) { spring.setTarget(i % 2); spring.advance(1 / 120); assert.ok(Number.isFinite(spring.value)); assert.ok(Math.abs(spring.value) < 2); }
    spring.setTarget(1);
    for (let i = 0; i < 600; i++) spring.advance(1 / 120);
    assert.equal(spring.value, 1);
  }
});
test('a suspended tab or invalid frame duration cannot explode the spring', () => {
  const spring = new Spring(0); spring.setTarget(1);
  for (const dt of [NaN, Infinity, -1, 0, 5000]) spring.advance(dt);
  assert.ok(Number.isFinite(spring.value)); assert.ok(spring.value <= 1.2);
});
test('reduced-motion snap is immediate', () => {
  const spring = new Spring(0); spring.setTarget(1); spring.advance(.01); spring.snap(0);
  assert.equal(spring.value, 0); assert.equal(spring.velocity, 0); assert.equal(spring.settled, true);
});
test('drag distinguishes horizontal input from taps and vertical scroll', () => {
  assert.equal(isDrag(6, 0), false); assert.equal(isDrag(15, 30), false);
  assert.equal(isDrag(-22, 4), true); assert.equal(isDrag(20, 3), true);
});
test('drag accounts for responsive visual scale and clamps the endpoint', () => {
  assert.equal(dragValue(0, 64, 128, 1), .5);
  assert.equal(dragValue(0, 32, 128, .5), .5);
  assert.equal(dragValue(0, 1000, 128), 1);
  assert.equal(dragValue(1, -1000, 128), 0);
  assert.equal(dragValue(.5, 10, 0), .5);
});
test('orbit endpoints and apex follow the actual elliptical rail', () => {
  assert.deepEqual(orbitPosition(0), { x: 44, y: 73 });
  assert.equal(orbitPosition(1).x, 236);
  assert.ok(Math.abs(orbitPosition(1).y - 73) < 1e-10);
  assert.equal(orbitPosition(.5).x, 140);
  assert.equal(orbitPosition(.5).y, 37);
});
test('clamp limits state bounds', () => { assert.equal(clamp(-2), 0); assert.equal(clamp(2), 1); assert.equal(clamp(.4), .4); });
