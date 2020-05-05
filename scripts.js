async function getNames() {
    let response = await fetch('https://sf80wmcil0.execute-api.us-east-1.amazonaws.com/production/helloworld');
    let names = await response.json();
    console.log(names);
    return names;
}

async function addName(){
    let data = {
        "text": "Bob"
    };

    let response = await fetch('https://sf80wmcil0.execute-api.us-east-1.amazonaws.com/production/helloworld', 
        {method: 'POST',
        body: JSON.stringify(data) 
    }
    )
    console.log(response);
}
addName();
getNames();