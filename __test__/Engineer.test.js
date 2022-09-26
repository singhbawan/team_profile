const Engineer = require('../lib/Engineer');


test('Engineer class getters functionality', () => {
    const eng = new Engineer('Bawan','20','abc@xyz.com','singhbawan');

    expect(eng.getName()).toBe('Bawan');
    expect(eng.getId()).toBe('20');
    expect(eng.getEmail()).toBe('abc@xyz.com');
    expect(eng.getGithub()).toBe('singhbawan');
    expect(eng.getRole()).toBe('Engineer');
} )