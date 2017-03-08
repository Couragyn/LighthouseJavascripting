
function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var salesTax = {};
  var provTax = 0;
  var nameArray = [];
  for (var i = 0; i < salesData.length; i ++){
    if (nameArray.includes(salesData[i].name)){
      totalSalesNum = salesData[i].sales.reduce(getSum);

      provTax = taxRates[salesData[i].province];
      totalTaxesNum = totalSalesNum * provTax;

      var salesTaxInner = (salesTax[salesData[i].name]);
      salesTaxInner.totalSales = salesTaxInner.totalSales + totalSalesNum;
      salesTaxInner.totalTaxes = salesTaxInner.totalTaxes + totalTaxesNum;
    }
    else {
      totalSalesNum = salesData[i].sales.reduce(getSum);

      provTax = taxRates[salesData[i].province];
      totalTaxesNum = totalSalesNum * provTax;

      salesTax[salesData[i].name] = {
        'totalSales': totalSalesNum,
        'totalTaxes': totalTaxesNum
      };
      nameArray.push(salesData[i].name);
    }
  }
  return salesTax ;
}

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function getSum(total, num) {
    return total + Math.round(num);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/