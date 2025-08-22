function generatePassword() 
{
    var length = 16,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) 
    {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("pwGenInput").value = retVal;
}

function pwGenCopy()
{
  var copyText = document.getElementById("pwGenInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
