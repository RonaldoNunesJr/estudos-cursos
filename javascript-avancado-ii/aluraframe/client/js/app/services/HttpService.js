class HttpService {
    get (url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            
            xhr.open('GET', url);
            
            xhr.onreadystatechange = () => {
            
                if ( xhr.readyState == 4 ) {
    
                    if ( xhr.status == 200 ) {
    
                        console.log('Obtendo as negociações do servidor')
                        resolve(JSON.parse(xhr.responseText));
    
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior');
                    }
    
                }
    
            };
    
            xhr.send();
        })
    }
}