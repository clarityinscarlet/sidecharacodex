const erha = {
    chapterList: {
        '1to9': [1, 2, 3, 4, 5, 6, 7, 8, 9],
        '11to19': [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    },
    chapterLinks: {
        '1to9': "https://docs.google.com/document/d/1nM__Owx6xOwMaEingWea0KfxeyZDsEQb4bGe7aaZy9A",
        '10to19': "https://docs.google.com/document/d/16d4u3_03ivD8JwPhAfEyhaj3dk8mohNFe4P2Q45iZFw",
    },
};

const erha_shi_mei = {
    name: 'shi mei | shi mingjing',
    chapterList: {
        2: {
            'summary': "mo ran sees shi mei for the first time, remembers 0.5 death.",
            'quotes': ["lorem ipsum ipsi dipsy doret", "yadda yadda blah blah blah meatbun knife"],
        },
        7: {
            'summary': "shi mei offers mo ran wontons.",
            'quotes': ["lorem ipsum ipsi dipsy doret", "yadda yadda blah blah blah meatbun knife"],
        },
    },
};

function ready(fn) {
    if (document.readyState != 'loading'){
        const codex = document.getElementById("codex");
        const about = document.getElementById("about");
        const faq = document.getElementById("faq");
        const credits = document.getElementById("credits");
        
        codex.addEventListener(
            'click',
            function() {
                console.log('clicked codex');
            },
            false,
        );
        // $("#about").click(function(){
        //     '#codex'.style.display = '';
        //     '#about'.style.display = '';
        //     '#codex'.style.display = '';
        //     '#codex'.style.display = '';
        // });
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }