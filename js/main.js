// SCROLL FUCTION
window.addEventListener('scroll', () => {
    let page = this;
    let pageTop = this.scrollY;
    let pageHeight = this.outerHeight / 2;

    let frames = document.querySelectorAll('.scrollAnim');
    frames.forEach((frame) => {
        let frameTop = frame.offsetTop;
        let frameHeight = frame.offsetHeight;

        if (
            pageTop >= frameTop - pageHeight &&
            pageTop < frameTop + frameHeight / 0.8
        ) {
            frame.classList.add('anim');
            // document.getElementById('box1').classList.add('fade-in');
            // document.getElementById('box2').classList.add('open-right');
            // console.log("yup");
        } else {
            frame.classList.remove('anim');
            
            // document.getElementById('box1').classList.remove('fade-in');
            // document.getElementById('box2').classList.remove('open-right');
        }
    });
});


// STATS COUNTER 0

$(window).scroll(function() {
    var a = 1;
    var b = 1;
    var c = 1;

    var oTop = $('#counter-box1').offset().top - window.innerHeight;
    var mTop = $('#counter-box4').offset().top - window.innerHeight;
    var nTop = $('#counter-box9').offset().top - window.innerHeight;
    if (a == 1 && $(window).scrollTop() > oTop) {
        $('.counter').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-number');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2950,
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
        a = 0;
    }
    if (b == 1 && $(window).scrollTop() > mTop) {
        $('.counter1').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-number');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2950,
                    delay: 200,
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
        b = 0; 
    }
    if (c == 1 && $(window).scrollTop() > nTop) {
        $('.counter2').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-number');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 2950,
                    delay: 200,
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
        c = 0; 
    }
    
});

// CIRCULAR CHARTS

window.addEventListener("scroll", function(stats) {

    
    var firstChart = document.getElementsByClassName("circular-chart")[0];
    var secondChart = document.getElementsByClassName("circular-chart")[1];
    var thirdChart = document.getElementsByClassName("circular-chart")[2];
    var fourthChart = document.getElementsByClassName("circular-chart")[3];
    var fifthChart = document.getElementsByClassName("circular-chart")[4];
    var sixthChart = document.getElementsByClassName("circular-chart")[5];
    var seventhChart = document.getElementsByClassName("circular-chart")[6];
    var eighthChart = document.getElementsByClassName("circular-chart")[7];
    var ninthChart = document.getElementsByClassName("circular-chart")[8];
    var tenChart = document.getElementsByClassName("circular-chart")[9];
    var elevenChart = document.getElementsByClassName("circular-chart")[10];
    var twelveChart = document.getElementsByClassName("circular-chart")[11];
    var thirteenChart = document.getElementsByClassName("circular-chart")[12];
    var fourteenChart = document.getElementsByClassName("circular-chart")[13];
    var fifteenChart = document.getElementsByClassName("circular-chart")[14];
    var sixteenChart = document.getElementsByClassName("circular-chart")[15];
    var seventeenChart = document.getElementsByClassName("circular-chart")[16];
    var eighteenChart = document.getElementsByClassName("circular-chart")[17];
    var ninteenChart = document.getElementsByClassName("circular-chart")[18];
    var twentyChart = document.getElementsByClassName("circular-chart")[19];
    var twentyoneChart = document.getElementsByClassName("circular-chart")[20];



    var firstCircle = document.getElementsByClassName("circle")[0];
    var secondCircle = document.getElementsByClassName("circle")[1];
    var thirdCircle = document.getElementsByClassName("circle")[2];
    var fourthCircle = document.getElementsByClassName("circle")[3];
    var fifthCircle = document.getElementsByClassName("circle")[4];
    var sixthCircle = document.getElementsByClassName("circle")[5];
    var seventhCircle = document.getElementsByClassName("circle")[6];
    var eighthCircle = document.getElementsByClassName("circle")[7];
    var ninthCircle = document.getElementsByClassName("circle")[8];
    var tenCircle = document.getElementsByClassName("circle")[9];
    var elevenCircle = document.getElementsByClassName("circle")[10];
    var twelveCircle = document.getElementsByClassName("circle")[11];
    var thirteenCircle = document.getElementsByClassName("circle")[12];
    var fourteenCircle = document.getElementsByClassName("circle")[13];
    var fifteenCircle = document.getElementsByClassName("circle")[14];
    var sixteenCircle = document.getElementsByClassName("circle")[15];
    var seventeenCircle = document.getElementsByClassName("circle")[16];
    var eighteenCircle = document.getElementsByClassName("circle")[17];
    var ninteenCircle = document.getElementsByClassName("circle")[18];
    var twentyCircle = document.getElementsByClassName("circle")[19];
    var twentyoneCircle = document.getElementsByClassName("circle")[20];

    var rect = firstChart.getBoundingClientRect();
    console.log(rect);

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
    rect = fourthChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        fourthCircle.classList.add("onScroll");
    }
    rect = fifthChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        fifthCircle.classList.add("onScroll");
    }
    rect = sixthChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        sixthCircle.classList.add("onScroll");
    }
    rect = seventhChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        seventhCircle.classList.add("onScroll");
    }
    rect = eighthChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        eighthCircle.classList.add("onScroll");
    }
    rect = ninthChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        ninthCircle.classList.add("onScroll");
    }
    rect = tenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        tenCircle.classList.add("onScroll");
    }
    rect = elevenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        elevenCircle.classList.add("onScroll");
    }
    rect = twelveChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        twelveCircle.classList.add("onScroll");
    }
    rect = thirteenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        thirteenCircle.classList.add("onScroll");
    }
    rect = fourteenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        fourteenCircle.classList.add("onScroll");
    }
    rect = fifteenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        fifteenCircle.classList.add("onScroll");
    }
    rect = sixteenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        sixteenCircle.classList.add("onScroll");
    }
    rect = seventeenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        seventeenCircle.classList.add("onScroll");
    }
    rect = eighteenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        eighteenCircle.classList.add("onScroll");
    }
    rect = ninteenChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        ninteenCircle.classList.add("onScroll");
    }
    rect = twentyChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        twentyCircle.classList.add("onScroll");
    }
    rect = twentyoneChart.getBoundingClientRect();
    if (rect.bottom <= window.innerHeight) {
        twentyoneCircle.classList.add("onScroll");
    }

});

// hightlights

highlight();

$(window).on("scroll", function(){
  highlight();
});

function highlight(){
  var scroll = $(window).scrollTop();
  var height = $(window).height();

  $(".highlight, .highlight2, .highlight3").each(function(){
    var pos = $(this).offset().top;
    if (scroll+height >= pos) {
      $(this).addClass("active");
    }
    
    else
    {
      $(this).removeClass("active");
    }
    // console.log(pos);
    // console.log(scroll);
  });
};
