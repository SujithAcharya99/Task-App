const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

test('should clalculate total with tip ', () => {
    const total = calculateTip(10, .3);
    expect(total).toBe(13);

    // if (total !== 13) {
    //     throw new Error('total tip must be 13. Got :' + total);
    // }
    // console.log(total)
});

test ('default value', () => {
    const total = calculateTip(10);
    expect(total).toBe(12.5)
})

test('32=>0', () =>{
    const temp = fahrenheitToCelsius(32);
    expect(temp).toBe(0);
});

test('0=>32', () => {
    const temp = celsiusToFahrenheit(0);
    expect(temp).toBe(32);
});

// test('async test demo ', (done) => {

//     setTimeout(() => {
//         expect(1).toBe(2);
//         done()
//     }, 2000)
    
// })

test('promis aysn fuction', (done) => {

    add(2, 3).then((sum) => {
        expect(sum).toBe(5);
        done();
    });
  
})

test('async await', async () => {
    const sum = await add(10, 22);
    expect(sum).toBe(32); 
})
// test('This should fail', () => {
//     throw new Error('failure');
// });