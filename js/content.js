console.log("run extension")

window.addEventListener('mouseup', getWord)

function getWord(){
    let selectedText = window.getSelection().toString().trim()
    
    if (selectedText.length > 0){
        let msg = {
            text: selectedText
        }
        chrome.runtime.sendMessage(msg)
    }
}