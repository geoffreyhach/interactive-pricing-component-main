let range = document.getElementById("price-range");
let price = document.getElementById('price');
let views = document.getElementById('views');
let billingBtn = document.querySelector('.billing-btn');
let btnSelector = document.querySelector('.btn-selector');
const pricing = [
    {view : 50,
    price : 10},
    {view : 100,
    price : 16},
    {view : 200,
    price : 25},
    {view : 300,
    price : 35},
    {view : 500,
    price : 40},
];

window.onload = priceDisplay();

range.addEventListener('input', priceDisplay);

function priceDisplay() {
    let i = range.value;

    if (billingBtn.classList.contains("active")) {
    price.innerHTML = `<strike style="font-size:.7rem; opacity:.7">$${pricing[i].price.toFixed(2)}</strike> $${(pricing[i].price * 0.75).toFixed(2)}`;
    views.innerHTML = pricing[i].view;
    }
    else { 
    price.innerHTML = `$${pricing[i].price.toFixed(2)}`;
    views.innerHTML = pricing[i].view;
    }

};

billingBtn.addEventListener('click', function(){
    billingBtn.classList.toggle("active");
    priceDisplay();

});

range.addEventListener('input', function() {
    let i = (range.value * 100) / (pricing.length - 1);
    color = 'linear-gradient(90deg, hsl(174, 86%, 45%)' + i +'%, hsl(224, 65%, 95%) ' + i +'%)';
    range.style.background = color;
});