const Intern = require('../lib/Intern');

test('Intern class getters functionality', () => {
    const intern = new Intern('Bawan','20','abc@xyz.com','UofT');

    expect(intern.getName()).toBe('Bawan');
    expect(intern.getId()).toBe('20');
    expect(intern.getEmail()).toBe('abc@xyz.com');
    expect(intern.getSchool()).toBe('UofT');
    expect(intern.getRole()).toBe('Intern');
} )