<script>
   function updateMyReservationSection(data) {
      document.getElementById("myCheckIn").textContent = data.check_in;
      document.getElementById("myCheckOut").textContent = data.check_out;
      document.getElementById("myAdults").textContent = data.adults;
      document.getElementById("myChilds").textContent = data.childs;
      document.getElementById("myRooms").textContent = data.rooms;
      document.getElementById("myReservationContent").style.display = "block";
      document.getElementById("noReservationMessage").style.display = "none";
   }

   // Load My Reservation section on page load
   window.addEventListener("DOMContentLoaded", () => {
      const saved = localStorage.getItem("reservationDetails");
      if (saved) {
         const parsed = JSON.parse(saved);
         showReservationDetails(parsed); // for the form page
         updateMyReservationSection(parsed); // for "My Reservation"
      }
   });
</script>
