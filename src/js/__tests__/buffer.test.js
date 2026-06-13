import ArrayBufferConverter from '../arrayBufferConverter';

function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}

test('Это должно загрузить и преобразовать ArrayBuffer в корректную строку JSON', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();

    converter.load(buffer);
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(converter.toString()).toBe(expectedString);
});

test('Если буфер не загружен, функция должна вернуть пустую строку', () => {
    const converter = new ArrayBufferConverter();
    expect(converter.toString()).toBe('');
});