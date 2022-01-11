// Write your solution in this file!
var customerName = "bob";
// const upperCaseCustomerName = () => customerName.toUpperCase();
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

const LeastFavoriteCustomer = "you";

function changeLeastFavoriteCustomer() {
    LeastFavoriteCustomer = "me"
    return LeastFavoriteCustomer;
}