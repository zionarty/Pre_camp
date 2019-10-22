function addskill(){
    let skill = document.getElementById("inputSkill").value
    let percent = Number(document.getElementById("Percent").value)
    var element = document.getElementById(""+skill+"");
    
    if(skill == "" || percent == ""){
        alert("Please input skill or percent");     
    }else{
      console.log(element)
      if(typeof(element) == 'undefined' || element == null)
      {
        if(percent > 0 && percent <= 100){
            var d1 = document.getElementById('skill-main');
            d1.insertAdjacentHTML('afterend', '<div id="'+skill+'"><p>'+skill+' <i class="icon-remove" onclick="removeskill(\''+skill+'\')"></i></p><div class="light-grey round-xlarge smalls" ><div class=" center round-xlarge teal" style="width:50%">50%</div></div></div>');
            document.getElementById('inputSkill').value = ''
            document.getElementById('Percent').value = ''
          }else{
            alert("Please input Percent : Number(1-100)")
        }
      }else{
        alert("You have skill already")
      }
    }
}
/*function addlanguage(){
    let inputLanguages = document.getElementById("inputLanguages").value
    let percent2 = Number(document.getElementById("Percent2").value)
    
    if(inputLanguages == "" || percent2 == ""){
        alert("Please input Languages or Percent");     
    }else{
        if(percent2 > 0 && percent2 <= 100){
        var d1 = document.getElementById('languages-main');
        d1.insertAdjacentHTML('afterend', '<div id ="'+inputLanguages+'"><p>'+inputLanguages+'<i class="icon-remove" onclick="removeskill('+inputLanguages+')"></i></p><div class="light-grey round-xlarge smalls"><div class=" center round-xlarge teal" style="width:'+percent2+'%">'+percent2+'%</div></div></div>');
        document.getElementById("inputLanguages").value = " "
        document.getElementById("Percent2").value = " "
      }else{
            alert("Please input Percent : Number(1-100)")
        }
    }

}*/
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[id="changetheme"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        
        document.body.style.background ="#ffe6e6"
      } else {
        
        document.body.style.background ="#f1f1f1"
      }
    });
  });
  function editdata(){
      let name = prompt("insert Name for edit")
      let allname = "Name : "+name+" "
      console.log(allname)
      if (name == ""){
        alert("Please input Name")
      }
      else{
        myname.innerText = allname;
      }
      
  }
  function removeskill(skill){
    console.log(skill);
    document.getElementById(skill).remove();
  }
  function opaImg(x) {
    x.style.opacity = "0.2";
  }
  
  function normalImg(x) {
    x.style.opacity = "1";
  }