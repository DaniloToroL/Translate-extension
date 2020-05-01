chrome.runtime.onMessage.addListener(reciever)
function reciever(request, sender, sendResponse){
    console.log(sender)
    text = request.text
}