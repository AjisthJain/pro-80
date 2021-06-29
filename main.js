name_of_the_student_array = [];

function submit() {
    var guest_name = document.getElementById("name_of_the_student_1").value;
   name_of_the_student_array.push(guest_name);
   var length_of_name =name_of_the_student_array.length;
   document.getElementById("display_name").innerHTML=name_of_the_student_array.toString();
}


function sorting() {
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting = [];
    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);
    for (var k = 0; k < lenght_of_name_of_students_array; k++) {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}