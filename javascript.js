function addskill(){
    let skill = document.getElementById("inputSkill").value
    let percent = document.getElementById("Percent").value
    
    if(skill == "" || percent == ""){
        alert("Please input skill or percent");     
    }else{
        var d1 = document.getElementById('skill-main');
        d1.insertAdjacentHTML('afterend', '<p>'+skill+'</p><div class="light-grey round-xlarge smalls"><div class=" center round-xlarge teal" style="width:'+percent+'%">'+percent+'%</div></div>');
    }
}
function addlanguage(){
    let inputLanguages = document.getElementById("inputLanguages").value
    let Percent2 = document.getElementById("Percent2").value
    
    if(inputLanguages == "" || Percent2 == ""){
        alert("Please input inputLanguages or Percent");     
    }else{
        var d1 = document.getElementById('languages-main');
        d1.insertAdjacentHTML('afterend', '<p>'+inputLanguages+'</p><div class="light-grey round-xlarge smalls"><div class=" center round-xlarge teal" style="width:'+Percent2+'%">'+Percent2+'%</div></div>');
    }
}