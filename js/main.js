// SCROLL FUCTION
window.addEventListener("scroll", (text) => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 1.7;

    let frames = document.querySelectorAll(".scrollAnim");
    frames.forEach((frame) => {
        let frameTop = frame.offsetTop;
        let frameHeight = frame.offsetHeight;

        if (
            pageTop >= frameTop - pageHeight &&
            pageTop < frameTop + frameHeight / 0.8
        ) {
            frame.classList.add("anim");
            // document.getElementById('box1').classList.add('fade-in');
            // document.getElementById('box2').classList.add('open-right');
            console.log("yup");
        } else {
            frame.classList.remove("anim");
            // document.getElementById('box1').classList.remove('fade-in');
            // document.getElementById('box2').classList.remove('open-right');
        }
    });
});

// STATS COUNTER
var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter-box').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-number');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 5250,
                    delay: 6000,
                    easing: 'swing',
                    step: function() {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(Math.ceil(this.countNum).toLocaleString('en'));
                    },
                    complete: function() {
                        $this.text(Math.ceil(this.countNum).toLocaleString('en'));
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }
});

// CIRCULAR

window.addEventListener("scroll", function(stats) {

    var firstChart = document.getElementsByClassName("circular-chart")[0];
    var secondChart = document.getElementsByClassName("circular-chart")[1];
    var thirdChart = document.getElementsByClassName("circular-chart")[2];

    var firstCircle = document.getElementsByClassName("circle")[0];
    var secondCircle = document.getElementsByClassName("circle")[1];
    var thirdCircle = document.getElementsByClassName("circle")[2];

    var rect = firstChart.getBoundingClientRect();
    console.log(rect)

    rect = secondChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        firstCircle.classList.add("onScroll");
    }
    rect = secondChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        secondCircle.classList.add("onScroll");
    }

    rect = thirdChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        thirdCircle.classList.add("onScroll");
    }
});