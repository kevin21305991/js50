// Day 4. Easy 手寫 difference
// 請實作一個名為 difference 的函式，該函式接收兩個陣列作為參數。函式的功能是回傳只在第一個陣列中存在、在第二個陣列中不存在的元素，並且避免對重複值進行多餘的操作。

function difference(array, values) {}

difference([], []); // []
difference([1, 1, 2, 3], [2, 3]); // [1, 1]
difference([1, 2, 3], [1, 2, 3, 4]); // []
difference([4, 3, 2, 1], [1, 2, 3]); // [4]
