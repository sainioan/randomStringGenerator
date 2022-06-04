const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var string = ""
const generateString = () => {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < 14; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


string = generateString()

const getStringNow = () => {


    var timestamp = new Date(Date.now()).toLocaleDateString("fi-FI")

    console.log(`${string} ${timestamp}`);
    setTimeout(getStringNow, 5000)
}

getStringNow()
