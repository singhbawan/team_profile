const Employee = require("../lib/Employee");

test('Construct employee instance', () => {
    const emp = new Employee('Bawan');
    expect(emp.name).toBe('Bawan');
    expect(emp.id).toEqual(expect.stringContaining(emp.id.toString()));
    expect(emp.email).toEqual(expect.stringContaining(emp.email.toString()));
} )


test('getters functionality ', () => {
    const emp = new Employee('Bawan','10','abc@xyz.com' );
    expect(emp.getName()).toBe('Bawan');
    expect(emp.getId()).toBe('10');
    expect(emp.getEmail()).toBe('abc@xyz.com');
})

