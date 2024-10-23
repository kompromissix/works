const Daysfunction = require('./Test/Testi');

test('Ошибка', () => {
    expect(Daysfunction(1)).toBe('Понедельник');
    expect(Daysfunction(2)).toBe('Вторник');
    expect(Daysfunction(3)).toBe('Среда');
    expect(Daysfunction(4)).toBe('Четверг');
    expect(Daysfunction(5)).toBe('Пятница');
    expect(Daysfunction(6)).toBe('Суббота');
    expect(Daysfunction(7)).toBe('Воскресенье');
    expect(Daysfunction).toThrow();
    expect(Daysfunction).toThrow(Error);
    expect(Daysfunction).toThrow('some error');
    expect(Daysfunction).toThrow(/some/);
});
