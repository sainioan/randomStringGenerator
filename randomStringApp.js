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

    const timestamp = new Date().toLocaleTimeString('fi-FI', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    console.log(`${string} ${timestamp}`);
    setTimeout(getStringNow, 5000)
}

getStringNow()
