function power(num, raiseTo) {
    if(raiseTo <= 1) return num;
    return num * power(num, raiseTo - 1);
}