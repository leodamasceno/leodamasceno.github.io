function calculateDSI() {

    var monthly_income = document.getElementById("monthly_income").value;
    var dividend_yield = document.getElementById("dividend_yield").value;

    var yearly_income = (monthly_income * 12);
    var dividend_yield_percentage = (dividend_yield / 100)

    var total = ((yearly_income / dividend_yield_percentage).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById('total_value').innerHTML = "Value to be invested: $" + total;

}