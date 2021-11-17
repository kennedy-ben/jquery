/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */
// jQuery('h1').click(() => {
//   alert('This is a heading tag');
// });

// // eslint-disable-next-line prefer-arrow-callback
// jQuery('p').click(() {
//   alert('This is a paragraph');
// });

// jQuery('img').click(() => {
//   alert('This is an image');
// });

// jQuery("h1").click(){
//     alert("This is a header!.");
//     alert("I told you,THIS IS A HEADER!");
// }

// jQuery(document).ready(function() {
//     jQuery("h1").click(function() {
//       alert("This is a header.");
//     });

//     jQuery("p").click(function() {
//       alert("This is a paragraph.");
//     });

//     jQuery("img").click(function() {
//       alert("This is an image.");
//     });
//   });

$('h1').on('click', () => {
  $(document).ready(() => {
    $('.clickable').click(() => {
      $('.music.jpg-showing').toggle();
      $('.music.jpg-hidden').toggle();
    });
  });
});

$(document).ready(function () {
  $('button#green').click(function () {
    $('body').addClass('green-background');
  });

  $('button#yellow').click(function () {
    $('body').addClass('yellow-background');
  });

  $('button#red').click(function () {
    $('body').addClass('red-background');
  });
});

$(document).ready(function () {
  $('button#green').click(function () {
    $('body').removeClass();
    $('body').addClass('green-background');
  });

  $('button#yellow').click(function () {
    $('body').removeClass();
    $('body').addClass('yellow-background');
  });

  $('button#red').click(function () {
    $('body').removeClass();
    $('body').addClass('red-background');
  });
});

.green-background {
    background-color: green;
  }

  .yellow-background {
    background-color: yellow;
  }

  .red-background {
    background-color: red;
  }

  $(document).ready(function() {
    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
    });

    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });

    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
    });
  });


  $(document).ready(function() {
    $("button#hello").click(function() {
      $("ul").prepend("<li>Hello!</li>");
    });

    $("button#goodbye").click(function() {
      $("ul").prepend("<li>Goodbye!</li>");
    });

    $("button#stop").click(function() {
      $("ul").prepend("<li>Stop copying me!</li>");
    });
  });


  $(document).ready(function() {
    $("button#hello").click(function() {
      $("ul#user").prepend("<li>Hello!</li>");
      $("ul#webpage").prepend("<li>Why hello there!</li>");
    });

    $("button#goodbye").click(function() {
      $("ul#user").prepend("<li>Goodbye!</li>");
      $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    });

    $("button#stop").click(function() {
      $("ul#user").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    });
  });


  $(document).ready(function() {
    // previous code...
    $('li').css('background-color', 'green');
  });


  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $('li').css('background-color', 'green');
  });
  $("button#hello").click(function() {
    $("ul#user").prepend("<Hello!>");
    $("ul#webpage").prepend("<Why hello there!>");
    $('li').click(function() {
      alert('hi');
    });
  });

  $(document).ready(function() {
    $("button#hello").click(function() {
      $("ul#user").prepend("<li>Hello!</li>");
      $("ul#webpage").prepend("<li>Why hello there!</li>");
    });

    $("button#goodbye").click(function() {
      $("ul#user").prepend("<li>Goodbye!</li>");
      $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    });

    $("button#stop").click(function() {
      $("ul#user").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    });
  });

  $(document).ready(function() {
    // previous code...
    $('li').css('background-color', 'green');
  });

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $('li').css('background-color', 'green');
  });


  $("button#hello").click(function() {
    $("ul#user").prepend("<Hello!>");
    $("ul#webpage").prepend("<Why hello there!>");
    $('li').click(function() {
      alert('hi');
    });
  });

  $("ul#user").children("li").first().click(function() {
    alert('hi');
  });
  $("ul#webpage").children("li").first().click(function() {
    alert('hi');
  })

  $("ul#user").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
