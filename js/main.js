$(document).ready(function() {

//SLIDER OF IMAGES

    //Next line tells you to load this part of code when we are in INDEX.HTML
    if(window.location.href.indexOf('index') > -1) {
        $('.slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000,
            auto: true,
            autoControls: false,
            stopAutoOnClick: true,
            pager: false
        });
    }



//JSON posts 
    if(window.location.href.indexOf('index') > -1) {
      var posts = [
            {
                title:    "Title number 1",
                date:    'Published on the '+moment().format("Do") + " of " + moment().format("MMMM YYYY"),
                content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quas facilis ex voluptates fuga corrupti, eum vero dolorem impedit delectus doloremque accusamus ullam quam molestiae deleniti fugiat velit iusto expedita totam harum modi quos a! Dignissimos sed nostrum ratione totam, ut soluta quod numquam non hic animi vero et!" 
            },
            {
                title:    "Title number 2",
                date:    'Published on the '+moment().format("Do") + " of " + moment().format("MMMM YYYY"),
                content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quas facilis ex voluptates fuga corrupti, eum vero dolorem impedit delectus doloremque accusamus ullam quam molestiae deleniti fugiat velit iusto expedita totam harum modi quos a! Dignissimos sed nostrum ratione totam, ut soluta quod numquam non hic animi vero et!" 
            },
            {
                title:    "Title number 3",
                date:    'Published on the '+moment().format("Do") + " of " + moment().format("MMMM YYYY"),
                content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quas facilis ex voluptates fuga corrupti, eum vero dolorem impedit delectus doloremque accusamus ullam quam molestiae deleniti fugiat velit iusto expedita totam harum modi quos a! Dignissimos sed nostrum ratione totam, ut soluta quod numquam non hic animi vero et!" 
            },
            {
                title:    "Title number 4",
                date:    'Published on the '+moment().format("Do") + " of " + moment().format("MMMM YYYY"),
                content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quas facilis ex voluptates fuga corrupti, eum vero dolorem impedit delectus doloremque accusamus ullam quam molestiae deleniti fugiat velit iusto expedita totam harum modi quos a! Dignissimos sed nostrum ratione totam, ut soluta quod numquam non hic animi vero et!" 
            },
            {
                title:    "Title number 5",
                date:    'Published on the '+moment().format("Do") + " of " + moment().format("MMMM YYYY"),
                content:  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta quas facilis ex voluptates fuga corrupti, eum vero dolorem impedit delectus doloremque accusamus ullam quam molestiae deleniti fugiat velit iusto expedita totam harum modi quos a! Dignissimos sed nostrum ratione totam, ut soluta quod numquam non hic animi vero et!" 
            }

        ];

        
        posts.forEach((item, index) => {
            var post = `
            
            <article class="post">

                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>

                <p>
                    ${item.content}
                </p>

                <a href="#" class="button-more">Leer Mas</a>

            </article>
            
            `;
            $("#posts").append(post);
        });
    }



//THEME BUTTONS COLOUR CHANGER & LOCALSTORAGE
        var colours;
        $("#red-button").click(function(){
            $("#green-css").attr("href", "./css/red.css");
            colours = "red";
            localStorage.setItem("Color", colours);
        });

        $("#blue-button").click(function(){
            $("#green-css").attr("href", "./css/blue.css");
            colours = "blue";
            localStorage.setItem("Color", colours);
        });

        $("#green-button").click(function(){
            $("#green-css").attr("href", "./css/styles.css");
            colours = "green";
            localStorage.setItem("Color", colours);
        });


        var colour = localStorage.getItem("Color");

        if(colour === "red"){
            $("#green-css").attr("href", "./css/red.css");
        }

        if(colour === "blue"){
            $("#green-css").attr("href", "./css/blue.css");
        } 
        
        if (colour === "green"){
            $("#green-css").attr("href", "./css/styles.css");
        }



//SCROLLING FUNCTIONALITY WITH EFFECTS

        $(window).scroll(function(){

            if ( $(this).scrollTop() > 300 ) {
      
              $('.scroll-to-top').fadeIn();
      
            } else {
      
              $('.scroll-to-top').fadeOut();
      
            }
      
          });
      
          // on click, animate the scroll up the page
          $('.scroll-to-top').click( function( e ) {
      
            e.preventDefault();
            $('html, body').animate( {scrollTop : 0}, 800 );
            
      
          });



//CREATING A FAKE SESSION & CLOSE SESSION BUTTON AND REFRESH PAGE

          $("#login form").submit(function(){
            var form_name = $("#form_name").val();

            localStorage.setItem("form_name", form_name);
          });


          var form_name = localStorage.getItem("form_name");

          if(form_name != null && form_name != "undefined" && form_name != Number) {
              var about_parrafo = $("#about p");

              about_parrafo.html("<strong>Welcome:  "+form_name+"</strong><br>");

              about_parrafo.append("<br> <a href='#' id='logout'>End Session</a> ");

              $("#login").hide();

              $("#logout").click(function(){
                localStorage.clear("form_name");
                location.reload();
              });
          }



//CREATING AN ACCORDION ABOUT ME

        //Next line tells you to load this part of code when we are in ABOUT.HTML
        if(window.location.href.indexOf('about') > -1) {
            
                //Next line for click in accordion tabs
                //$( "#accordion" ).accordion();
            
                //Next line to do mouseover reaction on tabs
                $( "#accordion" ).accordion({
                    event: "mouseover"
                  });

        }



//CREATE A WATCH FOR REALTIME TIME AND DATE

        if(window.location.href.indexOf('watch') > -1) {

            
            setInterval(function(){
                
                var watch = moment().format('LTS');
                $("#watch").html(watch);

            }, 1000);


        }



//PLUGIN FOR VALIDATE A FORM

        if(window.location.href.indexOf('contact') > -1) {

            //Next Line insert a Calendar with an specific format of entry Data
            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            });

            $.validate({
                lang: 'en',
                errorMessagePosition: 'top',
                scrollToTopOnError: true
              });

        }

  });