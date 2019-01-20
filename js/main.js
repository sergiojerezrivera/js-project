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








  });