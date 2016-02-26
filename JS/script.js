$(document).ready(function(){
    $(".example").TimeCircles({
        time: {
            Days: { show: false },
            Hours: { show: false },
            Minutes: { color: "#C0C8CF" },
            Seconds: { color: "#C0C8CF" }
        },
        start : false,
        count_past_zero: false,
   });

    $(".example.stopwatch").TimeCircles();
    $(".start").click(function(){
        $(".example.stopwatch").TimeCircles().start();
    });
    $(".stop").click(function(){
        $(".example.stopwatch").TimeCircles().stop();
    });
    $(".restart").click(function(){
        $(".example.stopwatch").TimeCircles().restart();
    });

    $('.ajoutTache').click(function() {
        $selection = $(".tacheAAjouter").val();
        $(".tacheAAjouter").val("");
        $elementli = $("<li>", {
            class : ".tacheADeplacer"
        }).appendTo(".aFaire");

        var monBtn = $("<button>", {
            class : "mettreEnCours btn btn-success rounded"
        }).html($selection).appendTo($elementli)

        monBtn.click(function() {
            $(".center").append($(this).html())
            $(this).parent().remove()

            $("<button>", {
                class : ".btn btn-info tacheFinie",
                html : "Tache Finie ?",
            }).appendTo(".boutonFini").click(function() {
                $(".droite").append($(".center").html());
                $(".center").html("")
                $(".tacheFinie").remove();
                $(".tachePasFinie").remove();
            })
            $("<button>", {
                class : ".btn btn-info tachePasFinie",
                html : "Tache  pas Finie ?",
            }).appendTo(".boutonFini").click(function() {
                $(".tacheFinie").remove();
                $(".tachePasFinie").remove();

                $(".tacheAAjouter").val($(".center").html());
                $(".center").html("")
                $('.ajoutTache').click();


            });
        });
    })




});
