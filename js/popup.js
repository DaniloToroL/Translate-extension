function setup() {
    noCanvas()

    let bg = chrome.extension.getBackgroundPage()
    let text = bg.text
    let url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200425T211616Z.6e6d106f646984ba.625cdb6205b3a94f410fb962bc4b94cdca3bdcf8&text=${text}&lang=es`
    
    if (text){
        loadJSON(url, gotData)
    }else{
        createP("Selecciona una palabra sobre la página")
    }
   
    function gotData(data){
        let text = data.text[0]
        createP(text)
        button = createButton('Copiar')
        button.mousePressed(copy)

        function copy(){
            copyToClipboard(text)
        }
    }

}

const copyToClipboard = text =>{
    const textArea = document.createElement("textarea")
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    document.body.removeChild(textArea)
}
