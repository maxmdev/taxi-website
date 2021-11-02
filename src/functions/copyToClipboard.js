const copyToClipboard = function (event) {
    const inputTextArea = document.createElement('textarea');
    inputTextArea.innerText = event.target.innerText || '';

    document.body.appendChild(inputTextArea);
    inputTextArea.select();

    const copiedValue = document.execCommand('copy');
    document.body.removeChild(inputTextArea);

    return copiedValue;
}

export default copyToClipboard;