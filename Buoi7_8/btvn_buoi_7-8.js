// Khởi tạo mảng và các chức năng
let arr = [];

// Hàm nhập số nguyên vào mảng
function addNumber(number) {
    arr.push(parseInt(number));
}

// 1. Tính tổng các số dương trong mảng
function sumPositiveNumbers() {
    return arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
}

// 2. Đếm có bao nhiêu số dương trong mảng
function countPositiveNumbers() {
    return arr.filter(num => num > 0).length;
}

// 3. Tìm số nhỏ nhất trong mảng
function findMin() {
    return Math.min(...arr);
}

// 4. Tìm số dương nhỏ nhất trong mảng
function findMinPositive() {
    const positiveNumbers = arr.filter(num => num > 0);
    return positiveNumbers.length ? Math.min(...positiveNumbers) : null;
}

// 5. Tìm số chẵn cuối cùng trong mảng, nếu không có trả về -1
function findLastEven() {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) return arr[i];
    }
    return -1;
}

// 6. Đổi chỗ hai giá trị trong mảng theo vị trí
function swapPositions(index1, index2) {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
}

// 7. Sắp xếp mảng theo thứ tự tăng dần
function sortArray() {
    return arr.slice().sort((a, b) => a - b);
}

// 8. Tìm số nguyên tố đầu tiên trong mảng, nếu không có trả về -1
function findFirstPrime() {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num of arr) {
        if (isPrime(num)) return num;
    }
    return -1;
}

// 9. Nhập thêm một mảng số thực, kiểm tra có bao nhiêu số nguyên
function countIntegersInRealArray(realArray) {
    return realArray.filter(num => Number.isInteger(num)).length;
}

// 10. So sánh số lượng số dương và số âm
function comparePositivesAndNegatives() {
    const positives = arr.filter(num => num > 0).length;
    const negatives = arr.filter(num => num < 0).length;

    if (positives > negatives) return "Số dương nhiều hơn";
    else if (positives < negatives) return "Số âm nhiều hơn";
    else return "Số lượng số dương và số âm bằng nhau";
}
