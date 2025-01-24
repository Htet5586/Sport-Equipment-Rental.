const { updateOutput, resetFields, pdateOutput, esetFields, nnn } = require("./app");

// Set up a simulated DOM environment before each test
beforeEach(() => {
  document.body.innerHTML = `
    <input type="text" id="inputBox" />
    <input type="text" id="utputBox" />
    <input type="text" id="nputBox" />
    <input type="text" id="tputBox" />
    <input type="text" id="discount" />
  `;
});

test('should update the output when input is Ball', () => {
  document.getElementById('inputBox').value = 'Ball';
  updateOutput();
  expect(document.getElementById('utputBox').value).toBe('10$');
});
