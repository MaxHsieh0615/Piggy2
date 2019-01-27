$(document).ready(function () {
  /* global moment */
  console.log("testing");

  $(".edit").on('click', function () {
    var jobID = $(this).attr('jobid');
    console.log(jobID);
    window.location.href = '/jobs/edit/' + jobID;
  })

});
