var url =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

function myFunction() {
    let input = document.getElementById("search-box");
    let filter = input.value.toLowerCase();
    // let table = document.getElementsByTagName('tbody')
    let table = document.getElementById("myTable");
    //let tbody = table.getElementsByTagName('tbody')
    let tr = table.getElementsByTagName("tr");

    console.log("tr length", tr);

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        td1 = tr[i].getElementsByTagName("td")[2]; //[1] || tr[i].getElementsByTagName("td")[2];
        if (td || td1) {
            txtValue = td.textContent || td.innerText;
            txtvalue2 = td1.textContent || td1.innerText;
            console.log("txt value", txtValue);

            if (
                txtValue.toLowerCase().indexOf(filter) > -1 ||
                txtvalue2.toLowerCase().indexOf(filter) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function rowdetail(index) {
    document.getElementById('info-content').style.display = "block"
    let mytable = document.getElementsByClassName("data-row");
    //document.querySelector('')
    console.log("mytable", mytable);
    console.log("mytable", mytable[index]);
    //document.getElementById('info-content').innerHTML = mytable[index]
    console.log('Data' , mytable[index].getElementsByTagName("td")[0].innerText)
    document.getElementById('address').innerHTML  = mytable[index].getElementsByTagName("td")[0].innerText
    document.getElementById('city').innerHTML  = mytable[index].getElementsByTagName("td")[1].innerText
    document.getElementById('state').innerHTML  = mytable[index].getElementsByTagName("td")[2].innerText
    document.getElementById('Zip').innerHTML  = mytable[index].getElementsByTagName("td")[3].innerText
}













