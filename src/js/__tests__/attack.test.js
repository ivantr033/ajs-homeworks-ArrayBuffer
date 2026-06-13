import { Magician, Daemon } from '../attack';

test('Это должно корректно рассчитать линейную атаку без эффекта "stoned"', () => {
    const mag = new Magician('Merlin');
    mag.attack = 100;
    expect(mag.getAttackForDistance(1)).toBe(100);
    expect(mag.getAttackForDistance(2)).toBe(90);
});

test('Это должно рассчитать атаку с эффектом "stoned" (Пример из легенды: ячейка 2 = 85)', () => {
    const daemon = new Daemon('Azazel');
    daemon.attack = 100;
    daemon.stoned = true;

    expect(daemon.stoned).toBe(true);
    expect(daemon.getAttackForDistance(2)).toBe(85); // 90 - Math.log2(2)*5 = 90 - 5 = 85
});

test('Атака не должна быть негативной, даже если расстояние экстремально велико', () => {
    const mag = new Magician('Merlin');
    mag.attack = 10;
    mag.stoned = true;
    expect(mag.getAttackForDistance(15)).toBe(0);
});

test('Атака должна быть 100', () => {
    const mag = new Magician('Merlin');
    expect(mag.attack).toBe(100);
});