let input = document.getElementById('number')
let btnValidate = document.getElementById('btn-validate');

btnValidate.addEventListener('click', function(){
    if(input.value.match(/^\d{10,12}$/) === null){
        alert(`Format Nomor HP: \n
        1. Nomor HP minimum 10 digit dan maksimum 12 digit
        2. Nomor HP harus berupa angka`);
    }
    else{
       alert('Validasi berhasi')
    }
})