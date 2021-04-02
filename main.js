name_of_the_person_array = [];


function submit()
{



    var name_1 = document.getElementById("1").value;
    var name_2 = document.getElementById("2").value;
  

    name_of_the_studnt_array.push(name_1);
    name_of_the_studnt_array.push(name_2);
  
    console.log(name_of_the_person_array);

    document.getElementById("diplay_name").innerHTML = name_of_the_person_array;
    document.getElementById("submit_button").style.display = none;
    document.getElementById("sort_button").style.display = "inline-block";

}


function sorting()
{

name_of_the_student_array.sort();
console.log(name_of_the_person_array)
document.getElementById("diplay_name").innerHTML = name_of_the_person_array;
}