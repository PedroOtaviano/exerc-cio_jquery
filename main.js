const atividade = document.getElementById("tarefa-nova").value;

$("form").on("submit", function(e){
    e.preventDefault();

    const atividade = $("#tarefa-nova").val();
    //console.log(atividade);

    const novoItemLista = $('<li></li>').text(atividade);
    $(atividade).appendTo(novoItemLista);
    $(novoItemLista).appendTo("ul");
    $(novoItemLista).fadeIn(1000);
    $("#tarefa-nova").val("");

})

$("ul").on("click", "li", function(e){
    $(this).toggleClass("completed");
})