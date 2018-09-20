var $ = document.querySelector.bind(document);
var $All = document.querySelectorAll.bind(document);

var campos = [
    $('#data'),   
    $('#quantidade'),   
    $('#valor')
];

console.log(campos);

var tbody = $('.table tbody');
$('.form').addEventListener('submit', function(event){
    
    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);

    });
    
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    
    tbody.appendChild(tr);

    campos.forEach(function(campo){
        var type = campo.getAttribute('id');
        switch(type) {
            case 'valor':
                campo.value = '0';
                break;
            case 'quantidade' :
                campo.value = '1'
                break;
            case 'data':
                campo.value = '';
                break;
            default:
                console.error(`erro no campo ${type}`);
        }

    });
    
    $('#data').focus();

});