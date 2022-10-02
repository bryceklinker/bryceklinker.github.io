import { combineClasses } from './combine-classes';

test('when one class then returns single class', () => {
    expect(combineClasses('one')).toEqual('one');
});

test('when multiple classes then returns each class', () => {
    expect(combineClasses('t', 'a', 'b')).toEqual('t a b');
});

test('when class is undefined then removes undefined', () => {
    expect(combineClasses('one', undefined, 'three')).toEqual('one three');
});
