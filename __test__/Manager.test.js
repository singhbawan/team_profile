const Manager = require('../lib/Manager');


test('Manager class getters functionality', () => {
    const manager = new Manager('Bawan','30','abc@xyz.com','647111');

    expect(manager.getName()).toBe('Bawan');
    expect(manager.getId()).toBe('30');
    expect(manager.getEmail()).toBe('abc@xyz.com');
    expect(manager.getOfficeNumber()).toBe('647111');
    expect(manager.getRole()).toBe('Manager');
} )