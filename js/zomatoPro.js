footerLanguage = document.getElementById('footerLanguage');
languagesList = document.getElementsByClassName('languages');
check = true


footerLanguage.onclick = function(){
    if (check){
        languagesList[0].style.opacity = '1';
        check = false
    }
    else{
        languagesList[0].style.opacity = '0';
        check = true;
    }
}
