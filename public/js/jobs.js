$(document).ready(function () {
  /* global moment */
  console.log("testing");

  $(".edit").on('click', function () {
    var jobID = $(this).attr('jobid');
    console.log(jobID);
    window.location.href = '/jobs/edit/' + jobID;
  });

  $(".delete").on('click', function () {
    event.stopPropagation();
    var id = $(this).attr('jobid');
    //pulls the ID
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/jobs/edit/" + id
    });
  });


});
