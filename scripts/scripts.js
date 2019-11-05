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
                <div class="aboutLeftBody">
                    <div class="member">
                        <img class="memberImage" src="../public/images/Tim.jpeg">
                        <div class="memberInfo">Tim Oliver | Recruiter | Senior Partner</div>
                    </div>
                    <div class="member">
                        <img class="memberImage" src="../public/images/Dave.png">
                        <div class="memberInfo">Dave Buergler | Recruiter | Senior Partner</div>
                    </div>
                    <div class="member">
                        <img class="memberImage" src="../public/images/Joel(1).png">
                        <div class="memberInfo">Joel Oliver | Recruiter</div>
                    </div>
                </div>
            </div>
            <div class="parallax_layer parallax_layer--back">
                <div class="aboutRightBody">
                    <div class="aboutInfo">
                        <p>
                            Tim has been recruiting in the food industry for 25+ years. He previously held office level positions with two other nationwide 
                            search firms before starting OSI, his own company of food industry recruiters, in 1992. Tim has BS & MS degrees in Food Science 
                            from the University of Georgia. He worked in R&D for a Fortune 500 company and a Production Supervisor for a major food processor. 
                            He is a Certified Personnel Consultant as awarded by the National Association of Personnel Services.
                        </p>
                    </div>
                    <div class="aboutInfo">
                        <p>
                            Dave has BS and MS degrees from the University of Missouri. He has 25+ years of industry experience. Dave started his career as a Food 
                            Technologist for a Fortune 500 company. Then he moved into the area of Sensory/Marketing Research. Dave then joined a large foodservice 
                            company as Senior Manager of Marketing Research. He eventually held Director-level positions in New Product Marketing, Brand Management, 
                            and Field Marketing. Dave took his background and experience to the team of food industry recruiters in 1998.
                        </p>
                    </div>
                    <div class="aboutInfo">
                        <p>
                            Joel followed in his father’s footsteps as a recruiter after completing his Masters degree. What began as a temporary job to make ends 
                            meet has turned into a career. With his M.Div., his heart is for ministry and serving God’s church globally. But today’s economy calls 
                            more and more for bivocational ministers. Joel has been with OSI since 2012 including a 12 month sabbatical to serve with his wife as 
                            missionaries in Honduras.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="jobs" class="parallax_group darkText">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title jobsForegroundTitle">  
            </div>  
            <div class="col s12 m4 jobsRightBody">
                <h5>New Jobs:</h5>
                <div id="loxoResponse"></div>
                <div class="jobsRightExtra">
                    <h4>Lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Rhoncus aenean vel elit scelerisque. Neque egestas congue quisque egestas diam in arcu cursus. Vulputate mi sit amet mauris 
                    commodo quis imperdiet massa. </p>
                    <h4>Morbi leo</h4>
                    <p>Morbi leo urna molestie at. Porttitor leo a diam sollicitudin tempor id. Urna et pharetra pharetra 
                    massa massa ultricies mi quis hendrerit. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Libero volutpat sed cras 
                    ornare arcu dui vivamus. Gravida rutrum quisque non tellus orci ac auctor. Suspendisse ultrices gravida dictum fusce ut placerat 
                    orci nulla pellentesque. Viverra nam libero justo laoreet sit amet.</p>
                </div>
            </div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title jobsBaseTitle"></div>
                <div class="jobsLeftBody s12 m4">
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
                <div>
                    We are a member of <a href="https://southeast-recruiters.com" target="_blank" rel="noopener noreferrer">Bio-Partners</a>. It’s a consortium of highly experienced, successful recruiters specializing in key talent. In pharmaceutical, biotech/life sciences, medical device, bioinformatics, information technology, & healthcare corporations.
                </div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 7</div>
                <div>
                    <p>OSI, a group of food industry recruiters, was established in 1992 and currently operates offices in Georgia, North Carolina, and Northern Virginia. OSI is a member of and adheres to all ethics and standards of the Georgia Association of Personnel Services. Our mission is to provide our clients with the highest quality service, professionalism and ethics, while pleasing God in all that we do.</p>
                </div>
            </div>
        </div>
    </div>
`;

//==================================END OF HTML TO BE INJECTED================================

// prototype function to shuffle response array from loxo, if you so choose

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

//==============================Styling for hover on navbar links==============================

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
                    "color": "#F3E9D2"
                })
            }
        )
        $(".dataItem").hover(
            function(){
                $(this).css("color", "#F3E9D2")
            },function(){
                $(this).css("color", "#062F4F")
            }
        )
    }, 3100);

//==================================AJAX REQUEST FOR LOXO JOBS================================

$.ajax({
    url: "https://loxo.co/api/osi-jobs/jobs",
    type: "GET",
    // loxo docs are very unforgiving, and this set header was only sent after multiple painful emails to support. 
    // this might get changed at some point, but it looks like that is the (base-64) encoding of the username and password
    beforeSend: xhr=> {xhr.setRequestHeader('Authorization', 'Basic b3NpX2pvYnM6NDc1NjI5YTQzMWMyNWEwNzlmMzBkYTFlYmY5Mjk4MDQ=')},
    // the following is the parameter passed in to only get active jobs from the database of jobs for OSI. Other params can be found in the docs:
    // http://help.loxo.co/articles/446640-integrate-your-job-listing-with-your-website-through-an-api
    // be warned-- they are the weakest of sauce.
    data:{"job_status_id":2841},
    // not sure why this is here.
    xhrFields: {withCredentials: true},
    success: data => {
        console.log(data.results);
        let items = [];
        $.each( data.results, i => {
            // console.log(data.results[i])
            // this builds out the list items in the jobs column of the main content.
            items.push(`
                <li id="${data.results[i].title}">
                    <a href="https://loxo.co/job/${data.results[i].id}" target="blank" class="dataItem">${data.results[i].title}</a> 
                    (${data.results[i].macro_address})
                </li>
            `);
        });
        // shuffle items based on the number of items in the list in the list so they aren't alphabetical
        items.shuffle()
        // truncate list if you so choose, uncomment and replace items.join... with topJobs.join...
        // let topJobs = items.slice(0,10)
        // push final items array to html for view on homepage
        $(`<ul/>`,{
        "class":"bullet-content",
        html:items.join(``)
        }).appendTo( "#loxoResponse" )
    },
})

$(document).ready(()=>{
  console.log('ready and rarin');
})