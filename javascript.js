function addskill(){
    let skill = document.getElementById("inputSkill").value
    let percent = Number(document.getElementById("Percent").value)
    
    if(skill == "" || percent == ""){
        alert("Please input skill or percent");     
    }else{
        if(percent > 0 && percent <= 100){
            var d1 = document.getElementById('skill-main');
            d1.insertAdjacentHTML('afterend', '<p>'+skill+'</p><div class="light-grey round-xlarge smalls"><div class=" center round-xlarge teal" style="width:'+percent+'%">'+percent+'%</div></div>');
        }else{
            alert("Please input Percent : Number(1-100)")
        }
    }
}
function addlanguage(){
    let inputLanguages = document.getElementById("inputLanguages").value
    let percent2 = Number(document.getElementById("Percent2").value)
    
    if(inputLanguages == "" || percent2 == ""){
        alert("Please input Languages or Percent");     
    }else{
        if(percent2 > 0 && percent2 <= 100){
        var d1 = document.getElementById('languages-main');
        d1.insertAdjacentHTML('afterend', '<p>'+inputLanguages+'</p><div class="light-grey round-xlarge smalls"><div class=" center round-xlarge teal" style="width:'+percent2+'%">'+percent2+'%</div></div>');
        }else{
            alert("Please input Percent : Number(1-100)")
        }
    }

}
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
