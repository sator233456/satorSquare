// Document ready function using jQuery
$(document).ready(function () {
    // Use CoinGecko API to get the current price of Bitcoin
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
        type: 'GET',
        success: function (data) {
            var bitcoinPrice = data.bitcoin.usd;
            $('#bitcoin-price').text('$' + bitcoinPrice.toFixed(2));
        },
        error: function (error) {
            console.log('Error fetching Bitcoin price:', error);
        }
    });
});

