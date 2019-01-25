$(document).ready(function() {


    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: false
      });



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


        $(window).scroll(function(){

            if ( $(this).scrollTop() > 500 ) {
      
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


  });