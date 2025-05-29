
import sum from './sum';

test('test case:1- add a and b',()=>{
    const testcase=sum(20,30);
    const output=50;
    expect(testcase).toBe(output);
});



test('test case:2- add a and b ',()=>{
    const testcase=sum(10,15);
    const output=25;
    expect(testcase).toBe(output);
});




/*
test('comment likho,callback function.toBe(output kya hoga) );
'add a and b'->yaha kuch bhi text likh sakta h.
expect -> humara test
toBe -> output kya aana chaiye.
example-> sum(20,30) se mujhe 50 output milega ,
          and toBe me bhi main 50 likha h to,
          mera test case pass ho jayega.
*/