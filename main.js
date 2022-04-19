const imaurl = document.getElementsByClassName("form-control inblock")[0];
const bttnn = document.getElementsByClassName("btn btn-primary px-3 btnsource")[0];
console.log(imaurl);
console.log(bttnn);



bttnn.addEventListener('click', function(){
    var image = new Image();
    image.src = imaurl.value;
    console.log(imaurl.value)
    image.addEventListener('error', function(){
        alert('This URL does not contain any Image !!!!')
        imaurl.value = '';
    });
    image.addEventListener('load', function(){
        console.log(2+2);
        let list = JSON.parse(localStorage.getItem("URLS"));
        if (list === null){
            phurl = [];
        }
        else{
            phurl = list;
        }
        phurl.push(imaurl.value);
        localStorage.setItem('URLS',JSON.stringify(phurl));
        document.getElementById('green').style.display = 'block';
        setTimeout(myFunction1, 2000);
        function myFunction1(){
            document.getElementById('green').style.display = 'none';
        }
        imaurl.value = "";
        showimage();
    });
    
});

function showimage(){
    let list = JSON.parse(localStorage.getItem("URLS"));
    if (list === null){
        phurl = [];
    }
    else{
        phurl = list;
    }

    let html = '';
    let main = document.querySelector('.imagessss');
    phurl.forEach((data, index) => {
        
        html += `
        <div class="col-lg-4">
        <div class="card" style="width: 22rem;">
            <div class="box">
                <img src=${data} class="card-img-top qwerty" alt="photo">
                <button class = "btnnn" onclick="deleteimage(${index})" id="bty"><i class="fa fa-trash"></i></button>
            </div>
                <div class="card-body">
                <p class="card-text bottomtxt">Image - ${index + 1} <button class = "resbutton" onclick="deleteimage(${index})" id="bty"><i class="fa fa-trash"></i></button></p>
            </div>
        </div>
        <br><br>
        </div>
        
        `
    });
    main.innerHTML = html;
}
showimage();



function deleteimage(index){
    let list = JSON.parse( localStorage.getItem('URLS'));
    phurl.splice(index, 1);
    localStorage.setItem('URLS', JSON.stringify(phurl));
    document.getElementById('greendel').style.display = 'block';
    setTimeout(myFunction3, 2000);
    function myFunction3(){
        document.getElementById('greendel').style.display = 'none';
    }
    showimage();
}

