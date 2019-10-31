let main = document.querySelector('.main');
let mainBODY = document.querySelector("body");

let navBarHTML=` 
    <nav class="z-depth-5 navBar">
        <ul>
            <li><a class="OSIJobs waves-effect waves-light navOptions" href="#splash">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light navOptions" href="#about">About</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#jobs">Jobs</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#recruiting">Medical Recruiting</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#partnerships">Partnerships</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#services">Services</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#contact">Contact</a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div>
        <div id="panel" class="col s4 offset-s8 show-on-med-and-down">
            <a class="waves-effect waves-light dropdownOptions" href="#about">About</a>
            <a class="waves-effect waves-light dropdownOptions" href="#jobs">Jobs</a>
            <a class="waves-effect waves-light dropdownOptions" href="#services">Services</a>
            <a class="waves-effect waves-light dropdownOptions" href="#partnerships">Partnerships</a>
            <a class="waves-effect waves-light dropdownOptions" href="#recruiting">Medical Recruiting</a>
            <a class="waves-effect waves-light dropdownOptions" href="#contact">Contact</a>
        </div>
    </nav>
`;

let mainHTML= `   
    <div class="parallax">
        <div id="splash" class="parallax_group">
            <div class="parallax_layer parallax_layer--base z-depth-5">
                <div class="title mainTitle left">
                    <h1 class="splashHeader">OSI Jobs</h1>
                    <h3>Excellence in Food Industry Recruitment</h3>
                </div>
                <div>
                    <img class="z-depth-5 splashImage right" src="./public/images/people_in_market.jpg" />
                </div>
            </div>
        </div>
        <div id="about" class="parallax_group">
            <div class="parallax_layer parallax_layer--base">
                <div class="title aboutBaseTitle">
                </div>
                <div class="col s12 m4 aboutRightBody">
                    <h5>New Jobs:</h5>
                    <div id="loxoResponse"></div>
                </div>
            </div>
            <div class="parallax_layer parallax_layer--back">
                <div class="aboutLeftBody">
                    <div class="">
                        <h5 class="center">Excellence in Food Industry Recruitment</h5>
                        <p>At OSI, we specialize in food industry executive recruitment. Whether you are an employer looking for the perfect candidate, or you a food industry professional looking to make a change, feel free to take a look around.<br></p>
                    </div>
                    <div class="">
                        <h5 class="center">We fill the following types of positions</h5>
                        <p>Operations/Manufacturing • Purchasing/Supply Chain • Research & Development • Quality Assurance • Sales (National/Regional/DSD) • Engineering/Maintenance • CEO, CFO, COO, GM • Project Management • Customer Service • Food Safety • Distribution/Logistics Management • Sanitation<br></p>
                    </div>
                    <div class="">
                        <h5 class="center">Our Mission Statement:</h5>
                        <p>Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="jobs" class="parallax_group darkText">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title jobsForegroundTitle">Foreground Layer 1</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title jobsBaseTitle">Base Layer 3</div>
            </div>
        </div>
        <div id="recruiting" class="parallax_group">
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 4</div>
            </div>
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer </div>
            </div>
            <div class="parallax_layer parallax_layer--deep">
                <div class="title">Deep Background Layer</div>
            </div>
        </div>
        <div id="partnerships" class="parallax_group darkText">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 2</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 5</div>
            </div>
        </div>
        <div id="services" class="parallax_group">
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 6</div>
            </div>
        </div>
        <div id="contact" class="parallax_group darkText">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 3</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 7</div>
            </div>
        </div>
    </div>
`;

//==================================END OF HTML TO BE INJECTED================================

// prototype function to shuffle response array from loxo

Array.prototype.shuffle = function() {
    let i=this.length,j,placeHolder;
    if (i==0) return this;
    while(--i){
       j=Math.floor(Math.random()*(i+1));
       placeHolder=this[i];
       this[i]=this[j];
       this[j]=placeHolder;
    }
    return this;
  }

  
$(main).html(mainHTML);

setTimeout(() => {
    $(".ball").css({
        "position":"unset",
        "visibility":"none !important",
        "border":"none",
        "margin-top":"43px",
        "animation":"none"
    });
}, 2000);

setTimeout(() => {
        $(main).prepend(navBarHTML);
        $(".navOptions").hover(
            function(){
                $(this).css({
                    "transform":"scale(1.2)",
                    "color": "#88D498"
                })
            },function(){
                $(this).css({
                    "transform":"scale(1)",
                    "color": "F3E9D2"
                })
            }
        )
    }, 3100);

//==================================AJAX REQUEST FOR LOXO JOBS================================

$.ajax({
    url: "https://loxo.co/api/osi-jobs/jobs",
    type: "GET",
    // loxo docs are very unforgiving, and this set header was only sent after multiple painful emails to support. 
    // this might get changed at some point if and when this basic auth expires, but emailing support is the only way I know of to get it.
    beforeSend: xhr=> {xhr.setRequestHeader('Authorization', 'Basic b3NpX2pvYnM6NDc1NjI5YTQzMWMyNWEwNzlmMzBkYTFlYmY5Mjk4MDQ=')},
    // the following is the parameter passed in to only get active jobs from the database of jobs for OSI. Other params can be found in the docs:
    // http://help.loxo.co/articles/446640-integrate-your-job-listing-with-your-website-through-an-api
    // be warned-- they are the weakest of sauce.
    data:{"job_status_id":2841},
    // this sidesteps the username and password requirement.
    xhrFields: {withCredentials: true},
    success: data=> {
        console.log(data.results);
        let items = [];
        $.each( data.results, i=> {
            // console.log(data.results[i])
            // this builds out the list items in the jobs column of the main content.
            items.push(`<li id="${data.results[i].title}"><a href="https://loxo.co/job/${data.results[i].id}">${data.results[i].title}</a> (${data.results[i].macro_address})</li>`);
        });

        // shuffle items in the list so they aren't alphabetical based on the number of items in the list
        items.shuffle()
        //truncate list to make more consistent with other two columns in div
        let itemsFinalForHomePage = items.slice(0,10)
        // push final items array to html for view on homepage
        $(`<ul/>`,{
        "class":"bullet-content",
        html:itemsFinalForHomePage.join(``)
        }).appendTo( "#loxoResponse" )
    },
})

$(document).ready(()=>{
  console.log('ready');
})