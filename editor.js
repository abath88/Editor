var edit = true;
document.getElementById('editor').addEventListener('paste', (event) => {
    let pa = (event.clipboardData || window.clipboardData).getData('text')
    console.log(pa)
})

document.getElementById('editor').addEventListener('copy', (event) => {
    console.log(event.clipboardData.getData('text'))
})
function link() {
    var lin = prompt("Wrpowadz link") 
    document.execCommand(
        'createLink', 
        false, 
        lin
    );
}

function cut() {
    document.execCommand('cut', false, '')
}

function copy() {
    document.execCommand('copy')
}

function paste() {
    document.getElementById('editor').focus()
    console.log(document.execCommand('paste'))
}



function toggleEdit(){
    edit = !edit
    document.getElementById("editor").setAttribute('contentEditable', edit)
}

function fontChange(e) {
    document.execCommand('fontName', false, e.target.value)
}


function myedit() {
    document.getElementById("editor").setAttribute('contentEditable', true)
    document.getElementById("editor")
}

function noedit() {
    document.getElementById("editor").setAttribute('contentEditable', false)
}