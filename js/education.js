const tablinks = document.getElementsByClassName('tab__links');
const tabcontents = document.getElementsByClassName('tab__contents');

function opentab (tabname) {
    for(tablink of tablinks){
        tablink.classList.remove('active__link')
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active__tab')
    }

    event.currentTarget.classList.add('active__link')

    document.getElementById(tabname).classList.add('active__tab')
}