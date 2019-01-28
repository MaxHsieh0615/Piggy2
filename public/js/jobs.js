$(document).ready(function () {
  /* global moment */
  console.log("testing");
  var updating = false;

  $(".edit").on('click', function () {
    var jobID = $(this).attr('jobid');
    console.log(jobID);
    window.location.href = '/jobs/edit/' + jobID;
  })


  $(".Update").on("click", editTodo);
  function editTodo(event) {
    event.preventDefault();
    var currentTodo = $(this).data("job");
    console.log("hello world");
    $.ajax({url:'/edit/1', method:'put'})
      .then(function(){
        console.log("Dennis");
      });
  }
  //   // $(this).children().hide();
  //   // $(this).children("input.edit").val(currentTodo.text);
  //   // $(this).children("input.edit").show();
  //   // $(this).children("input.edit").focus();
  // }
});
