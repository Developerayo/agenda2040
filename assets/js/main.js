// window.onscroll = function() {scrollFunction()};
// var navbar = document.getElementById("navbar");
// function scrollFunction() {
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         navbar.style.display = "block";
//         navbar.style.backgroundColor = " #ffffff";
//         navbar.style.position = "fixed";
//         navbar.style.color = "black";
//         navbar.style.transition = "all 0.6s ease";
//         navbar.style.width = "100%";
//         navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.43)";
//         $('a#read-article').css("color", "black");
//         $('.navbarand').css("color" , "black" + "important");
//         $('#navbar').addClass('animated fadeIn');
//     } else {
//         document.getElementById("navbar").style.backgroundColor = "transparent";
//          document.getElementById("navbar").style.boxShadow = "none";
//           $('a#read-article').css("color", "white");
//            $('#navbar').removeClass('animated fadeIn');
//            $('#navbar').css("position" , "relative");
//            // $(".welcome_text").css("padding-top" , "8%");
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//     document.documentElement.scrollTop = 0; // For IE and Firefox
// }

// // end if


// var myVar;

// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }
var app = {
  imageHandler:function() {
        $("#upload").on('change', function() {
            //alert("alert");
            readUrl();
        });
        function readUrl (){
            var file = $("#upload")[0].files[0];
            //console.log(file);
            //reader interprets the file selected
            var reader = new FileReader();
                //console.log(reader.result);
            reader.onloadend = function (){
                //console.log(reader.result);
                $("#picture_preview").attr("src", reader.result);
                //$("#picture_preview")[0].src = "" + reader.results;
                //console.log($("#picture_preview"));
                //console.log(reader.result);
            }
            if(file){
                reader.readAsDataURL(file);
            }
        }
    },//end of imageHandler
    openpackages:function(){
        var $opended = Array.from($('.opned'));
        var icon;
        $opended.forEach(function(open){
            $(open).on('click', function(e){
                // e.css('transform','rotate(180deg)');
                icon = e.target.children[1];
                $(icon).toggleClass('icon-change');
                console.log(e);
            });
        });
        // $('.opned')(function(){
        //     $('.')

        // });
        console.log($opended);
    },
//     var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight){
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   }
// }
    appendLog:function(){
         var test,hide;
         hide = $('.hide-txt');
        var input = $('#test-input');
        var outputs = $('.outputs');

        var outputTextClick = ('.output-text-click i');
        
        $('#output-test').on('click',function(e){
            // e.preventDefault();
            // e.target.parent.preventDefault();
            if(input['0'].value === ""){
                 hide.show();
                 return;
                 
            }
            else {
                // test = `<p style=""><b> ${input["0"].value} </b></p>`;
                test =`<div class="output-text-click animated bounceIn">
                    <p style=""><b> ${input["0"].value} </b></p>
                    <div class="text-nav">
                        <i class="icon ion-android-close"></i>
                    </div>
                </div>`;
            console.log(outputTextClick);
                hide.hide();
                outputs['0'].innerHTML += test;
                // alert('red');
                console.log(outputs);
                input['0'].value = "";
                console.log(input);
            }
           /* else if( outputs['0'].value != ""){
                hide.hide();
            }
*/
             

        });

    },
    appendLog1:function(){
         var test,hide;
         hide = $('.hide-txt1');
        var input = $('#test-input1');
        var outputs = $('.outputs1');

        var outputTextClick = ('.output-text-click i');
        
        $('#output-test1').on('click',function(e){
            // e.preventDefault();
            // e.target.parent.preventDefault();
            if(input['0'].value === ""){
                 hide.show();
                 return;
                 
            }
            else {
                // test = `<p style=""><b> ${input["0"].value} </b></p>`;
                test =`<div class="output-text-click animated bounceIn">
                    <p style=""><b> ${input["0"].value} </b></p>
                    <div class="text-nav">
                        <i class="icon ion-android-close"></i>
                    </div>
                </div>`;
            console.log(outputTextClick);
                hide.hide();
                outputs['0'].innerHTML += test;
                // alert('red');
                console.log(outputs);
                input['0'].value = "";
                console.log(input);
            }
           /* else if( outputs['0'].value != ""){
                hide.hide();
            }
*/
             

        });

    },
    appendLog2:function(){
         var test,hide;
         hide = $('.hide-txt2');
        var input = $('#test-input2');
        var outputs = $('.outputs2');

        var outputTextClick = ('.output-text-click i');
        
        $('#output-test2').on('click',function(e){
            // e.preventDefault();
            // e.target.parent.preventDefault();
            if(input['0'].value === ""){
                 hide.show();
                 return;
                 
            }
            else {
                // test = `<p style=""><b> ${input["0"].value} </b></p>`;
                test =`<div class="output-text-click animated bounceIn">
                    <p style=""><b> ${input["0"].value} </b></p>
                    <div class="text-nav">
                        <i class="icon ion-android-close"></i>
                    </div>
                </div>`;
            console.log(outputTextClick);
                hide.hide();
                outputs['0'].innerHTML += test;
                // alert('red');
                console.log(outputs);
                input['0'].value = "";
                console.log(input);
            }
           /* else if( outputs['0'].value != ""){
                hide.hide();
            }
*/
             

        });

    },
    appendLog3:function(){
        var test,hide;
        hide = $('.hide-txt3');
        var input = $('#test-input3');
        var outputs = $('.outputs3');

        var outputTextClick = ('.output-text-click i');
        
        $('#output-test3').on('click',function(e){
            // e.preventDefault();
            // e.target.parent.preventDefault();
            if(input['0'].value === ""){
                 hide.show();
                 return;
                 
            }
            else {
                // test = `<p style=""><b> ${input["0"].value} </b></p>`;
                test =`<div class="output-text-click animated bounceIn">
                    <p style=""><b> ${input["0"].value} </b></p>
                    <div class="text-nav">
                        <i class="icon ion-android-close"></i>
                    </div>
                </div>`;
            console.log(outputTextClick);
                hide.hide();
                outputs['0'].innerHTML += test;
                // alert('red');
                console.log(outputs);
                input['0'].value = "";
                console.log(input);
            }
           /* else if( outputs['0'].value != ""){
                hide.hide();
            }
*/
             

        });

    },
    addMethods:function(){
        var mthods = $('.methodsadd');
        $('#addMethod').on('click',function(){
            methods = `
            <div class="well creat-modules animated bounceIn" id="caret-modules">
                    <label for="">NAME</label>
                    <input type="text" class="form-control" placeholder="Jana Doe" required id="method-name">
                    <label for="">DISCRIPTION</label>
                    <textarea type="text" class="form-control" required></textarea>
                    <label for="">PARAMETER</label>
                    <hr class="hr">
                    <div class="row">
                        <div class="col-md-6  ">
                            
                            <label for="">INPUT</label>
                              <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Search" id="test-input">
                                <div class="input-group-btn">
                                  <button class="btn btn-default grp-btn methods" id="output-test" onclick="app.appendLog()">
                                    <i class="icon ion-android-add"></i>
                                  </button>
                                </div>
                              </div>
                            
                            <div class="well output-depend" >
                                
                                <hr>
                                <p class="text-center f-weight-4 f-size-12 hide-txt">Nothing In Input Yet</hp>
                                <div class="outputs">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            
                                <label for="">OUTPUT</label>
                              <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Search" id="test-input1"> 
                                <div class="input-group-btn">
                                  <button class="btn btn-default grp-btn methods" id="output-test1" onclick="app.appendLog1()">
                                    <i class="icon ion-android-add"></i>
                                  </button>
                                </div>
                              </div>
                            
                            <div class="well output-depend">
                                
                                <hr>
                                <p class="text-center f-weight-4 f-size-12 hide-txt1">Nothing In Output Yet</p>
                                <div class="outputs1">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 ">
                            
                                <label for="">TEST CASE</label>
                              <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Search" id="test-input2" >
                                <div class="input-group-btn">
                                  <button class="btn btn-default grp-btn methods" id="output-test2" onclick="app.appendLog2()">
                                    <i class="icon ion-android-add"></i>
                                  </button>
                                </div>
                              </div>
                            
                            <div class="well output-depend" >
                                
                                <hr>
                                <p class="text-center f-weight-4 f-size-12 hide-txt2">No Test-Cases Yet</hp>
                                    <div class="outputs2">
                                        
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-6 ">
                            
                                <label for="">ACCEPTANCE REQUIREMENT</label>
                              <div class="input-group ">
                                <input type="text" class="form-control" placeholder="Search" id="test-input3">
                                <div class="input-group-btn">
                                  <button class="btn btn-default grp-btn methods" type="button" id="output-test3" onclick="app.appendLog3()">
                                    <i class="icon ion-android-add"></i>
                                  </button>
                                </div>
                              </div>
                            
                            <div class="well output-depend">
                                
                                <hr>
                                <p class="text-center f-weight-4 f-size-12 hide-txt3">No Acepptence-Req Yet</hp>
                                    <div class="outputs3">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-right next-button"><button type="submit" class="btn btn-default" id="saveMethod" onclick="app.saveMethod()">Save</button></p>
            </div>
            `;
            mthods['0'].innerHTML += methods;
        });
    },
    saveMethod:function(){
        var hide,i;
        hide = $('.hide-nomethd');
        var name = $('#method-name');
        var save = $('#saveMethod');
        var bag = $('.savedMethods');
        var off = $('#caret-modules');
       
        
            for (i = 0; i < save.length; i++) {
            save[i].onclick = function() { 
           
            savedMethod =`
            <button class="accordion">${name['0'].value}</button>
            `;
            bag['0'].innerHTML = savedMethod;
            hide.hide();
            off.hide(); 
            }
        }
       
    },
    // developers: [
    //         {id:"a10a",firstName:'John ', lastName:"Doe"  , img: 'assets/img/headshot-4.jpg' ,job:"Developer"},
    //         {id:"a10b",firstName:'Seye ', lastName:"Aderomo"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10c",firstName:'Rewedd', lastName:"wes"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10d",firstName:'Jeff', lastName:"Loma"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10e",firstName:'Striped', lastName:"Stone"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10f",firstName:'Reddit ', lastName:"Johnson"  ,  img: 'assets/img/headshot-4.jpg',job:"Developer"},
    //         {id:"a10g",firstName:'Sebastin ', lastName:"Nefe"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10h",firstName:'Ace', lastName:"Kyd"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10i",firstName:'code_', lastName:"wonders"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10j",firstName:'roche', lastName:"beam"  ,  img: 'assets/img/headshot-4.jpg' , job:"sDeveloper"},
    //         {id:"a10k",firstName:'gboyega', lastName:"sedon"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10l",firstName:'adeyinka ', lastName:"gonifa"  ,  img: 'assets/img/headshot-4.jpg' , job:"Developer"},
    //         {id:"a10m",firstName: 'adeyinka', lastName: 'gabriel', img: 'assets/img/headshot-4.jpg' , job:"Developer"},
            
    //     ],
    //     loadDevs: function() {
    //         var devList = document.querySelector('.workers');
    //         var devs;
    //         // console.log(productList);
    //         app.developers.forEach(loadDevs);
    //         function loadDevs(developers) {
    //         devs = `
            
    //         <div class="col-md-6 col-xs-6 allItems">
    //             <div class="well workers">
    //                 <center>
    //                     <img src="${developers.img}" class="img-responsive" style="height:150px; border-radius: 50%; width: 150px;">
    //                     <h3>${developers.firstName}${developers.lastName}</h3>
    //                     <p class="devjob">${developers.job}</p>
    //                 </center>
    //             </div>
    //         </div>

    //         `;
    //             devList.innerHTML += devs;
                
    //         }
    //     },
    //     // productId: function(text) {
    //     //    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    //     //    for (var i = 0; i < 5; i++)
    //     //      text += possible.charAt(Math.floor(Math.random() * possible.length));

    //     //    return text;
    //     // },
    //     filterDevs: function() {
    //         var input, filter, ul, li, a, i, info;
    //         input = document.getElementById("myInput");
    //         filter = input.value.toUpperCase();
    //         ul = document.getElementById("myUL");
    //         info = document.getElementById("pls-search");
    //         li = ul.querySelectorAll('.allItems');
    //         for (i = 0; i < li.length; i++) {
    //             a = li[i].querySelectorAll(".devjob")[0];
    //             if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //                 li[i].style.display = "block";
    //                 // li[i].style.opacity = "1";
    //                 // info.style.display="none";
    //             }
                   
    //             else  {
    //                 li[i].style.display = "none";
                    
    //             }

    //         }
    //     }
    
};//end app

